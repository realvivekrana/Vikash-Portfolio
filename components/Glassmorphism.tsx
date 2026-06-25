'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface GlassmorphismProps {
  children: ReactNode
  className?: string
  blur?: string
}

export default function Glassmorphism({ children, className = '', blur = 'md' }: GlassmorphismProps) {
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-white/10 dark:bg-gray-900/10 ${blurClasses[blur as keyof typeof blurClasses]} border border-white/20 dark:border-gray-700/20 rounded-2xl shadow-xl ${className}`}
    >
      {children}
    </motion.div>
  )
}
