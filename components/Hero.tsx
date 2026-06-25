'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, MapPin, Award, Star } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'
import { getAssetPath } from '@/lib/utils'

const slides = [
  {
    image: getAssetPath('/FULL LOBBY PHOTOSHOP.jpg'),
    label: 'Luxury Lobby',
  },
  {
    image: getAssetPath('/DINING AREA.jpg'),
    label: 'Premium Dining',
  },
  {
    image: getAssetPath('/M.B.R BED VIEW.jpg'),
    label: 'Master Bedroom',
  },
]

const words = ['Timeless', 'Elegant', 'Luxurious', 'Refined']

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const [slide, setSlide] = useState(0)
  const [wordIdx, setWordIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setWordIdx(i => (i + 1) % words.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >

      {/* ── Sliding Background ── */}
      {slides.map((s, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 z-0"
          style={{ y: bgY }}
          initial={false}
          animate={{ opacity: slide === i ? 1 : 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{ backgroundImage: `url(${s.image})` }}
          />
        </motion.div>
      ))}

      {/* ── Gradient Overlay ── */}
      <div className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(105deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.50) 55%, rgba(0,0,0,0.25) 100%)',
        }}
      />

      {/* ── Subtle noise texture ── */}
      <div className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Gold vertical accent line ── */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 z-[2]"
        style={{ background: 'linear-gradient(180deg, transparent, #c9a84c 30%, #c9a84c 70%, transparent)' }}
      />

      {/* ── Main Content ── */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-[3] w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-20 flex flex-col lg:flex-row items-center lg:items-end gap-16 min-h-screen"
      >

        {/* Left — primary content */}
        <div className="flex-1 text-left">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="inline-flex items-center gap-2.5 mb-8"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white/90 text-xs font-medium tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Available for Projects
            </div>
            <div className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white/70 text-xs">
              <MapPin size={11} />
              Gurgaon, Haryana
            </div>
          </motion.div>

          {/* Heading */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.8rem,7vw,6rem)] font-serif font-bold text-white leading-[1.05] tracking-tight"
            >
              Crafting
            </motion.h1>
          </div>

          {/* Animated word */}
          <div className="overflow-hidden mb-2 h-[clamp(3.2rem,8vw,7rem)]">
            <AnimatePresence mode="wait">
              <AnimatedWord key={wordIdx} word={words[wordIdx]} />
            </AnimatePresence>
          </div>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.8rem,7vw,6rem)] font-serif font-bold text-white leading-[1.05] tracking-tight"
            >
              Interiors
            </motion.h1>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="text-white/65 text-base md:text-lg font-light max-w-md leading-relaxed mb-10"
          >
            Luxury residential & commercial design that balances beauty, function, and lasting elegance — tailored to your life.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2.5 px-7 py-4 bg-accent text-white text-sm font-semibold rounded-xl shadow-xl shadow-accent/30 hover:bg-accent/85 hover:shadow-accent/50 hover:gap-4 transition-all duration-300"
            >
              View My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-7 py-4 bg-white/10 border border-white/25 text-white text-sm font-semibold rounded-xl backdrop-blur-md hover:bg-white/20 transition-all duration-300"
            >
              Start a Project
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap gap-8"
          >
            {[
              { v: '5+', l: 'Years' },
              { v: '50+', l: 'Projects' },
              { v: '40+', l: 'Clients' },
            ].map(s => (
              <div key={s.l} className="flex flex-col">
                <span className="text-3xl font-serif font-bold text-accent leading-none">{s.v}</span>
                <span className="text-white/50 text-[11px] uppercase tracking-[0.2em] mt-1">{s.l}</span>
              </div>
            ))}
            <div className="h-12 w-px bg-white/15 self-center hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=60&w=60',
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=60&w=60',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=60&w=60',
                ].map((src, i) => (
                  <img key={i} src={src} alt="client"
                    className="w-8 h-8 rounded-full border-2 border-black/30 object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-accent text-accent" />)}
                </div>
                <p className="text-white/50 text-[10px] mt-0.5">Trusted by clients</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right — floating card panel */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="hidden xl:flex flex-col gap-4 w-72 pb-4 self-end"
        >
          {/* Current slide label */}
          <div className="px-5 py-4 bg-white/10 border border-white/15 backdrop-blur-xl rounded-2xl">
            <p className="text-white/50 text-[10px] uppercase tracking-[0.25em] mb-2">Currently Viewing</p>
            <p className="text-white font-medium">{slides[slide].label}</p>
            <div className="flex gap-1.5 mt-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === slide ? 'w-8 bg-accent' : 'w-4 bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Award card */}
          <div className="px-5 py-4 bg-white/10 border border-white/15 backdrop-blur-xl rounded-2xl flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
              <Award className="text-accent" size={20} />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Award Winning</p>
              <p className="text-white/50 text-[11px] mt-0.5">Best Interior Studio 2024</p>
            </div>
          </div>

          {/* Free consultation */}
          <a
            href="#contact"
            className="group px-5 py-4 bg-accent/90 backdrop-blur-xl rounded-2xl flex items-center justify-between hover:bg-accent transition-all"
          >
            <div>
              <p className="text-white text-sm font-semibold">Free Consultation</p>
              <p className="text-white/70 text-[11px] mt-0.5">Book a 30-min call</p>
            </div>
            <ArrowRight size={18} className="text-white/70 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>

      {/* ── Scroll cue ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/25 flex items-start justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  )
}

// Animated word component
function AnimatedWord({ word }: { word: string }) {
  return (
    <motion.h1
      key={word}
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -80, opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-[clamp(2.8rem,7vw,6rem)] font-serif font-bold leading-[1.05] tracking-tight"
      style={{
        WebkitTextStroke: '1.5px #c9a84c',
        color: 'transparent',
        textShadow: '0 0 80px rgba(201,168,76,0.3)',
      }}
    >
      {word}
    </motion.h1>
  )
}

