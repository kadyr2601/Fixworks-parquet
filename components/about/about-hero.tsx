"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

export default function AboutHero() {
  const containerRef = useRef(null)
  const [isMounted, setIsMounted] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div className="absolute inset-0 z-0" style={{ scale: imageScale }}>
        <Image
          src="/luxury-parquet-golden-light.png"
          alt="Luxury Parquet"
          fill
          priority
          className="object-cover brightness-[0.4]"
        />
      </motion.div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="overflow-hidden"
          >
            <motion.h1
              className="text-7xl md:text-9xl font-bold tracking-tighter mb-6 text-center"
              style={{ y: textY }}
            >
              Our <span className="text-amber-500">Legacy</span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ opacity }}
            className="max-w-xl mx-auto text-center"
          >
            <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed">
              Crafting exceptional parquet flooring experiences in Dubai since 2007.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ opacity }}
      >
        <span className="text-amber-500 text-sm uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-amber-500 to-transparent"></div>
      </motion.div>
    </section>
  )
}
