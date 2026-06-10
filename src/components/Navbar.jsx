import { useState, useEffect } from 'react'

const ClockIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="15" r="13" stroke="#0F6E56" strokeWidth="2.2" fill="#E1F5EE"/>
    <circle cx="15" cy="15" r="2" fill="#0F6E56"/>
    <line x1="15" y1="15" x2="15" y2="7.5" stroke="#0F6E56" strokeWidth="2.2" strokeLinecap="round"/>
    <line x1="15" y1="15" x2="20.5" y2="17.5" stroke="#EF9F27" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
)

const navLinks = [
  { label: 'Возможности', href: '#features' },
  { label: 'Как работает', href: '#how-it-works' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white border-b border-gray-100'
          : 'bg-transparent'
      }`}
      style={scrolled ? { boxShadow: '0 2px 24px rgba(8, 80, 65, 0.10)' } : {}}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-[70px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <ClockIcon />
            <span className={`text-xl font-black tracking-tight transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
              Waqti
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? 'text-gray-600' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#pricing"
              className="bg-primary text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-dark transition-all hover:shadow-md hover:-translate-y-px"
            >
              Скачать бесплатно
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-primary-light' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Меню"
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                <line x1="3" y1="16" x2="14" y2="16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100" style={{ boxShadow: '0 8px 32px rgba(8,80,65,0.12)' }}>
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-primary-light rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="mt-2 block text-center bg-primary text-white font-bold px-5 py-3.5 rounded-xl hover:bg-dark transition-colors"
            >
              Скачать бесплатно
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
