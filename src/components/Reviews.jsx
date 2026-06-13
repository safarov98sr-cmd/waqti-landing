import { useInView } from '../hooks/useInView'

const reviews = [
  {
    avatar: '🧕',
    name: 'Амина Р.',
    role: 'Преподаватель, Казань',
    rating: 5,
    text: 'Наконец-то нашла приложение, где намаз — это не «помеха» задачам, а центр расписания. Waqti переосмыслил мой день. Теперь я успеваю больше и чувствую себя более осознанной.',
    highlight: 'Теперь я успеваю больше',
  },
  {
    avatar: '🧔',
    name: 'Тимур А.',
    role: 'Предприниматель, Москва',
    rating: 5,
    text: 'ИИ-коуч — это просто маша Аллах. Он понимает, что после Фаджра я продуктивнее всего, и сам ставит важные задачи на утро. За месяц использования серия намазов — 28 дней подряд!',
    highlight: '28 дней подряд',
  },
]

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="#F59E0B" aria-hidden="true">
    <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7L8 1z" />
  </svg>
)

function ReviewCard({ review, delay }) {
  const [ref, inView] = useInView(0.1)
  return (
    <div ref={ref} className={`fade-in-section delay-${delay} ${inView ? 'visible' : ''}`}>
      <div
        className="rounded-3xl p-8 h-full flex flex-col"
        style={{
          background: 'var(--card-bg)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1.5px solid var(--card-border)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-4px)'
          e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.12), 0 0 24px rgba(16,185,129,0.06)'
          e.currentTarget.style.borderColor = 'rgba(16,185,129,0.3)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = ''
          e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)'
          e.currentTarget.style.borderColor = 'var(--card-border)'
        }}
      >
        <div className="flex gap-1 mb-5" aria-label={`${review.rating} звёзд`}>
          {Array.from({ length: review.rating }).map((_, i) => <StarIcon key={i} />)}
        </div>

        <blockquote className="relative flex-1 mb-5">
          <svg width="36" height="28" viewBox="0 0 36 28" fill="none"
            className="absolute -top-2 -left-1" aria-hidden="true">
            <path
              d="M9 28C4 28 0 24 0 19V9C0 4 4 0 9 0h4v9H9c-1.1 0-2 .9-2 2v1h6v16H9zm18 0c-5 0-9-4-9-9V9c0-5 4-9 9-9h4v9h-4c-1.1 0-2 .9-2 2v1h6v16h-4z"
              fill="#10B981" opacity="0.14" />
          </svg>
          <p className="relative z-10 leading-relaxed pl-2" style={{ color: 'var(--text-body)' }}>
            {review.text}
          </p>
        </blockquote>

        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold mb-6 w-fit"
          style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.22)', color: '#059669' }}
        >
          <svg width="8" height="8" viewBox="0 0 12 12" fill="#10B981" aria-hidden="true">
            <path d="M6 0l1.5 4.5H12L8.25 7.2l1.5 4.5L6 9 2.25 11.7l1.5-4.5L0 4.5h4.5z" />
          </svg>
          {review.highlight}
        </div>

        <div className="flex items-center gap-3.5 pt-5" style={{ borderTop: '1px solid var(--divider)' }}>
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: 'rgba(16,185,129,0.08)', border: '1.5px solid rgba(16,185,129,0.25)' }}
          >
            {review.avatar}
          </div>
          <div>
            <div className="font-bold" style={{ color: 'var(--text-h)' }}>{review.name}</div>
            <div className="text-sm" style={{ color: 'var(--text-xmuted)' }}>{review.role}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatsRow() {
  const [ref, inView] = useInView(0.1)
  return (
    <div ref={ref}
      className={`mt-14 grid grid-cols-3 gap-4 max-w-lg mx-auto text-center fade-in-section ${inView ? 'visible' : ''}`}
    >
      {[
        { value: '4.9', label: 'Рейтинг в App Store' },
        { value: '2.4к+', label: 'Активных пользователей' },
        { value: '98%', label: 'Довольных намазами' },
      ].map((stat, i) => (
        <div key={i} className="rounded-2xl p-5"
          style={{ background: 'var(--card-bg)', border: '1.5px solid var(--card-border)' }}>
          <div className="text-2xl font-black mb-0.5" style={{ color: '#F59E0B' }}>{stat.value}</div>
          <div className="text-xs" style={{ color: 'var(--text-xmuted)' }}>{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

export default function Reviews() {
  const [ref, inView] = useInView()

  return (
    <section id="reviews" className="relative py-24 sm:py-32 overflow-hidden" style={{ background: 'var(--bg-s1)' }}>
      <div className="absolute bottom-0 left-0 w-[400px] h-[250px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(16,185,129,0.04) 0%, transparent 65%)' }}
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
            Отзывы
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 leading-tight" style={{ color: 'var(--text-h)' }}>
            Что говорят{' '}
            <span className="text-gradient">наши пользователи</span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
            Реальные истории от тех, кто уже изменил свои привычки с Waqti.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} delay={index} />
          ))}
        </div>

        <StatsRow />
      </div>
    </section>
  )
}
