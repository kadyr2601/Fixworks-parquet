"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function RestorationProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      number: "01",
      title: "Assessment & Analysis",
      description:
        "Our specialists assess the damage, identify the cause, and determine the optimal restoration approach.",
      image: "/luxury-home-parquet-restoration.png",
    },
    {
      number: "02",
      title: "Material Matching",
      description: "We precisely match wood type, grain pattern, color, and finish to ensure seamless repairs.",
      image: "/luxury-hotel-lobby-parquet.png",
    },
    {
      number: "03",
      title: "Precision Restoration",
      description: "Using specialized tools, our craftsmen meticulously restore damaged areas with minimal disruption.",
      image: "/luxury-parquet-flooring.png",
    },
    {
      number: "04",
      title: "Finishing & Integration",
      description: "The restored area is carefully finished to perfectly match and blend with the surrounding floor.",
      image: "/parquet-floor-maintenance.png",
    },
    {
      number: "05",
      title: "Final Inspection",
      description: "We perform a thorough inspection to ensure the restored area is indistinguishable from the rest.",
      image: "/parquet-restoration.png",
    },
  ]

  return (
    <section ref={ref} id="restoration-process" className="py-24 bg-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Our Meticulous</span>{" "}
            <span className="text-amber-500">Restoration Process</span>
          </h2>
          <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
            Each restoration project follows our refined five-step process, ensuring exceptional results and minimal
            disruption to your space.
          </p>
        </motion.div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:rtl" : ""}`}
            >
              <div className={`${index % 2 === 1 ? "md:text-right" : ""} md:ltr`}>
                <div className="flex items-center mb-4">
                  <span className="text-5xl font-bold text-amber-500 opacity-50 mr-4">{step.number}</span>
                  <h3 className="text-3xl font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-zinc-400 text-lg mb-6">{step.description}</p>

                <div className={`flex ${index % 2 === 1 ? "justify-end" : ""}`}>
                  <div className="w-16 h-[3px] bg-amber-500"></div>
                </div>
              </div>

              <div className="relative h-[400px] overflow-hidden rounded-sm shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
