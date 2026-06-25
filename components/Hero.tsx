'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Play } from 'lucide-react'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden" ref={ref}>
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </motion.div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Interior Designer · Gurgaon, Haryana
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight tracking-tight"
        >
          Designing
          <span className="block text-accent">Timeless</span>
          Spaces
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl font-light tracking-wide mb-12 max-w-2xl mx-auto text-white/80"
        >
          Luxury interior design crafted with precision, elegance, and a deep understanding of how you live
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="group px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/80 transition-all hover:shadow-2xl hover:shadow-accent/30 hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all flex items-center gap-2"
          >
            <Play size={16} className="fill-current" />
            Start a Project
          </a>
        </motion.div>

        {/* Floating metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-8 mt-20"
        >
          {[
            { value: '5+', label: 'Years Experience' },
            { value: '50+', label: 'Projects Done' },
            { value: '40+', label: 'Happy Clients' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-serif font-bold text-accent">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-white/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs uppercase tracking-widest text-white/50">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  )
}
