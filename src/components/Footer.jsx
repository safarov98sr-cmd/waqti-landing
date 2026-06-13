function WaqtiLogoFooter() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-label="Waqti логотип">
      <circle cx="14" cy="14" r="12" stroke="#10B981" strokeWidth="1.8" fill="rgba(16,185,129,0.08)" />
      <circle cx="14" cy="14" r="1.8" fill="#10B981" />
      <line x1="14" y1="14" x2="14" y2="7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="14" x2="19" y2="16.5" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
        const a = (deg * Math.PI) / 180
        return (
          <circle key={i}
            cx={+(14 + 12 * Math.cos(a)).toFixed(2)}
            cy={+(14 + 12 * Math.sin(a)).toFixed(2)}
            r="1"
            fill={i % 2 === 0 ? '#10B981' : '#F59E0B'}
            opacity={i % 2 === 0 ? 0.65 : 0.3}
          />
        )
      })}
    </svg>
  )
}

const AppleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-label="App Store">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.22.14-2.18 1.3-2.16 3.88.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.37 2.7zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
)

const AndroidIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-label="Google Play">
    <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
  </svg>
)

const footerLinks = [
  {
    title: 'Продукт',
    links: [
      { label: 'Возможности', href: '#features' },
      { label: 'Как работает', href: '#how-it-works' },
      { label: 'Тарифы', href: '#pricing' },
      { label: 'Скачать', href: '#' },
    ],
  },
  {
    title: 'Поддержка',
    links: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Написать нам', href: 'mailto:support@waqtiai.app' },
      { label: 'Telegram-канал', href: '#' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { label: 'О нас', href: '#' },
      { label: 'Политика конфиденц.', href: '#' },
      { label: 'Условия использования', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-deep)', color: 'var(--text-body)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4 cursor-pointer w-fit">
              <WaqtiLogoFooter />
              <span className="text-xl font-bold tracking-tight" style={{ color: 'var(--text-h)' }}>Waqti</span>
            </a>
            <p className="text-sm leading-relaxed mb-5 max-w-xs" style={{ color: 'var(--text-xmuted)' }}>
              ИИ-планировщик для мусульман. Управляй временем с намерением — вокруг намазов, по велению сердца.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {[
                { Icon: AppleIcon, label: 'App Store' },
                { Icon: AndroidIcon, label: 'Google Play' },
              ].map(({ Icon, label }) => (
                <a key={label} href="#"
                  className="flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium cursor-pointer transition-all duration-200"
                  style={{
                    background: 'var(--card-bg)',
                    border: '1px solid rgba(16,185,129,0.2)',
                    color: 'var(--text-muted)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(16,185,129,0.08)'
                    e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)'
                    e.currentTarget.style.color = '#059669'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'var(--card-bg)'
                    e.currentTarget.style.borderColor = 'rgba(16,185,129,0.2)'
                    e.currentTarget.style.color = 'var(--text-muted)'
                  }}
                >
                  <span style={{ color: '#10B981' }}><Icon /></span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {footerLinks.map(group => (
            <div key={group.title} className="col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4"
                style={{ color: 'var(--text-xmuted)' }}>
                {group.title}
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {group.links.map(link => (
                  <li key={link.label}>
                    <a href={link.href}
                      className="text-sm cursor-pointer transition-colors duration-200"
                      style={{ color: 'var(--text-xmuted)' }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#10B981' }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-xmuted)' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--divider)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-center sm:text-left" style={{ color: 'var(--text-xmuted)' }}>
            Каждая минута — аманат. Waqti помогает её беречь. © 2026
          </p>
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            {['Privacy', 'Terms'].map(t => (
              <a key={t} href="#"
                className="text-sm cursor-pointer transition-colors duration-200"
                style={{ color: 'var(--text-xmuted)' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#10B981' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-xmuted)' }}
              >
                {t}
              </a>
            ))}
            <div className="hidden xs:flex items-center gap-1.5 rounded-full px-3 py-1"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs whitespace-nowrap" style={{ color: 'var(--text-xmuted)' }}>
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
