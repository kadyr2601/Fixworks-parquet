"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export default function Partnerships() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const partners = [
    {
      name: "Luxury Hotels Group",
      logo: "/placeholder.svg?height=200&width=200&query=minimal luxury hotel logo",
    },
    {
      name: "Emirates Developers",
      logo: "/placeholder.svg?height=200&width=200&query=minimal real estate developer logo",
    },
    {
      name: "Royal Interiors",
      logo: "/placeholder.svg?height=200&width=200&query=minimal interior design company logo",
    },
    {
      name: "Dubai Architects Association",
      logo: "/placeholder.svg?height=200&width=200&query=minimal architecture association logo",
    },
    {
      name: "Premium Woods Supplier",
      logo: "/placeholder.svg?height=200&width=200&query=minimal wood supplier logo",
    },
    {
      name: "Sustainable Materials Coalition",
      logo: "/placeholder.svg?height=200&width=200&query=minimal sustainability certification logo",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-3">Our Collaborations</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Trusted Partners</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-6"></div>
            <p className="text-zinc-400 text-lg">
              We're proud to collaborate with Dubai's most prestigious brands and organizations, creating exceptional
              spaces together.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="bg-zinc-900/50 border border-zinc-800 p-6 h-full flex items-center justify-center hover:border-amber-500/30 transition-colors duration-300">
                <div className="relative h-20 w-full">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    fill
                    className="object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
