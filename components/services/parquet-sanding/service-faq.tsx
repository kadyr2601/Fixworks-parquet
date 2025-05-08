"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function ServiceFAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How long does the parquet sanding and restoration process take?",
      answer:
        "The duration depends on the size of the area, condition of the floor, and chosen finish. Typically, a standard room (20-30m²) takes 2-3 days from start to finish, including drying time. Larger logos or those requiring extensive repairs may take longer. We'll provide a specific timeline during our initial assessment.",
    },
    {
      question: "Can I walk on the floor immediately after restoration?",
      answer:
        "No, floors need time to cure properly. For oil-wax finishes, light foot traffic is possible after 24 hours, but full curing takes 7-10 days. Lacquered floors typically require 48-72 hours before light use and 7 days for full curing. We'll provide specific care instructions for your particular finish.",
    },
    {
      question: "How do I maintain my newly restored parquet floor?",
      answer:
        "Regular maintenance includes sweeping or vacuuming with a soft brush attachment, occasional damp (not wet) mopping with a pH-neutral cleaner specifically designed for wood floors. Oil-waxed floors benefit from periodic refreshing with maintenance oil, while lacquered floors may need recoating every few years depending on traffic. We provide detailed care instructions tailored to your specific finish.",
    },
    {
      question: "Is there a lot of dust created during the sanding process?",
      answer:
        "We use professional dust extraction systems that capture up to 98% of the dust generated during sanding. While no sanding process is completely dust-free, our equipment significantly minimizes dust. We also seal off doorways and vents to contain any residual dust within the work area.",
    },
    {
      question: "What's the difference between oil-wax and lacquer finishes?",
      answer:
        "Oil-wax finishes penetrate the wood, enhancing its natural beauty with a matte to satin appearance. They're easier to spot-repair but require more regular maintenance. Lacquer creates a protective layer on top of the wood with a satin to glossy finish. It's more resistant to stains and moisture but more difficult to spot-repair. The choice depends on your aesthetic preference, lifestyle, and maintenance preferences.",
    },
    {
      question: "Do I need to move my furniture before you arrive?",
      answer:
        "Yes, the area should be completely clear of furniture and rugs. We offer furniture moving as an additional service if needed, but it must be arranged in advance. Built-in furniture or very heavy pieces may require special consideration, which we can discuss during the initial assessment.",
    },
  ]

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={ref} className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
      </div>

      <div className="container max-w-4xl mx-auto px-4 relative z-10">
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
            Find answers to common questions about our parquet sanding and restoration services.
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
