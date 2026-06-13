import { useInView } from '../hooks/useInView'

/* ── Decorative 8-pointed star ── */
const STAR_32 = "16,2 18.3,10.5 25.9,6.1 21.5,13.7 30,16 21.5,18.3 25.9,25.9 18.3,21.5 16,30 13.7,21.5 6.1,25.9 10.5,18.3 2,16 10.5,13.7 6.1,6.1 13.7,10.5"

/* ── Icon paths ── */
const ICONS = {
  prayer: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z',
  ai:     'M13 3l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  chart:  'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  coach:  'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
}

/* ── Card back panels ── */
function PrayerBack() {
  const list = [
    { name: 'Фаджр',  time: '04:32', done: true,  active: false },
    { name: 'Зухр',   time: '12:45', done: true,  active: false },
    { name: 'Аср',    time: '16:20', done: false, active: true  },
    { name: 'Магриб', time: '19:55', done: false, active: false },
    { name: 'Иша',    time: '21:30', done: false, active: false },
  ]
  return (
    <div className="p-7 h-full flex flex-col">
      <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
        Намазы сегодня
      </p>
      <div className="space-y-2.5 flex-1">
        {list.map(p => (
          <div key={p.name} className="flex items-center justify-between">
            <span className="text-sm font-medium" style={{
              color: p.active ? '#10B981' : p.done ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.75)'
            }}>{p.name}</span>
            <div className="flex items-center gap-2">
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.28)' }}>{p.time}</span>
              {p.done && (
                <div className="w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(16,185,129,0.2)' }}>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1.5 4l2 2 3-3" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
              {p.active && <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#10B981' }} />}
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs mt-4" style={{ color: '#10B981' }}>
        2 из 5 · следующий через 2ч 14м
      </p>
    </div>
  )
}

function PlannerBack() {
  const items = [
    { time: '09:00', text: 'Работа над проектом', type: 'task' },
    { time: '12:45', text: 'Зухр намаз', type: 'prayer' },
    { time: '14:00', text: 'Командный созвон', type: 'task' },
    { time: '16:20', text: 'Аср намаз', type: 'prayer' },
    { time: '17:30', text: 'Спорт 40 мин', type: 'task' },
  ]
  return (
    <div className="p-7 h-full flex flex-col">
      <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
        ИИ-план на сегодня
      </p>
      <div className="space-y-3 flex-1">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <span className="text-[10px] w-9 pt-0.5 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {item.time}
            </span>
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
              style={{ background: item.type === 'prayer' ? '#10B981' : '#F59E0B' }} />
            <span className="text-xs leading-relaxed" style={{
              color: item.type === 'prayer' ? '#10B981' : 'rgba(255,255,255,0.75)'
            }}>{item.text}</span>
          </div>
        ))}
      </div>
      <p className="text-[10px] mt-3" style={{ color: 'rgba(255,255,255,0.3)' }}>
        ИИ оптимизировал день вокруг намазов
      </p>
    </div>
  )
}

function AnalyticsBack() {
  const days = [5, 5, 3, 5, 5, 4, 2]
  return (
    <div className="p-7 h-full flex flex-col">
      <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
        Твои результаты
      </p>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {[
          { value: '🔥 12', label: 'дней серия', color: '#F59E0B' },
          { value: '87%',   label: 'намазов',    color: '#10B981' },
          { value: '24',    label: 'задачи',     color: '#34D399' },
          { value: 'Пт',    label: 'лучший день', color: '#FCD34D' },
        ].map((s, i) => (
          <div key={i} className="rounded-xl p-2.5 text-center"
            style={{ background: 'rgba(255,255,255,0.05)' }}>
            <div className="text-base font-black" style={{ color: s.color }}>{s.value}</div>
            <div className="text-[9px] mt-0.5" style={{ color: 'rgba(255,255,255,0.38)' }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1.5 h-12 mt-auto">
        {days.map((n, i) => (
          <div key={i} className="flex-1 rounded-t"
            style={{
              height: `${(n / 5) * 100}%`,
              background: i === 6 ? '#10B981' : n === 5 ? 'rgba(16,185,129,0.45)' : 'rgba(255,255,255,0.1)',
            }} />
        ))}
      </div>
    </div>
  )
}

function CoachBack() {
  const msgs = [
    { from: 'ai',   text: 'Вижу, ты пропустил Аср. Перенести задачи на завтра?' },
    { from: 'user', text: 'Да, пожалуйста!' },
    { from: 'ai',   text: '✓ Готово! Серия намазов продолжается.' },
  ]
  return (
    <div className="p-7 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs"
          style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}>✦</div>
        <span className="text-xs font-bold" style={{ color: '#10B981' }}>Waqti ИИ-коуч</span>
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 ml-auto" />
      </div>
      <div className="space-y-2.5 flex-1">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            <span
              className="text-xs px-3 py-2 max-w-[85%] leading-relaxed"
              style={m.from === 'ai' ? {
                background: 'rgba(255,255,255,0.07)',
                color: 'rgba(255,255,255,0.8)',
                borderRadius: '4px 14px 14px 14px',
              } : {
                background: 'linear-gradient(135deg, #10B981, #059669)',
                color: 'white',
                borderRadius: '14px 4px 14px 14px',
                fontWeight: 500,
              }}
            >
              {m.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Feature data ── */
const features = [
  {
    icon: 'prayer',
    title: 'Намаз в центре дня',
    desc: 'Расписание 5 намазов интегрировано в твой планнер. День строится вокруг намазов, а не вопреки им.',
    tag: 'Геолокация · Точность до секунды',
    Back: PrayerBack,
  },
  {
    icon: 'ai',
    title: 'ИИ-планировщик',
    desc: 'Умный алгоритм расставляет твои задачи между намазами так, чтобы ты успевал всё.',
    tag: 'GPT-4 · Персонализация',
    Back: PlannerBack,
  },
  {
    icon: 'chart',
    title: 'Глубокая аналитика',
    desc: 'Серии намазов, прогресс задач, продуктивность по дням — всё в одном дашборде.',
    tag: 'Дашборд · Недельный отчёт',
    Back: AnalyticsBack,
  },
  {
    icon: 'coach',
    title: 'ИИ-коуч',
    desc: 'Персональный помощник, который понимает твой ритм жизни и помогает двигаться вперёд.',
    tag: 'AI · Поддержка 24/7',
    Back: CoachBack,
  },
]

/* ── Card component ── */
function FeatureCard({ feature, delay }) {
  const [ref, inView] = useInView(0.08)
  const { icon, title, desc, tag, Back } = feature

  const CARD_STYLE = {
    background: 'rgba(255,255,255,0.03)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255,255,255,0.08)',
  }
  const BACK_STYLE = {
    background: 'rgba(13,26,18,0.98)',
    border: '1px solid rgba(16,185,129,0.2)',
  }

  return (
    <div ref={ref} className={`fade-in-section delay-${delay} ${inView ? 'visible' : ''}`}>
      {/* Flip card shell */}
      <div className="flip-card rounded-3xl" style={{ minHeight: 310 }}>
        <div className="flip-card-inner rounded-3xl">

          {/* FRONT */}
          <div className="flip-card-front rounded-3xl p-7 flex flex-col" style={CARD_STYLE}>
            {/* Decorative corner star */}
            <svg
              className="absolute top-5 right-5 opacity-15 pointer-events-none"
              width="24" height="24" viewBox="0 0 32 32" aria-hidden="true"
              style={{ position: 'absolute' }}
            >
              <polygon points={STAR_32} fill="#10B981" />
            </svg>

            {/* Octagonal icon */}
            <div
              className="w-14 h-14 flex items-center justify-center mb-5 flex-shrink-0"
              style={{
                background: 'rgba(16,185,129,0.09)',
                border: '1px solid rgba(16,185,129,0.22)',
                clipPath: 'polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%)',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d={ICONS[icon]} stroke="#10B981" strokeWidth="1.8"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(248,250,252,0.55)' }}>{desc}</p>

            {/* Tag + hover hint */}
            <div className="mt-5 flex items-center justify-between">
              <span
                className="text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(16,185,129,0.09)', border: '1px solid rgba(16,185,129,0.18)', color: '#10B981' }}
              >
                {tag}
              </span>
              <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.2)' }}>Наведи →</span>
            </div>
          </div>

          {/* BACK */}
          <div className="flip-card-back rounded-3xl flex flex-col" style={BACK_STYLE}>
            <Back />
          </div>

        </div>
      </div>
    </div>
  )
}

/* ── Section ── */
export default function Features() {
  const [ref, inView] = useInView()

  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden" style={{ background: '#0D1A12' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(16,185,129,0.05) 0%, transparent 65%)' }}
        aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 fade-in-section ${inView ? 'visible' : ''}`}>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold mb-5"
            style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', color: '#10B981' }}
          >
            <svg width="10" height="10" viewBox="0 0 12 12" fill="#10B981" aria-hidden="true">
              <path d="M6 0l1.5 4.5H12L8.25 7.2l1.5 4.5L6 9 2.25 11.7l1.5-4.5L0 4.5h4.5z" />
            </svg>
            Возможности
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Всё что нужно для{' '}
            <span className="text-gradient">осознанного дня</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'rgba(248,250,252,0.5)' }}>
            Наведи на карточку, чтобы увидеть Waqti в действии.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.icon} feature={f} delay={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
