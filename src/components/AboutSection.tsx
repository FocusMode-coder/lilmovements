import React from 'react'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--panel)]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:grid grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="mb-8 md:mb-0">
            <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-3xl overflow-hidden hairline bg-[var(--warm1)]">
              <Image
                src="/assets/lily.jpg"
                alt="Lillian Hahn Shining - Creator of Lil Movements"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-brand text-4xl md:text-5xl font-bold text-[var(--ink2)] tracking-tight leading-tight">
                About Lil Movements
              </h2>
              <p className="text-lg lg:text-xl text-[var(--ink1)] leading-relaxed">
                A premium movement and wellness practice created by Lillian Hahn Shining. Lil Movements aligns breath, mobility and musicality to help you feel lighter, stronger and fully present.
              </p>
            </div>
            
            {/* Bio Sub-block */}
            <div className="space-y-4 pt-4 hairline border-t">
              <h3 className="font-brand text-2xl font-semibold text-[var(--ink2)] tracking-tight">
                Lillian Hahn Shining
              </h3>
              <p className="text-base lg:text-lg text-[var(--ink1)] leading-relaxed">
                Coach, choreographer and photographer. Her method brings precise technique together with mindful breath and a deeply musical flow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}