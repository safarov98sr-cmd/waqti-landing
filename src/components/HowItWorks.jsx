import { useInView } from '../hooks/useInView'

const steps = [
  {
    number: '01',
    emoji: '📍',
    title: 'Укажи локацию',
    description: 'Waqti автоматически определит точное время намазов в твоём городе и настроит умные уведомления.',
    detail: 'Работает в 195+ странах',
  },
  {
    number: '02',
    emoji: '✅',
    title: 'Добавь задачи',
    description: 'Внеси задачи на день. ИИ сам распределит их между намазами, учитывая приоритеты и твои привычки.',
    detail: 'Умное планирование за 10 сек',
  },
  {
    number: '03',
    emoji: '🚀',
    title: 'Живи с нийей',
    description: 'Следуй расписанию, отмечай намазы и получай инсайты. Каждую неделю — прогресс-отчёт от ИИ-коуча.',
    detail: 'Средний рост продуктивности +37%',
  },
]

export default function HowItWorks() {
  const [ref, inView] = useInView()

  return (
    <section id="how-it-works" className="py-24 sm:py-32 gradient-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 fade-in-section ${inView ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-white text-primary rounded-full px-4 py-1.5 text-sm font-bold mb-5 shadow-sm border border-primary/10">
            ✦ Как работает
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight">
            Три шага до <span className="text-primary">баракятного</span> дня
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Настройка занимает меньше 2 минут — и ты готов к жизни с нийей.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-0.5 bg-gradient-to-r from-primary via-gold to-primary opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2.5 bg-primary text-white font-bold px-9 py-4 rounded-2xl hover:bg-dark transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/25"
          >
            Попробовать сейчас
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, index }) {
  const [ref, inView] = useInView(0.1)

  return (
    <div
      ref={ref}
      className={`fade-in-section delay-${index} ${inView ? 'visible' : ''} relative flex flex-col items-center text-center`}
    >
      {/* Number circle */}
      <div className="relative z-10 w-[64px] h-[64px] rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30 mb-6">
        <span className="text-white font-black text-xl">{step.number}</span>
        <div className="absolute -top-2.5 -right-2.5 w-8 h-8 rounded-full bg-white border-2 border-primary-light flex items-center justify-center text-lg shadow-sm">
          {step.emoji}
        </div>
      </div>

      {/* Card */}
      <div className="bg-white rounded-3xl p-8 shadow-card w-full border border-primary/5 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
        <h3 className="text-xl text-gray-900 mb-3" style={{ fontWeight: 800 }}>{step.title}</h3>
        <p className="text-gray-500 leading-relaxed mb-5">{step.description}</p>
        <div className="inline-flex items-center gap-2 bg-primary-light text-primary rounded-full px-3.5 py-1.5 text-xs font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"/>
          {step.detail}
        </div>
      </div>

      {/* Mobile arrow */}
      {index < steps.length - 1 && (
        <div className="lg:hidden mt-6 text-primary/25">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </div>
  )
}
