'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987',
      rating: 5,
      text: 'Vikash transformed our home into a masterpiece. His attention to detail and understanding of our needs was exceptional. We couldn\'t be happier with the result!',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1170',
      rating: 5,
      text: 'The office redesign exceeded all expectations. The space is now more functional, beautiful, and our team productivity has noticeably improved.',
    },
    {
      name: 'Anita Desai',
      role: 'Hotel Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170',
      rating: 5,
      text: 'Professional, creative, and reliable. Vikash delivered a stunning hotel suite design that our guests absolutely love. Highly recommended!',
    },
  ]

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg relative"
            >
              <Quote className="absolute top-6 right-6 text-accent/20" size={48} />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-accent fill-accent" size={18} />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
