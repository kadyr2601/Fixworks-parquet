"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronRight } from "lucide-react"

export default function AboutExpertise() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const [activeIndex, setActiveIndex] = useState(0)

  const expertiseAreas = [
    {
      title: "Custom Installation",
      description:
        "Our master craftsmen create bespoke parquet installations with meticulous attention to detail, ensuring perfect alignment and finish.",
      image: "/dubai-mansion-parquet.png",
    },
    {
      title: "Restoration & Repair",
      description:
        "We breathe new life into historic and damaged parquet flooring, preserving its character while restoring its beauty.",
      image: "/luxury-home-parquet-restoration.png",
    },
    {
      title: "Design Consultation",
      description:
        "Our design experts work closely with clients to select the perfect wood, pattern, and finish for each unique space.",
      image:
        "/placeholder.svg?height=1080&width=1920&query=interior designer discussing parquet samples with client in luxury showroom",
    },
    {
      title: "Maintenance",
      description:
        "Our specialized maintenance services ensure your parquet flooring retains its beauty and integrity for generations.",
      image: "/placeholder.svg?height=1080&width=1920&query=professional maintenance of luxury parquet flooring",
    },
  ]

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-zinc-950">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="inline-block text-amber-500 text-sm uppercase tracking-widest mb-4">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Mastery in Every Detail</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left side - Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 border-l-2 pl-6 py-4 ${
                  activeIndex === index
                    ? "border-amber-500 bg-amber-500/5"
                    : "border-zinc-800 hover:border-amber-500/50"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-xl font-medium transition-colors duration-300 ${
                      activeIndex === index ? "text-amber-500" : "text-white"
                    }`}
                  >
                    {area.title}
                  </h3>

                  <ChevronRight
                    className={`w-5 h-5 transition-all duration-300 ${
                      activeIndex === index
                        ? "text-amber-500 translate-x-0 opacity-100"
                        : "text-zinc-600 -translate-x-2 opacity-0"
                    }`}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-2 relative h-[60vh] overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={expertiseAreas[activeIndex].image || "/placeholder.svg"}
                    alt={expertiseAreas[activeIndex].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl font-bold text-white mb-4">{expertiseAreas[activeIndex].title}</h3>
                    <p className="text-zinc-300 text-lg max-w-2xl">{expertiseAreas[activeIndex].description}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-amber-500/20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-amber-500/20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
