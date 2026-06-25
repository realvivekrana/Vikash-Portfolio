'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Process', href: '#process' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const [active, setActive] = useState('home')
  const lastY = useRef(0)
  const { scrollY } = useScroll()

  // Hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 50)
    setHidden(y > 150 && y > lastY.current && !mobileOpen)
    lastY.current = y
  })

  // Active section tracking
  useEffect(() => {
    const onScroll = () => {
      const ids = ['home','about','services','projects','process','blog','contact']
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(ids[i]); break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-2xl shadow-[0_1px_40px_rgba(0,0,0,0.08)] border-b border-gray-100/80 dark:border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">

            {/* ── Logo ── */}
            <motion.a
              href="#home"
              className="flex items-center gap-3 flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-yellow-600 rounded-xl shadow-lg shadow-accent/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-serif font-bold text-[17px] tracking-tight">VR</span>
                </div>
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span className={`text-[15px] font-serif font-bold tracking-[0.15em] transition-colors duration-300 ${
                  scrolled ? 'text-gray-900 dark:text-white' : 'text-white'
                }`}>
                  VIKASH RANA
                </span>
                <span className={`text-[9px] tracking-[0.35em] uppercase font-medium transition-colors duration-300 ${
                  scrolled ? 'text-accent' : 'text-white/60'
                }`}>
                  Interior Designer
                </span>
              </div>
            </motion.a>

            {/* ── Desktop Links ── */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => {
                const isActive = active === link.href.slice(1)
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 text-[13px] font-medium tracking-wide rounded-lg transition-all duration-200 group ${
                      isActive
                        ? scrolled ? 'text-accent' : 'text-white'
                        : scrolled
                          ? 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                          : 'text-white/75 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className={`absolute inset-0 rounded-lg ${
                          scrolled ? 'bg-accent/10' : 'bg-white/10'
                        }`}
                        transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                    )}
                  </a>
                )
              })}
            </nav>

            {/* ── Right Actions ── */}
            <div className="flex items-center gap-2">
              {/* Dark mode */}
              <motion.button
                onClick={() => setDark(!dark)}
                whileTap={{ scale: 0.9 }}
                className={`hidden sm:flex p-2 rounded-lg transition-all ${
                  scrolled
                    ? 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={dark ? 'sun' : 'moon'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {dark ? <Sun size={18} /> : <Moon size={18} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              {/* CTA */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-[13px] font-semibold rounded-xl shadow-lg shadow-accent/25 hover:bg-accent/85 hover:shadow-accent/40 transition-all"
              >
                Let's Talk
                <ChevronDown size={14} className="-rotate-90 opacity-70" />
              </motion.a>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 rounded-lg transition-all ${
                  scrolled
                    ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={mobileOpen ? 'close' : 'open'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Fullscreen Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] bg-white dark:bg-gray-950 shadow-2xl lg:hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 h-[72px] border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-white font-serif font-bold text-sm">VR</span>
                  </div>
                  <span className="font-serif font-bold text-sm tracking-widest text-gray-900 dark:text-white">VIKASH RANA</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 px-4 py-6 overflow-y-auto">
                <div className="space-y-1">
                  {navLinks.map((link, i) => {
                    const isActive = active === link.href.slice(1)
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-medium transition-all ${
                          isActive
                            ? 'bg-accent/10 text-accent'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                        }`}
                      >
                        <span>{link.name}</span>
                        {isActive && <span className="w-2 h-2 rounded-full bg-accent" />}
                      </motion.a>
                    )
                  })}
                </div>
              </nav>

              {/* Footer */}
              <div className="px-4 pb-8 pt-4 border-t border-gray-100 dark:border-gray-800 space-y-3">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center py-3.5 bg-accent text-white rounded-xl font-semibold hover:bg-accent/85 transition-all shadow-lg shadow-accent/20"
                >
                  Let's Talk
                </a>
                <div className="flex items-center justify-between px-2">
                  <span className="text-xs text-gray-400">Theme</span>
                  <button
                    onClick={() => setDark(!dark)}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-accent transition-colors"
                  >
                    {dark ? <><Sun size={16} /> Light</> : <><Moon size={16} /> Dark</>}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
