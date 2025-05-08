"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check } from "lucide-react"

export default function RestorationPricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
            <span className="text-white">Transparent</span> <span className="text-amber-500">Pricing & Services</span>
          </h2>
          <p className="text-zinc-400 max-w-3xl mx-auto text-lg">
            Our restoration services are priced transparently based on the scope and complexity of the required work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="bg-zinc-800 p-8 rounded-sm border-t-2 border-amber-500">
            <h3 className="text-2xl font-bold text-white mb-2">Standard Visit</h3>
            <div className="text-3xl font-bold text-amber-500 mb-6">1,250 AED</div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-zinc-300">On-site assessment and consultation</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-zinc-300">5 hours of restoration work</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-zinc-300">3-6 small defects repaired</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-zinc-300">Basic spot refinishing</span>
              </li>
            </ul>

            <a
              href="/contact"
              className="block text-center px-6 py-3 bg-amber-500 text-black hover:bg-amber-600 transition-colors"
            >
              Book Assessment
            </a>
          </div>

          <div className="bg-zinc-800 p-8 rounded-sm border-t-2 border-amber-500 transform md:-translate-y-4 relative z-10 shadow-xl">
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <span className="bg-amber-500 text-black px-4 py-1 text-sm font-medium">MOST POPULAR</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Extended Restoration</h3>
            <div className="text-3xl font-bold text-amber-500 mb-6">2,500 AED</div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-zinc-300">Comprehensive damage assessment</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-zinc-300">Full day of restoration work (8 hours)</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-zinc-300">7-12 defects repaired</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-zinc-300">Advanced color matching</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-zinc-300">Precision finish blending</span>
              </li>
            </ul>

            <a
              href="/contact"
              className="block text-center px-6 py-3 bg-amber-500 text-black hover:bg-amber-600 transition-colors"
            >
              Book Assessment
            </a>
          </div>

          <div className="bg-zinc-800 p-8 rounded-sm border-t-2 border-amber-500">
            <h3 className="text-2xl font-bold text-white mb-2">Premium Complex</h3>
            <div className="text-3xl font-bold text-amber-500 mb-6">Custom Quote</div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-zinc-300">Extensive restoration needs</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-zinc-300">Multiple days of expert work</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-zinc-300">12+ defects or large area repair</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-zinc-300">Custom wood piece replacement</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-zinc-300">Full area refinishing if needed</span>
              </li>
            </ul>

            <a
              href="/contact"
              className="block text-center px-6 py-3 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black transition-colors"
            >
              Request Quote
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-zinc-800/50 p-8 rounded-sm border-l-4 border-amber-500"
        >
          <h3 className="text-xl font-bold text-white mb-4">Important Notes:</h3>
          <ul className="space-y-3 text-zinc-400">
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>On-site visit / Workday 1250 AED includes the work of one restorer for 5 hours.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>Elimination of 3 to 16 defects depending on their complexity and nature.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>The cost and scope of work may vary based on the specific characteristics of the object.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              <span>A detailed quote will be provided after initial assessment of the damage.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
