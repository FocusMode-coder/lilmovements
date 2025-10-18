import React from 'react'

interface LoopMosaicProps {
  showCaption?: boolean
}

const LOOPS = ["/assets/LOOP-01.mp4", "/assets/LOOP-02.mp4"] // ready to add more later

export default function LoopMosaic({ showCaption = true }: LoopMosaicProps) {
  return (
    <section className="py-16 md:py-24 bg-[var(--bg)]">
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Optional Caption */}
        {showCaption && (
          <div className="text-center mb-8">
            <p className="text-xs md:text-sm uppercase tracking-wider text-[var(--ink1)] font-semibold">
              Practice Snapshots
            </p>
          </div>
        )}

        {/* Video Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {/* Duplicate loops to fill grid elegantly */}
          {[...LOOPS, ...LOOPS, ...LOOPS, ...LOOPS].slice(0, 8).map((src, index) => (
            <div 
              key={`${src}-${index}`}
              className="relative aspect-[9/16] md:aspect-[4/5] rounded-2xl overflow-clip hairline bg-[var(--warm1)]"
            >
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src={src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}