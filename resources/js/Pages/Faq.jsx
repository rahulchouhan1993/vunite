import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import MainLayout from '../Layout/MainLayout'
import CTABanner from '../components/home/CTABanner'

function AccordionItem({ index, isOpen, onToggle, question, answer }) {
  const contentRef = useRef(null)
  const [maxHeight, setMaxHeight] = useState(0)
  const contentId = `faq-content-${index}`

  useLayoutEffect(() => {
    if (!isOpen) {
      setMaxHeight(0)
      return
    }
    const el = contentRef.current
    if (!el) return
    setMaxHeight(el.scrollHeight)

    const handleResize = () => setMaxHeight(el.scrollHeight)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  return (
    <div className="fading bg-[#F3F4F6] rounded-2xl mb-6">
      <button
        type="button"
        className="w-full flex items-start justify-between gap-4 px-6 py-4 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
          <div className="text-gray-800 font-semibold text-[15px] lg:text-[16px] leading-relaxed">Q{index + 1}. {question}</div>
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>

      <div
        id={contentId}
        className="overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out"
        style={{ maxHeight, opacity: isOpen ? 1 : 0 }}
      >
        <div ref={contentRef} className="px-6 pb-6 text-[13px] lg:text-[14px] leading-relaxed text-gray-500">
          {answer}
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  const faqs = useMemo(
    () => [
      {
        q: 'Do you have 24/7 care support in your accommodation?',
        a: 'At V Unite all of our Supported Independent Living (SIL) and Specialist Disability Accommodation (SDA) have 24/7 care with onsite nursing and supervision.',
      },
      {
        q: 'Do you have accommodation close to the city?',
        a: 'We offer a range of accommodation options. Contact us with your preferred location and accessibility needs, and we’ll share current availability and suitable options.',
      },
      {
        q: 'Do you charge mileage?',
        a: 'If mileage applies, we’ll always discuss it upfront and keep it transparent. Any travel-related charges are in line with NDIS pricing arrangements and your plan needs.',
      },
      {
        q: 'Can I get the same support worker/nurse all the time?',
        a: 'We prioritise consistency wherever possible. We’ll match you with a suitable team and aim for continuity based on your schedule, goals, and care requirements.',
      },
      {
        q: 'How soon can I start my services?',
        a: 'Start times depend on your needs, location, and the type of supports required. Once we receive your referral, we’ll confirm timelines quickly and work to begin supports without unnecessary delays.',
      },
    ],
    []
  )

  const [openIndex, setOpenIndex] = useState(0)

  return (
    <MainLayout>
      <div className="min-h-screen">
        <section className="container m-auto px-5 lg:px-0 pt-16 pb-10">
          <div className="text-center">
            <h1 className="text-main text-[36px] lg:text-[42px] font-bold">FAQs</h1>
            <p className="mt-2 text-gray-500 text-[14px] lg:text-[15px]">Have questions about our NDIS disability services?</p>
          </div>

          <div className="max-w-[900px] m-auto mt-10 space-y-4">
            {faqs.map((item, idx) => (
              <AccordionItem
                key={item.q}
                index={idx}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                question={item.q}
                answer={item.a}
              />
            ))}
          </div>
        </section>

        <CTABanner />
      </div>
    </MainLayout>
  )
}
