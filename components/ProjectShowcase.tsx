'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { X, MapPin, Calendar, Maximize2, ZoomIn } from 'lucide-react'
import { getAssetPath } from '@/lib/utils'

interface Project {
  id: number
  title: string
  category: string
  location: string
  year: string
  image: string
  tags: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Luxury Lobby Design',
    category: 'Residential',
    location: 'Gurgaon, Haryana',
    year: '2025',
    image: 'FULL LOBBY PHOTOSHOP.jpg',
    tags: ['Lobby', 'Luxury', 'Feature Wall'],
  },
  {
    id: 2,
    title: 'Lobby Wall Art',
    category: 'Residential',
    location: 'Gurgaon, Haryana',
    year: '2025',
    image: 'lobby wall design.jpg',
    tags: ['Wall Design', 'Lobby', 'POP'],
  },
  {
    id: 3,
    title: 'Premium Lobby Space',
    category: 'Residential',
    location: 'Gurgaon, Haryana',
    year: '2025',
    image: 'LOBBY 4.jpg',
    tags: ['Lobby', 'Lighting', 'Marble'],
  },
  {
    id: 4,
    title: 'Dining Area Design',
    category: 'Residential',
    location: 'Gurgaon, Haryana',
    year: '2025',
    image: 'DINING AREA.jpg',
    tags: ['Dining', 'Wood Work', 'Lighting'],
  },
  {
    id: 5,
    title: 'Dining Wall Feature',
    category: 'Residential',
    location: 'Gurgaon, Haryana',
    year: '2025',
    image: 'DINING WALL DESIGN RIV.jpg',
    tags: ['Feature Wall', 'Dining', 'Veneer'],
  },
  {
    id: 6,
    title: 'Master Bedroom',
    category: 'Bedroom',
    location: 'Gurgaon, Haryana',
    year: '2025',
    image: 'M.B.R BED VIEW.jpg',
    tags: ['Master Bedroom', 'Luxury', 'Bed Design'],
  },
  {
    id: 7,
    title: 'Master Bedroom Dresser',
    category: 'Bedroom',
    location: 'Gurgaon, Haryana',
    year: '2025',
    image: 'MASTER DRESSER.jpg',
    tags: ['Dresser', 'Vanity', 'Bedroom'],
  },
  {
    id: 8,
    title: 'Master Wardrobe',
    category: 'Bedroom',
    location: 'Gurgaon, Haryana',
    year: '2025',
    image: 'MASTER WARDROBE riv.jpg',
    tags: ['Wardrobe', 'Wood Work', 'Storage'],
  },
  {
    id: 9,
    title: 'Guest Bedroom Wall',
    category: 'Bedroom',
    location: 'Gurgaon, Haryana',
    year: '2025',
    image: 'GUEST BED WALL.jpg',
    tags: ['Guest Room', 'Feature Wall', 'Luxury'],
  },
  {
    id: 10,
    title: 'Guest Room Wardrobe',
    category: 'Bedroom',
    location: 'Gurgaon, Haryana',
    year: '2025',
    image: 'guest room wardrobe3.jpg',
    tags: ['Wardrobe', 'Guest Room', 'Storage'],
  },
  {
    id: 11,
    title: 'Guest Wall View',
    category: 'Bedroom',
    location: 'Gurgaon, Haryana',
    year: '2025',
    image: 'GUEST WALL VIEW.jpg',
    tags: ['Guest Room', 'Panelling', 'Design'],
  },
  {
    id: 12,
    title: 'Kids Bedroom',
    category: 'Kids Room',
    location: 'Gurgaon, Haryana',
    year: '2025',
    image: 'KIDS ROOM RIV NEW.jpg',
    tags: ['Kids Room', 'Playful', 'Colorful'],
  },
  {
    id: 13,
    title: 'Kids Bed Design',
    category: 'Kids Room',
    location: 'Gurgaon, Haryana',
    year: '2025',
    image: 'KIDS BED VIEW 2.jpg',
    tags: ['Kids Bed', 'Storage', 'Fun Design'],
  },
  {
    id: 14,
    title: 'Kids Wardrobe',
    category: 'Kids Room',
    location: 'Gurgaon, Haryana',
    year: '2025',
    image: 'KIDS WARDROBE.jpg',
    tags: ['Kids Wardrobe', 'Storage', 'Colorful'],
  },
  {
    id: 15,
    title: 'TV Panel Design',
    category: 'TV Panel',
    location: 'Gurgaon, Haryana',
    year: '2025',
    image: 'TV.jpg',
    tags: ['TV Panel', 'Feature Wall', 'Entertainment'],
  },
  {
    id: 16,
    title: 'Sacred Mandir',
    category: 'Mandir',
    location: 'Gurgaon, Haryana',
    year: '2025',
    image: 'MANDIR VIEW NEW PHOTOSHOP.jpg',
    tags: ['Mandir', 'Pooja Unit', 'Wood Work'],
  },
  {
    id: 17,
    title: 'Crockery Unit',
    category: 'Residential',
    location: 'Gurgaon, Haryana',
    year: '2025',
    image: 'CROCKERY.jpg',
    tags: ['Crockery', 'Modular', 'Display'],
  },
  {
    id: 18,
    title: 'Wardrobe Design',
    category: 'Bedroom',
    location: 'Gurgaon, Haryana',
    year: '2025',
    image: 'WARDROBE N882.jpg',
    tags: ['Wardrobe', 'Wood Work', 'Custom'],
  },
  {
    id: 19,
    title: 'Living Area View',
    category: 'Residential',
    location: 'Gurgaon, Haryana',
    year: '2025',
    image: 'VIEW 2.jpg',
    tags: ['Living Room', 'Luxury', 'Open Plan'],
  },
  {
    id: 20,
    title: 'Scenic Render',
    category: 'Residential',
    location: 'Gurgaon, Haryana',
    year: '2025',
    image: 'Scene 40.jpg',
    tags: ['3D Design', 'D5 Render', 'Living'],
  },
]

