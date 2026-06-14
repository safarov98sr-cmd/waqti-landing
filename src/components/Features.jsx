import { useInView } from '../hooks/useInView'

const ICONS = {
  prayer: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z',
  ai:     'M13 3l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  chart:  'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  coach:  'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
}

/* ─────────────────────────────────────────────
   SVG Phone Mockup Components
   viewBox 0 0 220 200 | preserveAspectRatio=xMidYMin slice
   Phone frame: x=30 y=5 w=160 h=190 rx=20
───────────────────────────────────────────── */

function MockupPrayer() {
  const rows = [
    { n: 'Фаджр',  t: '04:32', done: true,  active: false },
    { n: 'Зухр',   t: '12:45', done: true,  active: false },
    { n: 'Аср',    t: '16:20', done: false, active: true  },
    { n: 'Магриб', t: '19:55', done: false, active: false },
    { n: 'Иша',    t: '21:30', done: false, active: false },
  ]
  return (
    <svg viewBox="0 0 220 200" width="100%" height="100%" preserveAspectRatio="xMidYMin slice" aria-hidden="true">
      <defs>
        <radialGradient id="rg-pr" cx="70%" cy="0%" r="90%">
          <stop offset="0%" stopColor="#0D2018" /><stop offset="100%" stopColor="#060C08" />
        </radialGradient>
      </defs>
      <rect width="220" height="200" fill="url(#rg-pr)" />
      <circle cx="195" cy="22" r="48" fill="none" stroke="#10B981" strokeWidth="0.6" opacity="0.14" />
      <circle cx="195" cy="22" r="32" fill="none" stroke="#10B981" strokeWidth="0.5" opacity="0.11" />
      <circle cx="22"  cy="185" r="36" fill="none" stroke="#F59E0B" strokeWidth="0.5" opacity="0.09" />

      {/* Phone */}
      <rect x="30" y="5" width="160" height="190" rx="20" fill="#0A0F0D" />
      <rect x="30" y="5" width="160" height="190" rx="20" fill="none" stroke="#10B981" strokeWidth="1.2" opacity="0.5" />
      <rect x="85" y="11" width="60" height="10" rx="5" fill="#040A08" />

      {/* Header */}
      <rect x="30" y="25" width="160" height="30" fill="#060C08" />
      <text x="40" y="36" fontFamily="system-ui,sans-serif" fontSize="6" fill="rgba(255,255,255,0.35)">Пн, 9 июня</text>
      <text x="40" y="49" fontFamily="system-ui,sans-serif" fontSize="9.5" fontWeight="700" fill="white">Намазы</text>

      {/* Next-prayer card */}
      <rect x="38" y="59" width="144" height="32" rx="8" fill="rgba(16,185,129,0.13)" stroke="rgba(16,185,129,0.4)" strokeWidth="0.8" />
      <text x="46" y="70" fontFamily="system-ui,sans-serif" fontSize="6" fill="rgba(255,255,255,0.38)">Следующий намаз</text>
      <text x="46" y="83" fontFamily="system-ui,sans-serif" fontSize="8.5" fontWeight="700" fill="#10B981">Аср · 16:20</text>
      <circle cx="166" cy="75" r="11.5" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="2.2" />
      <circle cx="166" cy="75" r="11.5" fill="none" stroke="#10B981" strokeWidth="2.2"
        strokeDasharray="72.3" strokeDashoffset="28" strokeLinecap="round"
        transform="rotate(-90 166 75)" />
      <text x="163.5" y="79" fontFamily="system-ui,sans-serif" fontSize="8" textAnchor="middle" fill="rgba(255,255,255,0.5)">🌤</text>

      {/* Prayer list */}
      <rect x="30" y="95" width="160" height="100" fill="#0D1A12" />
      <text x="40" y="107" fontFamily="system-ui,sans-serif" fontSize="5.5" fill="rgba(255,255,255,0.22)" letterSpacing="1">НАМАЗЫ СЕГОДНЯ</text>

      {rows.map((p, i) => {
        const ry = 114 + i * 19
        return (
          <g key={i}>
            {p.active && <rect x="34" y={ry - 2} width="152" height="16" rx="4" fill="rgba(16,185,129,0.13)" stroke="rgba(16,185,129,0.32)" strokeWidth="0.7" />}
            <text x="42" y={ry + 10} fontFamily="system-ui,sans-serif" fontSize="7.5" fontWeight={p.active ? '700' : '400'}
              fill={p.active ? '#10B981' : p.done ? 'rgba(255,255,255,0.26)' : 'rgba(255,255,255,0.78)'}>
              {p.n}
            </text>
            <text x="140" y={ry + 10} fontFamily="system-ui,sans-serif" fontSize="6.5"
              fill={p.active ? '#10B981' : 'rgba(255,255,255,0.26)'}>
              {p.t}
            </text>
            {p.done && <>
              <circle cx="177" cy={ry + 6} r="5" fill="rgba(16,185,129,0.22)" />
              <path d={`M174.5 ${ry + 6}l2.5 2.5 4-4`} stroke="#10B981" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </>}
            {p.active && <circle cx="177" cy={ry + 6} r="3" fill="#10B981" />}
          </g>
        )
      })}
    </svg>
  )
}

