import React from 'react'
import BackgroundVideo from './BackgroundVideo'

export default function ReelBackground() {
  return (
    <BackgroundVideo 
      src="/assets/LOOP-01.mp4" 
      poster="/assets/hero_poster.jpg" 
      className="h-[72svh] md:h-[86svh]"
    >
      <div className="flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        {/* Centered Content */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-3">
            Feel the Flow
          </h2>
          <p className="mt-3 text-[var(--ink1)]/80 max-w-xl mx-auto text-lg leading-relaxed">
            45 minutes blending yoga, dance & qigong for energy release and precision.
          </p>
        </div>
      </div>
    </BackgroundVideo>
  )
}