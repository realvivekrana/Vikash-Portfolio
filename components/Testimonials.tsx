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
    <section className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-[0.3em] text-sm font-medium uppercase mb-3">Clients</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">What They Say</h2>
          <div className="w-20 h-0.5 bg-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <Quote className="absolute top-6 right-6 text-accent/10" size={52} />
              <div className="flex items-center gap-4 mb-6">
                <img src={t.image} alt={t.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-accent/20" />
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="text-accent fill-accent" size={16} />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
