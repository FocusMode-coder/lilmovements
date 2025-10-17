'use client'

import { useEffect, useRef, useState } from 'react'

interface CTAButton {
  label: string
  href: string
}

interface VideoHeroProps {
  src: string
  poster: string
  headline: string
  subhead: string
  ctaPrimary: CTAButton
  ctaSecondary: CTAButton
}

export function VideoHero({
  src,
  poster,
  headline,
  subhead,
  ctaPrimary,
  ctaSecondary,
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const hlsRef = useRef<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const setupVideo = async () => {
      try {
        // Check for native HLS support (Safari)
        if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = src
          setIsLoading(false)
          return
        }

        // Dynamic import for HLS.js to avoid SSR issues
        const { default: Hls } = await import('hls.js')

        if (Hls.isSupported()) {
          const hls = new Hls({
            enableWorker: true,
            lowLatencyMode: false,
            backBufferLength: 90,
            maxBufferLength: 300,
            maxBufferSize: 60 * 1000 * 1000,
            maxBufferHole: 0.1,
            nudgeOffset: 0.1,
            nudgeMaxRetry: 3,
            maxFragLookUpTolerance: 0.25,
          })

          hlsRef.current = hls
          hls.loadSource(src)
          hls.attachMedia(video)

          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            setIsLoading(false)
            video.play().catch(console.error)
          })

          hls.on(Hls.Events.ERROR, (event, data) => {
            console.error('HLS Error:', data)
            if (data.fatal) {
              setHasError(true)
              setIsLoading(false)
            }
          })
        } else {
          // Fallback: try to play as regular video
          video.src = src
          setIsLoading(false)
        }
      } catch (error) {
        console.error('Video setup error:', error)
        setHasError(true)
        setIsLoading(false)
      }
    }

    setupVideo()

    // Cleanup function
    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy()
        hlsRef.current = null
      }
    }
  }, [src])

  return (
    <section className="relative w-full aspect-hero-video overflow-hidden bg-black">
      {/* Video Background with fixed dimensions to prevent CLS */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={poster}
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
          onCanPlay={() => setIsLoading(false)}
          onError={() => {
            setHasError(true)
            setIsLoading(false)
          }}
          aria-hidden="true"
        />
      </div>

      {/* Top-to-bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />

      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-20">
          <div className="text-white text-center">
            <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-sm opacity-75">Loading experience...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-20">
          <div className="text-white text-center max-w-md px-4">
            <div className="text-4xl mb-4">•</div>
            <p className="text-lg mb-2">Video Unavailable</p>
            <p className="text-sm opacity-75">Please check your connection and try again</p>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Bold headline using custom font */}
            <h1 className="font-lil text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none tracking-tight mb-6 animate-fade-in">
              {headline}
            </h1>

            {/* Elegant subhead */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed max-w-3xl mb-8 lg:mb-12 animate-slide-up">
              {subhead}
            </p>

            {/* CTAs with enhanced focus styles */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 animate-slide-up">
              {/* Primary CTA - solid white with black text */}
              <a
                href={ctaPrimary.href}
                className="inline-flex items-center justify-center px-8 py-4 lg:px-10 lg:py-5 text-base lg:text-lg font-semibold text-black bg-white hover:bg-gray-100 transition-all duration-200 focus-ring-black rounded-sm"
                aria-label={`${ctaPrimary.label} - Navigate to classes section`}
              >
                {ctaPrimary.label}
              </a>

              {/* Secondary CTA - outline */}
              <a
                href={ctaSecondary.href}
                className="inline-flex items-center justify-center px-8 py-4 lg:px-10 lg:py-5 text-base lg:text-lg font-semibold text-white bg-transparent border-2 border-white hover:bg-white hover:text-black transition-all duration-200 focus-ring-white rounded-sm"
                aria-label={`${ctaSecondary.label} - Navigate to video reel section`}
              >
                {ctaSecondary.label}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default VideoHero