"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"

export default function AboutStory() {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div ref={textRef} style={{ opacity, y: y1 }} className="order-2 lg:order-1">
            <motion.span
              className="inline-block text-amber-500 text-sm uppercase tracking-widest mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
            >
              Our Story
            </motion.span>

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A Decade of <span className="text-amber-500">Excellence</span> in Craftsmanship
            </motion.h2>

            <div className="space-y-6">
              <motion.p
                className="text-zinc-300 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Founded in 2007, FIXWORKS began with a singular vision: to bring unparalleled craftsmanship and
                artistry to luxury flooring in the UAE. What started as a boutique operation has evolved into Dubai's
                premier parquet specialist, while maintaining our commitment to personalized service and exceptional
                quality.
              </motion.p>

              <motion.p
                className="text-zinc-300 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Our journey has been defined by continuous innovation, unwavering attention to detail, and a deep
                respect for the timeless art of parquet flooring. Today, our portfolio includes some of the most
                prestigious residential and commercial properties across Dubai and beyond.
              </motion.p>
            </div>

            <motion.div
              className="mt-10 flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500">
                <Image
                  src="/middle-eastern-businessman.png"
                  alt="Founder"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-white font-medium">Oleg Surname</p>
                <p className="text-amber-500 text-sm">Founder & CEO</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Images */}
          <motion.div className="relative h-[70vh] order-1 lg:order-2" style={{ opacity, y: y2 }}>
            <div className="absolute top-0 left-0 w-3/4 h-1/2 z-10">
              <div className="relative w-full h-full overflow-hidden">
                <Image src="/dubai-villa-parquet.png" alt="Parquet Installation" fill className="object-cover" />
                <div className="absolute inset-0 border border-amber-500/20"></div>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-3/4 h-1/2 z-0">
              <div className="relative w-full h-full overflow-hidden">
                <Image src="/dubai-mansion-parquet.png" alt="Craftsmanship" fill className="object-cover" />
                <div className="absolute inset-0 border border-amber-500/20"></div>
              </div>
            </div>

            <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 z-20 bg-black/50 backdrop-blur-sm p-6 border border-amber-500/30">
              <div className="h-full flex flex-col justify-center">
                <p className="text-5xl font-bold text-amber-500">15+</p>
                <p className="text-white mt-2">Years of Excellence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
