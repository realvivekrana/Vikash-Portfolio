'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { X, MapPin, Calendar, Maximize2 } from 'lucide-react'

interface Project {
  id: number
  title: string
  category: string
  location: string
  year: string
  area: string
  image: string
  images: string[]
  description: string
  concept: string
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      category: 'Residential',
      location: 'Gurgaon, India',
      year: '2025',
      area: '4500 sq ft',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2074',
      images: [
        'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2074',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
      ],
      description: 'A contemporary villa featuring clean lines, natural materials, and abundant natural light.',
      concept: 'The design philosophy centers on minimalism and connection with nature, creating a serene living environment.',
    },
    {
      id: 2,
      title: 'Corporate Office Space',
      category: 'Commercial',
      location: 'Bangalore, India',
      year: '2025',
      area: '8000 sq ft',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069',
      images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069',
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069',
      ],
      description: 'Modern office design promoting collaboration and productivity with flexible workspaces.',
      concept: 'Creating an inspiring work environment that balances functionality with aesthetic appeal.',
    },
    {
      id: 3,
      title: 'Boutique Hotel Suite',
      category: 'Commercial',
      location: 'Goa, India',
      year: '2024',
      area: '1200 sq ft',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070',
      images: [
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070',
      ],
      description: 'Luxurious hotel suite blending coastal charm with contemporary elegance.',
      concept: 'Inspired by the coastal landscape, creating a relaxing retreat for guests.',
    },
    {
      id: 4,
      title: 'Penthouse Apartment',
      category: 'Residential',
      location: 'Gurgaon, India',
      year: '2024',
      area: '3200 sq ft',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070',
      images: [
        'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070',
      ],
      description: 'Sophisticated urban living with panoramic city views and premium finishes.',
      concept: 'Maximizing natural light and views while creating intimate living spaces.',
    },
    {
      id: 5,
      title: 'Executive Office',
      category: 'Office',
      location: 'Pune, India',
      year: '2024',
      area: '2500 sq ft',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069',
      images: [
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069',
      ],
      description: 'Premium executive office with sophisticated design and smart technology integration.',
      concept: 'Balancing professionalism with comfort to enhance executive productivity.',
    },
    {
      id: 6,
      title: 'Contemporary Home',
      category: 'Residential',
      location: 'Hyderabad, India',
      year: '2023',
      area: '3800 sq ft',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070',
      ],
      description: 'Family home featuring open-plan living and seamless indoor-outdoor connection.',
      concept: 'Creating versatile spaces that adapt to modern family living.',
    },
  ]

  const categories = ['All', 'Residential', 'Commercial', 'Office']

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Explore our portfolio of exceptional interior design projects
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? 'bg-accent text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium text-accent mb-2">{project.category}</span>
                    <h3 className="text-2xl font-serif font-bold mb-2">{project.title}</h3>
                    <div className="flex items-center text-sm space-x-4">
                      <span className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {project.location}
                      </span>
                      <span className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-white dark:bg-gray-900 border-b dark:border-gray-800 p-4 flex justify-between items-center z-10">
                  <h3 className="text-2xl font-serif font-bold">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="p-6">
                  {/* Project Info */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Category</p>
                      <p className="font-semibold">{selectedProject.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                      <p className="font-semibold">{selectedProject.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Year</p>
                      <p className="font-semibold">{selectedProject.year}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Area</p>
                      <p className="font-semibold">{selectedProject.area}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Description</h4>
                    <p className="text-gray-700 dark:text-gray-300">{selectedProject.description}</p>
                  </div>

                  {/* Concept */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Design Concept</h4>
                    <p className="text-gray-700 dark:text-gray-300">{selectedProject.concept}</p>
                  </div>

                  {/* Images Gallery */}
                  <div className="space-y-4">
                    {selectedProject.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`${selectedProject.title} ${idx + 1}`}
                        className="w-full rounded-lg"
                      />
                    ))}
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
