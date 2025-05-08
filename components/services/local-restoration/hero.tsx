"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function LocalRestorationHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Dark overlay with grain texture */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Background image */}
      <Image
        src="/local-restoration-hero.png"
        alt="Parquet local restoration"
        fill={true}
        className="object-cover object-center"
      />

      {/* Content container */}
      <div className="relative container mx-auto h-full flex items-center z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-4">
              <span className="block">Precision</span>
              <span className="text-amber-500">Local Restoration</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl text-zinc-300 max-w-2xl mb-8">
              Specialized repair service for damaged parquet sections without replacing the entire floor. Our master
              craftsmen restore your floor's beauty with precision and artistry.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/contact"
              className="px-8 py-4 bg-amber-500 text-black font-medium hover:bg-amber-600 transition-colors inline-block text-center"
            >
              Request Free Assessment
            </a>
            <a
              href="#restoration-process"
              className="px-8 py-4 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black transition-colors inline-block text-center"
            >
              Explore Our Process
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
