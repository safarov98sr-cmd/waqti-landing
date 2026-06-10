const ClockIcon = () => (
  <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="12" stroke="white" strokeWidth="2.2" fill="white" fillOpacity="0.1"/>
    <circle cx="14" cy="14" r="1.8" fill="white"/>
    <line x1="14" y1="14" x2="14" y2="7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <line x1="14" y1="14" x2="19" y2="16.5" stroke="#EF9F27" strokeWidth="2" strokeLinecap="round"/>
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
    <footer className="bg-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Grid: 1 col mobile → 2 col sm → 4 col lg */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">

          {/* Brand — full width on mobile */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <ClockIcon />
              <span className="text-xl font-bold tracking-tight">Waqti</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-xs">
              ИИ-планировщик для мусульман. Управляй временем с нийей — вокруг намазов, по велению сердца.
            </p>
            {/* Store buttons — wrap on mobile */}
            <div className="flex flex-wrap gap-2.5">
              <a href="#"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-3.5 py-2 text-sm font-medium border border-white/10">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M12.5 2C11.1 2 10.1 2.8 9.5 3.5 8.9 2.8 7.9 2 6.5 2 4.6 2 3 3.6 3 5.5c0 2.7 2.5 5 6.5 8.5 4-3.5 6.5-5.8 6.5-8.5C16 3.6 14.4 2 12.5 2z" fill="white" opacity="0.9"/>
                </svg>
                App Store
              </a>
              <a href="#"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-3.5 py-2 text-sm font-medium border border-white/10">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 2.2L10.4 9 3 15.8c-.2-.3-.3-.6-.3-1V3.2c0-.4.1-.7.3-1z" fill="white" opacity="0.9"/>
                  <path d="M13.2 6.3L11 8.4 3.6 2.6c.3-.2.8-.3 1.2-.1l8.4 3.8z" fill="white" opacity="0.9"/>
                  <path d="M13.2 11.7l-2.2-2.1L3.6 15.4c.3.2.8.2 1.2 0l8.4-3.7z" fill="white" opacity="0.9"/>
                  <path d="M15 9c0 .5-.3 1-.8 1.2l-1.6.7-2.2-2L11 7.7l1.6.7c.5.3.8.7.8 1.3z" fill="white" opacity="0.9"/>
                </svg>
                Google Play
              </a>
            </div>
          </div>

          {/* Link groups */}
          {footerLinks.map((group) => (
            <div key={group.title} className="col-span-1">
              <h4 className="text-xs font-bold text-white/80 uppercase tracking-wider mb-3 sm:mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}
                       className="text-white/50 hover:text-white text-sm transition-colors leading-relaxed">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10" />

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm text-center sm:text-left">
            Каждая минута — аманат. Waqti помогает её беречь. © 2026
          </p>
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            <a href="#" className="text-white/40 hover:text-gold transition-colors text-sm">Privacy</a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors text-sm">Terms</a>
            {/* Status badge — hidden on very small screens to avoid overflow */}
            <div className="hidden xs:flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"/>
              <span className="text-white/50 text-xs whitespace-nowrap">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
