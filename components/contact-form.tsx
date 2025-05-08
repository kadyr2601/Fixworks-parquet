"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="bg-zinc-900/70 border border-zinc-800 p-8">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-white font-medium">
                Full Name
              </label>
              <Input
                id="name"
                placeholder="Your name"
                required
                className="bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500 focus:border-amber-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-white font-medium">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                required
                className="bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500 focus:border-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-white font-medium">
                Phone Number
              </label>
              <Input
                id="phone"
                placeholder="Your phone"
                className="bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500 focus:border-amber-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="service" className="text-white font-medium">
                Service Interested In
              </label>
              <select
                id="service"
                className="w-full h-10 px-3 py-2 bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none"
              >
                <option value="">Select a service</option>
                <option value="installation">Custom Installation</option>
                <option value="restoration">Restoration & Repair</option>
                <option value="maintenance">Maintenance</option>
                <option value="consultation">Consultation</option>
                <option value="custom">Custom Designs</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-white font-medium">
              Your Message
            </label>
            <Textarea
              id="message"
              placeholder="Tell us about your project"
              rows={5}
              required
              className="bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500 focus:border-amber-500"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-amber-500 hover:bg-amber-600 text-black py-6 text-lg"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-12 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-6">
            <Check className="w-8 h-8 text-amber-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
          <p className="text-zinc-400 mb-6">Your message has been sent successfully. We'll get back to you shortly.</p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-amber-500/30 text-amber-500 hover:bg-amber-500/10"
          >
            Send Another Message
          </Button>
        </motion.div>
      )}
    </div>
  )
}
