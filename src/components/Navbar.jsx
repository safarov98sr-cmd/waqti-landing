import { useState, useEffect } from 'react'

const WaqtiLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="Waqti логотип">
    <circle cx="16" cy="16" r="14" stroke="#10B981" strokeWidth="1.8" fill="rgba(16,185,129,0.08)" />
    <circle cx="16" cy="16" r="2" fill="#10B981" />
    <line x1="16" y1="16" x2="16" y2="7.5" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="16" y1="16" x2="22" y2="18.5" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
      const a = (deg * Math.PI) / 180
      return (
        <circle key={i}
          cx={+(16 + 14 * Math.cos(a)).toFixed(2)}
          cy={+(16 + 14 * Math.sin(a)).toFixed(2)}
          r="1.2"
          fill={i % 2 === 0 ? '#10B981' : '#F59E0B'}
          opacity={i % 2 === 0 ? 0.7 : 0.45}
        />
      )
    })}
  </svg>
)

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-sm font-medium cursor-pointer transition-colors duration-200"
    style={{ color: 'rgba(248,250,252,0.6)' }}
    onMouseEnter={e => { e.currentTarget.style.color = '#10B981' }}
    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(248,250,252,0.6)' }}
  >
    {children}
  </a>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={scrolled ? {
        background: 'rgba(10,15,13,0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(16,185,129,0.1)',
      } : { background: 'transparent' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-[72px]">

          <a href="#" className="flex items-center gap-2.5 cursor-pointer">
            <WaqtiLogo />
            <span className="text-lg font-bold tracking-tight text-white">Waqti</span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            <NavLink href="#features">Возможности</NavLink>
            <NavLink href="#how-it-works">Как работает</NavLink>
            <NavLink href="#pricing">Тарифы</NavLink>
            <NavLink href="#reviews">Отзывы</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </div>

          <a
            href="#pricing"
            className="hidden md:block text-sm font-semibold px-5 py-2.5 rounded-xl cursor-pointer transition-all duration-200 btn-pulse"
            style={{
              background: 'linear-gradient(135deg, #10B981, #059669)',
              color: '#F8FAFC',
              boxShadow: '0 4px 16px rgba(16,185,129,0.35)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(16,185,129,0.5)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = ''
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(16,185,129,0.35)'
            }}
          >
            Скачать бесплатно
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 cursor-pointer flex flex-col gap-1.5"
            aria-label="Меню"
          >
            {[0, 1, 2].map(i => (
              <span key={i} className="block w-5 h-0.5 rounded-full" style={{ background: '#10B981' }} />
            ))}
          </button>
        </div>

        {mobileOpen && (
          <div
            className="md:hidden rounded-2xl mb-4 py-4 px-5 flex flex-col gap-4"
            style={{
              background: 'rgba(10,15,13,0.96)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(16,185,129,0.12)',
            }}
          >
            {[
              { href: '#features',     label: 'Возможности' },
              { href: '#how-it-works', label: 'Как работает' },
              { href: '#pricing',      label: 'Тарифы' },
              { href: '#reviews',      label: 'Отзывы' },
              { href: '#faq',          label: 'FAQ' },
            ].map(l => (
              <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
                className="text-sm font-medium cursor-pointer transition-colors duration-200"
                style={{ color: 'rgba(248,250,252,0.65)' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#10B981' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(248,250,252,0.65)' }}
              >
                {l.label}
              </a>
            ))}
            <a href="#pricing" onClick={() => setMobileOpen(false)}
              className="text-center text-sm font-bold py-3 rounded-xl cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #10B981, #059669)', color: '#F8FAFC' }}
            >
              Скачать бесплатно
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
