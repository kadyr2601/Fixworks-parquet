"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Tab } from "@headlessui/react"

export default function DamageTypeShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const damageTypes = [
    {
      title: "Water Damage",
      description: "Specialized treatment for swollen or discolored parquet due to water exposure.",
      image: "/damage/water-damage.png",
    },
    {
      title: "Deep Scratches",
      description: "Precision filling and refinishing to eliminate scratches and restore the surface.",
      image: "/custom-parquet-floor.png",
    },
    {
      title: "Burn Marks",
      description: "Expert removal of burn marks and careful matching of color and texture.",
      image: "/damage/burn-marks.png",
    },
    {
      title: "Stains & Discoloration",
      description: "Advanced techniques to lift stains and rejuvenate discolored sections.",
      image: "/damage/stains.png",
    },
    {
      title: "Loose Pieces",
      description: "Secure re-attachment of loose parquet pieces and pattern restoration.",
      image: "/damage/water-damage.png",
    },
  ]

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
            <span className="text-white">Specialized</span>{" "}
            <span className="text-amber-500">Restoration Solutions</span>
          </h2>
          <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
            Our expert craftsmen address a wide range of parquet damage issues with precision techniques and specialty
            tools designed for minimal invasiveness.
          </p>
        </motion.div>

        <Tab.Group>
          <Tab.List className="flex flex-wrap justify-center gap-2 mb-12">
            {damageTypes.map((damage, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  `px-6 py-3 rounded-sm text-sm font-medium transition-all duration-300 outline-none ${
                    selected
                      ? "bg-amber-500 text-black"
                      : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200"
                  }`
                }
              >
                {damage.title}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels>
            {damageTypes.map((damage, index) => (
              <Tab.Panel key={index}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  <div className="order-2 md:order-1">
                    <h3 className="text-3xl font-bold text-amber-500 mb-4">{damage.title}</h3>
                    <p className="text-zinc-300 mb-6 text-lg">{damage.description}</p>
                    <ul className="space-y-3 text-zinc-400">
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2">✓</span>
                        <span>Non-invasive restoration techniques</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2">✓</span>
                        <span>Perfect color and texture matching</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2">✓</span>
                        <span>Specialized tools for precise work</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2">✓</span>
                        <span>Invisible repairs that blend seamlessly</span>
                      </li>
                    </ul>
                  </div>

                  <div className="order-1 md:order-2 relative h-[400px] overflow-hidden">
                    <Image
                      src={damage.image || "/placeholder.svg"}
                      alt={damage.title}
                      fill
                      className="object-cover rounded-sm"
                    />
                  </div>
                </motion.div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  )
}
