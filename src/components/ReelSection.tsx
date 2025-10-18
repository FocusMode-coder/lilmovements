import React from 'react'

export default function ReelSection() {
  const videoData = [
    {
      src: '/assets/LOOP-01.mp4',
      alt: 'Lil Movements practice loop 1'
    },
    {
      src: '/assets/LOOP-02.mp4', 
      alt: 'Lil Movements practice loop 2'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-bg">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {videoData.map((video, index) => (
            <div 
              key={index}
              className="aspect-square overflow-hidden rounded-xl ring-1 ring-inset ring-white/10"
            >
              <video
                src={video.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                aria-label={video.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}