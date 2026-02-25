'use client'

import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
    >
      <div className="text-center px-4">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary dark:text-white mb-4"
        >
          VIKASH RANA
        </motion.div>
        <motion.div
          animate={{ width: ['0%', '100%'] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-1 bg-accent mx-auto"
          style={{ maxWidth: '200px' }}
        />
      </div>
    </motion.div>
  )
}
