'use client'

import { useRef, useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface VideoTile {
  id: string
  src: string
  poster: string
  title: string
  duration: string
}

const videoTiles: VideoTile[] = [
  { id: '1', src: '/assets/loop1.mp4', poster: '/assets/hero_poster.jpg', title: 'Urban Flow', duration: '0:08' },
  { id: '2', src: '/assets/loop2.mp4', poster: '/assets/hero_poster.jpg', title: 'Contemporary', duration: '0:06' },
  { id: '3', src: '/assets/loop3.mp4', poster: '/assets/hero_poster.jpg', title: 'Precision', duration: '0:07' },
  { id: '4', src: '/assets/loop4.mp4', poster: '/assets/hero_poster.jpg', title: 'Strength', duration: '0:05' },
  { id: '5', src: '/assets/loop1.mp4', poster: '/assets/hero_poster.jpg', title: 'Expression', duration: '0:08' },
  { id: '6', src: '/assets/loop2.mp4', poster: '/assets/hero_poster.jpg', title: 'Movement', duration: '0:06' },
]

interface VideoTileProps {
  video: VideoTile
  isInView: boolean
}

function VideoTileComponent({ video, isInView }: VideoTileProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !isInView) return

    const handleLoadedData = () => {
      video.currentTime = 0
    }

    video.addEventListener('loadeddata', handleLoadedData)
    return () => video.removeEventListener('loadeddata', handleLoadedData)
  }, [isInView])

  const handlePlay = async () => {
    const video = videoRef.current
    if (!video) return

    try {
      await video.play()
      setIsPlaying(true)
    } catch (error) {
      console.error('Video play error:', error)
    }
  }

  const handlePause = () => {
    const video = videoRef.current
    if (!video) return

    video.pause()
    setIsPlaying(false)
  }

  const handleMouseEnter = () => {
    if (isMobile) return
    setIsHovered(true)
    handlePlay()
  }

  const handleMouseLeave = () => {
    if (isMobile) return
    setIsHovered(false)
    handlePause()
  }

  const handleTap = () => {
    if (!isMobile) return
    
    if (isPlaying) {
      handlePause()
    } else {
      handlePlay()
    }
  }

  return (
    <div
      className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-black cursor-pointer micro-scale"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTap}
      role="button"
      tabIndex={0}
      aria-label={`${video.title} video - ${isMobile ? 'Tap to play/pause' : 'Hover to play'}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleTap()
        }
      }}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        poster={video.poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={video.src} type="video/mp4" />
      </video>

      {/* Overlay with gradient and info */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent",
          "transition-opacity duration-300",
          isHovered || isPlaying ? "opacity-100" : "opacity-60"
        )}
      >
        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold text-sm mb-1">
                {video.title}
              </h3>
              <p className="text-white/70 text-xs">
                {video.duration}
              </p>
            </div>
            
            {/* Play/pause indicator */}
            <div 
              className={cn(
                "w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center",
                "transition-all duration-200",
                isPlaying ? "scale-110" : "scale-100"
              )}
            >
              {isPlaying ? (
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-3 bg-white rounded-full" />
                  <div className="w-0.5 h-3 bg-white rounded-full" />
                </div>
              ) : (
                <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-0.5" />
              )}
            </div>
          </div>
        </div>

        {/* Mobile tap instruction */}
        {isMobile && (
          <div 
            className={cn(
              "absolute top-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full",
              "transition-opacity duration-300",
              isPlaying ? "opacity-0" : "opacity-100"
            )}
          >
            <span className="text-white text-xs font-medium">
              TAP
            </span>
          </div>
        )}
      </div>

      {/* Focus ring */}
      <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-focus-visible:ring-white transition-all duration-200" />
    </div>
  )
}

export function VideoGrid() {
  const [visibleTiles, setVisibleTiles] = useState<Set<string>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const tileId = entry.target.getAttribute('data-tile-id')
          if (tileId) {
            setVisibleTiles(prev => {
              const newSet = new Set(prev)
              if (entry.isIntersecting) {
                newSet.add(tileId)
              } else {
                newSet.delete(tileId)
              }
              return newSet
            })
          }
        })
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    )

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  useEffect(() => {
    const tileElements = document.querySelectorAll('[data-tile-id]')
    tileElements.forEach(element => {
      observerRef.current?.observe(element)
    })

    return () => {
      tileElements.forEach(element => {
        observerRef.current?.unobserve(element)
      })
    }
  }, [])

  return (
    <section className="py-32 bg-black" id="reel">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-lil text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Movement Reel
          </h2>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            A collection of choreographed moments capturing the essence of movement, 
            emotion, and artistic expression.
          </p>
        </div>

        {/* Responsive Video Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {videoTiles.map((video) => (
            <div 
              key={video.id}
              data-tile-id={video.id}
            >
              <VideoTileComponent 
                video={video}
                isInView={visibleTiles.has(video.id)}
              />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-white/70 mb-6">
            Ready to start your movement journey?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cta-button bg-white text-black hover:bg-white/90">
              Book a Class
            </button>
            <button className="cta-button bg-transparent text-white border-2 border-white hover:bg-white hover:text-black">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}