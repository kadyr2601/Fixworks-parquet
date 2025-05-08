"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Droplets } from "lucide-react"

export default function ParquetCleaningHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/luxury-parquet-water.png"
          alt="Luxury parquet cleaning"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      {/* Animated water droplet particles */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              top: `${Math.random() * -10}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.7,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              top: `${100 + Math.random() * 10}%`,
              opacity: [0.7, 0.9, 0.7],
              scale: [Math.random() * 0.5 + 0.5, Math.random() * 0.7 + 0.3, Math.random() * 0.5 + 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              opacity: {
                duration: Math.random() * 5 + 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                repeatType: "reverse",
              },
            }}
          >
            <Droplets
              className="text-amber-500/30"
              style={{ width: `${Math.random() * 30 + 20}px`, height: `${Math.random() * 30 + 20}px` }}
            />
          </motion.div>
        ))}
      </div>

      <div className="container relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
              <span className="text-amber-500 text-sm font-medium">Premium Cleaning Service</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Revitalize Your <span className="text-amber-500">Parquet</span> With Expert Cleaning
            </h1>

            <p className="text-zinc-300 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              Our specialized cleaning techniques restore the natural beauty of your parquet flooring, extending its
              life and enhancing your interior's elegance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-medium rounded-md transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 bg-transparent hover:bg-white/5 border border-amber-500/30 text-white font-medium rounded-md transition-all w-full sm:w-auto justify-center">
                Get a Quote
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full animate-pulse-slow"></div>
              <div className="absolute inset-[10%] bg-black/40 backdrop-blur-sm rounded-full border border-amber-500/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-3/4 h-3/4">
                  <Image
                    src="/basket-weave-parquet.png"
                    alt="Premium parquet cleaning"
                    fill
                    className="object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 left-0 w-32 h-32 bg-amber-500/10 rounded-full blur-xl"></div>

              {/* Stats */}
              <div className="absolute -bottom-5 -right-5 bg-black/80 backdrop-blur-sm border border-amber-500/20 rounded-lg p-4 shadow-xl">
                <p className="text-amber-500 font-bold text-2xl">99.7%</p>
                <p className="text-white text-sm">Dust Removal</p>
              </div>

              <div className="absolute -top-5 -left-5 bg-black/80 backdrop-blur-sm border border-amber-500/20 rounded-lg p-4 shadow-xl">
                <p className="text-amber-500 font-bold text-2xl">5+ Years</p>
                <p className="text-white text-sm">Extended Life</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