function MockupPlanner() {
  const blocks = [
    { time: '09:00', label: 'Работа над проектом', type: 'task',   h: 24, color: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.1)' },
    { time: '12:45', label: 'Зухр намаз',          type: 'prayer', h: 16, color: 'rgba(16,185,129,0.14)', borderColor: 'rgba(16,185,129,0.4)' },
    { time: '14:00', label: 'Командный созвон',     type: 'task',   h: 20, color: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.09)' },
    { time: '16:20', label: 'Аср · Сейчас',        type: 'prayer', h: 16, color: 'rgba(16,185,129,0.18)', borderColor: 'rgba(16,185,129,0.5)', current: true },
    { time: '17:30', label: 'Спорт 40 мин',        type: 'task',   h: 20, color: 'rgba(245,158,11,0.1)',  borderColor: 'rgba(245,158,11,0.3)' },
  ]
  let y = 96
  return (
    <svg viewBox="0 0 220 200" width="100%" height="100%" preserveAspectRatio="xMidYMin slice" aria-hidden="true">
      <defs>
        <radialGradient id="rg-pl" cx="30%" cy="0%" r="90%">
          <stop offset="0%" stopColor="#0A1F20" /><stop offset="100%" stopColor="#060C08" />
        </radialGradient>
      </defs>
      <rect width="220" height="200" fill="url(#rg-pl)" />
      <circle cx="20"  cy="20"  r="44" fill="none" stroke="#F59E0B" strokeWidth="0.5" opacity="0.1" />
      <circle cx="200" cy="180" r="40" fill="none" stroke="#10B981" strokeWidth="0.5" opacity="0.1" />

      {/* Phone */}
      <rect x="30" y="5" width="160" height="190" rx="20" fill="#0A0F0D" />
      <rect x="30" y="5" width="160" height="190" rx="20" fill="none" stroke="#F59E0B" strokeWidth="1.2" opacity="0.38" />
      <rect x="85" y="11" width="60" height="10" rx="5" fill="#040A08" />

      {/* Header */}
      <rect x="30" y="25" width="160" height="30" fill="#060C08" />
      <text x="40" y="36" fontFamily="system-ui,sans-serif" fontSize="6" fill="rgba(255,255,255,0.35)">Мой день · 9 июня</text>
      <text x="40" y="49" fontFamily="system-ui,sans-serif" fontSize="9.5" fontWeight="700" fill="white">Планировщик</text>
      <rect x="154" y="32" width="22" height="14" rx="4" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.3)" strokeWidth="0.7" />
      <text x="165" y="42" fontFamily="system-ui,sans-serif" fontSize="6" fontWeight="700" fill="#10B981" textAnchor="middle">+</text>

      {/* Timeline area */}
      <rect x="30" y="59" width="160" height="136" fill="#0D1A12" />
      <line x1="58" y1="63" x2="58" y2="195" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />

      {blocks.map((b, i) => {
        const blockY = y
        const textColor = b.type === 'prayer' ? '#10B981' : b.current ? '#F59E0B' : 'rgba(255,255,255,0.7)'
        const timeColor = b.type === 'prayer' ? '#10B981' : 'rgba(255,255,255,0.32)'
        const dot = b.type === 'prayer' ? '#10B981' : b.current ? '#F59E0B' : 'rgba(255,255,255,0.25)'
        y += b.h + 6
        return (
          <g key={i}>
            <text x="38" y={blockY + 9} fontFamily="system-ui,sans-serif" fontSize="5.5" fill={timeColor}>{b.time}</text>
            <circle cx="58" cy={blockY + 5} r="3" fill={dot} />
            <rect x="64" y={blockY} width="116" height={b.h} rx="5" fill={b.color} stroke={b.borderColor} strokeWidth="0.7" />
            <text x="71" y={blockY + b.h / 2 + 4} fontFamily="system-ui,sans-serif" fontSize="6.5" fontWeight={b.type === 'prayer' ? '700' : '400'} fill={textColor}>
              {b.label}
            </text>
            {b.current && <circle cx="172" cy={blockY + 8} r="3.5" fill="#10B981" />}
          </g>
        )
      })}
    </svg>
  )
}

