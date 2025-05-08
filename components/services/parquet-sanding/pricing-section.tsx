"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Check, HelpCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedTab, setSelectedTab] = useState("residential")

  const pricingOptions = {
    residential: [
      {
        title: "Basic Sanding",
        price: "180",
        unit: "AED/m²",
        description: "Essential sanding service for parquet in good condition",
        features: [
          "Three-stage sanding process",
          "Dust extraction system",
          "Basic edge work",
          "Single coat oil-wax finish",
          "48-hour completion",
        ],
      },
      {
        title: "Standard Restoration",
        price: "250",
        unit: "AED/m²",
        description: "Comprehensive restoration for moderately worn parquet",
        features: [
          "Four-stage sanding process",
          "Dust extraction system",
          "Detailed edge and corner work",
          "Minor repair of up to 5 pieces",
          "Two-coat oil-wax or lacquer finish",
          "Color toning options",
          "72-hour completion",
        ],
        featured: true,
      },
      {
        title: "Premium Transformation",
        price: "350",
        unit: "AED/m²",
        description: "Complete transformation for heavily damaged or aged parquet",
        features: [
          "Five-stage sanding process",
          "Dust extraction system",
          "Precision edge and corner work",
          "Extensive repairs (up to 15 pieces)",
          "Bevel restoration",
          "Multi-layer toning with exclusive colors",
          "Three-coat premium oil-wax or lacquer finish",
          "5-7 day completion",
        ],
      },
    ],
    commercial: [
      {
        title: "Commercial Basic",
        price: "220",
        unit: "AED/m²",
        description: "Essential sanding for commercial spaces with light traffic",
        features: [
          "Three-stage sanding process",
          "Dust extraction system",
          "Basic edge work",
          "Single coat commercial-grade finish",
          "After-hours service available",
          "48-hour completion",
        ],
      },
      {
        title: "Commercial Standard",
        price: "290",
        unit: "AED/m²",
        description: "Comprehensive restoration for moderate-traffic commercial areas",
        features: [
          "Four-stage sanding process",
          "Dust extraction system",
          "Detailed edge and corner work",
          "Minor repair of up to 10 pieces",
          "Two-coat commercial-grade finish",
          "Color toning options",
          "After-hours service included",
          "72-hour completion",
        ],
        featured: true,
      },
      {
        title: "Commercial Premium",
        price: "390",
        unit: "AED/m²",
        description: "Complete transformation for high-traffic commercial environments",
        features: [
          "Five-stage sanding process",
          "Dust extraction system",
          "Precision edge and corner work",
          "Extensive repairs (up to 20 pieces)",
          "Bevel restoration",
          "Multi-layer toning with exclusive colors",
          "Three-coat premium commercial-grade finish",
          "High durability for heavy foot traffic",
          "After-hours service included",
          "5-7 day completion",
        ],
      },
    ],
  }

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
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Transparent Pricing Options</h3>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-6"></div>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
            We offer clear, comprehensive pricing packages tailored to different needs and property types. All prices
            include materials, labor, and cleanup.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-zinc-900 rounded-sm">
            <button
              onClick={() => setSelectedTab("residential")}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                selectedTab === "residential" ? "bg-amber-500 text-black" : "text-white hover:text-amber-500"
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setSelectedTab("commercial")}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                selectedTab === "commercial" ? "bg-amber-500 text-black" : "text-white hover:text-amber-500"
              }`}
            >
              Commercial
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingOptions[selectedTab].map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-zinc-900/50 border ${
                option.featured ? "border-amber-500" : "border-zinc-800"
              } rounded-sm overflow-hidden group`}
            >
              {option.featured && (
                <div className="absolute top-0 right-0 bg-amber-500 text-black px-4 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h4 className="text-2xl font-bold text-white mb-2">{option.title}</h4>
                <p className="text-zinc-400 mb-6 h-12">{option.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{option.price}</span>
                  <span className="text-zinc-400 ml-1">{option.unit}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    option.featured
                      ? "bg-amber-500 hover:bg-amber-600 text-black"
                      : "bg-zinc-800 hover:bg-zinc-700 text-white"
                  } py-6`}
                >
                  Request Quote
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-zinc-400 mb-4">
            Need a custom solution? Contact us for a personalized quote tailored to your specific requirements.
          </p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="inline-flex items-center text-amber-500 hover:text-amber-400 cursor-help">
                  <span className="mr-1">View pricing details</span>
                  <HelpCircle className="w-4 h-4" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-zinc-900 border border-zinc-800 p-4 max-w-md">
                <p className="text-sm text-zinc-300">
                  Prices may vary based on floor condition, room accessibility, and specific requirements. Minimum
                  project size applies. Additional charges may apply for furniture moving, extensive repairs, or custom
                  design work. All prices include VAT.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>
      </div>
    </section>
  )
}
