'use client'

import { useRef, useEffect, useState } from 'react'

interface LoopVideoProps {
  src: string
  poster?: string
  className?: string
  isHero?: boolean
}

export function LoopVideo({ src, poster, className = '', isHero = false }: LoopVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isIntersecting, setIsIntersecting] = useState(isHero) // Hero videos load immediately
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    // Skip intersection observer for hero videos
    if (isHero) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
      }
    )

    const currentVideo = videoRef.current
    if (currentVideo) {
      observer.observe(currentVideo)
    }

    return () => {
      if (currentVideo) {
        observer.unobserve(currentVideo)
      }
    }
  }, [isHero])

  const handleVideoError = () => {
    console.error('Video failed to load:', src)
  }

  const handleLoadStart = () => {
    setHasLoaded(true)
  }

  return (
    <video
      ref={videoRef}
      className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${
        hasLoaded ? 'opacity-100' : 'opacity-0'
      } ${className}`}
      src={isIntersecting ? src : undefined}
      poster={poster}
      muted
      autoPlay={isIntersecting}
      loop
      playsInline
      preload={isHero ? "metadata" : "none"}
      onError={handleVideoError}
      onLoadStart={handleLoadStart}
      aria-hidden="true"
    />
  )
}