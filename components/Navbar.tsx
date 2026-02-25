'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            {/* Mobile Logo - Stylized VR */}
            <div className={`sm:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent/80 shadow-lg ${
              isScrolled ? '' : 'ring-2 ring-white/30'
            }`}>
              <span className="text-white font-serif font-bold text-lg">VR</span>
            </div>
            
            {/* Desktop Logo - Full Name */}
            <span className={`hidden sm:inline text-2xl font-serif font-bold tracking-wider ${
              isScrolled ? 'text-primary dark:text-white' : 'text-white'
            }`}>
              VIKASH RANA
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium tracking-wide hover:text-accent transition-colors ${
                  isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all ${
                isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white bg-white/10 hover:bg-white/20'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all ${
                isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white bg-white/10'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-all ${
                isScrolled 
                  ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700' 
                  : 'text-white bg-white/10 hover:bg-white/20'
              }`}
              aria-label="Toggle menu"
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
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t dark:border-gray-800 shadow-lg"
          >
            <div className="container-custom py-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-accent hover:bg-accent/5 dark:hover:bg-accent/10 font-medium rounded-lg transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
