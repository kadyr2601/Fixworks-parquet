"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const galleryItems = [
  {
    id: 1,
    title: "Herringbone Pattern",
    description: "Classic herringbone pattern in a luxury Dubai villa",
    image: "/placeholder.svg?height=600&width=800&query=herringbone parquet flooring in luxury room",
    category: "Residential",
  },
  {
    id: 2,
    title: "Chevron Design",
    description: "Elegant chevron parquet in a penthouse apartment",
    image: "/placeholder.svg?height=600&width=800&query=chevron parquet flooring in modern apartment",
    category: "Residential",
  },
  {
    id: 3,
    title: "Versailles Pattern",
    description: "Intricate Versailles pattern for a royal feel",
    image: "/placeholder.svg?height=600&width=800&query=versailles pattern parquet flooring in luxury home",
    category: "Residential",
  },
  {
    id: 4,
    title: "Hotel Lobby",
    description: "Custom parquet design for a 5-star hotel lobby",
    image: "/placeholder.svg?height=600&width=800&query=luxury hotel lobby with custom parquet flooring",
    category: "Commercial",
  },
  {
    id: 5,
    title: "Restaurant Flooring",
    description: "Durable yet elegant parquet for fine dining",
    image: "/placeholder.svg?height=600&width=800&query=upscale restaurant with parquet flooring",
    category: "Commercial",
  },
  {
    id: 6,
    title: "Basket Weave",
    description: "Intricate basket weave pattern in a Dubai mansion",
    image: "/placeholder.svg?height=600&width=800&query=basket weave parquet pattern in luxury home",
    category: "Residential",
  },
]

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredItems =
    activeFilter === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-3">Our Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Stunning Transformations</h3>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-6"></div>
          <p className="text-zinc-400 text-lg">
            Explore our collection of premium parquet flooring projects across Dubai's most prestigious properties.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Residential", "Commercial"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 border ${
                activeFilter === filter
                  ? "bg-amber-500 text-black border-amber-500"
                  : "border-zinc-700 text-zinc-400 hover:border-amber-500/50 hover:text-amber-500"
              } transition-colors`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
              className="group relative overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h4 className="text-xl font-bold text-white">{item.title}</h4>
                <p className="text-zinc-300 mt-2">{item.description}</p>
                <span className="inline-block mt-3 text-amber-500 text-sm">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-amber-500/30 text-amber-500 hover:bg-amber-500/10 transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}
