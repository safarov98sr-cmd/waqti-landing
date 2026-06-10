import { useInView } from '../hooks/useInView'

const features = [
  {
    icon: (
      <svg width="52" height="52" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="#C8EEE4"/>
        <circle cx="16" cy="16" r="6" stroke="#0F6E56" strokeWidth="2"/>
        <line x1="16" y1="2" x2="16" y2="6" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round"/>
        <line x1="16" y1="26" x2="16" y2="30" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round"/>
        <line x1="2" y1="16" x2="6" y2="16" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round"/>
        <line x1="26" y1="16" x2="30" y2="16" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round"/>
        <line x1="16" y1="16" x2="16" y2="12" stroke="#EF9F27" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="16" y1="16" x2="19" y2="18" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Расписание намазов',
    description: 'Точное время всех 5 намазов по геолокации. Уведомления, компас киблы и счётчик прочитанных намазов.',
    cardBg: '#E8F7F2',
    iconBg: 'bg-white',
    accentColor: '#0F6E56',
    tag: '5 намазов · 195+ стран',
  },
  {
    icon: (
      <svg width="52" height="52" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="7" fill="#FFE8C0"/>
        <rect x="8" y="10" width="10" height="2.5" rx="1.25" fill="#EF9F27"/>
        <rect x="8" y="15" width="16" height="2.5" rx="1.25" fill="#EF9F27" opacity="0.55"/>
        <rect x="8" y="20" width="13" height="2.5" rx="1.25" fill="#EF9F27" opacity="0.3"/>
        <circle cx="23" cy="10" r="4.5" fill="#085041"/>
        <path d="M21 10l1.5 1.5L25 8.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Умный планировщик',
    description: 'Задачи автоматически вписываются между намазами. Никаких пересечений с временем поклонения.',
    cardBg: '#FFF8ED',
    iconBg: 'bg-white',
    accentColor: '#EF9F27',
    tag: 'Авто-расписание · ИИ',
  },
  {
    icon: (
      <svg width="52" height="52" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="7" fill="#DDEEFF"/>
        <rect x="7" y="20" width="4" height="7" rx="2" fill="#3B82F6" opacity="0.35"/>
        <rect x="14" y="14" width="4" height="13" rx="2" fill="#3B82F6" opacity="0.65"/>
        <rect x="21" y="9" width="4" height="18" rx="2" fill="#3B82F6"/>
        <path d="M7 18L14 12L21 8" stroke="#EF9F27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="7" cy="18" r="1.5" fill="#EF9F27"/>
        <circle cx="14" cy="12" r="1.5" fill="#EF9F27"/>
        <circle cx="21" cy="8" r="1.5" fill="#EF9F27"/>
      </svg>
    ),
    title: 'Аналитика и прогресс',
    description: 'Визуальные графики продуктивности, серии намазов и еженедельные инсайты о твоём времени.',
    cardBg: '#EDF2FF',
    iconBg: 'bg-white',
    accentColor: '#3B82F6',
    tag: 'Еженедельные инсайты',
  },
  {
    icon: (
      <svg width="52" height="52" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="#EEE0FF"/>
        <circle cx="16" cy="12.5" r="4.5" fill="#A855F7" opacity="0.2"/>
        <path d="M11.5 12.5c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 1.7-.9 3.1-2.25 3.9V21h-4.5v-4.6c-1.35-.8-2.25-2.2-2.25-3.9z" fill="#A855F7"/>
        <rect x="13.5" y="21" width="5" height="2.5" rx="1.2" fill="#A855F7" opacity="0.5"/>
        <path d="M9.5 26c1.7-1.7 4-2.5 6.5-2.5s4.8 .8 6.5 2.5" stroke="#0F6E56" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    title: 'ИИ-коуч',
    description: 'Персональный ассистент, понимающий исламский образ жизни. Советует, напоминает и мотивирует.',
    cardBg: '#F5EDFF',
    iconBg: 'bg-white',
    accentColor: '#A855F7',
    tag: 'Персонально · Всегда онлайн',
  },
]

export default function Features() {
  const [ref, inView] = useInView()

  return (
    <section id="features" className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 fade-in-section ${inView ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-primary-light text-primary rounded-full px-4 py-1.5 text-sm font-bold mb-5">
            ✦ Возможности
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight">
            Всё, что нужно для{' '}
            <span className="text-gradient">баракятного дня</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
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
    <div
      ref={ref}
      className={`fade-in-section delay-${delay} ${inView ? 'visible' : ''}`}
    >
      <div
        className="group relative rounded-3xl p-8 h-full hover:-translate-y-1.5 transition-all duration-300 cursor-default"
        style={{ background: feature.cardBg }}
      >
        {/* Icon */}
        <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6">
          {feature.icon}
        </div>

        <h3 className="text-xl text-gray-900 mb-2.5" style={{ fontWeight: 800 }}>{feature.title}</h3>
        <p className="text-gray-600 leading-relaxed mb-5">{feature.description}</p>

        <div
          className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold"
          style={{ background: 'rgba(255,255,255,0.7)', color: feature.accentColor }}
        >
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: feature.accentColor }} />
          {feature.tag}
        </div>

        {/* Bottom accent line on hover */}
        <div
          className="absolute bottom-0 left-8 right-8 h-[3px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
          style={{ background: `linear-gradient(to right, ${feature.accentColor}, #EF9F27)` }}
        />
      </div>
    </div>
  )
}
