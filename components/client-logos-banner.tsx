"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const clientLogos = [
  { name: "Atlantis The Royal", logo: "/logos/p1.webp" },
  { name: "Dubai Hills Estate", logo: "/logos/p2.webp" },
  { name: "Transneft", logo: "/logos/p3.webp" },
  { name: "XXII Carat", logo: "/logos/p4.webp" },
  { name: "Sterling", logo: "/logos/p5.webp" },
  { name: "Bulgari", logo: "/logos/p6.webp" },
  { name: "Ritz-Carlton", logo: "/logos/p7.webp" },
  { name: "Ritz-Carlton", logo: "/logos/p8.webp" },
  { name: "Ritz-Carlton", logo: "/logos/p9.webp" },
  { name: "Ritz-Carlton", logo: "/logos/p10.webp" },
  { name: "Ritz-Carlton", logo: "/logos/p11.webp" },
  { name: "Ritz-Carlton", logo: "/logos/p12.webp" },
]

export default function ClientLogosBanner() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto mb-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-3">Our Realized Projects</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-10">Trusted by Dubai's Elite</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-zinc-900/50 rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
              <p className="text-4xl font-bold text-amber-500 mb-2">1500+</p>
              <p className="text-zinc-400">defects repair per day</p>
            </div>
            <div className="bg-zinc-900/50 rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
              <p className="text-4xl font-bold text-amber-500 mb-2">300+</p>
              <p className="text-zinc-400">active projects in continuous operation</p>
            </div>
            <div className="bg-zinc-900/50 rounded-lg p-6 text-center transform hover:scale-105 transition-transform">
              <p className="text-4xl font-bold text-amber-500 mb-2">750+</p>
              <p className="text-zinc-400">solved issues per day</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden" ref={containerRef}>
        {/* Gradient overlay left */}
        <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-black to-transparent z-10"></div>

        {/* Animated logos */}
        <motion.div
          className="flex items-center gap-16 py-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {/* Double the logos for seamless loop */}
          {[...clientLogos, ...clientLogos].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 bg-zinc-900/50 rounded-lg h-32 w-48 flex items-center justify-center hover:bg-zinc-800/70 transition-colors"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="object-contain h-full w-full invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </motion.div>

        {/* Gradient overlay right */}
        <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
      </div>
    </section>
  )
}
