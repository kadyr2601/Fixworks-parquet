"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ChevronRight } from "lucide-react"

export default function Expertise() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const expertiseAreas = [
    {
      title: "Custom Installation",
      description: "Precision installation of bespoke parquet patterns tailored to each unique space.",
      image: "/placeholder.svg?height=600&width=800&query=luxury parquet flooring installation in progress",
    },
    {
      title: "Restoration & Repair",
      description: "Expert restoration of vintage and damaged parquet flooring to its original splendor.",
      image: "/placeholder.svg?height=600&width=800&query=parquet floor restoration in luxury home",
    },
    {
      title: "Maintenance",
      description: "Professional maintenance services to preserve the beauty and longevity of parquet floors.",
      image: "/placeholder.svg?height=600&width=800&query=professional parquet floor maintenance",
    },
    {
      title: "Design Consultation",
      description: "Expert guidance on wood selection, patterns, and finishes to achieve the perfect aesthetic.",
      image: "/placeholder.svg?height=600&width=800&query=interior designer discussing parquet samples with client",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-24 bg-zinc-900/30 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-3">Our Specialties</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Areas of Expertise</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-6"></div>
            <p className="text-zinc-400 text-lg">
              With decades of combined experience, our team offers unparalleled expertise in all aspects of parquet
              flooring for Dubai's most prestigious properties.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {expertiseAreas.map((area, index) => (
            <motion.div key={index} variants={itemVariants} className="group relative overflow-hidden">
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src={area.image || "/placeholder.svg"}
                  alt={area.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80"></div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h4 className="text-2xl font-bold text-white mb-3">{area.title}</h4>
                  <p className="text-zinc-300 mb-6">{area.description}</p>

                  <div className="flex items-center text-amber-500 group-hover:translate-x-2 transition-transform duration-300">
                    <span className="mr-2">Learn more</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
