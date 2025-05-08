"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Linkedin, Mail } from "lucide-react"

export default function TeamShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const teamMembers = [
    {
      name: "Ahmed Al Mansouri",
      role: "Founder & CEO",
      bio: "With over 20 years of experience in luxury flooring, Ahmed founded Dubai Parquet with a vision to bring unparalleled craftsmanship to the region.",
      image: "/placeholder.svg?height=600&width=600&query=professional middle eastern businessman in suit",
    },
    {
      name: "Sarah Thompson",
      role: "Design Director",
      bio: "Sarah brings her extensive background in interior design to create bespoke parquet solutions that perfectly complement each unique space.",
      image: "/placeholder.svg?height=600&width=600&query=professional female interior designer",
    },
    {
      name: "Khalid Rahman",
      role: "Master Craftsman",
      bio: "Khalid leads our team of artisans, bringing traditional techniques and innovative approaches to every installation and restoration project.",
      image: "/placeholder.svg?height=600&width=600&query=skilled craftsman working with wood",
    },
    {
      name: "Olivia Chen",
      role: "Client Relations Manager",
      bio: "Olivia ensures that every client receives personalized attention and that each project exceeds expectations from concept to completion.",
      image: "/placeholder.svg?height=600&width=600&query=professional asian woman in business attire",
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-24 bg-zinc-900/30 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-3">Our People</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet The Team</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-6"></div>
            <p className="text-zinc-400 text-lg">
              Our team of passionate professionals brings together decades of expertise in craftsmanship, design, and
              customer service.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="bg-zinc-900/50 border border-zinc-800 overflow-hidden hover:border-amber-500/30 transition-colors duration-300">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay with social icons */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 hover:bg-amber-500/40 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 hover:bg-amber-500/40 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                  <p className="text-amber-500 text-sm mb-4">{member.role}</p>
                  <p className="text-zinc-400">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
