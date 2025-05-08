"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Droplets, Zap, Shield, Sparkles } from "lucide-react"

export default function TechnologyShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState(0)

  const technologies = [
    {
      id: 1,
      name: "Micro-Extraction™",
      icon: <Droplets className="w-6 h-6" />,
      description:
        "Our proprietary Micro-Extraction™ technology uses controlled pressure and specialized solutions to remove dirt and contaminants from deep within wood grain without damaging the surface.",
      benefits: [
        "Removes particles as small as 1 micron",
        "Preserves natural wood oils",
        "Prevents scratching from embedded particles",
        "Reaches between parquet seams",
      ],
      animation: (
        <div className="relative h-full w-full">
          {/* Animated particles being extracted */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-amber-500/50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100],
                opacity: [1, 0],
                scale: [1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Base surface representation */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-amber-900/30 to-transparent"></div>
        </div>
      ),
    },
    {
      id: 2,
      name: "Thermal Resonance",
      icon: <Zap className="w-6 h-6" />,
      description:
        "Our Thermal Resonance system uses controlled heat to open wood pores for deeper cleaning, then rapidly cools to seal and protect the surface, enhancing both cleaning efficacy and floor protection.",
      benefits: [
        "Opens wood pores for deeper cleaning",
        "Activates cleaning agents for better results",
        "Accelerates drying time by 60%",
        "Prevents moisture damage",
      ],
      animation: (
        <div className="relative h-full w-full">
          {/* Heat wave effect */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              style={{
                opacity: 0.3 - i * 0.1,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 1,
                ease: "easeInOut",
              }}
            >
              <div className="h-full w-full rounded-full bg-gradient-to-t from-amber-500/0 via-amber-500/30 to-amber-500/0"></div>
            </motion.div>
          ))}

          {/* Wood surface with pores */}
          <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-amber-900/30">
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute bottom-0 w-1 h-2 bg-amber-900/50"
                style={{
                  left: `${10 + i * 8}%`,
                }}
                animate={{
                  height: [2, 6, 2],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 3,
      name: "Nano-Shield Protection",
      icon: <Shield className="w-6 h-6" />,
      description:
        "Our Nano-Shield technology applies an invisible, breathable protective layer that repels liquids and prevents stains while allowing the wood to naturally expand and contract.",
      benefits: [
        "Creates molecular-level protection",
        "Maintains natural wood appearance",
        "Prevents liquid penetration",
        "Lasts up to 12 months",
      ],
      animation: (
        <div className="relative h-full w-full">
          {/* Shield effect */}
          <motion.div
            className="absolute inset-0"
            animate={{
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="h-full w-full bg-gradient-to-t from-amber-500/10 to-amber-500/30 rounded-lg"></div>
          </motion.div>

          {/* Liquid droplets being repelled */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-blue-500/50"
              style={{
                left: `${20 + i * 15}%`,
                top: "30%",
              }}
              animate={{
                y: [0, 100, 0],
                x: [0, 10, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      ),
    },
    {
      id: 4,
      name: "UV Restoration",
      icon: <Sparkles className="w-6 h-6" />,
      description:
        "Our UV Restoration process reverses sun damage by rehydrating wood fibers and restoring natural oils lost to UV exposure, bringing back the original color and luster of your parquet.",
      benefits: [
        "Reverses sun fading and discoloration",
        "Restores natural wood oils",
        "Rehydrates dried wood fibers",
        "Prevents future UV damage",
      ],
      animation: (
        <div className="relative h-full w-full">
          {/* Sun rays */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 h-full w-1 bg-amber-500/30"
              style={{
                left: `${10 + i * 20}%`,
                transformOrigin: "top",
              }}
              animate={{
                scaleY: [0.3, 1, 0.3],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Wood surface changing color */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1/4"
            animate={{
              backgroundColor: ["rgba(120, 53, 15, 0.3)", "rgba(180, 83, 9, 0.5)", "rgba(120, 53, 15, 0.3)"],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
      ),
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-3">Advanced Technology</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Cleaning Innovations</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-6"></div>
            <p className="text-zinc-400 text-lg">
              Discover the proprietary technologies that set our parquet cleaning service apart from conventional
              methods.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Technology Tabs */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`cursor-pointer p-6 border transition-all ${
                    activeTab === index
                      ? "bg-amber-500/10 border-amber-500"
                      : "bg-zinc-900/50 border-zinc-800 hover:border-amber-500/50"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="flex items-center mb-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                        activeTab === index ? "bg-amber-500 text-black" : "bg-zinc-800 text-amber-500"
                      }`}
                    >
                      {tech.icon}
                    </div>
                    <h4 className={`text-xl font-bold ${activeTab === index ? "text-amber-500" : "text-white"}`}>
                      {tech.name}
                    </h4>
                  </div>
                  <p className="text-zinc-400 text-sm line-clamp-2">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technology Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                {/* Text Content */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-amber-500 text-black flex items-center justify-center mr-4">
                      {technologies[activeTab].icon}
                    </div>
                    <h4 className="text-2xl font-bold text-white">{technologies[activeTab].name}</h4>
                  </div>

                  <div className="mb-8">
                    <p className="text-zinc-300 mb-6">{technologies[activeTab].description}</p>

                    <h5 className="text-amber-500 font-medium mb-3">Key Benefits</h5>
                    <ul className="space-y-2">
                      {technologies[activeTab].benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span>
                          <span className="text-zinc-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Animation */}
                <div className="bg-zinc-800/50 rounded-lg overflow-hidden h-64 md:h-full relative">
                  {technologies[activeTab].animation}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
