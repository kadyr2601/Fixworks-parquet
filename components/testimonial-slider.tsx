"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Ahmed Al Mansouri",
    role: "Villa Owner, Palm Jumeirah",
    content:
      "The craftsmanship displayed by Dubai Parquet is truly exceptional. They transformed our villa with stunning herringbone parquet that has become the highlight of our home. Their attention to detail and commitment to quality is unmatched.",
    image: "/middle-eastern-businessman.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Thompson",
    role: "Interior Designer",
    content:
      "As an interior designer working with high-end clients in Dubai, I need partners who deliver exceptional quality. Dubai Parquet consistently exceeds expectations with their premium materials and flawless installation. They're my go-to recommendation for luxury flooring.",
    image: "/female-interior-designer.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Mohammed Al Fardan",
    role: "Property Developer",
    content:
      "We've partnered with Dubai Parquet on multiple luxury developments across the city. Their expertise in parquet flooring adds significant value to our properties. The quality of their work and professionalism is why we continue to choose them for every project.",
    image: "/middle-eastern-property-developer.png",
    rating: 5,
  },
  {
    id: 4,
    name: "Elena Petrova",
    role: "Luxury Home Owner",
    content:
      "The parquet flooring installed by Dubai Parquet in our home is absolutely stunning. The attention to detail and the quality of craftsmanship is evident in every plank. We couldn't be happier with the result and highly recommend their services.",
    image: "/elegant-woman-portrait.png",
    rating: 5,
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Hotel Manager",
    content:
      "We chose Dubai Parquet for our hotel renovation project, and they delivered beyond our expectations. The custom parquet design in our lobby has become a talking point among our guests. Their professionalism and timely delivery were impressive.",
    image: "/professional-hotel-manager.png",
    rating: 5,
  },
  {
    id: 6,
    name: "Fatima Al Maktoum",
    role: "Residential Client",
    content:
      "Dubai Parquet transformed our home with their exquisite flooring. The team was professional, punctual, and the quality of work is outstanding. Five years later, our floors still look as beautiful as the day they were installed.",
    image: "/elegant-middle-eastern-woman.png",
    rating: 5,
  },
  {
    id: 7,
    name: "Robert Chen",
    role: "Restaurant Owner",
    content:
      "The parquet flooring installed in our restaurant by Dubai Parquet has withstood heavy foot traffic while maintaining its elegance. Their recommendation for the right wood type and finish has proven perfect for our needs.",
    image: "/asian-restaurant-owner.png",
    rating: 5,
  },
  {
    id: 8,
    name: "Sophia Martinez",
    role: "Architect",
    content:
      "As an architect, I appreciate the precision and craftsmanship that Dubai Parquet brings to every project. Their ability to execute complex patterns and designs makes them my first choice for high-end residential and commercial logos.",
    image: "/female-architect-portrait.png",
    rating: 5,
  },
]

export default function TestimonialSlider() {
  const [currentPage, setCurrentPage] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const testimonialsPerPage = 3 // Changed from 4 to 3
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
    }, 6000)

    return () => clearInterval(interval)
  }, [autoplay, totalPages])

  const next = () => {
    setAutoplay(false)
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setAutoplay(false)
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  const getPageTestimonials = (page) => {
    const start = page * testimonialsPerPage
    return testimonials.slice(start, start + testimonialsPerPage)
  }

  return (
    <div className="relative">
      <div className="absolute -top-16 right-0 flex space-x-2">
        <button
          onClick={prev}
          className="w-12 h-12 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-amber-500 hover:border-amber-500/30 transition-colors"
          aria-label="Previous testimonials"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="w-12 h-12 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-amber-500 hover:border-amber-500/30 transition-colors"
          aria-label="Next testimonials"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {getPageTestimonials(currentPage).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1, duration: 0.4 },
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"></div>

                <div className="relative bg-zinc-900 border border-zinc-800 overflow-hidden h-full flex flex-col rounded-sm">
                  {/* Top decorative element */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0"></div>

                  {/* Quote mark */}
                  <div className="absolute top-6 right-6 text-amber-500/10 select-none font-serif text-6xl leading-none">
                    "
                  </div>

                  <div className="p-8 flex flex-col h-full z-10">
                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500 mr-1" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-zinc-300 mb-8 flex-grow relative z-10 leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    {/* Divider */}
                    <div className="w-12 h-px bg-amber-500/30 mb-4"></div>

                    {/* Author */}
                    <div className="flex items-center">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-amber-500/20">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                        <p className="text-amber-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom decorative corner */}
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-l border-t border-amber-500/20 -mb-[1px] -mr-[1px] pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAutoplay(false)
              setCurrentPage(index)
            }}
            className={`w-3 h-3 rounded-full ${
              currentPage === index ? "bg-amber-500" : "bg-zinc-700"
            } transition-colors`}
            aria-label={`Go to testimonial page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
