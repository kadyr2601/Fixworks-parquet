"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check, Info } from "lucide-react"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function PricingTable() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const pricingData = [
    {
      pattern: "Modular Parquet",
      basePrice: "170",
      premiumPrice: "220",
      luxuryPrice: "280",
      notes: "Geometric patterns with multiple wood species options",
    },
    {
      pattern: "Chevron",
      basePrice: "198",
      premiumPrice: "250",
      luxuryPrice: "320",
      notes: "45-degree precision cuts, traditional European style",
    },
    {
      pattern: "Herringbone",
      basePrice: "185",
      premiumPrice: "240",
      luxuryPrice: "310",
      notes: "90-degree precision cuts, multiple size options",
    },
    {
      pattern: "Deck",
      basePrice: "250",
      premiumPrice: "320",
      luxuryPrice: "390",
      notes: "Wide plank options, various width configurations",
    },
    {
      pattern: "Versailles",
      basePrice: "320",
      premiumPrice: "390",
      luxuryPrice: "480",
      notes: "Intricate geometric design, premium craftsmanship",
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-black relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-3">Pricing</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Transparent Pricing Structure</h3>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-6"></div>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
            Our pricing is transparent and comprehensive, with options to suit different requirements and budgets. All
            prices are per square meter and include installation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <div className="min-w-[768px]">
            <div className="grid grid-cols-5 gap-4 mb-6">
              <div className="col-span-1"></div>
              <div className="text-center font-medium text-white">
                <div className="bg-zinc-900 p-4 rounded-t-sm border-t border-l border-r border-zinc-800">
                  <h4 className="text-lg">Standard</h4>
                  <p className="text-zinc-400 text-sm">Basic Installation</p>
                </div>
              </div>
              <div className="text-center font-medium text-white">
                <div className="bg-amber-500/10 p-4 rounded-t-sm border-t border-l border-r border-amber-500/30">
                  <h4 className="text-lg">Premium</h4>
                  <p className="text-amber-500/80 text-sm">Enhanced Quality</p>
                </div>
              </div>
              <div className="text-center font-medium text-white">
                <div className="bg-zinc-900 p-4 rounded-t-sm border-t border-l border-r border-zinc-800">
                  <h4 className="text-lg">Luxury</h4>
                  <p className="text-zinc-400 text-sm">Ultimate Craftsmanship</p>
                </div>
              </div>
            </div>

            <div className="divide-y divide-zinc-800">
              {pricingData.map((item, index) => (
                <div key={index} className="grid grid-cols-5 gap-4 py-4">
                  <div className="flex items-center">
                    <span className="text-white font-medium">{item.pattern}</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="ml-2 text-zinc-500 hover:text-amber-500">
                            <Info className="w-4 h-4" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-zinc-900 border border-zinc-800 p-3 max-w-xs">
                          <p className="text-sm text-zinc-300">{item.notes}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="text-center">
                    <span className="text-xl font-bold text-white">{item.basePrice}</span>
                    <span className="text-zinc-400 text-sm ml-1">AED/m²</span>
                  </div>
                  <div className="text-center bg-amber-500/5 py-2">
                    <span className="text-xl font-bold text-amber-500">{item.premiumPrice}</span>
                    <span className="text-amber-500/70 text-sm ml-1">AED/m²</span>
                  </div>
                  <div className="text-center">
                    <span className="text-xl font-bold text-white">{item.luxuryPrice}</span>
                    <span className="text-zinc-400 text-sm ml-1">AED/m²</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-zinc-900/50 border border-zinc-800 p-6 rounded-sm"
        >
          <h4 className="text-xl font-bold text-white mb-4">What's Included:</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h5 className="text-amber-500 font-medium mb-3">Standard Package</h5>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Basic subfloor preparation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Standard grade wood</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Basic finish application</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">1-year installation warranty</span>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-amber-500 font-medium mb-3">Premium Package</h5>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Enhanced subfloor preparation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Premium grade wood</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Multi-layer finish application</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">3-year installation warranty</span>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-amber-500 font-medium mb-3">Luxury Package</h5>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Comprehensive subfloor preparation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Exclusive grade wood</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Premium finish with custom options</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">5-year installation warranty</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center text-zinc-400"
        >
          * Prices may vary based on project complexity, accessibility, and specific requirements. Contact us for a
          detailed quote tailored to your project.
        </motion.p>
      </div>
    </section>
  )
}
