"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Plus, Minus } from "lucide-react"

export default function RestorationFAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How long does a typical local restoration take?",
      answer:
        "Most standard local restorations can be completed in a single day (5-8 hours). More complex logos involving extensive damage or multiple areas may require 2-3 days. After our initial assessment, we'll provide you with a specific timeframe for your project.",
    },
    {
      question: "Will the restored area match perfectly with the rest of the floor?",
      answer:
        "Yes, achieving a perfect match is our specialty. We use advanced color matching technology and specialized techniques to ensure the restored area is indistinguishable from the surrounding floor. Our craftsmen carefully blend the new finish with the existing one for a seamless transition.",
    },
    {
      question: "Can you repair any type of damage to parquet flooring?",
      answer:
        "We can address most types of parquet damage including water damage, deep scratches, burn marks, stains, discoloration, and loose pieces. In rare cases where the damage is extremely severe or affects the structural integrity of the floor, we may recommend section replacement instead of restoration.",
    },
    {
      question: "Do I need to move my furniture before the restoration work?",
      answer:
        "We only require the damaged area and approximately 2-3 meters around it to be cleared of furniture. Our team can assist with carefully moving smaller pieces if needed. For large furniture items, we recommend having them moved before our arrival to ensure efficient work.",
    },
    {
      question: "Is there a warranty for your restoration work?",
      answer:
        "Yes, all our local restoration work comes with a 1-year warranty. This covers any issues related to the craftsmanship or materials used in the restoration. Normal wear and tear or new damage is not covered under the warranty.",
    },
    {
      question: "How soon can I walk on the floor after restoration?",
      answer:
        "Typically, you can walk on the restored area with socks after 6-8 hours. We recommend waiting 24 hours before placing furniture back and 48 hours before laying rugs. Our technicians will provide specific instructions based on the products used in your specific restoration.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={ref} className="py-24 bg-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Frequently Asked</span> <span className="text-amber-500">Questions</span>
          </h2>
          <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
            Get answers to common questions about our local parquet restoration services.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`border-b border-zinc-800 ${index === 0 && "border-t"}`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <h3 className="text-xl font-medium text-white">{faq.question}</h3>
                <div className="ml-4">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-amber-500" />
                  ) : (
                    <Plus className="w-5 h-5 text-amber-500" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-zinc-400">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-400 mb-6">Have more questions about our local restoration services?</p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-amber-500 text-black font-medium hover:bg-amber-600 transition-colors"
          >
            Contact Our Experts
          </a>
        </motion.div>
      </div>
    </section>
  )
}
