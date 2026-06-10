import { useState } from 'react'
import { useInView } from '../hooks/useInView'

/* ─── Screen data ─── */
const screens = [
  {
    id: 'home',
    label: 'Главная',
    emoji: '🏠',
    desc: 'Все 5 намазов на одном экране, следующий намаз — всегда перед глазами.',
    content: <ScreenHome />,
  },
  {
    id: 'planner',
    label: 'Планировщик',
    emoji: '📋',
    desc: 'ИИ сам распределяет задачи по блокам между намазами.',
    content: <ScreenPlanner />,
  },
  {
    id: 'analytics',
    label: 'Аналитика',
    emoji: '📊',
    desc: 'Серии, прогресс намазов и продуктивность в одном месте.',
    content: <ScreenAnalytics />,
  },
  {
    id: 'coach',
    label: 'ИИ-коуч',
    emoji: '🤖',
    desc: 'Персональный ассистент, который понимает твой ритм жизни.',
    content: <ScreenCoach />,
  },
]

/* ─── Main section ─── */
export default function AppPreview() {
  const [active, setActive] = useState(1)
  const [ref, inView] = useInView()

  return (
    <section id="app-preview" className="py-20 sm:py-28 lg:py-32" style={{ background: '#062e25' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div ref={ref} className={`text-center mb-10 sm:mb-14 fade-in-section ${inView ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold mb-4 sm:mb-5 border border-white/15 text-white/70">
            ✦ Превью приложения
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-3 sm:mb-4 leading-tight" style={{ fontWeight: 800 }}>
            Каждый экран —{' '}
            <span style={{ color: '#EF9F27' }}>продуман для тебя</span>
          </h2>
          <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto">
            Красиво, быстро и без лишнего. Waqti уважает твоё время.
          </p>
        </div>

        {/* Tabs — compact on mobile */}
        <div className={`flex justify-center mb-8 sm:mb-10 fade-in-section ${inView ? 'visible' : ''} delay-1`}>
          <div className="flex gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-2xl overflow-x-auto"
               style={{ background: 'rgba(255,255,255,0.07)', maxWidth: '100%' }}>
            {screens.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex-shrink-0 ${
                  active === i
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-white/50 hover:text-white/80'
                }`}
              >
                <span>{s.emoji}</span>
                <span className="hidden xs:inline sm:inline">{s.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Phones */}
        <div className={`fade-in-section delay-2 ${inView ? 'visible' : ''}`}>

          {/* Desktop: 4 phones with depth effect */}
          <div className="hidden lg:flex items-end justify-center gap-5">
            {screens.map((s, i) => {
              const isActive = i === active
              const dist = Math.abs(i - active)
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className="flex flex-col items-center gap-4 focus:outline-none"
                  style={{
                    transform: isActive
                      ? 'translateY(0) scale(1)'
                      : dist === 1
                      ? 'translateY(28px) scale(0.9)'
                      : 'translateY(48px) scale(0.82)',
                    opacity: isActive ? 1 : dist === 1 ? 0.65 : 0.35,
                    transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
                    zIndex: isActive ? 10 : 5 - dist,
                  }}
                >
                  <PhoneFrame active={isActive} size="md">{s.content}</PhoneFrame>
                  <span
                    className="text-sm font-semibold px-4 py-1.5 rounded-full transition-all"
                    style={{
                      background: isActive ? '#EF9F27' : 'rgba(255,255,255,0.1)',
                      color: isActive ? 'white' : 'rgba(255,255,255,0.4)',
                    }}
                  >
                    {s.label}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Mobile / Tablet: large active phone + tap strip */}
          <div className="lg:hidden">
            {/* Active phone — centered, fills available width nicely */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <PhoneFrame active size="lg">{screens[active].content}</PhoneFrame>
            </div>

            {/* Tab strip */}
            <div className="flex justify-center gap-2 sm:gap-3 flex-wrap px-2">
              {screens.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className={`flex flex-col items-center gap-1.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border transition-all ${
                    active === i
                      ? 'border-gold/60 bg-white/10'
                      : 'border-white/10 bg-white/5'
                  }`}
                >
                  <span className="text-lg sm:text-xl">{s.emoji}</span>
                  <span className={`text-[10px] sm:text-xs font-semibold ${active === i ? 'text-gold' : 'text-white/40'}`}>
                    {s.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className={`text-center mt-8 sm:mt-10 fade-in-section delay-3 ${inView ? 'visible' : ''}`}>
          <p className="text-white/50 text-sm sm:text-base max-w-md mx-auto px-4">
            {screens[active].desc}
          </p>
        </div>

      </div>
    </section>
  )
}

/* ─── Phone wrapper ─── */
function PhoneFrame({ children, active, size = 'md' }) {
  const widths = {
    sm: 'w-[180px]',
    md: 'w-[220px]',
    lg: 'w-[260px] sm:w-[300px]',
  }
  return (
    <div
      className={`${widths[size]} rounded-[2.4rem] overflow-hidden flex-shrink-0`}
      style={{
        border: active ? '3px solid rgba(239,159,39,0.4)' : '3px solid rgba(255,255,255,0.08)',
        boxShadow: active
          ? '0 32px 80px rgba(0,0,0,0.5), 0 0 60px rgba(15,110,86,0.25)'
          : '0 16px 40px rgba(0,0,0,0.3)',
        background: '#f5f5f5',
      }}
    >
      {/* Notch */}
      <div className="flex justify-center pt-2 pb-1" style={{ background: '#062e25' }}>
        <div className="w-14 h-3.5 rounded-full" style={{ background: '#041f18' }} />
      </div>
      {children}
    </div>
  )
}

/* ─── Screen 1: Главная ─── */
function ScreenHome() {
  const prayers = [
    { name: 'Фаджр',  time: '04:32', done: true,  icon: '🌙', active: false },
    { name: 'Зухр',   time: '12:45', done: true,  icon: '☀️', active: false },
    { name: 'Аср',    time: '16:20', done: false, icon: '🌤️', active: true  },
    { name: 'Магриб', time: '19:55', done: false, icon: '🌅', active: false },
    { name: 'Иша',    time: '21:30', done: false, icon: '⭐', active: false },
  ]
  return (
    <div style={{ background: '#062e25' }}>
      <div className="px-4 pt-2 pb-4">
        <div className="text-[10px] text-white/40 mb-0.5">Понедельник, 9 июня</div>
        <div className="text-white font-bold text-sm mb-3">Ас-саламу алейкум 👋</div>
        <div className="rounded-xl px-3 py-2.5 flex items-center justify-between" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <div>
            <div className="text-white/40 text-[9px]">Следующий намаз</div>
            <div className="font-bold text-sm" style={{ color: '#EF9F27' }}>Аср · 16:20</div>
            <div className="text-white/30 text-[9px]">через 2ч 14м</div>
          </div>
          <div className="relative w-10 h-10">
            <svg viewBox="0 0 40 40" className="w-full h-full -rotate-90">
              <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3"/>
              <circle cx="20" cy="20" r="16" fill="none" stroke="#EF9F27" strokeWidth="3"
                strokeDasharray="100.5" strokeDashoffset="40" strokeLinecap="round"/>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-sm">🌤️</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-3 py-3 space-y-1.5">
        <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">Намазы сегодня</div>
        {prayers.map(p => (
          <div key={p.name}
            className={`flex items-center justify-between rounded-lg px-2.5 py-2 ${p.active ? 'bg-[#E1F5EE] border border-[#0F6E56]/20' : 'bg-white'}`}
          >
            <div className="flex items-center gap-2">
              <span className="text-sm">{p.icon}</span>
              <span className={`text-xs font-semibold ${p.active ? 'text-primary' : p.done ? 'text-gray-400' : 'text-gray-700'}`}>{p.name}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className={`text-[10px] font-medium ${p.active ? 'text-primary font-bold' : p.done ? 'text-gray-400' : 'text-gray-500'}`}>{p.time}</span>
              {p.done && (
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <circle cx="6.5" cy="6.5" r="6.5" fill="#0F6E56"/>
                  <path d="M3.5 6.5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              {p.active && <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"/>}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white border-t border-gray-100 flex justify-around py-2.5 px-3">
        {[['🏠',true],['📋',false],['📊',false],['🤖',false]].map(([ic, sel], i) => (
          <div key={i} className={sel ? 'opacity-100' : 'opacity-30'}>
            <span className="text-base">{ic}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Screen 2: Планировщик ─── */
function ScreenPlanner() {
  const blocks = [
    {
      prayer: 'Фаджр', pTime: '04:32', done: true,
      tasks: [{ text: 'Прочитать Коран 20м', done: true }, { text: 'Утренний зикр', done: true }],
      blockLabel: '04:32 — 12:45',
    },
    {
      prayer: 'Зухр', pTime: '12:45', done: true,
      tasks: [{ text: 'Подготовить отчёт', done: true }, { text: 'Созвон с командой', done: false }],
      blockLabel: '12:45 — 16:20',
    },
    {
      prayer: 'Аср', pTime: '16:20', done: false, active: true,
      tasks: [{ text: 'Спорт 40м', done: false }, { text: 'Ответить на письма', done: false }],
      blockLabel: '16:20 — 19:55',
    },
  ]
  return (
    <div className="bg-gray-50" style={{ minHeight: 400 }}>
      <div className="px-4 pt-3 pb-2 bg-white border-b border-gray-100 flex items-center justify-between">
        <div>
          <div className="text-[10px] text-gray-400">Сегодня</div>
          <div className="text-sm font-bold text-gray-900">Мой день</div>
        </div>
        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
          <span className="text-white text-[10px] font-bold">+</span>
        </div>
      </div>
      <div className="px-3 py-3 overflow-y-auto" style={{ maxHeight: 350 }}>
        {blocks.map((block, bi) => (
          <div key={bi}>
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${block.active ? 'bg-primary ring-2 ring-primary/30' : block.done ? 'bg-primary' : 'bg-gray-200'}`}>
                {block.done || block.active
                  ? <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  : <span className="text-gray-400 text-[8px]">○</span>}
              </div>
              <div className="flex items-center gap-1.5">
                <span className={`text-xs font-bold ${block.active ? 'text-primary' : block.done ? 'text-gray-500' : 'text-gray-700'}`}>{block.prayer}</span>
                <span className="text-[10px] text-gray-400">{block.pTime}</span>
                {block.active && <span className="text-[9px] bg-primary text-white rounded px-1 py-px font-bold">Сейчас</span>}
              </div>
            </div>
            <div className="ml-3 pl-4 border-l-2 border-dashed border-gray-200 pb-3 space-y-1.5">
              <div className="text-[9px] text-gray-400 font-medium mb-1.5">{block.blockLabel}</div>
              {block.tasks.map((t, ti) => (
                <div key={ti} className={`flex items-center gap-2 rounded-lg px-2.5 py-2 ${t.done ? 'bg-white opacity-60' : 'bg-white shadow-sm border border-gray-100'}`}>
                  <div className={`w-3.5 h-3.5 rounded flex-shrink-0 flex items-center justify-center ${t.done ? 'bg-primary' : 'border-2 border-gray-300'}`}>
                    {t.done && <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </div>
                  <span className={`text-[10px] font-medium ${t.done ? 'line-through text-gray-400' : 'text-gray-700'}`}>{t.text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Screen 3: Аналитика ─── */
function ScreenAnalytics() {
  const days = [
    { label: 'Пн', count: 5 },
    { label: 'Вт', count: 5 },
    { label: 'Ср', count: 4 },
    { label: 'Чт', count: 5 },
    { label: 'Пт', count: 5 },
    { label: 'Сб', count: 3 },
    { label: 'Вс', count: 2 },
  ]
  return (
    <div className="bg-gray-50" style={{ minHeight: 400 }}>
      <div className="px-4 pt-3 pb-2.5 bg-white border-b border-gray-100">
        <div className="text-[10px] text-gray-400">Эта неделя</div>
        <div className="text-sm font-bold text-gray-900">Мой прогресс</div>
      </div>
      <div className="px-3 py-3 space-y-3">
        <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Серия намазов</span>
            <span className="text-xs font-black" style={{ color: '#EF9F27' }}>🔥 12 дней</span>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="flex-1 h-1.5 rounded-full" style={{ background: i < 12 ? '#0F6E56' : '#E5E7EB' }} />
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-3">Намазов в день</div>
          <div className="flex items-end justify-between gap-1 h-14">
            {days.map((d, i) => {
              const h = Math.round((d.count / 5) * 100)
              const isToday = i === 6
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full rounded-t-md" style={{ height: `${h}%`, background: isToday ? '#EF9F27' : d.count === 5 ? '#0F6E56' : '#A7D4C8' }}/>
                  <span className="text-[8px] font-semibold" style={{ color: isToday ? '#EF9F27' : '#9CA3AF' }}>{d.label}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: 'Намазов за неделю', value: '29/35', color: '#0F6E56' },
            { label: 'Продуктивность', value: '87%', color: '#EF9F27' },
            { label: 'Задач выполнено', value: '24', color: '#3B82F6' },
            { label: 'Лучший день', value: 'Пятница', color: '#A855F7' },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-xl p-2.5 shadow-sm border border-gray-100">
              <div className="text-[9px] text-gray-400 mb-1">{s.label}</div>
              <div className="text-sm font-black" style={{ color: s.color }}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Screen 4: ИИ-коуч ─── */
function ScreenCoach() {
  const messages = [
    { from: 'ai',   text: 'Ас-саламу алейкум! Вижу, вчера ты пропустил Аср. Как самочувствие?' },
    { from: 'user', text: 'Немного устал, были дела...' },
    { from: 'ai',   text: 'Понимаю. Ставлю напоминание за 15 минут до Аср и переношу созвон на 15:30, чтобы освободить время.' },
    { from: 'user', text: 'Отлично, давай!' },
    { from: 'ai',   text: '✓ Сделано. Сегодня 2/5 намазов. Ты справишься 💚' },
  ]
  return (
    <div className="flex flex-col bg-gray-50" style={{ minHeight: 400 }}>
      <div className="px-4 pt-3 pb-2.5 bg-white border-b border-gray-100 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm flex-shrink-0">🤖</div>
        <div>
          <div className="text-xs font-bold text-gray-900">Waqti ИИ-коуч</div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400"/>
            <span className="text-[9px] text-gray-400">В сети</span>
          </div>
        </div>
      </div>
      <div className="flex-1 px-3 py-3 space-y-2 overflow-y-auto">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            {m.from === 'ai' && (
              <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-[10px] mr-1.5 mt-0.5 flex-shrink-0">🤖</div>
            )}
            <div
              className="max-w-[78%] px-3 py-2 text-[10px] leading-relaxed"
              style={m.from === 'ai'
                ? { background: 'white', color: '#374151', borderRadius: '4px 14px 14px 14px', boxShadow: '0 1px 4px rgba(0,0,0,0.07)' }
                : { background: '#0F6E56', color: 'white', borderRadius: '14px 4px 14px 14px' }
              }
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="px-3 pb-3 pt-2 bg-white border-t border-gray-100">
        <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-2">
          <span className="text-[10px] text-gray-400 flex-1">Напиши сообщение...</span>
          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 8L8 5 2 2v2.5l4 .5-4 .5V8z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
