"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

// Типизация для элементов галереи
interface GalleryItem {
  id: number
  title: string
  image: string
  size: "large" | "medium" | "small" | "tall" | "wide"
}

// Gallery items with high-quality images
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Herringbone Elegance",
    image: "/dubai-villa-herringbone-floor.png",
    size: "large", // large image
  },
  {
    id: 2,
    title: "Chevron Masterpiece",
    image: "/dubai-chevron-flooring.png",
    size: "medium",
  },
  {
    id: 3,
    title: "Versailles Pattern",
    image: "/luxury-dubai-parquet.png",
    size: "small",
  },
  {
    id: 4,
    title: "Hotel Lobby Transformation",
    image: "/dubai-hotel-lobby.png",
    size: "tall",
  },
  {
    id: 5,
    title: "Fine Dining Experience",
    image: "/upscale-dubai-restaurant.png",
    size: "medium",
  },
  {
    id: 6,
    title: "Basket Weave Luxury",
    image: "/basket-weave-parquet.png",
    size: "wide",
  },
  {
    id: 7,
    title: "Diagonal Brilliance",
    image: "/diagonal-parquet-office.png",
    size: "small",
  },
]

export default function ImmersiveGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // Handle image click to show the modal
  function openModal(index: number) {
    setSelectedImageIndex(index)
    document.body.style.overflow = "hidden"
  }

  // Close the modal
  function closeModal() {
    setSelectedImageIndex(null)
    document.body.style.overflow = "auto"
  }

  // Navigate to the next image
  function nextImage() {
    setSelectedImageIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev! + 1))
  }

  // Navigate to the previous image
  function prevImage() {
    setSelectedImageIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev! - 1))
  }

  // Close modal with escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeModal()
      if (event.key === "ArrowRight" && selectedImageIndex !== null) nextImage()
      if (event.key === "ArrowLeft" && selectedImageIndex !== null) prevImage()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImageIndex])

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Get CSS class based on image size
  function getSizeClass(size: string) {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2"
      case "medium":
        return "col-span-1 row-span-1"
      case "small":
        return "col-span-1 row-span-1"
      case "tall":
        return "col-span-1 row-span-2"
      case "wide":
        return "col-span-2 row-span-1"
      default:
        return "col-span-1 row-span-1"
    }
  }

  return (
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-3">Our Masterpieces</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Exquisite Gallery</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-6"></div>
          </div>

          {/* Unique Grid Layout */}
          <div className="relative">
            {isLoading ? (
                <div className="flex items-center justify-center min-h-[60vh]">
                  <div className="w-12 h-12 rounded-full border-2 border-amber-500 border-t-transparent animate-spin"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
                  {galleryItems.map((item, index) => (
                      <div
                          key={item.id}
                          className={`${getSizeClass(item.size)} group relative overflow-hidden cursor-pointer transition-transform duration-500 hover:z-10 hover:scale-[1.02]`}
                          onClick={() => openModal(index)}
                          style={{
                            transformStyle: "preserve-3d",
                            transform: `perspective(1000px) rotateX(${Math.random() * 2 - 1}deg) rotateY(${
                                Math.random() * 2 - 1
                            }deg)`,
                          }}
                      >
                        <div className="absolute inset-0 overflow-hidden">
                          <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h4 className="text-xl font-bold text-white">{item.title}</h4>
                        </div>
                      </div>
                  ))}
                </div>
            )}
          </div>
        </div>

        {/* Simple Modal */}
        {selectedImageIndex !== null && (
            <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeModal}>
              {/* Close button */}
              <button
                  className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-zinc-800/80 flex items-center justify-center text-white hover:bg-amber-500/80 transition-colors"
                  onClick={(event) => {
                    event.stopPropagation()
                    closeModal()
                  }}
                  aria-label="Close gallery"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation buttons */}
              <button
                  className="absolute top-1/2 left-4 z-50 transform -translate-y-1/2 md:left-8 w-12 h-12 rounded-full bg-zinc-800/80 flex items-center justify-center text-white hover:bg-amber-500/80 transition-colors"
                  onClick={(event) => {
                    event.stopPropagation()
                    prevImage()
                  }}
                  aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                  className="absolute top-1/2 right-4 z-50 transform -translate-y-1/2 md:right-8 w-12 h-12 rounded-full bg-zinc-800/80 flex items-center justify-center text-white hover:bg-amber-500/80 transition-colors"
                  onClick={(event) => {
                    event.stopPropagation()
                    nextImage()
                  }}
                  aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Current image */}
              <div
                  className="relative w-full h-full flex flex-col items-center justify-center"
                  onClick={(event) => event.stopPropagation()}
              >
                <div className="relative w-full h-[90vh] max-w-6xl px-4">
                  {selectedImageIndex !== null && (
                      <Image
                          src={galleryItems[selectedImageIndex].image || "/placeholder.svg"}
                          alt={galleryItems[selectedImageIndex].title}
                          fill
                          className="object-contain"
                          priority
                      />
                  )}
                </div>

                {/* Only title in modal */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/70 px-6 py-3 backdrop-blur-sm">
                  {selectedImageIndex !== null && (
                      <h3 className="text-2xl font-bold text-white text-center">{galleryItems[selectedImageIndex].title}</h3>
                  )}
                </div>
              </div>
            </div>
        )}
      </section>
  )
}
