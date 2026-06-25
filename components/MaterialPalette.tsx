'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

const materials = [
  { name: 'Warm Oak', hex: '#8B6914', type: 'Wood' },
  { name: 'Ivory White', hex: '#F5F0E8', type: 'Paint', border: true },
  { name: 'Charcoal', hex: '#2D2D2D', type: 'Accent' },
  { name: 'Sage Green', hex: '#87A87A', type: 'Fabric' },
  { name: 'Brass Gold', hex: '#D4AF37', type: 'Metal' },
  { name: 'Marble Grey', hex: '#C8C8C8', type: 'Stone', border: true },
]

const textures = [
  {
    name: 'Italian Marble',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600',
    desc: 'Premium Calacatta Marble',
  },
  {
    name: 'Engineered Oak',
    image: 'https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=600',
    desc: 'European White Oak',
  },
  {
    name: 'Velvet Fabric',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600',
    desc: 'Belgian Linen & Velvet',
  },
  {
    name: 'Brass Fixtures',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=600',
    desc: 'Antique Brushed Brass',
  },
]

export default function MaterialPalette() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-secondary dark:bg-gray-800" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-[0.3em] text-sm font-medium uppercase mb-3">Craft</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Materials & Palette</h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Every material is carefully selected for its tactile quality, visual elegance, and longevity
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Color Palette */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif font-bold mb-8">Signature Color Palette</h3>
            <div className="grid grid-cols-3 gap-4">
              {materials.map((mat, index) => (
                <motion.div
                  key={mat.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="text-center"
                >
                  <div
                    className={`w-full aspect-square rounded-2xl shadow-lg mb-3 ${mat.border ? 'border-2 border-gray-200' : ''}`}
                    style={{ backgroundColor: mat.hex }}
                  />
                  <p className="font-semibold text-sm">{mat.name}</p>
                  <p className="text-xs text-gray-500">{mat.type}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Textures */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-serif font-bold mb-8">Premium Textures</h3>
            <div className="grid grid-cols-2 gap-4">
              {textures.map((texture, index) => (
                <motion.div
                  key={texture.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="group overflow-hidden rounded-2xl shadow-lg"
                >
                  <div className="relative h-40 overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <img
                      src={texture.image}
                      alt={texture.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        target.parentElement!.classList.add('bg-gradient-to-br', 'from-gray-200', 'to-gray-300', 'dark:from-gray-700', 'dark:to-gray-800')
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <div className="p-3 bg-white dark:bg-gray-900">
                    <p className="font-semibold text-sm">{texture.name}</p>
                    <p className="text-xs text-gray-500">{texture.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
