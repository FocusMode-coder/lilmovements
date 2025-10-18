import React from 'react'
import { Metadata } from 'next'
import ReelBackground from '@/components/ReelBackground'
import LoopMosaic from '@/components/LoopMosaic'
import CTAGroup from '@/components/CTAGroup'

export const metadata: Metadata = {
  title: 'Movement Reel',
  description: 'Experience the flow through our curated collection of movement practice loops and behind-the-scenes content.',
}

export default function ReelPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Hero Background Video */}
      <ReelBackground />
      
      {/* Main Content */}
      <main>
        {/* Introduction Section */}
        <section className="py-16 md:py-24 bg-[var(--warm1)]">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-brand text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--ink2)] tracking-tight mb-6">
                Movement Reel
              </h1>
              <p className="text-lg lg:text-xl text-[var(--ink1)] leading-relaxed">
                Explore the essence of Lil Movements through these practice loops. Each sequence captures the fluidity of breath, the precision of technique, and the musicality that defines our approach to movement.
              </p>
            </div>
          </div>
        </section>

        {/* Large Loop Mosaic - All Available Loops */}
        <section className="py-16 md:py-24 bg-[var(--bg)]">
          <div className="container max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-brand text-3xl md:text-4xl font-bold text-[var(--ink2)] tracking-tight mb-4">
                Practice Collection
              </h2>
              <p className="text-base lg:text-lg text-[var(--ink1)] leading-relaxed max-w-2xl mx-auto">
                A curated selection of movement sequences showcasing the depth and versatility of the Lil Movements practice.
              </p>
            </div>

            {/* Expanded Grid with All Available Loops */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {/* Loop 1 */}
              <div className="relative aspect-[9/16] md:aspect-[4/5] rounded-2xl overflow-clip hairline bg-[var(--warm1)]">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/assets/LOOP-01.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />
              </div>

              {/* Loop 2 */}
              <div className="relative aspect-[9/16] md:aspect-[4/5] rounded-2xl overflow-clip hairline bg-[var(--warm1)]">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/assets/LOOP-02.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />
              </div>

              {/* Loop 3 */}
              <div className="relative aspect-[9/16] md:aspect-[4/5] rounded-2xl overflow-clip hairline bg-[var(--warm1)]">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/assets/loop2.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />
              </div>

              {/* Loop 4 */}
              <div className="relative aspect-[9/16] md:aspect-[4/5] rounded-2xl overflow-clip hairline bg-[var(--warm1)]">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/assets/loop3.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />
              </div>

              {/* Loop 5 */}
              <div className="relative aspect-[9/16] md:aspect-[4/5] rounded-2xl overflow-clip hairline bg-[var(--warm1)]">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/assets/loop4.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />
              </div>

              {/* Featured Practice - Dress Yellow */}
              <div className="relative aspect-[9/16] md:aspect-[4/5] rounded-2xl overflow-clip hairline bg-[var(--warm1)]">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/assets/Dress yellow.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />
              </div>

              {/* Repeat first loops to fill grid aesthetically */}
              <div className="relative aspect-[9/16] md:aspect-[4/5] rounded-2xl overflow-clip hairline bg-[var(--warm1)]">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/assets/LOOP-01.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />
              </div>

              <div className="relative aspect-[9/16] md:aspect-[4/5] rounded-2xl overflow-clip hairline bg-[var(--warm1)]">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/assets/LOOP-02.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />
              </div>

              <div className="relative aspect-[9/16] md:aspect-[4/5] rounded-2xl overflow-clip hairline bg-[var(--warm1)]">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/assets/loop2.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />
              </div>

              <div className="relative aspect-[9/16] md:aspect-[4/5] rounded-2xl overflow-clip hairline bg-[var(--warm1)]">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/assets/loop3.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 md:py-24 bg-[var(--warm2)]">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="font-brand text-3xl md:text-4xl font-bold text-[var(--ink2)] tracking-tight mb-6">
                Ready to Move?
              </h2>
              <p className="text-lg lg:text-xl text-[var(--ink1)] leading-relaxed">
                Experience the practice that combines breath, precision, and musical flow. Get in touch to learn more about classes and private sessions.
              </p>
            </div>

            {/* CTA Group */}
            <div className="flex justify-center">
              <CTAGroup program="Movement Classes" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}