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
    { icon: Instagram, link: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, link: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Facebook, link: 'https://facebook.com', label: 'Facebook' },
  ]

  return (
    <>
      <footer className="bg-gray-950 text-white pt-16 pb-8">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <span className="text-white font-serif font-bold text-lg">VR</span>
                </div>
                <span className="text-2xl font-serif font-bold">VIKASH RANA</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
                Premium interior design services creating timeless, luxurious spaces in Gurgaon and across the NCR region.
              </p>
              <div className="flex gap-3">
                {socialLinks.map(s => (
                  <a key={s.label} href={s.link} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
                    aria-label={s.label}
                  >
                    <s.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest text-gray-400">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map(link => (
                  <li key={link.name}>
                    <a href={link.href}
                      className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-accent group-hover:w-3 transition-all" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest text-gray-400">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>Gurgaon, Haryana, India</li>
                <li><a href="tel:+919876543210" className="hover:text-accent transition-colors">+91 98765 43210</a></li>
                <li><a href="mailto:hello@vikashrana.com" className="hover:text-accent transition-colors">hello@vikashrana.com</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} Vikash Rana Interior Design. All rights reserved.</p>
              <div className="flex items-center gap-2">
                <span>Portfolio Website Designed by</span>
                <a href="https://realvivekrana.github.io/vivek-portfolio/" target="_blank" rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 font-medium transition-colors"
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
