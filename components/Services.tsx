'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Home, Building2, Layout, Hammer, Sofa, Sparkles, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Residential Design',
    description: 'Transform your home into a personalized sanctuary with bespoke designs that reflect your unique lifestyle and aesthetic.',
    features: ['Full-home design', 'Space planning', '3D visualization'],
  },
  {
    icon: Building2,
    title: 'Commercial Design',
    description: 'Create dynamic workspaces and commercial environments that inspire productivity and make powerful first impressions.',
    features: ['Office interiors', 'Retail design', 'Hospitality spaces'],
  },
  {
    icon: Layout,
    title: 'Space Planning',
    description: 'Intelligent layout optimization that maximizes every square foot while ensuring seamless flow and functionality.',
    features: ['Floor plan design', 'Traffic flow analysis', 'Furniture placement'],
  },
  {
    icon: Hammer,
    title: 'Renovation',
    description: 'Thoughtful renovations that breathe fresh life into existing spaces while preserving their character and charm.',
    features: ['Concept to completion', 'Contractor management', 'Quality control'],
  },
  {
    icon: Sofa,
    title: 'Furniture & Styling',
    description: 'Curated selection of premium furniture and accessories that complete your interior with elegance and character.',
    features: ['Custom furniture', 'Art & accessories', 'Final styling'],
  },
  {
    icon: Sparkles,
    title: 'Luxury Consultation',
    description: 'Expert one-on-one guidance on premium materials, finishes, and design solutions for discerning clients.',
    features: ['Material selection', 'Color consultation', 'Premium sourcing'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-16 md:py-24 bg-secondary dark:bg-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-10 md:mb-16">
          <p className="text-accent tracking-[0.3em] text-xs sm:text-sm font-medium uppercase mb-3">What I Offer</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">Services</h2>
          <div className="w-16 sm:w-20 h-0.5 bg-accent mx-auto mb-4 sm:mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Comprehensive interior design solutions tailored to bring your vision to life
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-accent/20"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/10 group-hover:bg-accent rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 transition-colors duration-300">
                <service.icon className="text-accent group-hover:text-white transition-colors" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-xs sm:text-sm mb-4 sm:mb-5">{service.description}</p>
              <ul className="space-y-1 mb-4 sm:mb-6">
                {service.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-1 text-accent text-xs sm:text-sm font-semibold group-hover:gap-2 transition-all">
                Learn More <ArrowRight size={13} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
