'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  className?: string
}

export default function BeforeAfterSlider({ beforeImage, afterImage, className = '' }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    handleMove(e.clientX, rect)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    handleMove(e.touches[0].clientX, rect)
  }

  return (
    <div 
      className={`relative w-full h-[400px] md:h-[500px] overflow-hidden select-none ${className}`}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={() => setIsDragging(false)}
      onTouchEnd={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
    >
      {/* After Image */}
      <div className="absolute inset-0">
        <img src={afterImage} alt="After" className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
          After
        </div>
      </div>

      {/* Before Image */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={beforeImage} alt="Before" className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Before
        </div>
      </div>

      {/* Slider */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-1 h-6 bg-gray-400 rounded-full" />
            <div className="w-1 h-6 bg-gray-400 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
