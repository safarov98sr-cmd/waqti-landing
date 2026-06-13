import { useEffect, useRef } from 'react'

const COLORS = [
  '#10B981', '#10B981', '#10B981',
  '#34D399',
  '#F59E0B', '#F59E0B',
  '#D4AF37',
  'rgba(255,255,255,0.9)',
]

export default function ParticleCanvas({ count = 90 }) {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const init = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      if (!w || !h) return
      canvas.width = w
      canvas.height = h
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.3,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        alpha: Math.random() * 0.55 + 0.1,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.018 + 0.006,
      }))
    }

    const animate = () => {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        p.x = (p.x + p.vx + w) % w
        p.y = (p.y + p.vy + h) % h
        p.phase += p.speed
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha * (0.4 + 0.6 * Math.abs(Math.sin(p.phase)))
        ctx.fill()
      }
      ctx.globalAlpha = 1
      animId = requestAnimationFrame(animate)
    }

    init()
    const ro = new ResizeObserver(init)
    if (canvas.parentElement) ro.observe(canvas.parentElement)
    animate()

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [count])

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      style={{ opacity: 0.6 }}
    />
  )
}