function MockupAnalytics() {
  const bars = [
    { d: 'Пн', n: 5, h: 42 },
    { d: 'Вт', n: 5, h: 42 },
    { d: 'Ср', n: 3, h: 25 },
    { d: 'Чт', n: 5, h: 42 },
    { d: 'Пт', n: 5, h: 42 },
    { d: 'Сб', n: 4, h: 33 },
    { d: 'Вс', n: 2, h: 17 },
  ]
  const BAR_W = 14
  const startX = 42
  const gapX = 18
  return (
    <svg viewBox="0 0 220 200" width="100%" height="100%" preserveAspectRatio="xMidYMin slice" aria-hidden="true">
      <defs>
        <radialGradient id="rg-an" cx="50%" cy="0%" r="85%">
          <stop offset="0%" stopColor="#0A1A20" /><stop offset="100%" stopColor="#060C08" />
        </radialGradient>
        <linearGradient id="bar-e" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34D399" /><stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <rect width="220" height="200" fill="url(#rg-an)" />
      <circle cx="190" cy="190" r="55" fill="none" stroke="#10B981" strokeWidth="0.5" opacity="0.1" />

      {/* Phone */}
      <rect x="30" y="5" width="160" height="190" rx="20" fill="#0A0F0D" />
      <rect x="30" y="5" width="160" height="190" rx="20" fill="none" stroke="#34D399" strokeWidth="1.2" opacity="0.45" />
      <rect x="85" y="11" width="60" height="10" rx="5" fill="#040A08" />

      {/* Header */}
      <rect x="30" y="25" width="160" height="30" fill="#060C08" />
      <text x="40" y="36" fontFamily="system-ui,sans-serif" fontSize="6" fill="rgba(255,255,255,0.35)">Эта неделя</text>
      <text x="40" y="49" fontFamily="system-ui,sans-serif" fontSize="9.5" fontWeight="700" fill="white">Аналитика</text>

      {/* Streak card */}
      <rect x="38" y="59" width="144" height="30" rx="8" fill="rgba(245,158,11,0.1)" stroke="rgba(245,158,11,0.3)" strokeWidth="0.8" />
      <text x="46" y="70" fontFamily="system-ui,sans-serif" fontSize="6" fill="rgba(255,255,255,0.38)">Серия намазов</text>
      <text x="46" y="82" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="900" fill="#F59E0B">🔥 12 дней</text>
      <rect x="142" y="63" width="32" height="16" rx="4" fill="rgba(16,185,129,0.15)" />
      <text x="158" y="74" fontFamily="system-ui,sans-serif" fontSize="6.5" fontWeight="700" fill="#10B981" textAnchor="middle">+2 сегодня</text>

      {/* Stats row */}
      <rect x="30" y="93" width="160" height="24" fill="#0D1A12" />
      {[
        { v: '87%', l: 'намазов', x: 55, c: '#10B981' },
        { v: '24',  l: 'задачи',  x: 110, c: '#34D399' },
        { v: '4.9', l: 'рейтинг', x: 165, c: '#F59E0B' },
      ].map((s, i) => (
        <g key={i}>
          <text x={s.x} y={103} fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="800" fill={s.c} textAnchor="middle">{s.v}</text>
          <text x={s.x} y={112} fontFamily="system-ui,sans-serif" fontSize="5.5" fill="rgba(255,255,255,0.3)" textAnchor="middle">{s.l}</text>
        </g>
      ))}

      {/* Divider */}
      <line x1="38" y1="117" x2="182" y2="117" stroke="rgba(255,255,255,0.06)" strokeWidth="0.7" />

      {/* Bar chart */}
      <rect x="30" y="117" width="160" height="78" fill="#0D1A12" />
      <text x="40" y="128" fontFamily="system-ui,sans-serif" fontSize="5.5" fill="rgba(255,255,255,0.22)" letterSpacing="0.5">НАМАЗОВ / ДЕНЬ</text>

      {bars.map((b, i) => {
        const bx = startX + i * gapX
        const barTop = 168 - b.h
        const isLast = i === bars.length - 1
        return (
          <g key={i}>
            <rect x={bx} y={barTop} width={BAR_W} height={b.h} rx="3"
              fill={isLast ? '#10B981' : b.n === 5 ? 'url(#bar-e)' : 'rgba(16,185,129,0.3)'} />
            <text x={bx + BAR_W / 2} y="178" fontFamily="system-ui,sans-serif" fontSize="5.5"
              fill={isLast ? '#10B981' : 'rgba(255,255,255,0.3)'} textAnchor="middle">{b.d}</text>
          </g>
        )
      })}
    </svg>
  )
}

function MockupCoach() {
  return (
    <svg viewBox="0 0 220 200" width="100%" height="100%" preserveAspectRatio="xMidYMin slice" aria-hidden="true">
      <defs>
        <radialGradient id="rg-co" cx="40%" cy="0%" r="90%">
          <stop offset="0%" stopColor="#0A1020" /><stop offset="100%" stopColor="#060C08" />
        </radialGradient>
        <linearGradient id="user-bubble" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#10B981" /><stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <rect width="220" height="200" fill="url(#rg-co)" />
      <circle cx="195" cy="30"  r="45" fill="none" stroke="#10B981" strokeWidth="0.5" opacity="0.12" />
      <circle cx="20"  cy="175" r="38" fill="none" stroke="#F59E0B" strokeWidth="0.5" opacity="0.1" />

      {/* Phone */}
      <rect x="30" y="5" width="160" height="190" rx="20" fill="#0A0F0D" />
      <rect x="30" y="5" width="160" height="190" rx="20" fill="none" stroke="#10B981" strokeWidth="1.2" opacity="0.5" />
      <rect x="85" y="11" width="60" height="10" rx="5" fill="#040A08" />

      {/* Chat header */}
      <rect x="30" y="25" width="160" height="38" fill="#060C08" />
      <circle cx="52" cy="44" r="10" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.4)" strokeWidth="0.8" />
      <text x="52" y="48" fontFamily="system-ui,sans-serif" fontSize="9" fill="#10B981" textAnchor="middle">✦</text>
      <text x="67" y="40" fontFamily="system-ui,sans-serif" fontSize="8.5" fontWeight="700" fill="white">Waqti Коуч</text>
      <text x="67" y="52" fontFamily="system-ui,sans-serif" fontSize="6" fill="rgba(255,255,255,0.35)">Онлайн</text>
      <circle cx="82" cy="50" r="2.5" fill="#34D399" />

      {/* Messages area */}
      <rect x="30" y="67" width="160" height="128" fill="#0D1A12" />

      {/* AI msg 1 */}
      <rect x="36" y="74" width="115" height="28" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.09)" strokeWidth="0.6" />
      <text x="42" y="85" fontFamily="system-ui,sans-serif" fontSize="6" fill="rgba(255,255,255,0.45)">Waqti Коуч</text>
      <text x="42" y="95" fontFamily="system-ui,sans-serif" fontSize="6.5" fill="rgba(255,255,255,0.78)">Вижу, пропустил Аср...</text>

      {/* User msg */}
      <rect x="88" y="107" width="96" height="22" rx="5" fill="url(#user-bubble)" />
      <text x="136" y="122" fontFamily="system-ui,sans-serif" fontSize="6.5" fontWeight="600" fill="white" textAnchor="middle">Перенеси задачи!</text>

      {/* AI msg 2 */}
      <rect x="36" y="134" width="118" height="28" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.09)" strokeWidth="0.6" />
      <text x="42" y="145" fontFamily="system-ui,sans-serif" fontSize="6" fill="#10B981">Waqti Коуч</text>
      <text x="42" y="155" fontFamily="system-ui,sans-serif" fontSize="6.5" fill="rgba(255,255,255,0.78)">✓ Готово! Серия растёт 🔥</text>

      {/* Typing indicator */}
      <rect x="36" y="167" width="44" height="16" rx="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.6" />
      <circle cx="49" cy="175" r="2" fill="rgba(255,255,255,0.3)" />
      <circle cx="57" cy="175" r="2" fill="rgba(255,255,255,0.5)" />
      <circle cx="65" cy="175" r="2" fill="rgba(255,255,255,0.7)" />

      {/* Input bar */}
      <rect x="34" y="186" width="130" height="13" rx="6.5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.09)" strokeWidth="0.6" />
      <text x="42" y="196" fontFamily="system-ui,sans-serif" fontSize="5.5" fill="rgba(255,255,255,0.22)">Написать...</text>
      <circle cx="176" cy="192" r="8" fill="#10B981" />
      <path d="M172 192l5-3-5-3v2.2l3.2.8-3.2.8z" fill="#060C08" />
    </svg>
  )
}

