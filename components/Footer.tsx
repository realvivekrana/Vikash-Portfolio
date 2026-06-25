'use client'

import { useState, useEffect } from 'react'
import { Instagram, Linkedin, Facebook, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Instagram, link: 'https://www.instagram.com/vikash_kr_rana_26?igsh=czY4Y2kzN3g0N2o3&utm_source=qr', label: 'Instagram' },
    { icon: Linkedin, link: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Facebook, link: 'https://facebook.com', label: 'Facebook' },
  ]

  return (
    <>
      <footer className="bg-gray-950 text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
            {/* Brand — full width on mobile */}
            <div className="sm:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent flex items-center justify-center">
                  <span className="text-white font-serif font-bold text-base sm:text-lg">VK</span>
                </div>
                <span className="text-xl sm:text-2xl font-serif font-bold">VIKASH KUMAR RANA</span>
              </div>
              <p className="text-gray-400 mb-5 sm:mb-6 leading-relaxed max-w-sm text-sm">
                Premium interior design services creating timeless, luxurious spaces in Gurgaon and across the NCR region.
              </p>
              <div className="flex gap-3">
                {socialLinks.map(s => (
                  <a key={s.label} href={s.link} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-white/5 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
                    aria-label={s.label}
                  >
                    <s.icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-xs uppercase tracking-widest text-gray-400">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                      <span className="w-0 h-0.5 bg-accent group-hover:w-3 transition-all" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-xs uppercase tracking-widest text-gray-400">Contact</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm text-gray-400">
                <li>Gurgaon, Haryana, India</li>
                <li><a href="tel:+916207634535" className="hover:text-accent transition-colors">+91 6207634535</a></li>
                <li><a href="mailto:hello@vikashrana.com" className="hover:text-accent transition-colors break-all">hello@vikashrana.com</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-6 sm:pt-8">
            <div className="flex flex-col items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 text-center">
              <p>&copy; {new Date().getFullYear()} Vikash Kumar Rana Interior Design. All rights reserved.</p>
              <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
                <span>Portfolio Website Designed & Developed by</span>
                <a
                  href="https://portfolio-vivek-blue.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 font-semibold transition-colors underline underline-offset-2"
                >
                  Vivek Kumar Rana ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center shadow-xl hover:bg-accent/80 transition-colors z-40 hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </>
  )
}

