'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import DeveloperCredit from '@/components/DeveloperCredit'
import Footer from '@/components/Footer'
import Loading from '@/components/Loading'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loading />}
      </AnimatePresence>

      {!isLoading && (
        <main className="overflow-x-hidden w-full">
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Projects />
          <Process />
          <Testimonials />
          <Contact />
          <DeveloperCredit />
          <Footer />
        </main>
      )}
    </>
  )
}
