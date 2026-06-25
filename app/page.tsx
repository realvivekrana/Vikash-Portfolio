'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Services from '@/components/Services'
import ProjectShowcase from '@/components/ProjectShowcase'
import Process from '@/components/Process'
import MaterialPalette from '@/components/MaterialPalette'
import Testimonials from '@/components/Testimonials'
import Blog from '@/components/Blog'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Loading from '@/components/Loading'
import ScrollProgress from '@/components/ScrollProgress'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loading />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <ScrollProgress />
          <main className="overflow-x-hidden w-full">
            <Navbar />
            <Hero />
            <Stats />
            <About />
            <Services />
            <ProjectShowcase />
            <Process />
            <MaterialPalette />
            <Testimonials />
            <Blog />
            <FAQ />
            <Contact />
            <Footer />
          </main>
        </>
      )}
    </>
  )
}
