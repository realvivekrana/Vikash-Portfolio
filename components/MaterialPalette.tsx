'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

const materials = [
  { name: 'Warm Oak',     hex: '#8B6914', type: 'Wood'   },
  { name: 'Ivory White',  hex: '#F5F0E8', type: 'Paint',  border: true },
  { name: 'Charcoal',     hex: '#2D2D2D', type: 'Accent' },
  { name: 'Sage Green',   hex: '#87A87A', type: 'Fabric' },
  { name: 'Brass Gold',   hex: '#D4AF37', type: 'Metal'  },
  { name: 'Marble Grey',  hex: '#C8C8C8', type: 'Stone',  border: true },
]

// Verified working Unsplash images - using popular well-known photo IDs
const textures = [
  {
    name: 'Italian Marble',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop',
    desc: 'Premium Calacatta Marble',
  },
  {
    name: 'Engineered Oak',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600&auto=format&fit=crop',
    desc: 'European White Oak',
  },
  {
    name: 'Velvet Fabric',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=600&auto=format&fit=crop',
    desc: 'Belgian Linen & Velvet',
  },
  {
    name: 'Brass Fixtures',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop',
    desc: 'Antique Brushed Brass',
  },
]

export default function MaterialPalette() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-16 md:py-24 bg-secondary dark:bg-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-accent tracking-[0.3em] text-xs sm:text-sm font-medium uppercase mb-3">Craft</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">Materials & Palette</h2>
          <div className="w-16 sm:w-20 h-0.5 bg-accent mx-auto mb-4 sm:mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Every material is carefully selected for its tactile quality, visual elegance, and longevity
          </p>
        </motion.div>

        {/* Two-column grid — stacks on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── Color Palette ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-serif font-bold mb-6 sm:mb-8">
              Signature Color Palette
            </h3>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {materials.map((mat, i) => (
                <motion.div
                  key={mat.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="text-center"
                >
                  <div
                    className={`w-full aspect-square rounded-xl sm:rounded-2xl shadow-lg mb-2 sm:mb-3 ${
                      mat.border ? 'border-2 border-gray-200 dark:border-gray-600' : ''
                    }`}
                    style={{ backgroundColor: mat.hex }}
                  />
                  <p className="font-semibold text-xs sm:text-sm leading-tight">{mat.name}</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">{mat.type}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Premium Textures ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl sm:text-2xl font-serif font-bold mb-6 sm:mb-8">
              Premium Textures
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {textures.map((texture, i) => (
                <motion.div
                  key={texture.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="group overflow-hidden rounded-xl sm:rounded-2xl shadow-lg"
                >
                  {/* Image wrapper with CSS fallback background */}
                  <div
                    className="relative h-32 sm:h-40 overflow-hidden"
                    style={{
                      background: ['linear-gradient(135deg,#e8e0d0,#c8b89a)',
                        'linear-gradient(135deg,#d4c4a0,#a08c6e)',
                        'linear-gradient(135deg,#c8b8a8,#8c7868)',
                        'linear-gradient(135deg,#d4af7a,#a07840)'][i],
                    }}
                  >
                    <img
                      src={texture.image}
                      alt={texture.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
                      <p className="text-white font-semibold text-xs sm:text-sm drop-shadow-lg">
                        {texture.name}
                      </p>
                    </div>
                  </div>
                  <div className="px-3 py-2 sm:py-2.5 bg-white dark:bg-gray-900">
                    <p className="text-[10px] sm:text-xs text-gray-500">{texture.desc}</p>
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
