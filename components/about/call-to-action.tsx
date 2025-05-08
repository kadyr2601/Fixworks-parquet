"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function CallToAction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920&query=luxury parquet flooring in dubai penthouse"
          alt="Luxury Parquet Flooring"
          fill
          className="object-cover brightness-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      <div className="container relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>

            <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto">
              Let's collaborate to create exceptional parquet flooring that elevates your property and stands the test
              of time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-amber-500 hover:bg-amber-600 text-black rounded-none px-8 py-6 text-lg">
                Get in Touch
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  className="border-amber-500/30 text-white hover:bg-amber-500/10 rounded-none px-8 py-6 text-lg"
                >
                  View Our Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
