'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074)',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 sm:mb-6 tracking-tight leading-tight"
        >
          Designing Timeless Spaces
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-base sm:text-xl md:text-2xl mb-8 sm:mb-12 font-light tracking-wide max-w-2xl mx-auto px-4"
        >
          Creating elegant interiors that blend luxury with functionality
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
        >
          <a href="#projects" className="btn-primary w-full sm:w-auto text-center">
            View Projects
          </a>
          <a href="#contact" className="btn-outline w-full sm:w-auto text-center">
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.a>
    </section>
  )
}
