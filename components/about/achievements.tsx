"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Briefcase, Clock, Users } from "lucide-react"

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView) {
      setHasAnimated(true)
    }
  }, [isInView])

  const stats = [
    {
      value: 15,
      label: "Years of Excellence",
      icon: Clock,
      suffix: "+",
    },
    {
      value: 500,
      label: "Projects Completed",
      icon: Briefcase,
      suffix: "+",
    },
    {
      value: 50,
      label: "Expert Craftsmen",
      icon: Users,
      suffix: "",
    },
    {
      value: 25,
      label: "Industry Awards",
      icon: Award,
      suffix: "+",
    },
  ]

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-3">Our Impact</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Achievements & Milestones</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-6"></div>
            <p className="text-zinc-400 text-lg">
              Our journey has been marked by significant achievements and milestones that reflect our commitment to
              excellence and innovation.
            </p>
          </motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 p-8 hover:border-amber-500/30 transition-colors duration-300 group"
            >
              <div className="w-16 h-16 rounded-sm bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 text-amber-500 group-hover:bg-amber-500/20 transition-colors duration-300">
                <stat.icon className="w-8 h-8" />
              </div>

              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-white">
                  {hasAnimated ? <CountUp end={stat.value} duration={2} /> : "0"}
                </span>
                <span className="text-amber-500 text-2xl ml-1">{stat.suffix}</span>
              </div>

              <p className="text-zinc-400 mt-2 text-lg">{stat.label}</p>
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
