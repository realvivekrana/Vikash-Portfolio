'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Palette, Lightbulb, Award, Users } from 'lucide-react'
import { getAssetPath } from '@/lib/utils'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skills = [
    { icon: Palette, name: 'Creative Design', description: '5+ years experience' },
    { icon: Lightbulb, name: 'Innovation', description: 'Modern solutions' },
    { icon: Award, name: 'Excellence', description: 'Award winning' },
    { icon: Users, name: 'Client Focus', description: '50+ happy clients' },
  ]

  const tools = ['AutoCAD', 'SketchUp', '3ds Max', 'V-Ray', 'Photoshop', 'Revit']

  return (
    <section id="about" className="section-padding bg-secondary dark:bg-gray-800" ref={ref}>
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src={getAssetPath('/profile.jpg')}
                alt="Vikash Rana - Interior Designer"
                className="w-full h-full object-cover object-top"
                style={{ objectPosition: 'center top' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-accent text-white p-6 sm:p-8 rounded-lg shadow-xl"
            >
              <div className="text-3xl sm:text-4xl font-bold">5+</div>
              <div className="text-xs sm:text-sm">Years Experience</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6">
              About Me
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-accent mb-6 sm:mb-8" />
            
            <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Hi, I'm <span className="font-semibold text-accent">Vikash Rana</span>, an interior designer 
              based in Gurgaon, Haryana, with over 5 years of experience in creating sophisticated spaces 
              that reflect the unique personality and lifestyle of each client. My approach combines timeless 
              elegance with contemporary functionality.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Every project is an opportunity to transform spaces into beautiful, livable works of art. 
              I believe in the power of thoughtful design to enhance daily life and create lasting impressions.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                    <skill.icon className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{skill.name}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tools */}
            <div>
              <h4 className="font-semibold mb-3 text-sm sm:text-base">Software & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white dark:bg-gray-700 rounded-full text-xs sm:text-sm font-medium shadow-sm"
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
