'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import {
  LayoutDashboard, Building2, Ruler, Hammer,
  Sofa, Sparkles, Zap, Layers, Utensils,
  Tv, Church, Bed, FileText, Box, ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: LayoutDashboard,
    title: '3D Interior Design',
    description: 'Photorealistic 3D visualizations of your space using D5 Render and V-Ray before a single item is moved.',
    features: ['Full 3D walkthrough', 'Material rendering', 'D5 Render / V-Ray'],
  },
  {
    icon: FileText,
    title: 'Technical Drawings',
    description: 'Precision AutoCAD floor plans, elevation drawings, sections, and complete construction document sets.',
    features: ['AutoCAD floor plans', 'Elevation & sections', 'All technical DWG'],
  },
  {
    icon: Building2,
    title: 'Residential Design',
    description: 'Complete home interiors from concept to handover — living, dining, bedroom, kitchen, and all spaces.',
    features: ['Full-home design', 'Space planning', 'Concept to completion'],
  },
  {
    icon: Ruler,
    title: 'Space Planning',
    description: 'Intelligent layout optimization ensuring smooth traffic flow, furniture placement, and functional zones.',
    features: ['Layout planning', 'Traffic flow analysis', 'Furniture placement'],
  },
  {
    icon: Utensils,
    title: 'Modular Kitchen',
    description: 'Custom modular kitchen design with premium hardware, smart storage, and precise manufacturing drawings.',
    features: ['L / U / parallel layouts', 'Premium hardware', 'Detailed shop drawings'],
  },
  {
    icon: Tv,
    title: 'TV Panel & Feature Walls',
    description: 'Bespoke TV panels, wall feature designs, stone cladding, and veneer wall treatments for luxury appeal.',
    features: ['TV unit design', 'Feature wall panels', 'Vanity TV panel'],
  },
  {
    icon: Church,
    title: 'Mandir Design',
    description: 'Custom pooja mandir designs crafted in wood, marble, or acrylic with traditional and contemporary styles.',
    features: ['Traditional & modern', 'Wood / marble / acrylic', 'LED integration'],
  },
  {
    icon: Bed,
    title: 'Bedroom & Wardrobe',
    description: 'Master, guest, and kids bedroom design with custom beds, wardrobes, dressers, and smart storage units.',
    features: ['Custom bed design', 'Wardrobes & dressers', 'Kids room design'],
  },
  {
    icon: Layers,
    title: 'POP & False Ceiling',
    description: 'Creative POP ceiling designs, false ceiling lighting plans, coves, and coffered ceiling details.',
    features: ['POP ceiling design', 'Cove lighting', 'Coffered ceiling'],
  },
  {
    icon: Zap,
    title: 'Electrical Layout',
    description: 'Complete electrical planning including point layout, switch board positions, lighting circuits, and AC points.',
    features: ['Point layout plan', 'Switch board design', 'Light fixture plan'],
  },
  {
    icon: Box,
    title: 'Wood Work & Joinery',
    description: 'All custom wood work — panelling, shelving, cabinetry, and joinery with shop drawings and finishes.',
    features: ['Wall panelling', 'Custom cabinetry', 'Shop drawings'],
  },
  {
    icon: Hammer,
    title: 'Renovation & Execution',
    description: 'End-to-end renovation management: contractor coordination, site visits, quality control, and handover.',
    features: ['Contractor management', 'Site supervision', 'Quality handover'],
  },
  {
    icon: Sofa,
    title: 'Furniture & Styling',
    description: 'Curated furniture sourcing, art, accessories, and soft furnishings to complete the finished look.',
    features: ['Furniture sourcing', 'Art & accessories', 'Final styling'],
  },
  {
    icon: Sparkles,
    title: 'Commercial Design',
    description: 'Office, retail, hospitality, and co-working spaces designed to inspire productivity and brand identity.',
    features: ['Office interiors', 'Retail & hospitality', 'Brand-aligned design'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="py-16 md:py-24 bg-secondary dark:bg-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-accent tracking-[0.3em] text-xs sm:text-sm font-medium uppercase mb-3">What I Offer</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">Services</h2>
          <div className="w-16 sm:w-20 h-0.5 bg-accent mx-auto mb-4 sm:mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            From concept drawings to final handover — every service you need for a complete luxury interior
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: Math.floor(index / 4) * 0.1 + (index % 4) * 0.05 }}
              whileHover={{ y: -6 }}
              className="group bg-white dark:bg-gray-900 p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-accent/20 flex flex-col"
            >
              <div className="w-11 h-11 bg-accent/10 group-hover:bg-accent rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 flex-shrink-0">
                <service.icon className="text-accent group-hover:text-white transition-colors" size={22} />
              </div>
              <h3 className="text-sm sm:text-base font-bold mb-2 group-hover:text-accent transition-colors leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-xs mb-3 flex-1">
                {service.description}
              </p>
              <ul className="space-y-1 mb-3">
                {service.features.map(f => (
                  <li key={f} className="flex items-start gap-1.5 text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-1 text-accent text-xs font-semibold group-hover:gap-2 transition-all mt-auto">
                Enquire <ArrowRight size={12} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
