'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'How long does a typical interior design project take?',
    answer: 'Project timelines vary based on scope. A single room redesign typically takes 4–8 weeks, while full-home projects range from 3–6 months. We provide a detailed timeline during the initial consultation.',
  },
  {
    question: 'What is included in your design services?',
    answer: 'Our full-service package includes initial consultation, concept development, space planning, 3D visualizations, material and furniture sourcing, contractor coordination, and final styling & handover.',
  },
  {
    question: 'Do you work with a specific budget range?',
    answer: 'We work across a range of budgets and tailor our recommendations accordingly. During consultation, we discuss your budget openly to ensure we deliver maximum value without compromise on quality.',
  },
  {
    question: 'Can you work on commercial and office spaces?',
    answer: 'Absolutely. We have extensive experience in commercial design including offices, retail spaces, restaurants, hotels, and co-working environments across the NCR region.',
  },
  {
    question: 'Do you offer 3D visualization before execution?',
    answer: 'Yes. We provide photorealistic 3D renders and walkthroughs so you can visualize the final result before any work begins. This ensures complete alignment and eliminates surprises.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply reach out via our contact form or call us directly. We schedule a free 30-minute discovery call to understand your project and determine if we are the right fit for each other.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-16 md:py-24" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-10 md:mb-16">
          <p className="text-accent tracking-[0.3em] text-xs sm:text-sm font-medium uppercase mb-3">Questions</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">Frequently Asked</h2>
          <div className="w-16 sm:w-20 h-0.5 bg-accent mx-auto" />
        </motion.div>
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.08 }}
              className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
            >
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
              >
                <span className="font-semibold text-sm sm:text-base md:text-lg pr-3">{faq.question}</span>
                <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-white dark:bg-gray-800"
                  >
                    <p className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-600 dark:text-gray-400 leading-relaxed text-xs sm:text-sm border-t border-gray-100 dark:border-gray-700 pt-3 sm:pt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
