"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, Wand2, Hammer, Sparkles, Lightbulb, Palette, Building } from "lucide-react"

import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  image: string
}

export default function ServiceCard({ title, description, icon, image }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Wand2":
        return <Wand2 className="w-6 h-6" />
      case "Hammer":
        return <Hammer className="w-6 h-6" />
      case "Sparkles":
        return <Sparkles className="w-6 h-6" />
      case "Lightbulb":
        return <Lightbulb className="w-6 h-6" />
      case "Palette":
        return <Palette className="w-6 h-6" />
      case "Building":
        return <Building className="w-6 h-6" />
      default:
        return <Wand2 className="w-6 h-6" />
    }
  }

  return (
    <motion.div
      className="group relative overflow-hidden bg-zinc-800/50 border border-zinc-700/50"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 z-0 transition-all duration-500 ease-in-out">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-all duration-700 ease-in-out ${isHovered ? "scale-110 brightness-50" : "brightness-[0.2]"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </div>

      <div className="relative z-10 p-8 h-full flex flex-col">
        <div className="w-14 h-14 rounded-sm bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 text-amber-500">
          {getIcon(icon)}
        </div>

        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-zinc-400 mb-6 flex-grow">{description}</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          <Button variant="link" className="p-0 text-amber-500 hover:text-amber-400">
            Learn More <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
