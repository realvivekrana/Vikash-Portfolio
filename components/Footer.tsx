'use client'

import { Instagram, Linkedin, Facebook, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Instagram, link: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, link: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Facebook, link: 'https://facebook.com', label: 'Facebook' },
  ]

  return (
    <>
      <footer className="bg-primary dark:bg-gray-950 text-white py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">VIKASH RANA</h3>
              <p className="text-gray-400 mb-4">
                Creating timeless interiors that inspire and elevate everyday living.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Gurgaon, Haryana, India</li>
                <li>
                  <a href="tel:+919876543210" className="hover:text-accent transition-colors">
                    +91 98765 43210
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@vikashrana.com" className="hover:text-accent transition-colors">
                    hello@vikashrana.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400 mb-3">
              &copy; {new Date().getFullYear()} Vikash Rana Interior Design. All rights reserved.
            </p>
            
            {/* Developer Credit */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-gray-500">
              <span>Portfolio Website Designed by</span>
              <a
                href="https://realvivekrana.github.io/vivek-portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1"
              >
                Vivek Kumar Rana
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center shadow-lg hover:bg-accent/80 transition-colors z-40"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </>
  )
}
