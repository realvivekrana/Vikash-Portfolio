'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Palette, Lightbulb, Award, Users, MapPin } from 'lucide-react'
import { getAssetPath } from '@/lib/utils'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills = [
    { icon: Palette, name: 'Creative Design', description: '5+ years experience' },
    { icon: Lightbulb, name: 'Innovation', description: 'Modern solutions' },
    { icon: Award, name: 'Excellence', description: 'Award-winning work' },
    { icon: Users, name: 'Client Focus', description: '40+ happy clients' },
  ]

  const tools = ['AutoCAD', 'SketchUp', 'V-Ray', 'D5 Render', 'Photoshop', 'Lumion']

  return (
    <section id="about" className="py-16 md:py-24 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* ── Image — shows BELOW text on mobile ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative w-full order-2 md:order-1"
          >
            <div className="absolute top-4 left-4 right-0 bottom-0 rounded-2xl border-2 border-accent/30 z-0 hidden sm:block" />
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-2xl z-10"
              style={{ height: 'clamp(320px, 55vw, 520px)' }}>
              <img
                src={getAssetPath('/profile.jpg')}
                alt="Vikash Rana - Interior Designer"
                className="w-full h-full"
                style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Experience badge — tucked inside on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
              className="absolute bottom-4 right-4 sm:bottom-6 sm:-right-4 md:-right-6 bg-accent text-white px-4 py-3 sm:px-6 sm:py-5 rounded-xl sm:rounded-2xl shadow-2xl z-20 border-4 border-white dark:border-gray-900"
            >
              <div className="text-3xl sm:text-4xl font-serif font-bold leading-none">5+</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest mt-1">Years Exp.</div>
            </motion.div>

            {/* Location tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute top-4 right-4 sm:-right-4 md:-right-4 bg-white dark:bg-gray-900 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg z-20 flex items-center gap-1.5 sm:gap-2"
            >
              <MapPin size={12} className="text-accent" />
              <span className="text-[10px] sm:text-xs font-medium">Gurgaon, Haryana</span>
            </motion.div>
          </motion.div>

          {/* ── Content — shows FIRST on mobile ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="order-1 md:order-2"
          >
            <p className="text-accent tracking-[0.25em] sm:tracking-[0.3em] text-xs sm:text-sm font-medium uppercase mb-2 sm:mb-3">About Me</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-1 sm:mb-2 leading-tight">
              Vikash Rana
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-medium text-sm sm:text-base mb-4 sm:mb-6">
              Interior Designer & Space Planner
            </p>
            <div className="w-12 sm:w-16 h-0.5 bg-accent mb-6 sm:mb-8" />

            <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
              With over 5 years of experience creating luxury residential and commercial spaces in the NCR region, I bring a refined eye for detail and a deep passion for transforming ordinary spaces into extraordinary living experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              My design philosophy is rooted in the belief that great interiors tell a story — your story. I balance timeless elegance with contemporary functionality.
            </p>

            {/* Skills grid — 1 col on very small, 2 col otherwise */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <div className="p-1.5 sm:p-2 bg-accent/10 rounded-lg flex-shrink-0">
                    <skill.icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-xs sm:text-sm">{skill.name}</p>
                    <p className="text-[10px] sm:text-xs text-gray-500">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tools */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2 sm:mb-3">
                Software & Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, i) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className="px-3 py-1 sm:px-4 sm:py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-xs sm:text-sm font-medium border border-gray-200 dark:border-gray-700"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
