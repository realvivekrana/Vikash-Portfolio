'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { ArrowRight, Clock, Tag } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: '10 Timeless Interior Design Principles Every Homeowner Should Know',
    excerpt: 'Great design is built on foundations that never go out of style. Discover the core principles that professional designers use to create beautiful, functional spaces.',
    category: 'Design Tips',
    readTime: '5 min read',
    date: 'June 2026',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800',
  },
  {
    id: 2,
    title: 'How to Choose the Perfect Color Palette for Your Living Room',
    excerpt: 'Color has the power to completely transform a space. Learn how to select a palette that reflects your personality while maintaining visual harmony.',
    category: 'Color & Styling',
    readTime: '7 min read',
    date: 'May 2026',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800',
  },
  {
    id: 3,
    title: 'Luxury on a Budget: Smart Ways to Elevate Your Interior',
    excerpt: 'Premium design does not always require a premium budget. Here are clever ways to achieve a high-end look without overspending.',
    category: 'Budget Design',
    readTime: '6 min read',
    date: 'April 2026',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800',
  },
]

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="blog" className="section-padding bg-secondary dark:bg-gray-800" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-[0.3em] text-sm font-medium uppercase mb-3">Insights</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Design Journal</h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Thoughts, insights, and inspiration from the world of interior design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                    <Tag size={10} />
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
                  {post.excerpt}
                </p>

                <button className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
