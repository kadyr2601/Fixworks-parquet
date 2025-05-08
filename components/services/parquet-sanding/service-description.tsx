"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Check } from "lucide-react"

export default function ServiceDescription() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      title: "Parquet Sanding & Restoration",
      description:
        "Professional sanding to remove scratches, stains, and old finishes, restoring your parquet to its original beauty.",
    },
    {
      title: "Multi-layer Toning",
      description:
        "Application of exclusive colors in multiple layers to achieve rich, custom finishes that enhance the natural wood grain.",
    },
    {
      title: "Bevel Restoration",
      description:
        "Precision restoration of beveled edges to define the individual parquet pieces and enhance the overall pattern.",
    },
    {
      title: "Oil-Wax Application",
      description:
        "Premium oil-wax treatments that nourish the wood while providing a natural, matte finish with excellent durability.",
    },
    {
      title: "Lacquer Finishing",
      description:
        "High-quality lacquer application for a more resilient, glossy finish that's ideal for high-traffic areas.",
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-3">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Premium Parquet Restoration</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mb-8"></div>

            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              Our parquet sanding and restoration services breathe new life into your wooden floors, revealing their
              natural beauty and extending their lifespan. Using state-of-the-art equipment and premium finishing
              products, we transform worn, damaged parquet into stunning, durable surfaces.
            </p>

            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="mt-1 mr-4 w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{service.title}</h4>
                    <p className="text-zinc-400">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border border-amber-500/30 z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-amber-500/30 z-0"></div>

              {/* Main image */}
              <div className="relative z-10 overflow-hidden">
                <Image
                  src="/parquet-sanding-process.png"
                  alt="Parquet Sanding Process"
                  width={600}
                  height={750}
                  className="object-cover w-full h-[600px]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
