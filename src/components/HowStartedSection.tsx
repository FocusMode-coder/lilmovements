import React from 'react'

export default function HowStartedSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--warm1)]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:grid grid-cols-2 gap-8 items-center">
          {/* Video */}
          <div className="mb-8 md:mb-0">
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden">
              <video
                src="/assets/howgotstarted.mp4"
                controls
                playsInline
                preload="metadata"
                poster="/assets/hero_poster.jpg"
                className="w-full h-full object-cover hairline bg-[var(--warm1)]"
                aria-label="How Lil Movements started - video story"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-brand text-4xl md:text-5xl font-bold text-[var(--ink2)] tracking-tight leading-tight">
              How Lil Movements Started
            </h2>
            <p className="text-lg lg:text-xl text-[var(--ink1)] leading-relaxed">
              Born from a blend of yoga, dance, and qigong, Lil Movements is a 45-minute practice to release stagnant energy, refine precision, and inhabit the body with presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}