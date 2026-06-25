'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { MessageSquare, Pencil, FileText, Hammer, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Discovery Call',
    description: 'A free 30-minute consultation to understand your vision, requirements, lifestyle, and investment level.',
    duration: '1 day',
  },
  {
    icon: Pencil,
    step: '02',
    title: 'Concept Design',
    description: 'Mood boards, space planning sketches, and initial concept presentation to align on direction.',
    duration: '1–2 weeks',
  },
  {
    icon: FileText,
    step: '03',
    title: 'Design Development',
    description: 'Detailed 3D renders, material selections, furniture specifications, and full project documentation.',
    duration: '2–4 weeks',
  },
  {
    icon: Hammer,
    step: '04',
    title: 'Execution',
    description: 'Project management, contractor coordination, quality control, and vendor deliveries — handled end to end.',
    duration: '4–12 weeks',
  },
  {
    icon: CheckCircle,
    step: '05',
    title: 'Final Reveal',
    description: 'Final walk-through, professional styling, photography, and official handover of your dream space.',
    duration: '1–2 days',
  },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="process" className="py-16 md:py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-10 md:mb-16">
          <p className="text-accent tracking-[0.3em] text-xs sm:text-sm font-medium uppercase mb-3">How I Work</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">Design Process</h2>
          <div className="w-16 sm:w-20 h-0.5 bg-accent mx-auto mb-4 sm:mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            A streamlined, transparent process from initial conversation to final reveal
          </p>
        </motion.div>

        {/* Mobile: vertical stacked list — Desktop: alternating timeline */}
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
          <div className="space-y-5 sm:space-y-6 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:mb-10`}
              >
                {/* Card */}
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                    <div className="flex items-start gap-3 sm:gap-5">
                      <div className="w-11 h-11 sm:w-14 sm:h-14 bg-accent/10 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                        <step.icon className="text-accent" size={22} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                          <h3 className="text-base sm:text-xl font-bold">{step.title}</h3>
                          <span className="text-[10px] sm:text-xs bg-accent/10 text-accent px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium whitespace-nowrap">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-xs sm:text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Step number — only desktop */}
                <div className={`hidden lg:flex items-center justify-center ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="relative z-10 w-14 h-14 bg-accent rounded-2xl flex items-center justify-center shadow-xl shadow-accent/30">
                    <span className="text-white font-serif font-bold text-lg">{step.step}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
