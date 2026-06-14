import { starPolygon, regPolygon } from '../utils/svgHelpers'
import ParticleCanvas from './ParticleCanvas'
import { useInView } from '../hooks/useInView'
import { useTheme } from '../ThemeContext'

const prayers = [
  { name: 'Фаджр',  time: '04:32', done: true,  active: false, icon: '🌙' },
  { name: 'Зухр',   time: '12:45', done: true,  active: false, icon: '☀️' },
  { name: 'Аср',    time: '16:20', done: false, active: true,  icon: '🌤️' },
  { name: 'Магриб', time: '19:55', done: false, active: false, icon: '🌅' },
  { name: 'Иша',    time: '21:30', done: false, active: false, icon: '⭐' },
]

const sp = (cx, cy) => starPolygon(cx, cy, 18, 7.5)

function Rosette() {
  const cx = 200, cy = 200, R = 200
  const rings = [
    { r1: R * 0.47, r2: R * 0.20 },
    { r1: R * 0.38, r2: R * 0.16 },
    { r1: R * 0.29, r2: R * 0.12 },
    { r1: R * 0.20, r2: R * 0.085 },
    { r1: R * 0.12, r2: R * 0.05 },
  ]
  const octagons = [R * 0.42, R * 0.33, R * 0.24, R * 0.14]
  return (
    <svg viewBox="0 0 400 400" className="animate-spin-slow" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
      {[R * 0.96, R * 0.88, R * 0.72, R * 0.56, R * 0.40].map((r, i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="none"
          stroke="#10B981" strokeWidth="0.5"
          style={{ opacity: 0.12 - i * 0.015 }} />
      ))}
      {rings.map(({ r1, r2 }, i) => (
        <polygon key={i} points={starPolygon(cx, cy, r1, r2, 8)} fill="none"
          stroke="#10B981" strokeWidth="0.6"
          style={{ opacity: 0.45 - i * 0.06 }} />
      ))}
      {octagons.map((r, i) => (
        <polygon key={i} points={regPolygon(cx, cy, r, 8, 22.5)} fill="none"
          stroke="#10B981" strokeWidth="0.5"
          style={{ opacity: 0.28 - i * 0.04 }} />
      ))}
      {Array.from({ length: 16 }).map((_, i) => {
        const a = (i * Math.PI) / 8
        return (
          <line key={i} x1={cx} y1={cy}
            x2={+(cx + R * 0.92 * Math.cos(a)).toFixed(2)}
            y2={+(cy + R * 0.92 * Math.sin(a)).toFixed(2)}
            stroke="#F59E0B" strokeWidth="0.4" opacity={0.35}
          />
        )
      })}
    </svg>
  )
}

