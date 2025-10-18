import React from 'react'

interface BackgroundVideoProps {
  src: string
  poster?: string
  overlay?: "top" | "center" | "bottom"
  className?: string
  children?: React.ReactNode
}

export default function BackgroundVideo({
  src,
  poster,
  overlay = "bottom",
  className = "h-screen",
  children
}: BackgroundVideoProps) {
  // Dynamic gradient overlay based on overlay prop
  const getOverlayGradient = () => {
    switch (overlay) {
      case "top":
        return "bg-gradient-to-b from-black/80 via-black/40 to-black/20"
      case "center":
        return "bg-gradient-to-b from-black/60 via-black/30 to-black/60"
      case "bottom":
      default:
        return "bg-gradient-to-b from-black/20 via-black/40 to-black/80"
    }
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 ${getOverlayGradient()}`} />
      
      {/* Content Container */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}