/* ─── Card back panels (unchanged) ─── */
function PrayerBack() {
  const list = [
    { name: 'Фаджр',  time: '04:32', done: true,  active: false },
    { name: 'Зухр',   time: '12:45', done: true,  active: false },
    { name: 'Аср',    time: '16:20', done: false, active: true  },
    { name: 'Магриб', time: '19:55', done: false, active: false },
    { name: 'Иша',    time: '21:30', done: false, active: false },
  ]
  return (
    <div className="p-6 h-full flex flex-col" style={{ background: 'rgba(13,26,18,0.98)' }}>
      <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>Намазы сегодня</p>
      <div className="space-y-2.5 flex-1">
        {list.map(p => (
          <div key={p.name} className="flex items-center justify-between">
            <span className="text-sm font-medium" style={{ color: p.active ? '#10B981' : p.done ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.75)' }}>{p.name}</span>
            <div className="flex items-center gap-2">
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.28)' }}>{p.time}</span>
              {p.done && <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(16,185,129,0.2)' }}>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>}
              {p.active && <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#10B981' }} />}
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs mt-4" style={{ color: '#10B981' }}>2 из 5 · следующий через 2ч 14м</p>
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
    <div className="p-6 h-full flex flex-col" style={{ background: 'rgba(13,26,18,0.98)' }}>
      <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>ИИ-план на сегодня</p>
      <div className="space-y-3 flex-1">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <span className="text-[10px] w-9 pt-0.5 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.3)' }}>{item.time}</span>
            <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: item.type === 'prayer' ? '#10B981' : '#F59E0B' }} />
            <span className="text-xs leading-relaxed" style={{ color: item.type === 'prayer' ? '#10B981' : 'rgba(255,255,255,0.75)' }}>{item.text}</span>
          </div>
        ))}
      </div>
      <p className="text-[10px] mt-3" style={{ color: 'rgba(255,255,255,0.3)' }}>ИИ оптимизировал день вокруг намазов</p>
    </div>
  )
}

