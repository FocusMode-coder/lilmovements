import React from 'react'

export default function InterviewSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--warm2)]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-brand text-4xl md:text-5xl font-bold text-[var(--ink2)] tracking-tight mb-6">
            Meet Lillian Hahn Shining — The Creator of Lil Movements
          </h2>
          <p className="text-lg lg:text-xl text-[var(--ink1)] leading-relaxed max-w-3xl mx-auto">
            In this interview, she shares how breath, mobility and rhythm interconnect in her classes.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="w-full max-w-[880px]">
            <div className="aspect-[9/16] md:aspect-video rounded-3xl overflow-hidden hairline bg-[var(--warm1)]">
              <video
                src="/assets/Lilinteview.mp4"
                controls
                playsInline
                preload="metadata"
                poster="/assets/lily.jpg"
                className="w-full h-full object-cover"
                aria-label="Interview with Lillian Hahn Shining, creator of Lil Movements"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}