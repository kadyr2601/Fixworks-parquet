"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin } from "lucide-react"

export default function ContactInfo() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+971 4 XXX XXXX", "+971 50 XXX XXXX"],
      delay: 0.1,
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@dubaiparquet.com", "sales@dubaiparquet.com"],
      delay: 0.2,
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Sheikh Zayed Road", "Dubai, United Arab Emirates"],
      delay: 0.3,
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Friday: 9am - 6pm", "Saturday: 10am - 4pm"],
      delay: 0.4,
    },
  ]

  const socialLinks = [
    { icon: Instagram, url: "#", label: "Instagram" },
    { icon: Facebook, url: "#", label: "Facebook" },
    { icon: Linkedin, url: "#", label: "LinkedIn" },
  ]

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-zinc-950">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: method.delay }}
              className="group"
            >
              <div className="bg-black/50 backdrop-blur-sm border border-zinc-800 p-8 h-full hover:border-amber-500/30 transition-all duration-300 relative overflow-hidden">
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:bg-amber-500/20 transition-colors duration-300">
                    <method.icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4">{method.title}</h3>
                  <div className="space-y-2">
                    {method.details.map((detail, idx) => (
                      <p key={idx} className="text-zinc-400">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-8 h-8 border-l border-t border-amber-500/20 -mb-[1px] -mr-[1px] transform rotate-180 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-6">Connect With Us</h3>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                aria-label={social.label}
                className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 hover:bg-amber-500/20 transition-colors duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