function AnalyticsBack() {
  const days = [5, 5, 3, 5, 5, 4, 2]
  return (
    <div className="p-6 h-full flex flex-col" style={{ background: 'rgba(13,26,18,0.98)' }}>
      <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>Твои результаты</p>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {[
          { value: '🔥 12', label: 'дней серия', color: '#F59E0B' },
          { value: '87%',   label: 'намазов',    color: '#10B981' },
          { value: '24',    label: 'задачи',     color: '#34D399' },
          { value: 'Пт',    label: 'лучший день',color: '#FCD34D' },
        ].map((s, i) => (
          <div key={i} className="rounded-xl p-2.5 text-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <div className="text-base font-black" style={{ color: s.color }}>{s.value}</div>
            <div className="text-[9px] mt-0.5" style={{ color: 'rgba(255,255,255,0.38)' }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1.5 h-12 mt-auto">
        {days.map((n, i) => (
          <div key={i} className="flex-1 rounded-t" style={{ height: `${(n / 5) * 100}%`, background: i === 6 ? '#10B981' : n === 5 ? 'rgba(16,185,129,0.45)' : 'rgba(255,255,255,0.1)' }} />
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
    <div className="p-6 h-full flex flex-col" style={{ background: 'rgba(13,26,18,0.98)' }}>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs" style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}>✦</div>
        <span className="text-xs font-bold" style={{ color: '#10B981' }}>Waqti ИИ-коуч</span>
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 ml-auto" />
      </div>
      <div className="space-y-2.5 flex-1">
        {msgs.map((m, i) => (
          <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            <span className="text-xs px-3 py-2 max-w-[85%] leading-relaxed"
              style={m.from === 'ai'
                ? { background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.8)', borderRadius: '4px 14px 14px 14px' }
                : { background: 'linear-gradient(135deg,#10B981,#059669)', color: 'white', borderRadius: '14px 4px 14px 14px', fontWeight: 500 }
              }>{m.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Feature card data ─── */
const features = [
  { icon: 'prayer', Mockup: MockupPrayer, Back: PrayerBack,   isGold: false,
    title: 'Намаз в центре дня',
    desc:  'Расписание 5 намазов интегрировано в твой планнер. День строится вокруг намазов.',
    tag:   'Геолокация · Точность до секунды' },
  { icon: 'ai',     Mockup: MockupPlanner, Back: PlannerBack,  isGold: true,
    title: 'ИИ-планировщик',
    desc:  'Умный алгоритм расставляет задачи между намазами так, чтобы ты успевал всё.',
    tag:   'GPT-4 · Персонализация' },
  { icon: 'chart',  Mockup: MockupAnalytics, Back: AnalyticsBack, isGold: false,
    title: 'Глубокая аналитика',
    desc:  'Серии намазов, прогресс задач, продуктивность по дням — всё в одном дашборде.',
    tag:   'Дашборд · Недельный отчёт' },
  { icon: 'coach',  Mockup: MockupCoach,    Back: CoachBack,   isGold: true,
    title: 'ИИ-коуч',
    desc:  'Персональный помощник, который понимает твой ритм жизни и помогает расти.',
    tag:   'AI · Поддержка 24/7' },
]

/* ─── Card component ─── */
function FeatureCard({ feature, delay }) {
  const [ref, inView] = useInView(0.08)
  const { icon, Mockup, Back, isGold, title, desc, tag } = feature

  const CARD_STYLE = {
    background: 'var(--card-bg)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: `1.5px solid ${isGold ? 'rgba(245,158,11,0.15)' : 'rgba(16,185,129,0.15)'}`,
    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
  }
  const BACK_STYLE = {
    background: 'rgba(13,26,18,0.98)',
    border: `1.5px solid ${isGold ? 'rgba(245,158,11,0.2)' : 'rgba(16,185,129,0.2)'}`,
  }

  return (
    <div ref={ref} className={`fade-in-section delay-${delay} ${inView ? 'visible' : ''}`}>
      <div className="flip-card rounded-3xl" style={{ height: 380 }}>
        <div className="flip-card-inner rounded-3xl">

          {/* ── FRONT ── */}
          <div className="flip-card-front rounded-3xl flex flex-col overflow-hidden" style={CARD_STYLE}>
            {/* Phone mockup illustration */}
            <div style={{ height: 172, flexShrink: 0, overflow: 'hidden', position: 'relative' }}>
              <Mockup />
            </div>

            {/* Text content */}
            <div className="flex flex-col flex-1 px-5 py-4">
              {/* Icon badge + title */}
              <div className="flex items-center gap-2.5 mb-2.5">
                <div
                  className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                  style={{
                    background: isGold ? 'rgba(245,158,11,0.12)' : 'var(--icon-bg)',
                    border: `1.5px solid ${isGold ? 'rgba(245,158,11,0.35)' : 'var(--icon-border)'}`,
                    boxShadow: isGold ? '0 0 14px rgba(245,158,11,0.18)' : '0 0 14px var(--icon-glow)',
                    clipPath: 'polygon(30% 0%,70% 0%,100% 30%,100% 70%,70% 100%,30% 100%,0% 70%,0% 30%)',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d={ICONS[icon]} stroke={isGold ? '#F59E0B' : '#10B981'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold leading-tight" style={{ color: 'var(--text-h)' }}>{title}</h3>
              </div>

              <p className="text-xs leading-relaxed flex-1" style={{ color: 'var(--text-muted)' }}>{desc}</p>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                  style={isGold
                    ? { background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)', color: '#D97706' }
                    : { background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', color: '#059669' }
                  }>{tag}</span>
                <span className="text-[10px]" style={{ color: 'var(--text-xmuted)' }}>Наведи →</span>
              </div>
            </div>
          </div>

          {/* ── BACK ── */}
          <div className="flip-card-back rounded-3xl flex flex-col" style={BACK_STYLE}>
            <Back />
          </div>

        </div>
      </div>
    </div>
  )
}

/* ─── Section ─── */
export default function Features() {
  const [ref, inView] = useInView()

  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden" style={{ background: 'var(--bg-s1)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(16,185,129,0.04) 0%, transparent 65%)' }}
        aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={`text-center mb-16 fade-in-section ${inView ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold mb-5"
            style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', color: '#10B981' }}>
            <svg width="10" height="10" viewBox="0 0 12 12" fill="#10B981" aria-hidden="true">
              <path d="M6 0l1.5 4.5H12L8.25 7.2l1.5 4.5L6 9 2.25 11.7l1.5-4.5L0 4.5h4.5z" />
            </svg>
            Возможности
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 leading-tight" style={{ color: 'var(--text-h)' }}>
            Всё что нужно для{' '}
            <span className="text-gradient">осознанного дня</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Наведи на карточку, чтобы увидеть Waqti в действии.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.icon} feature={f} delay={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
