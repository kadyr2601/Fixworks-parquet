import type React from "react"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import type { Metadata } from "next"

// Import Montserrat font with variable name
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Dubai Parquet | Premium Flooring Solutions",
  description:
    "Luxury parquet flooring solutions for Dubai's most prestigious properties. Expert installation, restoration, and maintenance services.",
  keywords:
    "parquet flooring, Dubai, luxury flooring, wood flooring, parquet installation, parquet restoration, parquet cleaning, parquet sanding",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
