'use client'

import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950"
    >
      {/* Animated logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-10"
      >
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center shadow-2xl shadow-accent/30">
          <span className="text-white font-serif font-bold text-4xl">VR</span>
        </div>
        {/* Rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
          className="absolute -inset-2 rounded-3xl border-2 border-accent/20 border-t-accent"
        />
      </motion.div>

      {/* Name */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-white font-serif text-2xl font-bold tracking-[0.3em] mb-1"
      >
        VIKASH RANA
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-500 text-xs tracking-[0.4em] uppercase mb-10"
      >
        Interior Designer
      </motion.p>

      {/* Progress bar */}
      <div className="w-48 h-0.5 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="h-full bg-accent rounded-full"
        />
      </div>
    </motion.div>
  )
}
