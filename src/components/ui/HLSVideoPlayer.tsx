'use client'

import { useEffect, useRef, useState } from 'react'
import Hls from 'hls.js'

interface HLSVideoPlayerProps {
  src: string
  fallbackSrc?: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  playsInline?: boolean
}

export function HLSVideoPlayer({
  src,
  fallbackSrc,
  className = '',
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
}: HLSVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const hlsRef = useRef<Hls | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const setupHLS = () => {
      if (Hls.isSupported()) {
        const hls = new Hls({
          enableWorker: true,
          lowLatencyMode: false,
          backBufferLength: 90,
          maxBufferLength: 300,
          maxMaxBufferLength: 600,
          maxBufferSize: 60 * 1000 * 1000,
          maxBufferHole: 0.1,
          highBufferWatchdogPeriod: 2,
          nudgeOffset: 0.1,
          nudgeMaxRetry: 3,
          maxFragLookUpTolerance: 0.25,
          liveSyncDurationCount: 3,
          liveMaxLatencyDurationCount: 10,
        })

        hlsRef.current = hls

        hls.loadSource(src)
        hls.attachMedia(video)

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          setIsLoading(false)
          if (autoPlay) {
            video.play().catch(console.error)
          }
        })

        hls.on(Hls.Events.ERROR, (event, data) => {
          console.error('HLS Error:', data)
          if (data.fatal) {
            setHasError(true)
            setIsLoading(false)
          }
        })
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Native HLS support (Safari)
        video.src = src
        setIsLoading(false)
      } else {
        // Fallback to regular video
        if (fallbackSrc) {
          video.src = fallbackSrc
          setIsLoading(false)
        } else {
          setHasError(true)
          setIsLoading(false)
        }
      }
    }

    setupHLS()

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy()
        hlsRef.current = null
      }
    }
  }, [src, fallbackSrc, autoPlay])

  if (hasError && !fallbackSrc) {
    return (
      <div className={`bg-black flex items-center justify-center ${className}`}>
        <div className="text-white text-center">
          <div className="text-2xl mb-2">•</div>
          <div className="text-sm opacity-75">Video unavailable</div>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
          <div className="text-white text-center">
            <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-2" />
            <div className="text-sm opacity-75">Loading...</div>
          </div>
        </div>
      )}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        preload="metadata"
        onLoadStart={() => setIsLoading(true)}
        onCanPlay={() => setIsLoading(false)}
        onError={() => {
          setHasError(true)
          setIsLoading(false)
        }}
      />
    </div>
  )
}