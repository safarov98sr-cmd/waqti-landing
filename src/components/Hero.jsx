const prayers = [
  { name: 'Фаджр', time: '04:32', done: true, icon: '🌙' },
  { name: 'Зухр', time: '12:45', done: true, icon: '☀️' },
  { name: 'Аср', time: '16:20', done: false, active: true, icon: '🌤️' },
  { name: 'Магриб', time: '19:55', done: false, icon: '🌅' },
  { name: 'Иша', time: '21:30', done: false, icon: '⭐' },
]

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="#0F6E56"/>
    <path d="M4.5 8l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16" style={{ background: '#085041' }}>
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>
      </div>

      {/* Glow — clipped to section so no horizontal scroll */}
      <div className="absolute top-1/4 right-0 w-72 h-72 sm:w-[500px] sm:h-[500px] rounded-full opacity-10 pointer-events-none"
           style={{ background: 'radial-gradient(circle, #EF9F27 0%, transparent 70%)' }} />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-14 lg:gap-20">

          {/* ── Text ── */}
          <div className="flex-1 text-center lg:text-left w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 rounded-full px-3.5 sm:px-4 py-1.5 mb-6">
              <span className="text-gold text-sm">✦</span>
              <span className="text-white/90 text-xs sm:text-sm font-medium">ИИ-планировщик для мусульман</span>
            </div>

            {/* Headline — 36→48→64px  */}
            <h1 className="text-[2.25rem] leading-tight sm:text-5xl lg:text-7xl font-black text-white tracking-tight mb-4 sm:mb-5">
              Твоё время.
              <br />
              <span style={{ color: '#EF9F27' }}>Твоя нийя.</span>
            </h1>

            <p className="text-white/65 text-base sm:text-xl leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0">
              Waqti строит твой день вокруг пяти намазов — с умными задачами,
              аналитикой и ИИ-коучем, который понимает твои ценности.
            </p>

            {/* CTA */}
            <div className="flex flex-col xs:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#pricing"
                className="btn-pulse inline-flex items-center justify-center gap-2.5 bg-gold text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-base transition-all"
                style={{ transitionProperty: 'transform, box-shadow' }}
              >
                Начать бесплатно
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/25 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl hover:bg-white/20 transition-colors text-base"
              >
                Как это работает
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-7 sm:mt-9 flex flex-col xs:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-2.5">
                {['🧕', '🧔', '👩', '🧑'].map((em, i) => (
                  <div key={i} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center text-base sm:text-lg">
                    {em}
                  </div>
                ))}
              </div>
              <p className="text-white/70 text-sm text-center xs:text-left">
                <span className="text-white font-semibold">2 400+</span> мусульман уже с нами
              </p>
            </div>
          </div>

          {/* ── Phone mockup ── */}
          {/* Extra horizontal padding on mobile so floating badges fit (sm+) */}
          <div className="flex-shrink-0 w-full flex justify-center lg:block lg:w-auto">
            <div className="relative mx-10 sm:mx-12 lg:mx-0" style={{ width: 'min(280px, 75vw)' }}>
              {/* Frame */}
              <div className="bg-white rounded-[2.8rem] overflow-hidden border-4 border-white/20"
                   style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.45)' }}>
                {/* Status bar */}
                <div className="px-5 pt-4 pb-2 flex justify-between items-center" style={{ background: '#062e25' }}>
                  <span className="text-white/50 text-xs font-medium">9:41</span>
                  <div className="flex gap-1 items-end">
                    <div className="w-1 h-3.5 bg-white/60 rounded-sm"/>
                    <div className="w-1 h-2.5 bg-white/40 rounded-sm"/>
                    <div className="w-1 h-1.5 bg-white/25 rounded-sm"/>
                  </div>
                </div>

                {/* App header */}
                <div className="px-4 pb-4 pt-2" style={{ background: '#062e25' }}>
                  <div className="text-white/50 text-[10px] mb-0.5">Понедельник, 9 июня</div>
                  <div className="text-white font-bold text-base mb-3">Ас-саламу алейкум 👋</div>
                  <div className="rounded-2xl px-4 py-2.5 flex items-center justify-between" style={{ background: 'rgba(255,255,255,0.09)' }}>
                    <div>
                      <div className="text-white/50 text-[10px]">Следующий намаз</div>
                      <div className="font-bold text-base" style={{ color: '#EF9F27' }}>Аср · 16:20</div>
                    </div>
                    <div className="text-xl">🌤️</div>
                  </div>
                </div>

                {/* Prayer list */}
                <div className="bg-gray-50 p-3.5 space-y-1.5">
                  <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">Намазы сегодня</div>
                  {prayers.map((prayer) => (
                    <div
                      key={prayer.name}
                      className={`flex items-center justify-between rounded-xl px-3 py-2 ${
                        prayer.active
                          ? 'bg-[#E1F5EE] border border-[#0F6E56]/20 shadow-sm'
                          : 'bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{prayer.icon}</span>
                        <div>
                          <div className={`text-xs font-semibold ${prayer.active ? 'text-primary' : prayer.done ? 'text-gray-400' : 'text-gray-700'}`}>
                            {prayer.name}
                          </div>
                          {prayer.active && <div className="text-[9px] text-primary/70">Сейчас</div>}
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[11px] font-medium ${prayer.active ? 'text-primary font-bold' : prayer.done ? 'text-gray-400' : 'text-gray-500'}`}>
                          {prayer.time}
                        </span>
                        {prayer.done && <CheckIcon />}
                        {prayer.active && <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"/>}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom nav */}
                <div className="bg-white border-t border-gray-100 px-4 py-2.5 flex justify-around">
                  {['🏠', '📋', '📊', '🤖'].map((icon, i) => (
                    <button key={i} className={i === 0 ? 'opacity-100' : 'opacity-35'}>
                      <span className="text-lg">{icon}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Floating badges — hidden on xs, shown sm+ */}
              <div className="hidden sm:block absolute -right-10 top-16 bg-white rounded-2xl shadow-xl px-3.5 py-2.5 border border-primary/10">
                <div className="text-[10px] text-gray-400 font-medium">Выполнено</div>
                <div className="text-primary font-black text-lg">2 / 5</div>
              </div>

              <div className="hidden sm:block absolute -left-10 bottom-20 rounded-2xl shadow-xl px-3.5 py-2.5" style={{ background: '#EF9F27' }}>
                <div className="text-white/70 text-[10px] font-medium">Серия</div>
                <div className="text-white font-black text-base">🔥 12 дней</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 70L80 58C160 46 320 22 480 16C640 10 800 22 960 28C1120 34 1280 34 1360 28L1440 22V70H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
