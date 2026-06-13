import { useInView } from '../hooks/useInView'

/* Decorative 8-pointed star (32x32) for card corner */
const STAR_32 = "16,2 18.3,10.5 25.9,6.1 21.5,13.7 30,16 21.5,18.3 25.9,25.9 18.3,21.5 16,30 13.7,21.5 6.1,25.9 10.5,18.3 2,16 10.5,13.7 6.1,6.1 13.7,10.5"

const features = [
  {
    title: 'Расписание намазов',
    description: 'Точное время всех 5 намазов по геолокации. Уведомления, компас киблы и счётчик прочитанных намазов.',
    tag: '5 намазов · 195+ стран',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-label="Часы">
        <circle cx="12" cy="12" r="9" stroke="#EF9F27" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="2" fill="#EF9F27" />
        <line x1="12" y1="12" x2="12" y2="5.5" stroke="#EF9F27" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="12" x2="16.5" y2="14.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
        {/* Tick marks */}
        {[0, 90, 180, 270].map((deg, i) => {
          const a = (deg * Math.PI) / 180
          return (
            <line
              key={i}
              x1={12 + 7.5 * Math.cos(a)} y1={12 + 7.5 * Math.sin(a)}
              x2={12 + 9 * Math.cos(a)} y2={12 + 9 * Math.sin(a)}
              stroke="#EF9F27" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"
            />
          )
        })}
      </svg>
    ),
  },
  {
    title: 'Умный планировщик',
    description: 'Задачи автоматически вписываются между намазами. Никаких пересечений с временем поклонения.',
    tag: 'Авто-расписание · ИИ',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-label="Планировщик">
        <rect x="3" y="4" width="18" height="17" rx="2" stroke="#EF9F27" strokeWidth="1.8" />
        <path d="M3 9h18M8 2v4M16 2v4" stroke="#EF9F27" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 14h3M7 18h8" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
        <circle cx="16.5" cy="14.5" r="3" fill="rgba(239,159,39,0.2)" stroke="#EF9F27" strokeWidth="1.4" />
        <path d="M15.2 14.5l1 1 2-1.5" stroke="#EF9F27" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Аналитика и прогресс',
    description: 'Визуальные графики продуктивности, серии намазов и еженедельные инсайты о твоём времени.',
    tag: 'Еженедельные инсайты',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-label="Аналитика">
        <rect x="2" y="19" width="4" height="4" rx="1" fill="#EF9F27" opacity="0.35" />
        <rect x="9" y="13" width="4" height="10" rx="1" fill="#EF9F27" opacity="0.65" />
        <rect x="16" y="8" width="4" height="15" rx="1" fill="#EF9F27" />
        <path d="M4 17L11 11 18 6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
        <circle cx="4" cy="17" r="1.8" fill="white" opacity="0.9" />
        <circle cx="11" cy="11" r="1.8" fill="white" opacity="0.9" />
        <circle cx="18" cy="6" r="1.8" fill="white" opacity="0.9" />
      </svg>
    ),
  },
  {
    title: 'ИИ-коуч',
    description: 'Персональный ассистент, понимающий исламский образ жизни. Советует, напоминает и мотивирует.',
    tag: 'Персонально · Всегда онлайн',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-label="ИИ-коуч">
        <rect x="2" y="7" width="20" height="13" rx="3" stroke="#EF9F27" strokeWidth="1.8" />
        <path d="M8 4v3M12 2v5M16 4v3" stroke="#EF9F27" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="8" cy="13" r="1.8" fill="#EF9F27" opacity="0.6" />
        <circle cx="12" cy="13" r="1.8" fill="#EF9F27" />
        <circle cx="16" cy="13" r="1.8" fill="#EF9F27" opacity="0.45" />
      </svg>
    ),
  },
]

export default function Features() {
  const [ref, inView] = useInView()

  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden" style={{ background: '#0A1628' }}>
      {/* Top gold bloom */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(239,159,39,0.05) 0%, transparent 70%)' }}
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
            Возможности
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Всё, что нужно для{' '}
            <span className="text-gradient">баракятного дня</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Waqti объединяет духовное и мирское — так, чтобы каждая минута приносила пользу.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} delay={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, delay }) {
  const [ref, inView] = useInView(0.1)

  return (
    <div ref={ref} className={`fade-in-section delay-${delay} ${inView ? 'visible' : ''}`}>
      <div
        className="group relative rounded-3xl p-8 h-full cursor-default"
        style={{
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 4px 32px rgba(0,0,0,0.2)',
          transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.25s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(239,159,39,0.28)'
          e.currentTarget.style.boxShadow = '0 8px 48px rgba(0,0,0,0.3), 0 0 32px rgba(239,159,39,0.07)'
          e.currentTarget.style.transform = 'translateY(-4px)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
          e.currentTarget.style.boxShadow = '0 4px 32px rgba(0,0,0,0.2)'
          e.currentTarget.style.transform = ''
        }}
      >
        {/* Decorative corner star */}
        <div className="absolute top-5 right-5 pointer-events-none" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <polygon points={STAR_32} stroke="#EF9F27" strokeWidth="0.7" fill="none" opacity="0.12" />
          </svg>
        </div>

        {/* Icon */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
          style={{ background: 'rgba(239,159,39,0.09)', border: '1px solid rgba(239,159,39,0.2)' }}
        >
          {feature.icon}
        </div>

        <h3 className="text-xl font-bold text-white mb-2.5">{feature.title}</h3>
        <p className="leading-relaxed mb-5" style={{ color: 'rgba(248,250,252,0.55)' }}>{feature.description}</p>

        <div
          className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold"
          style={{ background: 'rgba(239,159,39,0.09)', border: '1px solid rgba(239,159,39,0.2)', color: '#EF9F27' }}
        >
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#EF9F27' }} />
          {feature.tag}
        </div>

        {/* Bottom gold accent on hover */}
        <div
          className="absolute bottom-0 left-8 right-8 h-[2px] rounded-full scale-x-0 group-hover:scale-x-100 origin-left"
          style={{
            background: 'linear-gradient(to right, #EF9F27, #D4AF37, transparent)',
            transition: 'transform 0.3s ease',
          }}
        />
      </div>
    </div>
  )
}
