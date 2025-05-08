"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Check, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [activeField, setActiveField] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleFocus = (fieldName: string) => {
    setActiveField(fieldName)
  }

  const handleBlur = () => {
    setActiveField(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setFormStatus("success")
  }

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-black">
        {/* Tech-inspired background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
        </div>

        {/* Circuit-like pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50 H100 M50 0 V100 M25 25 H75 V75 H25 Z" stroke="white" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-amber-500 text-sm uppercase tracking-widest mb-4">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Send Us a Message</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto"></div>
          </motion.div>

          {formStatus === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-12 text-center rounded-sm"
            >
              <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully</h3>
              <p className="text-zinc-400 mb-8">Thank you for reaching out. Our team will get back to you shortly.</p>
              <Button
                onClick={() => setFormStatus("idle")}
                className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-6 text-lg"
              >
                Send Another Message
              </Button>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-8 md:p-12 rounded-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2 relative">
                  <label htmlFor="name" className="text-white font-medium">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus("name")}
                    onBlur={handleBlur}
                    placeholder="Your name"
                    required
                    className={`bg-zinc-800/50 backdrop-blur-sm border-zinc-700 text-white placeholder-zinc-500 focus:border-amber-500 h-12 transition-all duration-300 ${
                      activeField === "name" ? "border-amber-500 bg-zinc-800/80" : ""
                    }`}
                  />
                  {activeField === "name" && (
                    <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-amber-500 to-transparent"></div>
                  )}
                </div>

                <div className="space-y-2 relative">
                  <label htmlFor="email" className="text-white font-medium">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={handleBlur}
                    placeholder="Your email"
                    required
                    className={`bg-zinc-800/50 backdrop-blur-sm border-zinc-700 text-white placeholder-zinc-500 focus:border-amber-500 h-12 transition-all duration-300 ${
                      activeField === "email" ? "border-amber-500 bg-zinc-800/80" : ""
                    }`}
                  />
                  {activeField === "email" && (
                    <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-amber-500 to-transparent"></div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2 relative">
                  <label htmlFor="phone" className="text-white font-medium">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    onFocus={() => handleFocus("phone")}
                    onBlur={handleBlur}
                    placeholder="Your phone"
                    className={`bg-zinc-800/50 backdrop-blur-sm border-zinc-700 text-white placeholder-zinc-500 focus:border-amber-500 h-12 transition-all duration-300 ${
                      activeField === "phone" ? "border-amber-500 bg-zinc-800/80" : ""
                    }`}
                  />
                  {activeField === "phone" && (
                    <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-amber-500 to-transparent"></div>
                  )}
                </div>

                <div className="space-y-2 relative">
                  <label htmlFor="service" className="text-white font-medium">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    onFocus={() => handleFocus("service")}
                    onBlur={handleBlur}
                    className={`w-full h-12 px-3 py-2 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none transition-all duration-300 ${
                      activeField === "service" ? "border-amber-500 bg-zinc-800/80" : ""
                    }`}
                  >
                    <option value="">Select a service</option>
                    <option value="installation">Custom Installation</option>
                    <option value="restoration">Restoration & Repair</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="consultation">Consultation</option>
                    <option value="custom">Custom Designs</option>
                  </select>
                  {activeField === "service" && (
                    <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-amber-500 to-transparent"></div>
                  )}
                </div>
              </div>

              <div className="space-y-2 mb-8 relative">
                <label htmlFor="message" className="text-white font-medium">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={handleBlur}
                  placeholder="Tell us about your project"
                  rows={5}
                  required
                  className={`bg-zinc-800/50 backdrop-blur-sm border-zinc-700 text-white placeholder-zinc-500 focus:border-amber-500 transition-all duration-300 ${
                    activeField === "message" ? "border-amber-500 bg-zinc-800/80" : ""
                  }`}
                />
                {activeField === "message" && (
                  <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-amber-500 to-transparent"></div>
                )}
              </div>

              <Button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full bg-amber-500 hover:bg-amber-600 text-black py-6 text-lg relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {formStatus === "submitting" ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </span>
                <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-amber-600"></div>
              </Button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  )
}
