import { useInView } from '../hooks/useInView'

const plans = [
  {
    name: 'Базовый',
    price: '0₽',
    period: 'навсегда',
    description: 'Для начала пути',
    badge: null,
    features: [
      { text: 'Расписание 5 намазов', available: true },
      { text: 'Компас киблы', available: true },
      { text: 'До 5 задач в день', available: true },
      { text: 'Базовая статистика', available: true },
      { text: 'Умный планировщик ИИ', available: false },
      { text: 'ИИ-коуч (неограниченно)', available: false },
      { text: 'Расширенная аналитика', available: false },
      { text: 'Напоминания о сунне', available: false },
    ],
    cta: 'Скачать бесплатно',
    highlight: false,
  },
  {
    name: 'Премиум',
    price: '299₽',
    period: 'в месяц',
    description: 'Для серьёзного роста',
    badge: 'Популярный',
    features: [
      { text: 'Расписание 5 намазов', available: true },
      { text: 'Компас киблы', available: true },
      { text: 'Неограниченные задачи', available: true },
      { text: 'Детальная статистика', available: true },
      { text: 'Умный планировщик ИИ', available: true },
      { text: 'ИИ-коуч (неограниченно)', available: true },
      { text: 'Расширенная аналитика', available: true },
      { text: 'Напоминания о сунне', available: true },
    ],
    cta: 'Начать 7 дней бесплатно',
    highlight: true,
  },
]

const CheckIcon = ({ available, highlight }) =>
  available ? (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0" aria-label="Доступно">
      <circle cx="10" cy="10" r="10" fill={highlight ? 'rgba(245,158,11,0.15)' : 'rgba(16,185,129,0.15)'} />
      <path d="M6 10l3 3 5-5" stroke={highlight ? '#F59E0B' : '#10B981'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0" aria-label="Недоступно">
      <circle cx="10" cy="10" r="10" fill="rgba(0,0,0,0.04)" />
      <path d="M7 10h6" stroke="rgba(128,128,128,0.35)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )

export default function Pricing() {
  const [ref, inView] = useInView()

  return (
    <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden" style={{ background: 'var(--bg-page)' }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.05) 0%, transparent 70%)' }}
        aria-hidden="true" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={`text-center mb-16 fade-in-section ${inView ? 'visible' : ''}`}>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold mb-5"
            style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', color: '#10B981' }}
          >
            <svg width="10" height="10" viewBox="0 0 12 12" fill="#10B981" aria-hidden="true">
              <path d="M6 0l1.5 4.5H12L8.25 7.2l1.5 4.5L6 9 2.25 11.7l1.5-4.5L0 4.5h4.5z" />
            </svg>
            Тарифы
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 leading-tight" style={{ color: 'var(--text-h)' }}>
            Честные цены,{' '}
            <span className="text-gradient">без скрытого</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Начни бесплатно, переходи на премиум когда будешь готов.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-stretch justify-center max-w-3xl mx-auto">
          <PricingCard plan={plans[0]} delay={0} />
          <PricingCard plan={plans[1]} delay={1} />
        </div>

        <p className="text-center text-sm mt-10" style={{ color: 'var(--text-xmuted)' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="inline-block mr-1.5 align-middle" aria-hidden="true">
            <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Безопасная оплата · Отмена в любой момент · Без обязательств
        </p>
      </div>
    </section>
  )
}

function PricingCard({ plan, delay }) {
  const [ref, inView] = useInView(0.1)

  if (plan.highlight) {
    return (
      <div ref={ref} className={`fade-in-section delay-${delay} ${inView ? 'visible' : ''} flex-1`}>
        <div
          className="relative rounded-3xl flex flex-col h-full"
          style={{
            background: 'linear-gradient(155deg, #0D1F15 0%, #0A1810 55%, #0A0F0D 100%)',
            border: '1px solid rgba(245,158,11,0.28)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.3), 0 0 40px rgba(16,185,129,0.06)',
            padding: 'clamp(28px,5vw,36px) clamp(24px,4vw,32px)',
          }}
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span
              className="text-sm font-bold px-5 py-2 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #F59E0B, #D4AF37)',
                color: '#060C08',
                boxShadow: '0 4px 16px rgba(245,158,11,0.4)',
              }}
            >
              {plan.badge}
            </span>
          </div>

          <div className="mb-7 pt-3">
            <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
              {plan.name}
            </div>
            <div className="flex items-end gap-2 mb-1.5">
              <span className="text-5xl font-black" style={{ color: '#F59E0B' }}>{plan.price}</span>
              <span className="text-sm mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>/{plan.period}</span>
            </div>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>{plan.description}</p>
          </div>

          <div className="w-full h-px mb-6" style={{ background: 'rgba(245,158,11,0.15)' }} />

          <ul className="space-y-3.5 mb-8 flex-1">
            {plan.features.map((f, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckIcon available={f.available} highlight={true} />
                <span className="text-sm font-medium"
                  style={{ color: f.available ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.22)' }}>
                  {f.text}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="block text-center font-bold px-6 py-4 rounded-2xl cursor-pointer transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, #F59E0B, #D4AF37)',
              color: '#060C08',
              boxShadow: '0 4px 20px rgba(245,158,11,0.35)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(245,158,11,0.5)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = ''
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(245,158,11,0.35)'
            }}
          >
            {plan.cta}
          </a>
        </div>
      </div>
    )
  }

  return (
    <div ref={ref} className={`fade-in-section delay-${delay} ${inView ? 'visible' : ''} flex-1`}>
      <div
        className="relative rounded-3xl flex flex-col h-full p-7 sm:p-8"
        style={{
          background: 'var(--card-bg)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1.5px solid var(--card-border)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(16,185,129,0.35)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--card-border)' }}
      >
        <div className="mb-6">
          <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--text-xmuted)' }}>
            {plan.name}
          </div>
          <div className="flex items-end gap-2 mb-1.5">
            <span className="text-4xl font-black" style={{ color: '#F59E0B' }}>{plan.price}</span>
            <span className="text-sm mb-1.5" style={{ color: 'var(--text-xmuted)' }}>/{plan.period}</span>
          </div>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{plan.description}</p>
        </div>

        <div className="w-full h-px mb-6" style={{ background: 'var(--divider)' }} />

        <ul className="space-y-3.5 mb-7 flex-1">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-center gap-3">
              <CheckIcon available={f.available} highlight={false} />
              <span className="text-sm" style={{ color: f.available ? 'var(--text-body)' : 'var(--text-xmuted)' }}>
                {f.text}
              </span>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="block text-center font-bold px-6 py-4 rounded-2xl cursor-pointer transition-all duration-200"
          style={{ border: '1.5px solid rgba(16,185,129,0.4)', color: '#10B981' }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(16,185,129,0.08)'
            e.currentTarget.style.borderColor = 'rgba(16,185,129,0.6)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = ''
            e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)'
          }}
        >
          {plan.cta}
        </a>
      </div>
    </div>
  )
}
