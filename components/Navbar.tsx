'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const sections = ['home','about','services','projects','process','contact','blog']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl shadow-lg border-b border-gray-100 dark:border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a href="#home" className="flex items-center gap-3" whileHover={{ scale: 1.02 }}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-lg">
              <span className="text-white font-serif font-bold text-lg">VR</span>
            </div>
            <span className={`hidden sm:block text-xl font-serif font-bold tracking-wider transition-colors ${
              isScrolled ? 'text-primary dark:text-white' : 'text-white'
            }`}>
              VIKASH RANA
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide transition-colors group ${
                  isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white/90'
                } hover:text-accent`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                  activeSection === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </a>
            ))}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg transition-all ${
                isScrolled
                  ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="#contact" className="px-5 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent/80 transition-all hover:shadow-lg hover:shadow-accent/20">
              Let's Talk
            </a>
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg transition-all ${
                isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white bg-white/10'
              }`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-all ${
                isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800"
          >
            <div className="container-custom py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-accent hover:bg-accent/5 font-medium transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {link.name}
                </motion.a>
              ))}
              <div className="pt-4 px-4">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center py-3 bg-accent text-white rounded-xl font-medium hover:bg-accent/80 transition-all"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
