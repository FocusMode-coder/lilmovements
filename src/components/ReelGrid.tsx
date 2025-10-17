'use client'

import { loops } from '@/lib/videos'
import { LoopVideo } from '@/components/LoopVideo'

export function ReelGrid() {
  return (
    <section className="section-padding bg-black">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-white mb-6">
            Movement Reel
          </h2>
          <p className="body-lg text-white/80 max-w-3xl mx-auto">
            A collection of choreographed moments capturing the essence of movement, 
            emotion, and artistic expression.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {loops.map((video, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg bg-gray-900 aspect-[9/16] animate-on-motion"
            >
              <div className="relative w-full h-full">
                <LoopVideo
                  src={video.src}
                  poster={video.poster}
                  className="animate-on-motion"
                />
                
                {/* Overlay with minimal info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}