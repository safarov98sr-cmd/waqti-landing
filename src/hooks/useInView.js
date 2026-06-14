import { useEffect, useRef, useState } from 'react'

export function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Fallback: make visible after 400ms regardless (catches race conditions and
    // elements that are in-viewport on initial load before observer fires)
    const timer = setTimeout(() => setInView(true), 400)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [threshold])

  return [ref, inView]
}
