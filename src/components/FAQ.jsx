import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const faqs = [
  {
    question: 'Как Waqti определяет время намазов?',
    answer: 'Мы используем геолокацию устройства и метод расчёта ISNA (или МУМ — по выбору), сертифицированный ведущими исламскими учёными. Время обновляется автоматически при изменении местоположения.',
  },
  {
    question: 'Работает ли приложение без интернета?',
    answer: 'Да. После первоначальной настройки расписание намазов, компас киблы и задачи работают офлайн. Для ИИ-коуча и синхронизации требуется соединение.',
  },
  {
    question: 'Что входит в бесплатный тариф?',
    answer: 'Бесплатная версия включает: точное расписание 5 намазов, компас киблы, до 5 задач в день и базовую недельную статистику. Этого достаточно, чтобы почувствовать разницу.',
  },
  {
    question: 'Можно ли отменить Премиум подписку?',
    answer: 'Конечно. Отмена — в один клик через настройки приложения или магазина. Доступ сохраняется до конца оплаченного периода. Без скрытых условий.',
  },
  {
    question: 'Waqti подходит для разных мазхабов?',
    answer: 'Да, приложение поддерживает настройки для ханафитского, шафиитского, маликитского и ханбалитского мазхабов. В том числе разные методы расчёта времени Аср и рассвета.',
  },
  {
    question: 'На каких устройствах доступно приложение?',
    answer: 'Waqti доступен для iOS (iPhone и iPad) и Android. Веб-версия находится в разработке и выйдет в Q3 2026.',
  },
]

const ChevronIcon = ({ open }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    className={`flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
  >
    <path d="M5.5 8.5l5.5 5.5 5.5-5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function FAQItem({ faq, isOpen, onToggle, index, totalVisible }) {
  const delay = index < 3 ? index : 0
  return (
    <div
      className={`border-2 rounded-2xl overflow-hidden transition-all duration-250 ${
        isOpen
          ? 'border-primary/25 shadow-sm'
          : 'border-gray-200 hover:border-primary/20'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-primary-light/30 transition-colors"
      >
        <span className={`font-bold text-base ${isOpen ? 'text-primary' : 'text-gray-800'}`}>
          {faq.question}
        </span>
        <span className={`transition-colors ${isOpen ? 'text-primary' : 'text-gray-400'}`}>
          <ChevronIcon open={isOpen} />
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '320px' : '0' }}
      >
        <div className="px-6 pb-6 bg-white">
          <div className="w-full h-px bg-primary-light mb-4" />
          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const [ref, inView] = useInView()

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={ref} className={`text-center mb-14 fade-in-section ${inView ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-primary-light text-primary rounded-full px-4 py-1.5 text-sm font-bold mb-5">
            ✦ FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight">
            Часто задаваемые <span className="text-primary">вопросы</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Не нашёл ответ? Напиши нам —{' '}
            <a href="mailto:support@waqtiai.app" className="text-primary hover:underline font-medium">
              support@waqtiai.app
            </a>
          </p>
        </div>

        {/* Accordion */}
        <FAQList openIndex={openIndex} setOpenIndex={setOpenIndex} />
      </div>
    </section>
  )
}

function FAQList({ openIndex, setOpenIndex }) {
  const [ref, inView] = useInView(0.05)
  return (
    <div ref={ref} className={`space-y-3 fade-in-section ${inView ? 'visible' : ''}`}>
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          faq={faq}
          index={index}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  )
}
