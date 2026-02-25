'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageSquare, Pencil, FileText, Hammer, CheckCircle } from 'lucide-react'

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    {
      icon: MessageSquare,
      title: 'Consultation',
      description: 'Initial meeting to understand your vision, requirements, and budget.',
    },
    {
      icon: Pencil,
      title: 'Concept Design',
      description: 'Creating mood boards, sketches, and 3D visualizations of your space.',
    },
    {
      icon: FileText,
      title: 'Design Development',
      description: 'Detailed plans, material selection, and final design documentation.',
    },
    {
      icon: Hammer,
      title: 'Execution',
      description: 'Project management and coordination with contractors and vendors.',
    },
    {
      icon: CheckCircle,
      title: 'Completion',
      description: 'Final styling, quality checks, and handover of your dream space.',
    },
  ]

  return (
    <section id="process" className="section-padding bg-secondary dark:bg-gray-800" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Design Process
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A streamlined approach from concept to completion
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-accent/30 transform -translate-y-1/2" />
          
          <div className="relative flex justify-between items-center">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center w-1/5"
              >
                {/* Icon Circle */}
                <div className="relative z-10 w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <step.icon className="text-white" size={32} />
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <step.icon className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
