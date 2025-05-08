"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setServicesOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? "bg-black/90 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-2xl">
            Fix<span className="text-amber-500">Works</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                pathname === "/" ? "text-amber-500" : "text-white"
              }`}
            >
              Home
            </Link>
            <div className="relative group">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center text-sm font-medium transition-colors hover:text-amber-500 ${
                  pathname.includes("/services") ? "text-amber-500" : "text-white"
                }`}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
                <div className="rounded-md shadow-lg bg-zinc-900 ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="py-1">
                    <Link
                      href="/services/parquet-installation"
                      className="block px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-amber-500"
                    >
                      Parquet Installation
                    </Link>
                    <Link
                      href="/services/parquet-sanding"
                      className="block px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-amber-500"
                    >
                      Parquet Sanding
                    </Link>
                    <Link
                      href="/services/parquet-cleaning"
                      className="block px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-amber-500"
                    >
                      Parquet Cleaning
                    </Link>
                    <Link
                      href="/services/local-restoration"
                      className="block px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-amber-500"
                    >
                      Local Restoration
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                pathname === "/about" ? "text-amber-500" : "text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                pathname === "/contact" ? "text-amber-500" : "text-white"
              }`}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-black font-medium py-2 px-4 rounded-md transition-colors"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-zinc-800">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`text-base font-medium transition-colors hover:text-amber-500 ${
                  pathname === "/" ? "text-amber-500" : "text-white"
                }`}
              >
                Home
              </Link>
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`flex items-center text-base font-medium transition-colors hover:text-amber-500 ${
                    pathname.includes("/services") ? "text-amber-500" : "text-white"
                  }`}
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link
                      href="/services/parquet-installation"
                      className="block text-sm text-zinc-300 hover:text-amber-500"
                    >
                      Parquet Installation
                    </Link>
                    <Link href="/services/parquet-sanding" className="block text-sm text-zinc-300 hover:text-amber-500">
                      Parquet Sanding
                    </Link>
                    <Link
                      href="/services/parquet-cleaning"
                      className="block text-sm text-zinc-300 hover:text-amber-500"
                    >
                      Parquet Cleaning
                    </Link>
                    <Link
                      href="/services/local-restoration"
                      className="block text-sm text-zinc-300 hover:text-amber-500"
                    >
                      Local Restoration
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/about"
                className={`text-base font-medium transition-colors hover:text-amber-500 ${
                  pathname === "/about" ? "text-amber-500" : "text-white"
                }`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`text-base font-medium transition-colors hover:text-amber-500 ${
                  pathname === "/contact" ? "text-amber-500" : "text-white"
                }`}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="bg-amber-500 hover:bg-amber-600 text-black font-medium py-2 px-4 rounded-md transition-colors inline-block w-full text-center"
              >
                Get Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
