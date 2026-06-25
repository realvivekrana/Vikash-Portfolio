'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Facebook } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(r => setTimeout(r, 1500))
    setSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  const contactInfo = [
    { icon: Phone, title: 'Phone', value: '+91 98765 43210', link: 'tel:+919876543210' },
    { icon: Mail, title: 'Email', value: 'hello@vikashrana.com', link: 'mailto:hello@vikashrana.com' },
    { icon: MapPin, title: 'Location', value: 'Gurgaon, Haryana, India', link: '#' },
  ]

  const socialLinks = [
    { icon: Instagram, link: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, link: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Facebook, link: 'https://facebook.com', label: 'Facebook' },
  ]

  return (
    <section id="contact" className="section-padding bg-secondary dark:bg-gray-900" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-[0.3em] text-sm font-medium uppercase mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Start Your Project</h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Let's create something extraordinary together. Reach out to schedule a free consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-12 text-center"
              >
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-500">Thank you! I'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input type="text" required value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent bg-gray-50 dark:bg-gray-900 transition-all outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input type="email" required value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent bg-gray-50 dark:bg-gray-900 transition-all outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input type="tel" value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent bg-gray-50 dark:bg-gray-900 transition-all outline-none"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Service</label>
                    <select value={formData.service}
                      onChange={e => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent bg-gray-50 dark:bg-gray-900 transition-all outline-none"
                    >
                      <option value="">Select service</option>
                      <option>Residential Design</option>
                      <option>Commercial Design</option>
                      <option>Space Planning</option>
                      <option>Renovation</option>
                      <option>Furniture & Styling</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea required rows={5} value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent bg-gray-50 dark:bg-gray-900 transition-all outline-none resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/80 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? 'Sending...' : <>Send Message <Send size={18} /></>}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.title}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-start gap-4 p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-accent/10 group-hover:bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                  <info.icon className="text-accent" size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{info.title}</p>
                  <p className="font-semibold">{info.value}</p>
                </div>
              </motion.a>
            ))}

            <div className="pt-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">Follow My Work</p>
              <div className="flex gap-3">
                {socialLinks.map(s => (
                  <motion.a
                    key={s.label}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors shadow-lg"
                    aria-label={s.label}
                  >
                    <s.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192846!2d76.84321989453125!3d28.4594965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
