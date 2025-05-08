"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function InstallationFAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How long does a typical parquet installation take?",
      answer:
        "The duration depends on the size of the area, complexity of the pattern, and condition of the subfloor. A standard room (20-30m²) typically takes 3-5 days for complete installation, including subfloor preparation and finishing. Larger or more complex logos may take longer. We'll provide a specific timeline during our initial consultation.",
    },
    {
      question: "Do you handle subfloor preparation?",
      answer:
        "Yes, proper subfloor preparation is crucial for a successful parquet installation. Our service includes assessment and preparation of your existing subfloor, whether it's concrete, plywood, or another material. This may involve leveling, moisture testing, and applying appropriate primers or underlayments to ensure a stable foundation for your new parquet flooring.",
    },
    {
      question: "Can parquet be installed over underfloor heating?",
      answer:
        "Yes, parquet can be installed over underfloor heating systems, but special considerations must be taken. We recommend specific wood species and installation methods that are compatible with heated floors. The heating system must be turned off during installation and gradually reintroduced afterward to allow the wood to acclimate properly.",
    },
    {
      question: "What maintenance is required for newly installed parquet flooring?",
      answer:
        "Newly installed parquet requires minimal maintenance. Regular sweeping or vacuuming with a soft brush attachment, occasional damp (not wet) mopping with a pH-neutral cleaner specifically designed for wood floors. Avoid excessive water, harsh chemicals, and abrasive cleaning tools. We provide detailed care instructions tailored to your specific finish type upon completion.",
    },
    {
      question: "Can you match existing parquet patterns for partial installations or repairs?",
      answer:
        "Yes, we specialize in matching existing parquet patterns for extensions, partial installations, or repairs. Our craftsmen can recreate traditional and custom patterns, and we work diligently to source wood that matches the species, grain, and color of your existing flooring. For older floors, we can also apply appropriate aging techniques to help new sections blend seamlessly.",
    },
    {
      question: "What's the difference between solid and engineered parquet?",
      answer:
        "Solid parquet is made entirely from a single piece of solid wood, offering traditional appeal and the ability to be sanded and refinished multiple times. Engineered parquet consists of a real wood top layer bonded to multiple layers of high-quality plywood, providing greater stability against humidity and temperature changes. Engineered parquet is often recommended for installation over underfloor heating or in areas with fluctuating environmental conditions.",
    },
  ]

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={ref} className="py-24 bg-black relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-3">FAQ</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h3>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-6"></div>
          <p className="text-zinc-400 text-lg">
            Find answers to common questions about our parquet installation services.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`border ${
                openIndex === index ? "border-amber-500/50 bg-zinc-900/50" : "border-zinc-800 bg-zinc-900/30"
              } rounded-sm overflow-hidden transition-colors duration-300`}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="flex justify-between items-center w-full p-6 text-left"
              >
                <h4 className="text-lg font-medium text-white">{faq.question}</h4>
                <ChevronDown
                  className={`w-5 h-5 text-amber-500 transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-zinc-400 border-t border-zinc-800">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
