"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Heart, Lightbulb, Shield, Star, Users } from "lucide-react"

export default function CoreValues() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const values = [
    {
      icon: Star,
      title: "Excellence",
      description: "We pursue excellence in every detail, from material selection to final installation.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our passion for craftsmanship drives us to create floors that transcend mere functionality.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with transparency and honesty in all our client and partner relationships.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously explore new techniques and materials to push the boundaries of what's possible.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with clients, designers, and architects to bring visions to life.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "We never compromise on quality, ensuring longevity and beauty in every project.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

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
            <h2 className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-3">Our Principles</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Core Values</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-6"></div>
            <p className="text-zinc-400 text-lg">
              Our values form the foundation of everything we do, guiding our approach to craftsmanship, client
              relationships, and business practices.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="bg-zinc-900/50 border border-zinc-800 p-8 h-full hover:border-amber-500/30 transition-colors duration-300 relative overflow-hidden">
                {/* Background Glow Effect */}
                <div className="absolute -inset-1 bg-amber-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Icon */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-sm bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 text-amber-500 group-hover:bg-amber-500/20 transition-colors duration-300">
                    <value.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h4 className="text-2xl font-bold text-white mb-4">{value.title}</h4>
                  <p className="text-zinc-400">{value.description}</p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-8 h-8 border-l border-t border-amber-500/20 -mb-[1px] -mr-[1px] transform rotate-180 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
