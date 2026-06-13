import { starPolygon, regPolygon } from '../utils/svgHelpers'

const prayers = [
  { name: 'Фаджр',  time: '04:32', done: true,  active: false, icon: '🌙' },
  { name: 'Зухр',   time: '12:45', done: true,  active: false, icon: '☀️' },
  { name: 'Аср',    time: '16:20', done: false, active: true,  icon: '🌤️' },
  { name: 'Магриб', time: '19:55', done: false, active: false, icon: '🌅' },
  { name: 'Иша',    time: '21:30', done: false, active: false, icon: '⭐' },
]

/* ── Decorative Islamic rosette ── */
function Rosette({ size = 640 }) {
  const c = size / 2
  const G = '#EF9F27'
  const rings = [
    { r1: 0.47, r2: 0.20, op: 0.07 },
    { r1: 0.38, r2: 0.16, op: 0.07 },
    { r1: 0.29, r2: 0.12, op: 0.09 },
    { r1: 0.20, r2: 0.085,op: 0.11 },
    { r1: 0.12, r2: 0.05, op: 0.13 },
  ]
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-hidden="true">
      {/* Radial spokes */}
      {Array.from({ length: 16 }, (_, i) => {
        const a = (i * Math.PI) / 8
        return (
          <line
            key={i}
            x1={+(c + size * 0.05 * Math.cos(a)).toFixed(1)} y1={+(c + size * 0.05 * Math.sin(a)).toFixed(1)}
            x2={+(c + size * 0.47 * Math.cos(a)).toFixed(1)} y2={+(c + size * 0.47 * Math.sin(a)).toFixed(1)}
            stroke={G} strokeWidth="0.5" opacity={0.04}
          />
        )
      })}
      {/* Concentric circles */}
      {[0.47, 0.38, 0.29, 0.20, 0.12].map((r, i) => (
        <circle key={i} cx={c} cy={c} r={r * size} stroke={G} strokeWidth="0.5" opacity={0.04} />
      ))}
      {/* Octagon rings */}
      {[0.43, 0.34, 0.25, 0.17].map((r, i) => (
        <polygon key={i} points={regPolygon(c, c, r * size, 8, 22.5)} stroke={G} strokeWidth="0.6" opacity={0.05} />
      ))}
      {/* 8-pointed star rings */}
      {rings.map((ring, i) => (
        <polygon
          key={i}
          points={starPolygon(c, c, ring.r1 * size, ring.r2 * size)}
          stroke={G} strokeWidth="0.7" fill="none" opacity={ring.op}
        />
      ))}
      {/* Center point */}
      <circle cx={c} cy={c} r={size * 0.022} stroke={G} strokeWidth="1" opacity={0.18} />
    </svg>
  )
}

/* ── Phone icon for bottom nav ── */
const NavIcon = ({ d, active }) => (
  <button className="cursor-pointer" style={{ color: active ? '#EF9F27' : 'rgba(255,255,255,0.3)' }}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d={d} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
)

