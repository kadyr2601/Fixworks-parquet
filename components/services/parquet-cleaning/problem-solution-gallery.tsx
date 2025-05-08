"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ChevronRight } from "lucide-react"

export default function ProblemSolutionGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeCase, setActiveCase] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)

  const caseStudies = [
    {
      id: 1,
      title: "Red Wine Spill",
      description:
        "A luxury apartment in Downtown Dubai with a red wine spill that had penetrated deep into the parquet seams.",
      solution:
        "Our specialized extraction process combined with our proprietary cleaning solution removed all traces of the wine without damaging the finish.",
      beforeImage: "/dubai-villa-herringbone-floor.png",
      afterImage: "/dubai-villa-parquet.png",
    },
    {
      id: 2,
      title: "Water Damage",
      description:
        "A villa in Palm Jumeirah with water damage from a leaking air conditioning unit that caused the parquet to warp and discolor.",
      solution:
        "Our moisture extraction technology and specialized drying process restored the parquet to its original condition without replacement.",
      beforeImage: "/luxury-dubai-parquet.png",
      afterImage: "/luxury-home-parquet-restoration.png",
    },
    {
      id: 3,
      title: "Years of Neglect",
      description:
        "A heritage property with 25-year-old parquet flooring that had accumulated decades of dirt, grime, and wear.",
      solution:
        "Our deep cleaning system removed years of buildup while our restoration process brought back the floor's natural luster and color.",
      beforeImage: "/luxury-parquet-flooring.png",
      afterImage: "/luxury-parquet-golden-light.png",
    },
    {
      id: 4,
      title: "Pet Stains",
      description:
        "A family home with multiple pet stains that had penetrated the wood and caused odor issues in the parquet flooring.",
      solution:
        "Our enzymatic cleaning process eliminated both stains and odors by breaking down the organic compounds at a molecular level.",
      beforeImage: "/luxury-parquet-install.png",
      afterImage: "/luxury-parquet-water.png",
    },
  ]

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value)
  }

  return (
    <section ref={ref} className="py-24 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-3">Case Studies</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Problem-Solution Gallery</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-6"></div>
            <p className="text-zinc-400 text-lg">
              Explore real-world examples of our parquet cleaning expertise. Drag the slider to see the dramatic before
              and after results.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Case Selection Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`cursor-pointer p-6 border transition-all ${
                    activeCase === index
                      ? "bg-amber-500/10 border-amber-500"
                      : "bg-zinc-900/50 border-zinc-800 hover:border-amber-500/50"
                  }`}
                  onClick={() => setActiveCase(index)}
                >
                  <h4 className={`text-xl font-bold mb-2 ${activeCase === index ? "text-amber-500" : "text-white"}`}>
                    {caseStudy.title}
                  </h4>
                  <p className="text-zinc-400 text-sm line-clamp-2">{caseStudy.description}</p>
                  {activeCase === index && (
                    <div className="flex items-center mt-3 text-amber-500 text-sm font-medium">
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Before/After Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-zinc-900/50 border border-zinc-800 p-6">
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-white mb-2">{caseStudies[activeCase].title}</h4>
                <div className="w-12 h-1 bg-amber-500 mb-4"></div>
                <p className="text-zinc-300">{caseStudies[activeCase].description}</p>
              </div>

              {/* Before/After Slider */}
              <div className="relative aspect-video mb-6 overflow-hidden">
                {/* Before Image (Full width) */}
                <div className="absolute inset-0">
                  <Image
                    src={
                      caseStudies[activeCase].beforeImage ||
                      "/placeholder.svg?height=400&width=800&query=dirty+parquet+floor"
                    }
                    alt={`Before: ${caseStudies[activeCase].title}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* After Image (Clipped by slider) */}
                <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
                  <Image
                    src={
                      caseStudies[activeCase].afterImage ||
                      "/placeholder.svg?height=400&width=800&query=clean+parquet+floor"
                    }
                    alt={`After: ${caseStudies[activeCase].title}`}
                    fill
                    className="object-cover"
                  />

                  {/* Vertical divider line */}
                  <div className="absolute top-0 right-0 bottom-0 w-1 bg-amber-500"></div>
                </div>

                {/* Slider labels */}
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 text-sm">Before</div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 text-sm">After</div>

                {/* Slider control */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={handleSliderChange}
                  className="absolute bottom-4 left-4 right-4 w-[calc(100%-32px)] slider-amber"
                  style={{
                    // Custom styling for the range input
                    appearance: "none",
                    height: "6px",
                    background: "rgba(245, 158, 11, 0.3)",
                    outline: "none",
                    borderRadius: "3px",
                  }}
                />
              </div>

              <div>
                <h5 className="text-amber-500 font-medium mb-2">Our Solution</h5>
                <p className="text-zinc-300">{caseStudies[activeCase].solution}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
