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
    <section id="process" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-[0.3em] text-sm font-medium uppercase mb-3">How I Work</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Design Process</h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A streamlined, transparent process from initial conversation to final reveal
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line on desktop */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center ${
                  index % 2 === 0 ? '' : 'lg:direction-rtl'
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <step.icon className="text-accent" size={26} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold">{step.title}</h3>
                          <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Number — Center on desktop */}
                <div className={`hidden lg:flex items-center justify-center ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="relative z-10 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-xl shadow-accent/30">
                    <span className="text-white font-serif font-bold text-xl">{step.step}</span>
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
