"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function BeforeAfterGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [sliderValue, setSliderValue] = useState(50)
  const [currentCase, setCurrentCase] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const cases = [
    {
      title: "Water Damage Restoration",
      description:
          "Severe water damage from a leaking pipe caused swelling and discoloration. Our local restoration restored the affected area perfectly.",
      before: "/before-after/parquet-before-1.png",
      after: "/before-after/parquet-after-1.png",
    },
    {
      title: "Burn Mark Elimination",
      description:
          "An iron burn mark damaged this beautiful parquet floor. Our craftsmen meticulously repaired the area with no trace of the incident.",
      before: "/before-after/parquet-before-1.png",
      after: "/before-after/parquet-after-1.png",
    },
    {
      title: "Deep Scratch Repair",
      description:
          "Furniture dragging caused deep scratches across multiple boards. Our precision restoration made them completely disappear.",
      before: "/before-after/parquet-before-1.png",
      after: "/before-after/parquet-after-1.png",
    },
    {
      title: "Wine Stain Removal",
      description:
          "Red wine spill that penetrated the finish was completely eliminated with our specialized cleaning and restoration process.",
      before: "/before-after/parquet-before-1.png",
      after: "/before-after/parquet-after-1.png",
    },
  ]

  const handlePrev = () => {
    setCurrentCase((prev) => (prev === 0 ? cases.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentCase((prev) => (prev === cases.length - 1 ? 0 : prev + 1))
  }

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value))
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = moveEvent.clientX - rect.left
        const percentage = (x / rect.width) * 100
        setSliderValue(Math.max(0, Math.min(100, percentage)))
      }
    }

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.touches[0].clientX - rect.left
      const percentage = (x / rect.width) * 100
      setSliderValue(Math.max(0, Math.min(100, percentage)))
    }
  }

  return (
      <section ref={ref} className="py-24 bg-zinc-900">
        <div className="container mx-auto">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Transformative</span>{" "}
              <span className="text-amber-500">Restoration Results</span>
            </h2>
            <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
              Witness the artistry of our restoration work through these before and after comparisons, showcasing our
              ability to seamlessly repair damaged parquet.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 relative">
              <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.95 }}
                  transition={{ duration: 0.8 }}
                  className="relative h-[500px] overflow-hidden rounded-md bg-zinc-800"
                  ref={containerRef}
              >
                <div className="absolute inset-0 z-10">
                  {/* After image (full) */}
                  <div className="absolute inset-0">
                    <Image
                        src={cases[currentCase].after || "/placeholder.svg"}
                        alt="After restoration"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 60vw"
                        priority
                    />
                    <div className="absolute bottom-8 right-8 bg-amber-500/90 text-black px-4 py-2 text-sm font-medium">
                      AFTER
                    </div>
                  </div>

                  {/* Before image (shown based on slider) */}
                  <div
                      className="absolute inset-0 overflow-hidden"
                      style={{
                        width: `${sliderValue}%`,
                        transition: "width 0.1s ease-out",
                      }}
                  >
                    <Image
                        src={cases[currentCase].before || "/placeholder.svg"}
                        alt="Before restoration"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 60vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute bottom-8 left-8 bg-black/80 text-white px-4 py-2 text-sm font-medium">
                      BEFORE
                    </div>
                  </div>

                  {/* Slider line */}
                  <div
                      className="absolute h-full w-1 bg-white z-20"
                      style={{
                        left: `${sliderValue}%`,
                        transition: "left 0.1s ease-out",
                      }}
                  ></div>

                  {/* Slider handle */}
                  <div
                      className="absolute w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center z-30 cursor-pointer"
                      style={{
                        left: `${sliderValue}%`,
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        transition: "left 0.1s ease-out",
                      }}
                      onMouseDown={handleMouseDown}
                      onTouchMove={handleTouchMove}
                      aria-label="Drag to compare before and after"
                  >
                    <div className="flex space-x-1">
                      <ArrowLeft className="w-3 h-3 text-black" />
                      <ArrowRight className="w-3 h-3 text-black" />
                    </div>
                  </div>
                </div>

                {/* Hidden range input for accessibility */}
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={handleSliderChange}
                    className="absolute bottom-0 left-0 w-full z-20 opacity-0 cursor-pointer h-20"
                    aria-label="Slider to compare before and after images"
                />
              </motion.div>

              <div className="flex justify-center mt-4 space-x-2">
                {cases.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentCase(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            currentCase === index ? "bg-amber-500" : "bg-zinc-700 hover:bg-zinc-600"
                        }`}
                        aria-label={`View case ${index + 1}`}
                    ></button>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 30 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-zinc-800/50 p-8 rounded-sm"
              >
                <h3 className="text-2xl font-bold text-amber-500 mb-4">{cases[currentCase].title}</h3>
                <p className="text-zinc-300 mb-8">{cases[currentCase].description}</p>

                <div className="flex justify-between items-center">
                  <button
                      onClick={handlePrev}
                      className="w-12 h-12 flex items-center justify-center border border-zinc-700 rounded-full hover:border-amber-500 transition-colors"
                      aria-label="Previous case"
                  >
                    <ArrowLeft className="w-5 h-5 text-zinc-400" />
                  </button>
                  <div className="text-zinc-400 text-sm">
                    Case {currentCase + 1} of {cases.length}
                  </div>
                  <button
                      onClick={handleNext}
                      className="w-12 h-12 flex items-center justify-center border border-zinc-700 rounded-full hover:border-amber-500 transition-colors"
                      aria-label="Next case"
                  >
                    <ArrowRight className="w-5 h-5 text-zinc-400" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
  )
}