export default function Hero() {
  // Inline helper so the SVG pattern can use dynamic star points
  const sp = (cx, cy) => starPolygon(cx, cy, 18, 7.5)

  return (
    <section
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{ background: 'linear-gradient(140deg, #070F1A 0%, #0A1628 55%, #0D1B2A 100%)' }}
    >
      {/* ── Islamic tessellation background ── */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="hero-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              {/* Center star */}
              <polygon points={sp(40, 40)} stroke="#EF9F27" strokeWidth="0.55" fill="none" opacity="0.13" />
              {/* Corner quarter-stars — combine with adjacent tiles */}
              <polygon points={sp(0,  0)}  stroke="#EF9F27" strokeWidth="0.55" fill="none" opacity="0.13" />
              <polygon points={sp(80, 0)}  stroke="#EF9F27" strokeWidth="0.55" fill="none" opacity="0.13" />
              <polygon points={sp(0,  80)} stroke="#EF9F27" strokeWidth="0.55" fill="none" opacity="0.13" />
              <polygon points={sp(80, 80)} stroke="#EF9F27" strokeWidth="0.55" fill="none" opacity="0.13" />
              {/* Cardinal connectors */}
              <line x1="40" y1="22" x2="40" y2="0"  stroke="#EF9F27" strokeWidth="0.4" opacity="0.07" />
              <line x1="58" y1="40" x2="80" y2="40" stroke="#EF9F27" strokeWidth="0.4" opacity="0.07" />
              <line x1="40" y1="58" x2="40" y2="80" stroke="#EF9F27" strokeWidth="0.4" opacity="0.07" />
              <line x1="22" y1="40" x2="0"  y2="40" stroke="#EF9F27" strokeWidth="0.4" opacity="0.07" />
              {/* Diagonal connectors */}
              <line x1="52.7" y1="27.3" x2="80" y2="0"  stroke="#EF9F27" strokeWidth="0.35" opacity="0.05" />
              <line x1="52.7" y1="52.7" x2="80" y2="80" stroke="#EF9F27" strokeWidth="0.35" opacity="0.05" />
              <line x1="27.3" y1="52.7" x2="0"  y2="80" stroke="#EF9F27" strokeWidth="0.35" opacity="0.05" />
              <line x1="27.3" y1="27.3" x2="0"  y2="0"  stroke="#EF9F27" strokeWidth="0.35" opacity="0.05" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>

      {/* ── Large decorative rosette (right side, slow spin) ── */}
      <div
        className="absolute right-[-6%] top-1/2 -translate-y-1/2 pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="animate-spin-slow opacity-50">
          <Rosette size={680} />
        </div>
      </div>

      {/* Gold radial glow */}
      <div
        className="absolute right-1/3 top-1/3 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(239,159,39,0.07) 0%, transparent 68%)' }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-14 lg:gap-20">

          {/* Text column */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{ background: 'rgba(239,159,39,0.1)', border: '1px solid rgba(239,159,39,0.25)' }}
            >
              <svg width="11" height="11" viewBox="0 0 12 12" fill="#EF9F27" aria-hidden="true">
                <path d="M6 0l1.5 4.5H12L8.25 7.2l1.5 4.5L6 9 2.25 11.7l1.5-4.5L0 4.5h4.5z" />
              </svg>
              <span className="text-white/80 text-xs sm:text-sm font-medium">ИИ-планировщик для мусульман</span>
            </div>

            {/* Headline */}
            <h1 className="text-[2.25rem] leading-tight sm:text-5xl lg:text-[4.5rem] font-black text-white tracking-tight mb-4 sm:mb-5">
              Твоё время.
              <br />
              <span className="text-gradient">Твоя нийя.</span>
            </h1>

            <p className="text-white/55 text-base sm:text-xl leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0">
              Waqti строит твой день вокруг пяти намазов — с умными задачами,
              аналитикой и ИИ-коучем, который понимает твои ценности.
            </p>

            {/* CTAs */}
            <div className="flex flex-col xs:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#pricing"
                className="btn-pulse inline-flex items-center justify-center gap-2.5 font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-base cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #EF9F27 0%, #D4AF37 100%)',
                  color: '#07111A',
                  boxShadow: '0 8px 32px rgba(239,159,39,0.35)',
                }}
              >
                Начать бесплатно
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-base transition-colors duration-200 cursor-pointer"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(248,250,252,0.85)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}
              >
                Как это работает
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-7 sm:mt-9 flex flex-col xs:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-2.5">
                {['🧕', '🧔', '👩', '🧑'].map((em, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-base sm:text-lg"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '2px solid rgba(239,159,39,0.35)' }}
                  >
                    {em}
                  </div>
                ))}
              </div>
              <p className="text-white/50 text-sm text-center xs:text-left">
                <span className="text-white font-semibold">2 400+</span> мусульман уже с нами
              </p>
            </div>
          </div>

          {/* Phone mockup column */}
          <div className="flex-shrink-0 w-full flex justify-center lg:block lg:w-auto">
            <div className="relative mx-10 sm:mx-12 lg:mx-0 animate-float" style={{ width: 'min(280px, 75vw)' }}>

              {/* Phone frame */}
              <div
                className="rounded-[2.8rem] overflow-hidden"
                style={{
                  border: '2px solid rgba(239,159,39,0.3)',
                  boxShadow: '0 32px 80px rgba(0,0,0,0.65), 0 0 80px rgba(239,159,39,0.08)',
                  background: '#070F1A',
                }}
              >
                {/* Status bar */}
                <div className="px-5 pt-4 pb-2 flex justify-between items-center" style={{ background: '#050C15' }}>
                  <span className="text-[11px] font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>9:41</span>
                  <div className="flex gap-1 items-end">
                    {[3.5, 2.5, 1.5].map((h, i) => (
                      <div key={i} className="w-1 rounded-sm" style={{ height: h * 4, background: `rgba(255,255,255,${0.5 - i * 0.12})` }} />
                    ))}
                  </div>
                </div>

                {/* App header */}
                <div className="px-4 pb-4 pt-2" style={{ background: '#050C15' }}>
                  <div className="text-[10px] mb-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>Понедельник, 9 июня</div>
                  <div className="text-white font-bold text-base mb-3">Ас-саламу алейкум</div>
                  <div
                    className="rounded-2xl px-4 py-2.5 flex items-center justify-between"
                    style={{ background: 'rgba(239,159,39,0.1)', border: '1px solid rgba(239,159,39,0.22)' }}
                  >
                    <div>
                      <div className="text-[10px] mb-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>Следующий намаз</div>
                      <div className="font-bold text-base" style={{ color: '#EF9F27' }}>Аср · 16:20</div>
                    </div>
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(239,159,39,0.15)', border: '1px solid rgba(239,159,39,0.3)' }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="9" stroke="#EF9F27" strokeWidth="1.8" />
                        <line x1="12" y1="12" x2="12" y2="6" stroke="#EF9F27" strokeWidth="2" strokeLinecap="round" />
                        <line x1="12" y1="12" x2="17" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Prayer list */}
                <div className="p-3.5 space-y-1.5" style={{ background: '#070F1A' }}>
                  <div className="text-[9px] font-bold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.25)' }}>
                    Намазы сегодня
                  </div>
                  {prayers.map((p) => (
                    <div
                      key={p.name}
                      className="flex items-center justify-between rounded-xl px-3 py-2"
                      style={p.active ? {
                        background: 'rgba(239,159,39,0.1)',
                        border: '1px solid rgba(239,159,39,0.28)',
                      } : {
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid transparent',
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{p.icon}</span>
                        <span
                          className="text-xs font-semibold"
                          style={{ color: p.active ? '#EF9F27' : p.done ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.8)' }}
                        >
                          {p.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span
                          className="text-[11px] font-medium"
                          style={{ color: p.active ? '#EF9F27' : p.done ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.45)' }}
                        >
                          {p.time}
                        </span>
                        {p.done && (
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-label="Выполнено">
                            <circle cx="6.5" cy="6.5" r="6.5" fill="rgba(239,159,39,0.25)" />
                            <path d="M3.5 6.5l2 2 4-4" stroke="#EF9F27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                        {p.active && (
                          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#EF9F27' }} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom nav */}
                <div
                  className="flex justify-around py-2.5 px-4"
                  style={{ background: '#050C15', borderTop: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <NavIcon active d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <NavIcon d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  <NavIcon d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  <NavIcon d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                </div>
              </div>

              {/* Floating badges */}
              <div
                className="hidden sm:block absolute -right-12 top-16 rounded-2xl px-3.5 py-2.5"
                style={{
                  background: 'rgba(7,15,26,0.9)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(239,159,39,0.22)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                }}
              >
                <div className="text-[10px] font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>Выполнено</div>
                <div className="font-black text-lg" style={{ color: '#EF9F27' }}>2 / 5</div>
              </div>

              <div
                className="hidden sm:block absolute -left-12 bottom-20 rounded-2xl px-3.5 py-2.5"
                style={{
                  background: 'linear-gradient(135deg, #EF9F27 0%, #D4AF37 100%)',
                  boxShadow: '0 8px 32px rgba(239,159,39,0.4)',
                }}
              >
                <div className="text-[10px] font-medium" style={{ color: 'rgba(7,15,26,0.6)' }}>Серия</div>
                <div className="font-black text-base" style={{ color: '#07111A' }}>🔥 12 дней</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom gradient fade-out */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #070F1A)' }}
        aria-hidden="true"
      />
    </section>
  )
}
