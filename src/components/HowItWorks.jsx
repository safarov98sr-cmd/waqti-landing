import { useInView } from '../hooks/useInView'

const steps = [
  {
    num: '01',
    emoji: '📍',
    title: 'Установи и настрой',
    desc: 'Разреши геолокацию — Waqti автоматически определит точное время 5 намазов в твоём городе.',
    detail: '< 2 минуты',
  },
  {
    num: '02',
    emoji: '🧠',
    title: 'Добавь задачи',
    desc: 'Занеси дела на день. ИИ сам распределит их по временным блокам между намазами.',
    detail: 'ИИ за тебя',
  },
  {
    num: '03',
    emoji: '🔥',
    title: 'Живи с намазом в центре',
    desc: 'Получай умные напоминания, следи за серией намазов и становись продуктивнее каждый день.',
    detail: 'Серия + рост',
  },
]

function StepCard({ step, index }) {
  const [ref, inView] = useInView(0.1)
  return (
    <div ref={ref} className={`fade-in-section delay-${index} ${inView ? 'visible' : ''} flex flex-col items-center text-center`}>
      <div className="relative mb-5">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-black"
          style={{
            background: 'linear-gradient(135deg, #10B981, #059669)',
            boxShadow: '0 4px 20px rgba(16,185,129,0.4)',
            color: '#060C08',
          }}
        >
          {step.num}
        </div>
        <div
          className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-sm"
          style={{ background: 'rgba(10,15,13,0.95)', border: '1px solid rgba(16,185,129,0.25)' }}
        >
          {step.emoji}
        </div>
      </div>

      <div
        className="w-full rounded-3xl p-6 sm:p-7 cursor-default transition-all duration-300"
        style={{
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.07)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-4px)'
          e.currentTarget.style.borderColor = 'rgba(16,185,129,0.22)'
          e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.3)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = ''
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
          e.currentTarget.style.boxShadow = ''
        }}
      >
        <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(248,250,252,0.55)' }}>
          {step.desc}
        </p>
        <span
          className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full"
          style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', color: '#10B981' }}
        >
          <svg width="8" height="8" viewBox="0 0 12 12" fill="#10B981" aria-hidden="true">
            <path d="M6 0l1.5 4.5H12L8.25 7.2l1.5 4.5L6 9 2.25 11.7l1.5-4.5L0 4.5h4.5z" />
          </svg>
          {step.detail}
        </span>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const [ref, inView] = useInView()

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 overflow-hidden" style={{ background: '#111F16' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.05) 0%, transparent 65%)' }}
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
            Как работает
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Три шага до{' '}
            <span className="text-gradient">нового ритма жизни</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'rgba(248,250,252,0.5)' }}>
            Waqti не требует сложной настройки. Начни за 2 минуты.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div
            className="hidden sm:block absolute top-7 left-1/6 right-1/6 h-px pointer-events-none"
            style={{
              background: 'linear-gradient(to right, transparent, #10B981, #F59E0B, #10B981, transparent)',
              opacity: 0.35,
            }}
            aria-hidden="true"
          />
          {steps.map((step, i) => <StepCard key={i} step={step} index={i} />)}
        </div>

        <div className="text-center mt-14">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2.5 font-bold px-8 py-4 rounded-2xl cursor-pointer transition-all duration-200 btn-pulse"
            style={{
              background: 'linear-gradient(135deg, #10B981, #059669)',
              color: '#F8FAFC',
              boxShadow: '0 4px 20px rgba(16,185,129,0.4)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(16,185,129,0.55)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = ''
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(16,185,129,0.4)'
            }}
          >
            Начать прямо сейчас
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
