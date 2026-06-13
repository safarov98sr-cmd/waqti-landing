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
    badge: '🔥 Популярный',
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
      <circle cx="10" cy="10" r="10" fill={highlight ? 'rgba(255,255,255,0.15)' : 'rgba(239,159,39,0.15)'} />
      <path d="M6 10l3 3 5-5" stroke={highlight ? 'white' : '#EF9F27'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0" aria-label="Недоступно">
      <circle cx="10" cy="10" r="10" fill="rgba(255,255,255,0.05)" />
      <path d="M7 10h6" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )

export default function Pricing() {
  const [ref, inView] = useInView()

  return (
    <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden" style={{ background: '#070F1A' }}>
      {/* Top bloom */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(239,159,39,0.05) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 fade-in-section ${inView ? 'visible' : ''}`}>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold mb-5"
            style={{ background: 'rgba(239,159,39,0.08)', border: '1px solid rgba(239,159,39,0.2)', color: '#EF9F27' }}
          >
            <svg width="10" height="10" viewBox="0 0 12 12" fill="#EF9F27" aria-hidden="true">
              <path d="M6 0l1.5 4.5H12L8.25 7.2l1.5 4.5L6 9 2.25 11.7l1.5-4.5L0 4.5h4.5z" />
            </svg>
            Тарифы
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Честные цены,{' '}
            <span className="text-gradient">без скрытого</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'rgba(248,250,252,0.5)' }}>
            Начни бесплатно, переходи на премиум когда будешь готов.
          </p>
        </div>

        {/* Plans */}
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-stretch justify-center max-w-3xl mx-auto">
          <PricingCard plan={plans[0]} delay={0} />
          <PricingCard plan={plans[1]} delay={1} />
        </div>

        {/* Trust note */}
        <p className="text-center text-sm mt-10" style={{ color: 'rgba(255,255,255,0.35)' }}>
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
            background: 'linear-gradient(155deg, #0F1E32 0%, #0A1628 55%, #070F1A 100%)',
            border: '1px solid rgba(239,159,39,0.28)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.5), 0 0 40px rgba(239,159,39,0.07)',
            padding: 'clamp(28px,5vw,36px) clamp(24px,4vw,32px)',
          }}
        >
          {/* Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span
              className="text-sm font-bold px-5 py-2 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #EF9F27, #D4AF37)',
                color: '#07111A',
                boxShadow: '0 4px 16px rgba(239,159,39,0.4)',
              }}
            >
              {plan.badge}
            </span>
          </div>

          {/* Plan info */}
          <div className="mb-7 pt-3">
            <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
              {plan.name}
            </div>
            <div className="flex items-end gap-2 mb-1.5">
              <span className="text-5xl font-black text-white">{plan.price}</span>
              <span className="text-sm mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>/{plan.period}</span>
            </div>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>{plan.description}</p>
          </div>

          <div className="w-full h-px mb-6" style={{ background: 'rgba(239,159,39,0.12)' }} />

          <ul className="space-y-3.5 mb-8 flex-1">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckIcon available={feature.available} highlight={true} />
                <span
                  className="text-sm font-medium"
                  style={{ color: feature.available ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.25)' }}
                >
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#"
            className="block text-center font-bold px-6 py-4 rounded-2xl cursor-pointer transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, #EF9F27 0%, #D4AF37 100%)',
              color: '#07111A',
              boxShadow: '0 4px 20px rgba(239,159,39,0.35)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(239,159,39,0.5)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = ''
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(239,159,39,0.35)'
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
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.08)',
          transition: 'border-color 0.25s',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(239,159,39,0.2)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
      >
        {/* Plan info */}
        <div className="mb-6">
          <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {plan.name}
          </div>
          <div className="flex items-end gap-2 mb-1.5">
            <span className="text-4xl font-black text-white">{plan.price}</span>
            <span className="text-sm mb-1.5" style={{ color: 'rgba(255,255,255,0.4)' }}>/{plan.period}</span>
          </div>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{plan.description}</p>
        </div>

        <div className="w-full h-px mb-6" style={{ background: 'rgba(255,255,255,0.08)' }} />

        <ul className="space-y-3.5 mb-7 flex-1">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3">
              <CheckIcon available={feature.available} highlight={false} />
              <span
                className="text-sm"
                style={{ color: feature.available ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.25)' }}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#"
          className="block text-center font-bold px-6 py-4 rounded-2xl cursor-pointer transition-all duration-200"
          style={{ border: '1px solid rgba(239,159,39,0.35)', color: '#EF9F27' }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(239,159,39,0.1)'
            e.currentTarget.style.borderColor = 'rgba(239,159,39,0.55)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = ''
            e.currentTarget.style.borderColor = 'rgba(239,159,39,0.35)'
          }}
        >
          {plan.cta}
        </a>
      </div>
    </div>
  )
}
