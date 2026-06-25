'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Homeowner, Gurgaon',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
    rating: 5,
    text: 'Vikash transformed our home into a masterpiece. The attention to detail, the quality of materials he sourced, and the final result exceeded every expectation. Absolutely world-class work.',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner, Delhi',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200',
    rating: 5,
    text: 'Our office redesign was seamless from start to finish. The space now reflects our brand identity perfectly and our team productivity has noticeably improved. Highly recommend.',
  },
  {
    name: 'Anita Desai',
    role: 'Villa Owner, Noida',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200',
    rating: 5,
    text: 'Professional, creative, punctual, and deeply talented. Vikash turned our outdated villa into a modern luxury home. Our guests are always amazed. Worth every rupee.',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-16 md:py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-10 md:mb-16">
          <p className="text-accent tracking-[0.3em] text-xs sm:text-sm font-medium uppercase mb-3">Clients</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">What They Say</h2>
          <div className="w-16 sm:w-20 h-0.5 bg-accent mx-auto" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 }}
              className="relative bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <Quote className="absolute top-5 right-5 text-accent/10" size={44} />
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <img src={t.image} alt={t.name} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-accent/20 flex-shrink-0" />
                <div>
                  <p className="font-bold text-sm sm:text-base">{t.name}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(t.rating)].map((_, j) => <Star key={j} className="text-accent fill-accent" size={14} />)}
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-xs sm:text-sm">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
