'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '40+', label: 'Happy Clients' },
  { value: '10+', label: 'Awards Won' },
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-16 bg-primary dark:bg-gray-950" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.15 + 0.2, type: 'spring', stiffness: 200 }}
                className="text-5xl md:text-6xl font-serif font-bold text-accent mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-400 text-sm uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
