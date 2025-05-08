"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function AboutPhilosophy() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const philosophyPoints = [
    {
      number: "01",
      title: "Uncompromising Quality",
      description:
        "We source only the finest materials and employ time-honored techniques to create floors of exceptional quality and longevity.",
    },
    {
      number: "02",
      title: "Artisanal Craftsmanship",
      description:
        "Our master craftsmen bring decades of experience and passion to every project, treating each floor as a unique work of art.",
    },
    {
      number: "03",
      title: "Innovative Approach",
      description:
        "While respecting traditional methods, we continuously explore new techniques and technologies to push the boundaries of what's possible.",
    },
    {
      number: "04",
      title: "Client Partnership",
      description:
        "We believe in collaborative relationships with our clients, working closely together to bring their vision to life.",
    },
  ]

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <motion.div style={{ opacity, y: y1 }} className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-amber-500 text-sm uppercase tracking-widest mb-4">Our Philosophy</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Principles That Guide Us</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-8"></div>
          <p className="text-zinc-300 text-lg">
            Our approach to parquet flooring is guided by a set of core principles that define everything we do, from
            client consultation to project completion.
          </p>
        </motion.div>

        <motion.div style={{ opacity, y: y2 }} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {philosophyPoints.map((point, index) => (
            <div key={index} className="group">
              <div className="bg-zinc-900/30 border border-zinc-800 p-8 h-full hover:border-amber-500/30 transition-all duration-500 relative overflow-hidden">
                {/* Background glow effect */}
                <div className="absolute -inset-1 bg-amber-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Number */}
                <div className="text-6xl font-bold text-amber-500/10 absolute top-4 right-4 transition-all duration-500 group-hover:text-amber-500/20">
                  {point.number}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">{point.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{point.description}</p>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-12 h-12 border-l border-t border-amber-500/20 -mb-[1px] -mr-[1px] transform rotate-180 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
