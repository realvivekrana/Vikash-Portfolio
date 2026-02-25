'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Mail, Phone, Linkedin, Globe } from 'lucide-react'

export default function DeveloperCredit() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center"
        >
          {/* Header */}
          <div className="flex items-center justify-center mb-6">
            <Code className="text-accent mr-2" size={24} />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
              Designed & Developed by
            </h3>
          </div>

          {/* Developer Info */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 max-w-md mx-auto"
          >
            <h4 className="text-2xl sm:text-3xl font-serif font-bold text-primary dark:text-white mb-2">
              <a
                href="https://realvivekrana.github.io/vivek-portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors inline-flex items-center gap-2"
              >
                Vivek Kumar Rana
                <Globe size={20} className="text-accent" />
              </a>
            </h4>
            <p className="text-accent font-medium mb-6 text-sm sm:text-base">
              Web Designer & Developer
            </p>

            {/* Contact Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
              <motion.a
                href="tel:+919304718075"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 rounded-lg transition-all group w-full sm:w-auto justify-center"
              >
                <Phone size={16} className="text-accent group-hover:rotate-12 transition-transform" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  +91 9304718075
                </span>
              </motion.a>

              <motion.a
                href="mailto:vivekranaworks@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 rounded-lg transition-all group w-full sm:w-auto justify-center"
              >
                <Mail size={16} className="text-accent group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  vivekranaworks@gmail.com
                </span>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center space-x-3">
              <motion.a
                href="https://realvivekrana.github.io/vivek-portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-accent/10 hover:bg-accent hover:text-white rounded-full flex items-center justify-center transition-all"
                aria-label="Portfolio - Vivek Kumar Rana"
              >
                <Globe size={18} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mrvivekrana/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-accent/10 hover:bg-accent hover:text-white rounded-full flex items-center justify-center transition-all"
                aria-label="LinkedIn - Vivek Kumar Rana"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                href="https://x.com/mrvivaanrana"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-accent/10 hover:bg-accent hover:text-white rounded-full flex items-center justify-center transition-all"
                aria-label="Twitter/X - Vivek Kumar Rana"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-6 text-sm text-gray-600 dark:text-gray-400 italic"
          >
            "Crafting digital experiences with passion and precision"
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
