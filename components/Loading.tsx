'use client'

import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.15, scale: 2 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="w-64 h-64 rounded-full bg-accent blur-3xl"
        />
      </div>

      {/* Main logo block */}
      <motion.div
        initial={{ opacity: 0, scale: 0.4, rotateY: -90 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative mb-8"
      >
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
          className="absolute -inset-4 rounded-[28px] border border-accent/20 border-t-accent border-r-accent/40"
        />
        {/* Second rotating ring (opposite) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
          className="absolute -inset-7 rounded-[36px] border border-accent/10 border-b-accent/30"
        />

        {/* Logo box */}
        <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-br from-accent via-yellow-500 to-accent/70 flex items-center justify-center shadow-2xl shadow-accent/40">
          {/* Inner shine */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/10 rounded-t-2xl" />
          </div>
          {/* VK letters */}
          <div className="relative z-10 flex items-end leading-none select-none">
            <span className="text-white font-serif font-bold text-5xl tracking-tight drop-shadow-lg">VK</span>
          </div>
        </div>
      </motion.div>

      {/* Name — letter by letter reveal */}
      <div className="flex flex-col items-center gap-1 mb-8">
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-white font-serif text-xl sm:text-2xl font-bold tracking-[0.25em]"
          >
            VIKASH KUMAR RANA
          </motion.p>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-accent text-[11px] tracking-[0.5em] uppercase font-medium"
        >
          Interior Designer
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-600 text-[10px] tracking-[0.3em] uppercase"
        >
          Gurgaon · Haryana
        </motion.p>
      </div>

      {/* Animated progress bar */}
      <div className="w-48 sm:w-56 h-[2px] bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: '0%', x: '-100%' }}
          animate={{ width: '100%', x: '0%' }}
          transition={{ delay: 0.3, duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-gradient-to-r from-accent/50 via-accent to-yellow-400 rounded-full"
        />
      </div>

      {/* Loading text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ delay: 0.6, duration: 1.5, repeat: Infinity, repeatDelay: 0.3 }}
        className="mt-4 text-gray-600 text-[10px] tracking-[0.4em] uppercase"
      >
        Loading
      </motion.p>
    </motion.div>
  )
}
