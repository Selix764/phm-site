"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

interface PageHeroProps {
  title: string
  subtitle?: string
  description?: string
  showCta?: boolean
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

export function PageHero({
  title,
  subtitle,
  description = "Suntem o platformă şi un canal de comunicare cu experienţă în producţia de media şi lifestyle, ce oferă soluţii creative pentru susţinerea succesului oricărei afaceri din orice domeniu.",
  showCta = true,
  ctaText = "Solicită o ofertă",
  ctaLink = "/contact",
  secondaryCtaText = "Vezi proiectele noastre",
  secondaryCtaLink = "/projects",
}: PageHeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slide2.jpg-Gl7J1nn08TVo3HMNm5XNYeQ3z5rXX5.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slide3.jpg-srcW7f7NAbkxorrKY1TPzcKhJ1TMzc.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/slide1.jpg-QdrjlzBc3qOmpItstcb0mr0C4tFjsG.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bottom_left-MVEsTolZFENCvkoNi3FXecTtVlrIJD.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bottom_right-e3PRxwb7TE0t70xL0pcqbi16kptil1.png",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative pt-[120px] pb-[80px] px-5 md:px-[120px] max-w-[1400px] mx-auto overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {images.map((src, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{ opacity: index === currentImageIndex ? 1 : 0 }}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Background ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left content - takes 7 columns on large screens */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-block">
            <motion.div
              className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-white font-light tracking-wider text-sm">Perfect Home Media</span>
            </motion.div>
          </div>

          <h1 className="font-bold text-[42px] md:text-[56px] leading-[1.1] text-white mb-6">
            <span className="block">{title}</span>
            {subtitle && <span className="text-[#FF0000]">{subtitle}</span>}
          </h1>

          <p className="text-[18px] text-white/80 mb-8 max-w-[600px]">{description}</p>

          {showCta && (
            <div className="flex flex-wrap gap-4">
              <Link
                href={ctaLink}
                className="group bg-[#FF0000] text-white px-8 py-3 rounded-full font-medium hover:bg-[#FF0000]/90 transition-all flex items-center"
              >
                {ctaText}
                <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={secondaryCtaLink}
                className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all"
              >
                {secondaryCtaText}
              </Link>
            </div>
          )}

          {/* Brands we work with */}
          <div className="mt-12">
            <p className="text-sm text-white/60 mb-4">Parteneri și branduri premium:</p>
            <div className="flex flex-wrap items-center gap-4">
              <div className="bg-white/10 p-2 rounded-md h-12 w-24 flex items-center justify-center">
                <Image
                  src="/clients/loreal.jpeg"
                  alt="L'Oreal Paris"
                  width={80}
                  height={30}
                  className="object-contain"
                />
              </div>
              <div className="bg-white/10 p-2 rounded-md h-12 w-24 flex items-center justify-center">
                <Image src="/clients/dove.jpeg" alt="Dove" width={80} height={30} className="object-contain" />
              </div>
              <div className="bg-white/10 p-2 rounded-md h-12 w-24 flex items-center justify-center">
                <Image
                  src="/clients/aqua-carpatica.png"
                  alt="Aqua Carpatica"
                  width={80}
                  height={30}
                  className="object-contain"
                />
              </div>
              <div className="bg-white/10 p-2 rounded-md h-12 w-24 flex items-center justify-center">
                <Image src="/clients/mac.png" alt="MAC" width={80} height={30} className="object-contain invert" />
              </div>
              <div className="bg-white/10 p-2 rounded-md h-12 w-24 flex items-center justify-center">
                <Image
                  src="/clients/lancome.jpeg"
                  alt="Lancome Paris"
                  width={80}
                  height={30}
                  className="object-contain"
                />
              </div>
              <div className="bg-white/10 p-2 rounded-md h-12 w-24 flex items-center justify-center">
                <Image
                  src="/clients/carrefour.jpeg"
                  alt="Carrefour"
                  width={80}
                  height={30}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right content - takes 5 columns on large screens */}
        <motion.div
          className="lg:col-span-5 relative hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[250px] relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/top_left-nJkeyMeU8HH47VjIvQfyApssW4PHDR.png"
                  alt="Photography"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[180px] relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bottom_left-MVEsTolZFENCvkoNi3FXecTtVlrIJD.png"
                  alt="Camera"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[180px] relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/top_right-dswYNWrf0CdmUKDr8V9XiedTNrGnNr.png"
                  alt="Landscape"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[250px] relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bottom_right-e3PRxwb7TE0t70xL0pcqbi16kptil1.png"
                  alt="City"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        className="relative z-20 mt-20 bg-black/40 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white/10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-[#FF0000] text-3xl font-bold">200+</h3>
            <p className="text-white/80">Proiecte finalizate</p>
          </div>
          <div className="text-center">
            <h3 className="text-[#FF0000] text-3xl font-bold">10+</h3>
            <p className="text-white/80">Ani de experiență</p>
          </div>
          <div className="text-center">
            <h3 className="text-[#FF0000] text-3xl font-bold">150+</h3>
            <p className="text-white/80">Clienți mulțumiți</p>
          </div>
          <div className="text-center">
            <h3 className="text-[#FF0000] text-3xl font-bold">98%</h3>
            <p className="text-white/80">Rată de satisfacție</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
