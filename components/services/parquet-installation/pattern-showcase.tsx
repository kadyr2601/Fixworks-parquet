"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"

export default function PatternShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activePattern, setActivePattern] = useState("modular")

  const patterns = [
    {
      id: "modular",
      name: "Modular Parquet",
      description:
        "Geometric patterns that create a stunning visual impact. Our modular parquet installations combine traditional craftsmanship with contemporary design for a truly unique floor.",
      image: "/dubai-villa-parquet.png",
      price: "From 170 AED / Square Meter",
      features: [
        "Geometric precision",
        "Multiple wood species available",
        "Custom patterns possible",
        "Ideal for formal spaces",
      ],
    },
    {
      id: "chevron",
      name: "Chevron",
      description:
        "The classic chevron pattern creates a sense of movement and elegance. Each piece is precision-cut at a 45-degree angle for perfect alignment and a seamless flow.",
      image: "/local-restoration-hero.png",
      price: "From 198 AED / Square Meter",
      features: [
        "45-degree precision cuts",
        "Traditional European style",
        "Creates visual movement",
        "Suits both classic and modern interiors",
      ],
    },
    {
      id: "herringbone",
      name: "Herringbone",
      description:
        "The timeless herringbone pattern brings sophistication to any space. Our expert installation ensures perfect alignment for a stunning visual effect that has stood the test of time.",
      image: "/luxury-dubai-parquet.png",
      price: "From 185 AED / Square Meter",
      features: ["Timeless elegance", "90-degree precision cuts", "Multiple size options", "Versatile application"],
    },
    {
      id: "deck",
      name: "Deck",
      description:
        "Clean, straight planks that showcase the natural beauty of wood. Our deck installations offer a contemporary look with the warmth and character that only real wood can provide.",
      image: "/luxury-home-parquet-restoration.png",
      price: "From 250 AED / Square Meter",
      features: [
        "Wide plank options",
        "Showcases wood grain",
        "Contemporary aesthetic",
        "Various width configurations",
      ],
    },
    {
      id: "versailles",
      name: "Versailles",
      description:
        "Inspired by the Palace of Versailles, this intricate pattern creates a luxurious statement. Our craftsmen meticulously assemble each panel for a floor of unparalleled elegance.",
      image: "/luxury-parquet-flooring.png",
      price: "From 320 AED / Square Meter",
      features: ["Royal elegance", "Intricate geometric design", "Premium craftsmanship", "Statement luxury flooring"],
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-3">Our Specialties</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Exquisite Parquet Patterns</h3>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-6"></div>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
            Explore our range of premium parquet patterns, each offering a unique aesthetic to elevate your space with
            timeless elegance and exceptional craftsmanship.
          </p>
        </motion.div>

        {/* Pattern Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {patterns.map((pattern) => (
            <button
              key={pattern.id}
              onClick={() => setActivePattern(pattern.id)}
              className={`px-6 py-3 border transition-colors ${
                activePattern === pattern.id
                  ? "bg-amber-500 text-black border-amber-500"
                  : "border-zinc-700 text-zinc-400 hover:border-amber-500/50 hover:text-amber-500"
              }`}
            >
              {pattern.name}
            </button>
          ))}
        </div>

        {/* Pattern Display */}
        <AnimatePresence mode="wait">
          {patterns
            .filter((pattern) => pattern.id === activePattern)
            .map((pattern) => (
              <motion.div
                key={pattern.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Pattern Image */}
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 border border-amber-500/30 z-0"></div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-amber-500/30 z-0"></div>

                  <div className="relative z-10 overflow-hidden">
                    <Image
                      src={pattern.image || "/placeholder.svg"}
                      alt={pattern.name}
                      width={600}
                      height={600}
                      className="object-cover w-full h-[500px]"
                    />
                  </div>
                </div>

                {/* Pattern Details */}
                <div>
                  <h4 className="text-3xl font-bold text-white mb-4">{pattern.name}</h4>
                  <p className="text-zinc-300 text-lg mb-6">{pattern.description}</p>

                  <div className="mb-8">
                    <h5 className="text-amber-500 font-medium mb-4">Features:</h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {pattern.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-amber-500 mr-3"></div>
                          <span className="text-zinc-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between border-t border-zinc-800 pt-6">
                    <div className="text-2xl font-bold text-amber-500">{pattern.price}</div>

                  </div>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
