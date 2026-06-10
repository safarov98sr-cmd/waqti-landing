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

const CheckIcon = ({ available, highlight }) => available ? (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
    <circle cx="10" cy="10" r="10" fill={highlight ? 'rgba(255,255,255,0.2)' : '#E1F5EE'}/>
    <path d="M6 10l3 3 5-5" stroke={highlight ? 'white' : '#0F6E56'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
) : (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
    <circle cx="10" cy="10" r="10" fill="#F0F0F0"/>
    <path d="M7 10h6" stroke="#CCCCCC" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export default function Pricing() {
  const [ref, inView] = useInView()

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 fade-in-section ${inView ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-primary-light text-primary rounded-full px-4 py-1.5 text-sm font-bold mb-5">
            ✦ Тарифы
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight">
            Честные цены,{' '}
            <span className="text-gradient">без скрытого</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Начни бесплатно, переходи на премиум когда будешь готов.
          </p>
        </div>

        {/* Plans */}
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-stretch justify-center max-w-3xl mx-auto">
          {/* Free */}
          <PricingCard plan={plans[0]} delay={0} />
          {/* Premium */}
          <PricingCard plan={plans[1]} delay={1} />
        </div>

        {/* Trust note */}
        <p className="text-center text-sm text-gray-400 mt-10">
          🔒 Безопасная оплата · Отмена в любой момент · Без обязательств
        </p>
      </div>
    </section>
  )
}

function PricingCard({ plan, delay }) {
  const [ref, inView] = useInView(0.1)

  if (plan.highlight) {
    return (
      <div
        ref={ref}
        className={`fade-in-section delay-${delay} ${inView ? 'visible' : ''} flex-1`}
      >
        <div
          className="relative rounded-3xl flex flex-col h-full"
          style={{
            background: 'linear-gradient(160deg, #0F6E56 0%, #085041 100%)',
            boxShadow: '0 20px 60px rgba(8,80,65,0.35), 0 0 0 1px rgba(255,255,255,0.08)',
            padding: 'clamp(28px, 5vw, 36px) clamp(24px, 4vw, 32px)',
          }}
        >
          {/* Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="bg-gold text-white text-sm font-bold px-5 py-2 rounded-full shadow-lg">
              {plan.badge}
            </span>
          </div>

          {/* Plan info */}
          <div className="mb-7 pt-3">
            <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">{plan.name}</div>
            <div className="flex items-end gap-2 mb-1.5">
              <span className="text-5xl font-black text-white">{plan.price}</span>
              <span className="text-white/50 text-sm mb-2">/{plan.period}</span>
            </div>
            <p className="text-white/60 text-sm">{plan.description}</p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mb-6" />

          {/* Features */}
          <ul className="space-y-3.5 mb-8 flex-1">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckIcon available={feature.available} highlight={true} />
                <span className={`text-sm font-medium ${feature.available ? 'text-white' : 'text-white/30'}`}>
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#"
            className="block text-center font-bold px-6 py-4 rounded-2xl transition-all text-primary"
            style={{
              background: '#EF9F27',
              color: 'white',
              boxShadow: '0 4px 20px rgba(239,159,39,0.4)',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {plan.cta}
          </a>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={`fade-in-section delay-${delay} ${inView ? 'visible' : ''} flex-1`}
    >
      <div className="relative rounded-3xl flex flex-col h-full border-2 border-gray-200 hover:border-primary/30 transition-colors bg-white p-7 sm:p-8">
        {/* Plan info */}
        <div className="mb-6">
          <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">{plan.name}</div>
          <div className="flex items-end gap-2 mb-1.5">
            <span className="text-4xl font-black text-gray-900">{plan.price}</span>
            <span className="text-gray-400 text-sm mb-1.5">/{plan.period}</span>
          </div>
          <p className="text-gray-500 text-sm">{plan.description}</p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-100 mb-6" />

        {/* Features */}
        <ul className="space-y-3.5 mb-7 flex-1">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3">
              <CheckIcon available={feature.available} highlight={false} />
              <span className={`text-sm ${feature.available ? 'text-gray-700' : 'text-gray-300'}`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#"
          className="block text-center font-bold px-6 py-4 rounded-2xl border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
        >
          {plan.cta}
        </a>
      </div>
    </div>
  )
}
