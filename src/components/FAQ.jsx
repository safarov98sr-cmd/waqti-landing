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
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none"
    style={{ flexShrink: 0, transition: 'transform 0.3s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
    aria-hidden="true">
    <path d="M5.5 8.5l5.5 5.5 5.5-5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        border: `1px solid ${isOpen ? 'rgba(16,185,129,0.35)' : 'rgba(255,255,255,0.07)'}`,
        boxShadow: isOpen ? '0 4px 24px rgba(0,0,0,0.25)' : 'none',
        transition: 'border-color 0.25s, box-shadow 0.25s',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer transition-colors duration-200"
        style={{ background: isOpen ? 'rgba(16,185,129,0.04)' : 'rgba(255,255,255,0.02)' }}
        aria-expanded={isOpen}
      >
        <span className="font-bold text-base"
          style={{ color: isOpen ? '#10B981' : 'rgba(248,250,252,0.88)' }}>
          {faq.question}
        </span>
        <span style={{ color: isOpen ? '#10B981' : 'rgba(255,255,255,0.35)', flexShrink: 0 }}>
          <ChevronIcon open={isOpen} />
        </span>
      </button>

      <div className="overflow-hidden"
        style={{ maxHeight: isOpen ? '360px' : '0', transition: 'max-height 0.35s cubic-bezier(0.22,1,0.36,1)' }}>
        <div className="px-6 pb-6" style={{ background: 'rgba(255,255,255,0.015)' }}>
          <div className="w-full h-px mb-4" style={{ background: 'rgba(16,185,129,0.15)' }} />
          <p className="leading-relaxed" style={{ color: 'rgba(248,250,252,0.6)' }}>
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const [ref, inView] = useInView()
  const [listRef, listInView] = useInView(0.05)

  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden" style={{ background: '#111F16' }}>
      <div className="absolute top-0 right-0 w-[400px] h-[250px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 100% 0%, rgba(16,185,129,0.05) 0%, transparent 65%)' }}
        aria-hidden="true" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={`text-center mb-14 fade-in-section ${inView ? 'visible' : ''}`}>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold mb-5"
            style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', color: '#10B981' }}
          >
            <svg width="10" height="10" viewBox="0 0 12 12" fill="#10B981" aria-hidden="true">
              <path d="M6 0l1.5 4.5H12L8.25 7.2l1.5 4.5L6 9 2.25 11.7l1.5-4.5L0 4.5h4.5z" />
            </svg>
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Часто задаваемые{' '}
            <span className="text-gradient">вопросы</span>
          </h2>
          <p className="text-lg" style={{ color: 'rgba(248,250,252,0.5)' }}>
            Не нашёл ответ? Напиши нам —{' '}
            <a href="mailto:support@waqtiai.app"
              className="hover:underline font-medium cursor-pointer"
              style={{ color: '#10B981' }}>
              support@waqtiai.app
            </a>
          </p>
        </div>

        <div ref={listRef} className={`space-y-3 fade-in-section ${listInView ? 'visible' : ''}`}>
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
