'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import BeforeAfterSlider from './BeforeAfterSlider'
import MasonryGallery from './MasonryGallery'

const galleryItems = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800',
    category: 'Residential',
    title: 'Modern Luxury Villa',
    description: 'Contemporary living spaces with premium finishes',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600',
    category: 'Commercial',
    title: 'Corporate Office',
    description: 'Inspiring workspaces for creative teams',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800',
    category: 'Hospitality',
    title: 'Boutique Hotel Suite',
    description: 'Luxury hospitality interiors',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=600',
    category: 'Residential',
    title: 'Penthouse Living',
    description: 'Sophisticated urban penthouse design',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800',
    category: 'Residential',
    title: 'Scandinavian Kitchen',
    description: 'Minimalist kitchen with warm accents',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600',
    category: 'Commercial',
    title: 'Executive Boardroom',
    description: 'Prestigious boardroom design',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800',
    category: 'Residential',
    title: 'Contemporary Home',
    description: 'Open-plan family living',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600',
    category: 'Hospitality',
    title: 'Restaurant Interior',
    description: 'Atmospheric dining experience',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800',
    category: 'Residential',
    title: 'Master Bedroom',
    description: 'Serene retreat with luxury finishes',
  },
]

export default function ProjectShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState<'gallery' | 'before-after'>('gallery')

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="text-accent tracking-[0.3em] text-sm font-medium uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Selected Works</h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            A curated collection of spaces crafted with intention, beauty, and precision
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-full p-1 mb-10">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === 'gallery'
                  ? 'bg-white dark:bg-gray-700 shadow-sm'
                  : 'text-gray-500'
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => setActiveTab('before-after')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === 'before-after'
                  ? 'bg-white dark:bg-gray-700 shadow-sm'
                  : 'text-gray-500'
              }`}
            >
              Before & After
            </button>
          </div>
        </motion.div>

        {activeTab === 'gallery' ? (
          <MasonryGallery items={galleryItems} />
        ) : (
          <div className="space-y-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-2 text-center">Living Room Transformation</h3>
              <p className="text-gray-500 text-center mb-6">Gurgaon Residence — 2025</p>
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200"
                afterImage="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1200"
              />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-2 text-center">Kitchen Renovation</h3>
              <p className="text-gray-500 text-center mb-6">Delhi Penthouse — 2024</p>
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1200"
                afterImage="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
