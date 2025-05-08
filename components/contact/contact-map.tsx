"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin } from "lucide-react"

export default function ContactMap() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-zinc-950">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-amber-500 text-sm uppercase tracking-widest mb-4">Our Location</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Visit Our Showroom</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative h-[60vh] overflow-hidden border border-zinc-800 rounded-sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Stylized Map */}
          <div className="absolute inset-0 bg-[url('/dubai-stylized-map.png')] bg-cover bg-center"></div>

          {/* Map Overlay */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-50"}`}
          ></div>

          {/* Location Pin */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute -inset-8 bg-amber-500/20 rounded-full animate-ping opacity-75"></div>
              <div className="relative bg-amber-500 text-black p-4 rounded-full">
                <MapPin className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Location Info Card */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md">
            <div className="bg-black/80 backdrop-blur-md border border-zinc-800 p-6 rounded-sm">
              <h3 className="text-xl font-bold text-white mb-2">Dubai Parquet Showroom</h3>
              <p className="text-zinc-300 mb-4">Sheikh Zayed Road, Dubai, United Arab Emirates</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-amber-500 text-black font-medium hover:bg-amber-600 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-amber-500/20"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-amber-500/20"></div>
        </motion.div>
      </div>
    </section>
  )
}