const categories = ['All', 'Residential', 'Bedroom', 'Kids Room', 'TV Panel', 'Mandir']

export default function ProjectShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-16 md:py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-accent tracking-[0.3em] text-xs sm:text-sm font-medium uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">Our Work</h2>
          <div className="w-16 sm:w-20 h-0.5 bg-accent mx-auto mb-4 sm:mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base mb-8">
            Real projects, real spaces — crafted with precision and brought to life with premium 3D renders
          </p>

          {/* Filter pills — scrollable on mobile */}
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 justify-start sm:justify-center scrollbar-hide">
            {categories.map(cat => (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat)}
                className={`flex-shrink-0 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  filter === cat
                    ? 'bg-accent text-white shadow-lg shadow-accent/30'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.04 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-gray-100 dark:bg-gray-800"
                onClick={() => setSelected(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={getAssetPath(`/${project.image}`)}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[9px] sm:text-[10px] px-2 py-0.5 bg-accent/80 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-serif font-bold text-sm sm:text-lg leading-tight mb-1">{project.title}</h3>
                    <div className="flex items-center gap-3 text-[10px] sm:text-xs text-white/70">
                      <span className="flex items-center gap-1"><MapPin size={10} />{project.location}</span>
                      <span className="flex items-center gap-1"><Calendar size={10} />{project.year}</span>
                    </div>
                  </div>

                  {/* Zoom icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={14} className="text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            >
              <button onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
              >
                <X size={22} />
              </button>
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                className="max-w-5xl w-full"
                onClick={e => e.stopPropagation()}
              >
                <img
                  src={getAssetPath(`/${selected.image}`)}
                  alt={selected.title}
                  className="w-full max-h-[80vh] object-contain rounded-2xl"
                />
                <div className="text-white text-center mt-4 px-4">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold mb-1">{selected.title}</h3>
                  <div className="flex items-center justify-center gap-4 text-xs text-white/60">
                    <span className="flex items-center gap-1"><MapPin size={12} />{selected.location}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} />{selected.year}</span>
                    <span className="px-3 py-1 bg-accent/30 rounded-full">{selected.category}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

