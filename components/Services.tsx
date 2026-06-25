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
    <section id="services" className="section-padding bg-secondary dark:bg-gray-800" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-[0.3em] text-sm font-medium uppercase mb-3">What I Offer</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Services</h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive interior design solutions tailored to bring your vision to life with precision and elegance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-accent/20"
            >
              <div className="w-14 h-14 bg-accent/10 group-hover:bg-accent rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                <service.icon className="text-accent group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-5">{service.description}</p>
              <ul className="space-y-1 mb-6">
                {service.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-1 text-accent text-sm font-semibold group-hover:gap-2 transition-all">
                Learn More <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
