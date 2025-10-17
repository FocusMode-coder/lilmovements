'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-black">
      {/* Video Background */}
      {!prefersReducedMotion ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          poster="/assets/hero_poster.jpg"
          aria-label="Lil Movements hero video showcasing dance and movement"
        >
          <source src="/assets/hero.mp4" type="video/mp4" />
          {/* Fallback for unsupported video */}
          <Image
            src="/assets/hero_poster.jpg"
            alt="Lil Movements - Premium dance and movement experiences"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </video>
      ) : (
        /* Static Image Fallback for Reduced Motion */
        <Image
          src="/assets/hero_poster.jpg"
          alt="Lil Movements - Premium dance and movement experiences"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      )}

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Main Headline */}
            <h1 className="font-lil text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight leading-none">
              Lil Movements
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 font-light tracking-wide">
              Strength · Flow · Precision
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg"
                className="text-lg px-8 py-4 min-w-[200px]"
                asChild
              >
                <a href="#classes">Explore Classes</a>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 min-w-[200px]"
                asChild
              >
                <a href="#reel">Watch Reel</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center">
          <span className="text-white/70 text-sm mb-2 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-white/30" />
        </div>
      </div>
    </section>
  )
}