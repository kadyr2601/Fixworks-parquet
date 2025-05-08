"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function HeroParallax() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-500`}
          style={{ filter: "brightness(1)" }}
        >
          <source src="/MainBanner.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-transparent"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Exquisite Parquet Flooring in Dubai
            </h1>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl">
              Transforming luxury spaces with masterfully crafted parquet flooring. Unparalleled craftsmanship for
              Dubai's most prestigious properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-amber-500 hover:bg-amber-600 text-black rounded-none px-8 py-6 text-lg">
                Explore Our Work
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                className="border-amber-500/30 text-white hover:bg-amber-500/10 rounded-none px-8 py-6 text-lg"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center">
          <span className="text-amber-500 text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-amber-500/30 rounded-full flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 bg-amber-500 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
