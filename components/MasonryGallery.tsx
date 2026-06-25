'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface GalleryItem {
  id: number
  src: string
  category: string
  title: string
  description: string
}

interface MasonryGalleryProps {
  items: GalleryItem[]
}

export default function MasonryGallery({ items }: MasonryGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const categories = ['All', ...Array.from(new Set(items.map(item => item.category)))]
  const filteredItems = selectedCategory === 'All' 
    ? items 
    : items.filter(item => item.category === selectedCategory)

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map(category => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCategory === category
                ? 'bg-accent text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid mb-6"
            >
              <div 
                className="group relative overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="text-white mt-4 text-center">
                <h2 className="text-3xl font-bold mb-2">{selectedImage.title}</h2>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
