"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export default function CompanyStory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const timelineEvents = [
    {
      year: "2007",
      title: "Foundation",
      description:
        "Established in Dubai with a vision to bring exceptional parquet craftsmanship to luxury properties.",
      image: "/placeholder.svg?key=sdh8y",
    },
    {
      year: "2010",
      title: "Expansion",
      description: "Expanded services to include restoration and custom designs for high-end residential logos.",
      image: "/luxury-parquet-install.png",
    },
    {
      year: "2015",
      title: "Innovation",
      description: "Introduced innovative techniques and materials, setting new standards in the industry.",
      image: "/placeholder.svg?key=o3j03",
    },
    {
      year: "2020",
      title: "Recognition",
      description: "Recognized as Dubai's premier parquet specialist with logos across prestigious properties.",
      image: "/luxury-award-ceremony.png",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-24 bg-zinc-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-amber-500/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-amber-500/5 to-transparent"></div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-3">Our Journey</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">The Dubai Parquet Story</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-6"></div>
            <p className="text-zinc-400 text-lg">
              From humble beginnings to becoming Dubai's premier parquet flooring specialist, our journey has been
              defined by an unwavering commitment to excellence.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-amber-500/80 via-amber-500/50 to-amber-500/20"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col md:flex-row items-center md:items-start gap-8 mb-20 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row-reverse text-right" : "text-left"
              }`}
            >
              {/* Year Marker */}
              <div className="relative md:w-1/2 flex justify-center md:justify-end">
                <div className="absolute left-1/2 md:left-auto md:right-0 top-0 transform -translate-x-1/2 md:translate-x-1/2 w-12 h-12 rounded-full bg-black border-2 border-amber-500 z-10 flex items-center justify-center">
                  <span className="text-amber-500 font-bold">{event.year}</span>
                </div>
              </div>

              {/* Content */}
              <div className="md:w-1/2 pt-16 md:pt-0">
                <div
                  className={`bg-zinc-900/80 border border-zinc-800 p-6 md:p-8 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="relative aspect-video mb-6 overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">{event.title}</h4>
                  <p className="text-zinc-400">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
