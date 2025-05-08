"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check, Award, Users, Clock, Briefcase, PenToolIcon as Tool, Shield } from "lucide-react"

export default function AboutSection() {
  // Animation for counting up statistics
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInView(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Stats with animations
  const stats = [
    { value: 17, label: "years on the restorations market", icon: Clock },
    { value: 60, label: "active logos in continuous operation", icon: Briefcase, plus: true },
    { value: 2500, label: "successfully completed logos", icon: Award, plus: true },
    { value: 1500, label: "solved issues per day", icon: Tool, plus: true },
    { value: 50, label: "employees in the state", icon: Users },
    { value: 29000, label: "defects repair per day", icon: Shield, plus: true },
  ]

  // Expertise areas
  const expertiseAreas = [
    {
      title: "Parquet & Flooring Solutions",
      description: "Sanding, installation, refinishing, and custom finishing with premium materials.",
    },
    {
      title: "Painting & Coating",
      description: "High-quality interior and exterior painting for lasting protection and aesthetics.",
    },
    {
      title: "Wood Restoration",
      description: "Expert repair, refinishing, and polishing to restore wood to its original beauty.",
    },
    {
      title: "Renovation & Fit-Out",
      description: "Full turnkey solutions for apartments, offices, restaurants, and hotels.",
    },
  ]

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 border border-amber-500/30"></div>
              <Image
                src="/dubai-parquet-installation.png"
                alt="Premium parquet flooring"
                width={600}
                height={800}
                className="rounded-sm object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-amber-500/30"></div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-3">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Dubai's Premier Parquet Specialists</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mb-6"></div>
            <p className="text-zinc-400 mb-6 text-lg leading-relaxed">
              Established in 2007, Fixworks has been a trusted name in parquet, restoration, renovation, and technical
              services worldwide. With over a decade of expertise, we deliver high-quality solutions for residential and
              commercial projects, specializing in parquet flooring, parquet sanding and polishing, parquet restoration
              and refinishing, parquet painting and supply, and general repairs.
            </p>
          </div>
        </div>

        {/* Expertise Cards */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Expertise Includes:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-sm hover:border-amber-500/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-sm bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 text-amber-500 group-hover:bg-amber-500/20 transition-colors">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{area.title}</h4>
                <p className="text-zinc-400">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quality Statement */}
        <div className="mb-20 max-w-4xl mx-auto text-center">
          <div className="relative py-10 px-8 md:px-16">
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-amber-500/30"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-500/30"></div>

            <p className="text-xl md:text-2xl text-white italic leading-relaxed">
              "At Fixworks, we believe that true craftsmanship lies in the details. We use only the finest, high-quality
              materials to achieve superior results, ensuring that every project radiates refinement, sophistication,
              and excellence."
            </p>
          </div>
        </div>

        {/* Additional Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <p className="text-zinc-400 mb-6 text-lg leading-relaxed">
              With a team of passionate professionals, a commitment to innovation, and a dedication to perfection,
              Fixworks has successfully completed prestigious projects across Russia, Belarus, Kazakhstan, and the UAE.
              We continue to set new standards in the industry, turning visions into reality with uncompromising quality
              and exceptional service.
            </p>
          </div>
          <div>
            <p className="text-zinc-400 mb-6 text-lg leading-relaxed">
              We believe that by working with us, you will have a trusted and reliable partner, ensuring quality,
              professionalism, and peace of mind. With Fixworks, you can feel comfortable and secure, just like in your
              own home, knowing that every detail is handled with care and excellence.
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-sm hover:border-amber-500/30 transition-colors group"
            >
              <div className="flex items-start">
                <div className="w-14 h-14 rounded-sm bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mr-5 text-amber-500 group-hover:bg-amber-500/20 transition-colors">
                  {stat.icon && <stat.icon className="w-7 h-7" />}
                </div>
                <div>
                  <div className="flex items-baseline">
                    <h4 className="text-3xl font-bold text-white">
                      {isInView ? <CountUp end={stat.value} duration={2} /> : "0"}
                    </h4>
                    {stat.plus && <span className="text-amber-500 text-2xl ml-1">+</span>}
                  </div>
                  <p className="text-zinc-400 mt-2">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Simple CountUp component
function CountUp({ end, duration }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    let animationFrame

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return count
}
