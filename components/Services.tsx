'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Home, Building2, Layout, Hammer, Sofa, Sparkles } from 'lucide-react'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: Home,
      title: 'Residential Interior Design',
      description: 'Transform your home into a personalized sanctuary with custom designs tailored to your lifestyle.',
    },
    {
      icon: Building2,
      title: 'Commercial Design',
      description: 'Create inspiring workspaces that enhance productivity and reflect your brand identity.',
    },
    {
      icon: Layout,
      title: 'Space Planning',
      description: 'Optimize your space with intelligent layouts that maximize functionality and flow.',
    },
    {
      icon: Hammer,
      title: 'Renovation',
      description: 'Breathe new life into existing spaces with thoughtful renovations and updates.',
    },
    {
      icon: Sofa,
      title: 'Furniture & Styling',
      description: 'Curate the perfect pieces and accessories to complete your interior vision.',
    },
    {
      icon: Sparkles,
      title: 'Luxury Consultation',
      description: 'Expert guidance on high-end finishes, materials, and design solutions.',
    },
  ]

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Services
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive interior design solutions tailored to bring your vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-6 inline-block p-4 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                <service.icon className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