export default function Hero() {
  const [ref, inView] = useInView()
  const { dark } = useTheme()

  const secondaryBtnStyle = dark
    ? { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(16,185,129,0.22)', color: 'rgba(248,250,252,0.85)', backdropFilter: 'blur(12px)' }
    : { background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.3)', color: '#064E3B' }

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24 pb-16"
      style={{ background: 'var(--hero-bg)' }}
    >
      <ParticleCanvas count={dark ? 100 : 60} />

      {/* Islamic tile pattern */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        <defs>
          <pattern id="hero-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <polygon points={sp(40, 40)} fill="var(--pattern-fill)" />
            <polygon points={sp(0,  0)}  fill="var(--pattern-fill)" />
            <polygon points={sp(80, 0)}  fill="var(--pattern-fill)" />
            <polygon points={sp(0,  80)} fill="var(--pattern-fill)" />
            <polygon points={sp(80, 80)} fill="var(--pattern-fill)" />
            <line x1="40" y1="0"  x2="40" y2="80" stroke="#10B981" strokeWidth="0.4" style={{ opacity: dark ? 0.07 : 0.05 }} />
            <line x1="0"  y1="40" x2="80" y2="40" stroke="#10B981" strokeWidth="0.4" style={{ opacity: dark ? 0.07 : 0.05 }} />
            <line x1="0"  y1="0"  x2="80" y2="80" stroke="#F59E0B" strokeWidth="0.35" style={{ opacity: dark ? 0.05 : 0.04 }} />
            <line x1="80" y1="0"  x2="0"  y2="80" stroke="#F59E0B" strokeWidth="0.35" style={{ opacity: dark ? 0.05 : 0.04 }} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-pattern)" />
      </svg>

      {/* Radial glows */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 100% 50%, rgba(16,185,129,0.07) 0%, transparent 65%)' }}
        aria-hidden="true" />
      <div className="absolute left-1/4 bottom-0 w-[400px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(245,158,11,0.04) 0%, transparent 60%)' }}
        aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Copy ── */}
          <div ref={ref} className={`fade-in-section ${inView ? 'visible' : ''}`}>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold mb-7"
              style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.22)', color: '#10B981' }}
            >
              <svg width="10" height="10" viewBox="0 0 12 12" fill="#10B981" aria-hidden="true">
                <path d="M6 0l1.5 4.5H12L8.25 7.2l1.5 4.5L6 9 2.25 11.7l1.5-4.5L0 4.5h4.5z" />
              </svg>
              2.4к+ мусульман уже используют Waqti
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] mb-6" style={{ color: 'var(--text-h)' }}>
              Управляй временем{' '}
              <span className="text-gradient">вокруг намазов</span>
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed mb-8 max-w-lg" style={{ color: 'var(--text-muted)' }}>
              ИИ-планировщик, который строит твой день вокруг 5 намазов.
              Больше успевай — с намерением и осознанностью.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-10">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2.5 font-bold px-7 py-4 rounded-2xl cursor-pointer btn-pulse"
                style={{
                  background: 'linear-gradient(135deg, #10B981, #059669)',
                  color: '#F8FAFC',
                  boxShadow: '0 4px 24px rgba(16,185,129,0.45)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 36px rgba(16,185,129,0.6)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = '0 4px 24px rgba(16,185,129,0.45)'
                }}
              >
                Скачать бесплатно
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#app-preview"
                className="inline-flex items-center gap-2.5 font-semibold px-7 py-4 rounded-2xl cursor-pointer transition-all duration-200"
                style={secondaryBtnStyle}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(16,185,129,0.45)'
                  e.currentTarget.style.color = '#10B981'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = secondaryBtnStyle.border.replace('1px solid ', '')
                  e.currentTarget.style.color = secondaryBtnStyle.color
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
                </svg>
                Посмотреть демо
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {[
                { value: '12к+', label: 'загрузок' },
                { value: '4.9★', label: 'App Store' },
                { value: '98%', label: 'довольны' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="font-black text-sm" style={{ color: '#F59E0B' }}>{s.value}</span>
                  <span className="text-sm" style={{ color: 'var(--text-xmuted)' }}>{s.label}</span>
                  {i < 2 && <span className="ml-2" style={{ color: 'var(--divider)' }}>·</span>}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Phone + Rosette ── */}
          <div className={`hidden lg:flex items-center justify-center relative fade-in-section delay-2 ${inView ? 'visible' : ''}`}>
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-[380px] h-[380px] opacity-30 pointer-events-none">
              <Rosette />
            </div>

            <div className="animate-float relative z-10">
              <div className="absolute inset-0 -m-8 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(16,185,129,0.12) 0%, transparent 70%)' }} />

              {/* Phone frame — always dark (shows app UI) */}
              <div
                className="relative rounded-[2.8rem] overflow-hidden"
                style={{
                  width: 248,
                  border: '2px solid rgba(16,185,129,0.35)',
                  boxShadow: '0 32px 80px rgba(0,0,0,0.4), 0 0 50px rgba(16,185,129,0.12)',
                  background: '#0A0F0D',
                }}
              >
                <div className="flex justify-center pt-2.5 pb-1" style={{ background: '#060C08' }}>
                  <div className="w-16 h-4 rounded-full" style={{ background: '#040A08' }} />
                </div>

                <div className="px-4 pt-3 pb-3" style={{ background: '#060C08' }}>
                  <div className="text-[10px] mb-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>Пн, 9 июня</div>
                  <div className="font-bold text-sm text-white mb-2.5">Ас-саламу алейкум</div>
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
                          color: p.active ? '#10B981' : p.done ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.8)'
                        }}>{p.name}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px]" style={{
                          color: p.active ? '#10B981' : p.done ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.4)'
                        }}>{p.time}</span>
                        {p.done && (
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <circle cx="6.5" cy="6.5" r="6.5" fill="rgba(16,185,129,0.25)" />
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
                  {[
                    'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z',
                    'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
                    'M22 12h-4l-3 9L9 3l-3 9H2',
                    'M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z',
                  ].map((d, i) => (
                    <div key={i} style={{ color: i === 0 ? '#F59E0B' : 'rgba(245,158,11,0.45)' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d={d} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div
                className="absolute -left-16 top-16 rounded-2xl px-3.5 py-2.5 shadow-xl"
                style={{
                  background: 'rgba(16,185,129,0.1)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(16,185,129,0.25)',
                  minWidth: 130,
                }}
              >
                <div className="text-[9px] mb-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>Серия намазов</div>
                <div className="text-sm font-black" style={{
                  background: 'linear-gradient(135deg, #10B981, #34D399)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  🔥 12 дней подряд
                </div>
              </div>

              <div
                className="absolute -right-14 bottom-24 rounded-2xl px-3.5 py-2.5 shadow-xl"
                style={{
                  background: 'rgba(245,158,11,0.08)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(245,158,11,0.22)',
                  minWidth: 120,
                }}
              >
                <div className="text-[9px] mb-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>Задач сегодня</div>
                <div className="text-sm font-black" style={{ color: '#F59E0B' }}>✓ 8 из 10</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float" aria-hidden="true">
        <div className="w-px h-8 rounded-full" style={{ background: 'var(--scroll-hint)' }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#10B981' }} />
      </div>
    </section>
  )
}
