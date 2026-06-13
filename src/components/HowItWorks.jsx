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
    <section id="how-it-works" className="relative py-24 sm:py-32 overflow-hidden" style={{ background: '#0D1B2A' }}>
      {/* Subtle gold glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 100% 100%, rgba(239,159,39,0.05) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 fade-in-section ${inView ? 'visible' : ''}`}>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold mb-5"
            style={{ background: 'rgba(239,159,39,0.08)', border: '1px solid rgba(239,159,39,0.2)', color: '#EF9F27' }}
          >
            <svg width="10" height="10" viewBox="0 0 12 12" fill="#EF9F27" aria-hidden="true">
              <path d="M6 0l1.5 4.5H12L8.25 7.2l1.5 4.5L6 9 2.25 11.7l1.5-4.5L0 4.5h4.5z" />
            </svg>
            Как работает
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Три шага до{' '}
            <span className="text-gradient">баракятного</span> дня
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'rgba(248,250,252,0.5)' }}>
            Настройка занимает меньше 2 минут — и ты готов к жизни с нийей.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-[32px] left-[calc(16.67%+40px)] right-[calc(16.67%+40px)] h-[1px]"
            style={{ background: 'linear-gradient(to right, transparent, #EF9F27, #D4AF37, #EF9F27, transparent)', opacity: 0.35 }}
            aria-hidden="true"
          />

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
            className="inline-flex items-center gap-2.5 font-bold px-9 py-4 rounded-2xl cursor-pointer transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, #EF9F27 0%, #D4AF37 100%)',
              color: '#07111A',
              boxShadow: '0 8px 24px rgba(239,159,39,0.35)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(239,159,39,0.45)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = ''
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(239,159,39,0.35)'
            }}
          >
            Попробовать сейчас
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
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
      {/* Gold number circle */}
      <div
        className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
        style={{
          background: 'linear-gradient(135deg, #EF9F27 0%, #D4AF37 100%)',
          boxShadow: '0 8px 24px rgba(239,159,39,0.35)',
        }}
      >
        <span className="font-black text-xl" style={{ color: '#07111A' }}>{step.number}</span>
        {/* Emoji badge */}
        <div
          className="absolute -top-2.5 -right-2.5 w-8 h-8 rounded-full flex items-center justify-center text-base"
          style={{
            background: 'rgba(7,15,26,0.92)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(239,159,39,0.3)',
          }}
        >
          {step.emoji}
        </div>
      </div>

      {/* Glassmorphism card */}
      <div
        className="rounded-3xl p-8 w-full"
        style={{
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 4px 32px rgba(0,0,0,0.25)',
          transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-4px)'
          e.currentTarget.style.boxShadow = '0 8px 48px rgba(0,0,0,0.35), 0 0 24px rgba(239,159,39,0.06)'
          e.currentTarget.style.borderColor = 'rgba(239,159,39,0.2)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = ''
          e.currentTarget.style.boxShadow = '0 4px 32px rgba(0,0,0,0.25)'
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
        }}
      >
        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
        <p className="leading-relaxed mb-5" style={{ color: 'rgba(248,250,252,0.55)' }}>
          {step.description}
        </p>
        <div
          className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold"
          style={{ background: 'rgba(239,159,39,0.09)', border: '1px solid rgba(239,159,39,0.2)', color: '#EF9F27' }}
        >
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#EF9F27' }} />
          {step.detail}
        </div>
      </div>

      {/* Mobile arrow between steps */}
      {index < steps.length - 1 && (
        <div className="lg:hidden mt-6" style={{ color: 'rgba(239,159,39,0.3)' }} aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </div>
  )
}
