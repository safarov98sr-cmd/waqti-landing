import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const tabIcons = [
  'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z',
  'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
  'M22 12h-4l-3 9L9 3l-3 9H2',
  'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z',
]

export default function AppPreview() {
  const [active, setActive] = useState(1)
  const [ref, inView] = useInView()

  const screens = [
    { id: 'home',      label: 'Главная',      desc: 'Все 5 намазов на одном экране, следующий намаз — всегда перед глазами.' },
    { id: 'planner',   label: 'Планировщик',  desc: 'ИИ сам распределяет задачи по блокам между намазами.' },
    { id: 'analytics', label: 'Аналитика',    desc: 'Серии, прогресс намазов и продуктивность в одном месте.' },
    { id: 'coach',     label: 'ИИ-коуч',      desc: 'Персональный ассистент, который понимает твой ритм жизни.' },
  ]
  const screenContent = [<ScreenHome />, <ScreenPlanner />, <ScreenAnalytics />, <ScreenCoach />]

  return (
    <section id="app-preview" className="relative py-20 sm:py-28 lg:py-32 overflow-hidden" style={{ background: '#0A0F0D' }}>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 0% 50%, rgba(16,185,129,0.05) 0%, transparent 70%)' }}
        aria-hidden="true" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 100% 50%, rgba(16,185,129,0.05) 0%, transparent 70%)' }}
        aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={ref} className={`text-center mb-10 sm:mb-14 fade-in-section ${inView ? 'visible' : ''}`}>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold mb-4 sm:mb-5"
            style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', color: '#10B981' }}
          >
            <svg width="10" height="10" viewBox="0 0 12 12" fill="#10B981" aria-hidden="true">
              <path d="M6 0l1.5 4.5H12L8.25 7.2l1.5 4.5L6 9 2.25 11.7l1.5-4.5L0 4.5h4.5z" />
            </svg>
            Превью приложения
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-3 sm:mb-4 leading-tight">
            Каждый экран —{' '}
            <span className="text-gradient">продуман для тебя</span>
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Красиво, быстро и без лишнего. Waqti уважает твоё время.
          </p>
        </div>

        {/* Tabs */}
        <div className={`flex justify-center mb-8 sm:mb-10 fade-in-section delay-1 ${inView ? 'visible' : ''}`}>
          <div className="flex gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-2xl overflow-x-auto"
            style={{ background: 'rgba(255,255,255,0.04)', maxWidth: '100%' }}>
            {screens.map((s, i) => (
              <button key={s.id} onClick={() => setActive(i)}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex-shrink-0 cursor-pointer transition-all duration-200"
                style={active === i ? {
                  background: 'rgba(16,185,129,0.15)',
                  color: '#10B981',
                  border: '1px solid rgba(16,185,129,0.28)',
                } : {
                  color: 'rgba(255,255,255,0.45)',
                  border: '1px solid transparent',
                }}
                onMouseEnter={e => { if (active !== i) e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}
                onMouseLeave={e => { if (active !== i) e.currentTarget.style.color = 'rgba(255,255,255,0.45)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d={tabIcons[i]} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="hidden xs:inline">{s.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Phones */}
        <div className={`fade-in-section delay-2 ${inView ? 'visible' : ''}`}>
          {/* Desktop: 4 phones with depth */}
          <div className="hidden lg:flex items-end justify-center gap-5">
            {screens.map((s, i) => {
              const isActive = i === active
              const dist = Math.abs(i - active)
              return (
                <button key={s.id} onClick={() => setActive(i)}
                  className="flex flex-col items-center gap-4 focus:outline-none cursor-pointer"
                  style={{
                    transform: isActive ? 'translateY(0) scale(1)' : dist === 1 ? 'translateY(28px) scale(0.9)' : 'translateY(48px) scale(0.82)',
                    opacity: isActive ? 1 : dist === 1 ? 0.58 : 0.28,
                    transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
                    zIndex: isActive ? 10 : 5 - dist,
                  }}
                >
                  <PhoneFrame active={isActive} size="md">{screenContent[i]}</PhoneFrame>
                  <span className="text-sm font-semibold px-4 py-1.5 rounded-full transition-all duration-200"
                    style={{
                      background: isActive ? 'linear-gradient(135deg,#10B981,#059669)' : 'rgba(255,255,255,0.07)',
                      color: isActive ? '#060C08' : 'rgba(255,255,255,0.4)',
                    }}>
                    {s.label}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Mobile */}
          <div className="lg:hidden">
            <div className="flex justify-center mb-6 sm:mb-8">
              <PhoneFrame active size="lg">{screenContent[active]}</PhoneFrame>
            </div>
            <div className="flex justify-center gap-2 sm:gap-3 flex-wrap px-2">
              {screens.map((s, i) => (
                <button key={s.id} onClick={() => setActive(i)}
                  className="flex flex-col items-center gap-1.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl cursor-pointer transition-all duration-200"
                  style={active === i ? {
                    border: '1px solid rgba(16,185,129,0.45)',
                    background: 'rgba(16,185,129,0.08)',
                  } : {
                    border: '1px solid rgba(255,255,255,0.07)',
                    background: 'rgba(255,255,255,0.02)',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d={tabIcons[i]}
                      stroke={active === i ? '#10B981' : 'rgba(255,255,255,0.4)'}
                      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[10px] sm:text-xs font-semibold"
                    style={{ color: active === i ? '#10B981' : 'rgba(255,255,255,0.35)' }}>
                    {s.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className={`text-center mt-8 sm:mt-10 fade-in-section delay-3 ${inView ? 'visible' : ''}`}>
          <p className="text-sm sm:text-base max-w-md mx-auto px-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {screens[active].desc}
          </p>
        </div>
      </div>
    </section>
  )
}

/* ── Phone wrapper ── */
function PhoneFrame({ children, active, size = 'md' }) {
  const widths = { sm: 'w-[180px]', md: 'w-[220px]', lg: 'w-[260px] sm:w-[300px]' }
  return (
    <div className={`${widths[size]} rounded-[2.4rem] overflow-hidden flex-shrink-0`}
      style={{
        border: active ? '2px solid rgba(16,185,129,0.4)' : '2px solid rgba(255,255,255,0.06)',
        boxShadow: active
          ? '0 32px 80px rgba(0,0,0,0.55), 0 0 50px rgba(16,185,129,0.12)'
          : '0 16px 40px rgba(0,0,0,0.4)',
        background: '#0A0F0D',
      }}>
      <div className="flex justify-center pt-2 pb-1" style={{ background: '#060C08' }}>
        <div className="w-14 h-3.5 rounded-full" style={{ background: '#040A08' }} />
      </div>
      {children}
    </div>
  )
}

/* ── Screen 1: Главная ── */
function ScreenHome() {
  const prayers = [
    { name: 'Фаджр',  time: '04:32', done: true,  active: false, icon: '🌙' },
    { name: 'Зухр',   time: '12:45', done: true,  active: false, icon: '☀️' },
    { name: 'Аср',    time: '16:20', done: false, active: true,  icon: '🌤️' },
    { name: 'Магриб', time: '19:55', done: false, active: false, icon: '🌅' },
    { name: 'Иша',    time: '21:30', done: false, active: false, icon: '⭐' },
  ]
  return (
    <div style={{ background: '#0A0F0D' }}>
      <div className="px-4 pt-2 pb-4" style={{ background: '#060C08' }}>
        <div className="text-[10px] mb-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>Пн, 9 июня</div>
        <div className="font-bold text-sm text-white mb-3">Ас-саламу алейкум</div>
        <div className="rounded-xl px-3 py-2.5 flex items-center justify-between"
          style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.22)' }}>
          <div>
            <div className="text-[9px] mb-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>Следующий намаз</div>
            <div className="font-bold text-sm" style={{ color: '#10B981' }}>Аср · 16:20</div>
            <div className="text-[9px]" style={{ color: 'rgba(255,255,255,0.3)' }}>через 2ч 14м</div>
          </div>
          <div className="relative w-10 h-10">
            <svg viewBox="0 0 40 40" className="w-full h-full -rotate-90">
              <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
              <circle cx="20" cy="20" r="16" fill="none" stroke="#10B981" strokeWidth="3"
                strokeDasharray="100.5" strokeDashoffset="40" strokeLinecap="round" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-sm">🌤️</span>
          </div>
        </div>
      </div>
      <div className="px-3 py-3 space-y-1.5" style={{ background: '#0D1A12' }}>
        <div className="text-[9px] font-bold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.25)' }}>
          Намазы сегодня
        </div>
        {prayers.map(p => (
          <div key={p.name} className="flex items-center justify-between rounded-lg px-2.5 py-2"
            style={p.active ? {
              background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)',
            } : {
              background: 'rgba(255,255,255,0.03)', border: '1px solid transparent',
            }}>
            <div className="flex items-center gap-2">
              <span className="text-sm">{p.icon}</span>
              <span className="text-xs font-semibold" style={{
                color: p.active ? '#10B981' : p.done ? 'rgba(255,255,255,0.28)' : 'rgba(255,255,255,0.8)'
              }}>{p.name}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px]" style={{
                color: p.active ? '#10B981' : p.done ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.4)'
              }}>{p.time}</span>
              {p.done && (
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <circle cx="6.5" cy="6.5" r="6.5" fill="rgba(16,185,129,0.22)" />
                  <path d="M3.5 6.5l2 2 4-4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {p.active && <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#10B981' }} />}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-around py-2.5 px-3"
        style={{ background: '#060C08', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        {tabIcons.map((d, i) => (
          <div key={i} style={{ color: i === 0 ? '#10B981' : 'rgba(255,255,255,0.25)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d={d} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Screen 2: Планировщик ── */
function ScreenPlanner() {
  const blocks = [
    { prayer: 'Фаджр', pTime: '04:32', done: true,  active: false,
      tasks: [{ text: 'Прочитать Коран 20м', done: true }, { text: 'Утренний зикр', done: true }],
      blockLabel: '04:32 — 12:45' },
    { prayer: 'Зухр',  pTime: '12:45', done: true,  active: false,
      tasks: [{ text: 'Подготовить отчёт', done: true }, { text: 'Созвон с командой', done: false }],
      blockLabel: '12:45 — 16:20' },
    { prayer: 'Аср',   pTime: '16:20', done: false, active: true,
      tasks: [{ text: 'Спорт 40м', done: false }, { text: 'Ответить на письма', done: false }],
      blockLabel: '16:20 — 19:55' },
  ]
  return (
    <div style={{ background: '#0D1A12', minHeight: 400 }}>
      <div className="px-4 pt-3 pb-2 flex items-center justify-between"
        style={{ background: '#060C08', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div>
          <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Сегодня</div>
          <div className="text-sm font-bold text-white">Мой день</div>
        </div>
        <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: '#10B981' }}>
          <span className="text-[10px] font-bold" style={{ color: '#060C08' }}>+</span>
        </div>
      </div>
      <div className="px-3 py-3 overflow-y-auto" style={{ maxHeight: 350 }}>
        {blocks.map((block, bi) => (
          <div key={bi}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px]"
                style={block.active
                  ? { background: '#10B981', boxShadow: '0 0 0 3px rgba(16,185,129,0.2)' }
                  : block.done
                    ? { background: 'rgba(16,185,129,0.5)' }
                    : { background: 'rgba(255,255,255,0.1)' }
                }
              >
                {(block.done || block.active) ? (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5 4-4" stroke={block.active ? '#060C08' : 'white'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10 }}>○</span>}
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold" style={{
                  color: block.active ? '#10B981' : block.done ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.8)'
                }}>{block.prayer}</span>
                <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.3)' }}>{block.pTime}</span>
                {block.active && (
                  <span className="text-[9px] rounded px-1 py-px font-bold"
                    style={{ background: '#10B981', color: '#060C08' }}>Сейчас</span>
                )}
              </div>
            </div>
            <div className="ml-3 pl-4 pb-3 space-y-1.5"
              style={{ borderLeft: '2px dashed rgba(255,255,255,0.07)' }}>
              <div className="text-[9px] font-medium mb-1.5" style={{ color: 'rgba(255,255,255,0.28)' }}>
                {block.blockLabel}
              </div>
              {block.tasks.map((t, ti) => (
                <div key={ti} className="flex items-center gap-2 rounded-lg px-2.5 py-2"
                  style={t.done
                    ? { background: 'rgba(255,255,255,0.02)', opacity: 0.5 }
                    : { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }
                  }>
                  <div className="w-3.5 h-3.5 rounded flex-shrink-0 flex items-center justify-center"
                    style={t.done ? { background: '#10B981' } : { border: '1.5px solid rgba(255,255,255,0.18)' }}>
                    {t.done && (
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4l2 2 3-3" stroke="#060C08" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span className="text-[10px] font-medium" style={t.done
                    ? { textDecoration: 'line-through', color: 'rgba(255,255,255,0.28)' }
                    : { color: 'rgba(255,255,255,0.8)' }
                  }>{t.text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Screen 3: Аналитика ── */
function ScreenAnalytics() {
  const days = [{ l: 'Пн', n: 5 }, { l: 'Вт', n: 5 }, { l: 'Ср', n: 4 }, { l: 'Чт', n: 5 }, { l: 'Пт', n: 5 }, { l: 'Сб', n: 3 }, { l: 'Вс', n: 2 }]
  return (
    <div style={{ background: '#0D1A12', minHeight: 400 }}>
      <div className="px-4 pt-3 pb-2.5"
        style={{ background: '#060C08', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Эта неделя</div>
        <div className="text-sm font-bold text-white">Мой прогресс</div>
      </div>
      <div className="px-3 py-3 space-y-3">
        <div className="rounded-2xl p-3" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.4)' }}>Серия</span>
            <span className="text-xs font-black" style={{ color: '#10B981' }}>🔥 12 дней</span>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="flex-1 h-1.5 rounded-full"
                style={{ background: i < 12 ? '#10B981' : 'rgba(255,255,255,0.08)' }} />
            ))}
          </div>
        </div>
        <div className="rounded-2xl p-3" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="text-[10px] font-bold uppercase tracking-wide mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Намазов в день
          </div>
          <div className="flex items-end justify-between gap-1 h-14">
            {days.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full rounded-t-md"
                  style={{
                    height: `${(d.n / 5) * 100}%`,
                    background: i === 6 ? '#10B981' : d.n === 5 ? 'rgba(16,185,129,0.5)' : 'rgba(255,255,255,0.1)',
                  }} />
                <span className="text-[8px] font-semibold"
                  style={{ color: i === 6 ? '#10B981' : 'rgba(255,255,255,0.32)' }}>{d.l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: 'Намазов', value: '29/35', color: '#10B981' },
            { label: 'Продукт-сть', value: '87%', color: '#34D399' },
            { label: 'Задачи', value: '24', color: '#60A5FA' },
            { label: 'Лучший день', value: 'Пт', color: '#F59E0B' },
          ].map((s, i) => (
            <div key={i} className="rounded-xl p-2.5"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="text-[9px] mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.label}</div>
              <div className="text-sm font-black" style={{ color: s.color }}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Screen 4: ИИ-коуч ── */
function ScreenCoach() {
  const messages = [
    { from: 'ai',   text: 'Ас-саламу алейкум! Вижу, вчера ты пропустил Аср. Как самочувствие?' },
    { from: 'user', text: 'Немного устал, были дела...' },
    { from: 'ai',   text: 'Понимаю. Ставлю напоминание за 15 мин до Аср и переношу созвон на 15:30.' },
    { from: 'user', text: 'Отлично, давай!' },
    { from: 'ai',   text: '✓ Сделано. Сегодня 2/5 намазов. Ты справишься!' },
  ]
  return (
    <div className="flex flex-col" style={{ background: '#0D1A12', minHeight: 400 }}>
      <div className="px-4 pt-3 pb-2.5 flex items-center gap-2.5"
        style={{ background: '#060C08', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.28)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="7" width="20" height="13" rx="3" stroke="#10B981" strokeWidth="1.8" />
            <path d="M8 4v3M12 2v5M16 4v3" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="8" cy="13" r="1.5" fill="#10B981" opacity="0.6" />
            <circle cx="12" cy="13" r="1.5" fill="#10B981" />
            <circle cx="16" cy="13" r="1.5" fill="#10B981" opacity="0.45" />
          </svg>
        </div>
        <div>
          <div className="text-xs font-bold text-white">Waqti ИИ-коуч</div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-[9px]" style={{ color: 'rgba(255,255,255,0.4)' }}>В сети</span>
          </div>
        </div>
      </div>
      <div className="flex-1 px-3 py-3 space-y-2 overflow-y-auto">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            {m.from === 'ai' && (
              <div className="w-5 h-5 rounded-full flex items-center justify-center mr-1.5 mt-0.5 flex-shrink-0"
                style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', fontSize: 9 }}>
                ✦
              </div>
            )}
            <div className="max-w-[78%] px-3 py-2 text-[10px] leading-relaxed"
              style={m.from === 'ai' ? {
                background: 'rgba(255,255,255,0.06)',
                color: 'rgba(248,250,252,0.82)',
                borderRadius: '4px 14px 14px 14px',
                border: '1px solid rgba(255,255,255,0.09)',
              } : {
                background: 'linear-gradient(135deg, #10B981, #059669)',
                color: '#F8FAFC',
                borderRadius: '14px 4px 14px 14px',
                fontWeight: 500,
              }}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="px-3 pb-3 pt-2"
        style={{ background: '#060C08', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex items-center gap-2 rounded-xl px-3 py-2"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}>
          <span className="text-[10px] flex-1" style={{ color: 'rgba(255,255,255,0.28)' }}>Напиши сообщение...</span>
          <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: '#10B981' }}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 8L8 5 2 2v2.5l4 .5-4 .5V8z" fill="#060C08" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
