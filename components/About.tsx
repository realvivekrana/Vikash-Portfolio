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

  const tools = ['AutoCAD', 'SketchUp', '3ds Max', 'V-Ray', 'Photoshop', 'Revit']

  return (
    <section id="about" className="section-padding overflow-hidden" ref={ref}>
      <div className="container-custom max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-1 w-full"
          >
            {/* Gold accent border behind image */}
            <div className="absolute top-6 left-6 right-0 bottom-0 rounded-2xl border-2 border-accent/30 z-0" />

            <div className="relative w-full max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-2xl z-10"
              style={{ height: '520px' }}>
              <img
                src={getAssetPath('/profile.jpg')}
                alt="Vikash Rana - Interior Designer"
                className="w-full h-full"
                style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
              className="absolute bottom-6 right-0 md:-right-6 bg-accent text-white px-6 py-5 rounded-2xl shadow-2xl z-20 border-4 border-white dark:border-gray-900"
            >
              <div className="text-4xl font-serif font-bold">5+</div>
              <div className="text-xs uppercase tracking-widest mt-1">Years Exp.</div>
            </motion.div>

            {/* Location tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute top-6 right-0 md:-right-4 bg-white dark:bg-gray-900 px-4 py-2 rounded-full shadow-lg z-20 flex items-center gap-2"
            >
              <MapPin size={14} className="text-accent" />
              <span className="text-xs font-medium">Gurgaon, Haryana</span>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="order-1 md:order-2"
          >
            <p className="text-accent tracking-[0.3em] text-sm font-medium uppercase mb-3">About Me</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-2 leading-tight">
              Vikash Rana
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-medium mb-6">Interior Designer & Space Planner</p>
            <div className="w-16 h-0.5 bg-accent mb-8" />

            <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
              With over 5 years of experience creating luxury residential and commercial spaces in the NCR region, I bring a refined eye for detail and a deep passion for transforming ordinary spaces into extraordinary living experiences.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              My design philosophy is rooted in the belief that great interiors tell a story — your story. I balance timeless elegance with contemporary functionality to create spaces that are as beautiful as they are liveable.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                    <skill.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{skill.name}</p>
                    <p className="text-xs text-gray-500">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tools */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">Software & Tools</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, i) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700"
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
