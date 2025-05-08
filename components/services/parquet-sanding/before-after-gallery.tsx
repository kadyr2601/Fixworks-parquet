"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Define types for our slider items
interface BeforeAfterItem {
  id: string
  title: string
  beforeImage: string
  afterImage: string
  description: string
}

export default function BeforeAfterGallery() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Create refs for each slider container
  const sliderRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const [sliderValues, setSliderValues] = useState({
    slider1: 50,
    slider2: 50,
    slider3: 50,
    slider4: 50,
  })

  const beforeAfterItems: BeforeAfterItem[] = [
    {
      id: "slider1",
      title: "Parquet sanding & restoration & multi-layer toning & application of oil-wax",
      beforeImage: "/before-after/parquet-before-1.png",
      afterImage: "/before-after/parquet-after-1.png",
      description: "Complete restoration of classic parquet with custom toning and oil-wax finish",
    },
    {
      id: "slider2",
      title: "Parquet sanding & bevel restoration & toning & application of oil-wax",
      beforeImage: "/before-after/parquet-before-1.png",
      afterImage: "/before-after/parquet-after-1.png",
      description: "Precision bevel restoration with premium oil-wax application",
    },
    {
      id: "slider3",
      title: "Parquet sanding & toning & application of oil-wax",
      beforeImage: "/before-after/parquet-before-1.png",
      afterImage: "/before-after/parquet-after-1.png",
      description: "Standard sanding service with toning and protective oil-wax finish",
    },
    {
      id: "slider4",
      title: "Parquet sanding & application of lacquer",
      beforeImage: "/before-after/parquet-before-1.png",
      afterImage: "/before-after/parquet-after-1.png",
      description: "Basic sanding with durable lacquer finish for high-traffic areas",
    },
  ]

  // Function to handle slider movement
  const handleSliderMove = (id: string, clientX: number) => {
    const container = sliderRefs.current[id]
    if (!container) return

    const rect = container.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    const clampedPercentage = Math.max(0, Math.min(100, percentage))

    setSliderValues((prev) => ({
      ...prev,
      [id]: clampedPercentage,
    }))
  }

  return (
      <section ref={ref} className="py-24 bg-black relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
          >
            <h2 className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-3">Transformations</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Before & After Gallery</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-6"></div>
            <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
              Witness the remarkable transformations achieved through our premium parquet sanding and restoration
              services. Drag the slider to compare before and after results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {beforeAfterItems.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-sm"
                >
                  <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                  <p className="text-zinc-400 mb-6">{item.description}</p>

                  {/* Before/After Slider */}
                  <div
                      className="relative h-[400px] overflow-hidden mb-4 group rounded-sm bg-zinc-800"
                      ref={(el) => (sliderRefs.current[item.id] = el)}
                  >
                    {/* After Image (Full) */}
                    <div className="absolute inset-0">
                      <Image
                          src={item.afterImage || "/placeholder.svg"}
                          alt="After restoration"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={index === 0}
                      />
                      <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1 text-white text-sm rounded-sm">
                        After
                      </div>
                    </div>

                    {/* Before Image (Partial, controlled by slider) */}
                    <div
                        className="absolute inset-0 overflow-hidden"
                        style={{
                          clipPath: `inset(0 ${100 - sliderValues[item.id]}% 0 0)`,
                        }}
                    >
                      <Image
                          src={item.beforeImage || "/placeholder.svg"}
                          alt="Before restoration"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-black/30"></div>
                      <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 text-white text-sm rounded-sm">
                        Before
                      </div>
                    </div>

                    {/* Slider line */}
                    <div className="absolute h-full w-1 bg-white z-20" style={{ left: `${sliderValues[item.id]}%` }}></div>

                    {/* Slider handle */}
                    <div
                        className="absolute w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center z-30 cursor-ew-resize"
                        style={{
                          left: `${sliderValues[item.id]}%`,
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                        onMouseDown={(e) => {
                          e.preventDefault()

                          // Initial position
                          handleSliderMove(item.id, e.clientX)

                          // Handle mouse move
                          const onMouseMove = (moveEvent: MouseEvent) => {
                            moveEvent.preventDefault()
                            handleSliderMove(item.id, moveEvent.clientX)
                          }

                          // Handle mouse up - remove event listeners
                          const onMouseUp = () => {
                            document.removeEventListener("mousemove", onMouseMove)
                            document.removeEventListener("mouseup", onMouseUp)
                          }

                          // Add event listeners to document
                          document.addEventListener("mousemove", onMouseMove)
                          document.addEventListener("mouseup", onMouseUp)
                        }}
                        onTouchStart={(e) => {
                          e.preventDefault()

                          // Initial position
                          handleSliderMove(item.id, e.touches[0].clientX)

                          // Handle touch move
                          const onTouchMove = (moveEvent: TouchEvent) => {
                            moveEvent.preventDefault()
                            handleSliderMove(item.id, moveEvent.touches[0].clientX)
                          }

                          // Handle touch end - remove event listeners
                          const onTouchEnd = () => {
                            document.removeEventListener("touchmove", onTouchMove)
                            document.removeEventListener("touchend", onTouchEnd)
                          }

                          // Add event listeners to document
                          document.addEventListener("touchmove", onTouchMove, { passive: false })
                          document.addEventListener("touchend", onTouchEnd)
                        }}
                    >
                      <div className="flex items-center">
                        <ChevronLeft className="w-3 h-3 text-black" />
                        <ChevronRight className="w-3 h-3 text-black" />
                      </div>
                    </div>

                    {/* Hidden range input for accessibility */}
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={sliderValues[item.id]}
                        onChange={(e) => {
                          setSliderValues((prev) => ({
                            ...prev,
                            [item.id]: Number(e.target.value),
                          }))
                        }}
                        className="absolute bottom-0 left-0 w-full z-20 opacity-0 cursor-pointer h-20"
                        aria-label="Slider to compare before and after images"
                    />
                  </div>

                  {/* Price Information */}
                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-zinc-400 text-sm">
                      {index % 2 === 0 ? (
                          <span>Pricing is customized based on client requirements</span>
                      ) : (
                          <span>
                      Oil-wax: <span className="text-amber-500">312 AED</span> / Lacquer:{" "}
                            <span className="text-amber-500">332 AED</span> - Square meter
                    </span>
                      )}
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}
