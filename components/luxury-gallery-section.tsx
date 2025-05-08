"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ChevronRight, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"

// Gallery items with different aspect ratios and sizes
const galleryItems = [
  {
    id: 1,
    title: "Herringbone Elegance",
    description: "Classic herringbone pattern in a luxury Dubai villa",
    image: "/dubai-villa-herringbone-floor.png",
    size: "large", // large image
    aspectRatio: "portrait",
  },
  {
    id: 2,
    title: "Chevron Masterpiece",
    description: "Elegant chevron parquet in a penthouse apartment",
    image: "/dubai-chevron-flooring.png",
    size: "medium",
    aspectRatio: "landscape",
  },
  {
    id: 3,
    title: "Versailles Pattern",
    description: "Intricate Versailles pattern for a royal feel",
    image: "/luxury-dubai-parquet.png",
    size: "small",
    aspectRatio: "square",
  },
  {
    id: 4,
    title: "Hotel Lobby Transformation",
    description: "Custom parquet design for a 5-star hotel lobby",
    image: "/dubai-hotel-lobby.png",
    size: "large",
    aspectRatio: "landscape",
  },
  {
    id: 5,
    title: "Fine Dining Experience",
    description: "Durable yet elegant parquet for fine dining",
    image: "/upscale-dubai-restaurant.png",
    size: "medium",
    aspectRatio: "landscape",
  },
  {
    id: 6,
    title: "Basket Weave Luxury",
    description: "Intricate basket weave pattern in a Dubai mansion",
    image: "/placeholder.svg?height=800&width=600&query=basket weave parquet pattern in luxury dubai home",
    size: "medium",
    aspectRatio: "portrait",
  },
  {
    id: 7,
    title: "Diagonal Brilliance",
    description: "Stunning diagonal parquet in a modern office",
    image: "/placeholder.svg?height=600&width=600&query=diagonal parquet flooring in modern dubai office",
    size: "small",
    aspectRatio: "square",
  },
  {
    id: 8,
    title: "Artistic Inlay",
    description: "Custom inlay work for a private residence",
    image: "/placeholder.svg?height=800&width=1200&query=custom parquet inlay work in dubai luxury residence",
    size: "large",
    aspectRatio: "landscape",
  },
  {
    id: 9,
    title: "Geometric Precision",
    description: "Geometric parquet patterns for a contemporary look",
    image: "/placeholder.svg?height=600&width=600&query=geometric parquet patterns in contemporary dubai home",
    size: "small",
    aspectRatio: "square",
  },
]

export default function LuxuryGallerySection() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [category, setCategory] = useState("All")
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Create a staggered reveal effect for the gallery items
  const galleryReveal = useTransform(scrollYProgress, [0, 0.2], [0, 1])

  // Handle image click to show the modal
  const handleImageClick = (item) => {
    setSelectedImage(item)
    document.body.style.overflow = "hidden"
  }

  // Close the modal
  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  // Close modal with escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <section className="py-24 bg-black relative overflow-hidden" ref={containerRef}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-3">Our Masterpieces</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Exquisite Gallery</h3>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-6"></div>
          <p className="text-zinc-400 text-lg">
            Immerse yourself in our collection of premium parquet flooring transformations across Dubai's most
            prestigious properties.
          </p>
        </div>

        {/* Dynamic Gallery Grid */}
        <motion.div
          style={{ opacity: galleryReveal }}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(200px,_auto)] gap-4 md:gap-6"
        >
          {galleryItems.map((item, index) => {
            // Determine grid span based on size
            let spanClass = ""
            if (item.size === "large") {
              spanClass = item.aspectRatio === "landscape" ? "md:col-span-2 md:row-span-2" : "md:row-span-2"
            } else if (item.size === "medium") {
              spanClass = item.aspectRatio === "landscape" ? "md:col-span-2" : "md:row-span-2"
            }

            return (
              <motion.div
                key={item.id}
                className={`relative group overflow-hidden ${spanClass}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className="absolute inset-0 cursor-pointer"
                  onClick={() => handleImageClick(item)}
                  aria-label={`View ${item.title}`}
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Hover overlay content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-zinc-300 mb-4">{item.description}</p>
                      <div className="flex items-center">
                        <span className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-black">
                          <Plus className="w-5 h-5" />
                        </span>
                        <span className="ml-2 text-amber-500 text-sm">View Project</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* View more button */}
        <div className="text-center mt-12">
          <Button className="bg-transparent border border-amber-500/30 text-amber-500 hover:bg-amber-500/10 px-8 py-6 rounded-none">
            Explore All Projects
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10"
            onClick={closeModal}
          >
            <motion.button
              className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-zinc-800/80 flex items-center justify-center text-white hover:bg-amber-500/80 transition-colors"
              onClick={closeModal}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <X className="w-5 h-5" />
            </motion.button>

            <motion.div
              className="relative max-w-6xl w-full max-h-[80vh] overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[70vh]">
                <Image
                  src={selectedImage.image || "/placeholder.svg"}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <motion.div
                className="bg-zinc-900/90 p-6 backdrop-blur-sm"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-zinc-300">{selectedImage.description}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating decorative elements */}
      <div className="absolute bottom-10 left-10 w-40 h-40 border border-amber-500/10 rounded-full opacity-20"></div>
      <div className="absolute top-20 right-10 w-20 h-20 border border-amber-500/10 rounded-full opacity-20"></div>
    </section>
  )
}
