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
  <svg width="18" height="18" viewBox="0 0 16 16" fill="#EF9F27">
    <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7L8 1z"/>
  </svg>
)

export default function Reviews() {
  const [ref, inView] = useInView()

  return (
    <section id="reviews" className="py-24 sm:py-32 gradient-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={ref} className={`text-center mb-16 fade-in-section ${inView ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-white text-primary rounded-full px-4 py-1.5 text-sm font-bold mb-5 shadow-sm border border-primary/10">
            ✦ Отзывы
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight">
            Что говорят{' '}
            <span className="text-primary">наши пользователи</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Реальные истории от тех, кто уже изменил свои привычки с Waqti.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} delay={index} />
          ))}
        </div>

        {/* Stats row */}
        <StatsRow />
      </div>
    </section>
  )
}

function ReviewCard({ review, delay }) {
  const [ref, inView] = useInView(0.1)
  return (
    <div
      ref={ref}
      className={`fade-in-section delay-${delay} ${inView ? 'visible' : ''}`}
    >
      <div className="bg-white rounded-3xl p-8 shadow-card border border-primary/5 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        {/* Stars */}
        <div className="flex gap-1 mb-5">
          {Array.from({ length: review.rating }).map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-gray-700 leading-relaxed mb-5 relative flex-1">
          <span className="absolute -top-3 -left-1 text-5xl text-primary/8 font-serif leading-none select-none">"</span>
          <p className="relative z-10">{review.text}</p>
        </blockquote>

        {/* Highlight pill */}
        <div className="inline-flex items-center gap-2 bg-gold/10 text-gold rounded-full px-4 py-1.5 text-xs font-bold mb-6 w-fit">
          <span>✦</span> {review.highlight}
        </div>

        {/* Author */}
        <div className="flex items-center gap-3.5 pt-5 border-t border-gray-100">
          <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-2xl flex-shrink-0">
            {review.avatar}
          </div>
          <div>
            <div className="font-bold text-gray-900">{review.name}</div>
            <div className="text-sm text-gray-400">{review.role}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatsRow() {
  const [ref, inView] = useInView(0.1)
  return (
    <div ref={ref} className={`mt-14 grid grid-cols-3 gap-4 max-w-lg mx-auto text-center fade-in-section ${inView ? 'visible' : ''}`}>
      {[
        { value: '4.9', label: 'Рейтинг в App Store' },
        { value: '2.4к+', label: 'Активных пользователей' },
        { value: '98%', label: 'Довольных намазами' },
      ].map((stat, i) => (
        <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-primary/5">
          <div className="text-2xl font-black text-primary mb-0.5">{stat.value}</div>
          <div className="text-xs text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
