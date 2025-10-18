'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-warm1">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-3xl overflow-hidden ring-1 ring-white/10 bg-warm1">
            <Image
              src="/assets/lily.jpg"
              alt="Lily - Founder and Creative Director of Lil Movements"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-lil text-4xl md:text-5xl font-bold text-ink2 tracking-tight leading-tight">
              About Lil Movements
            </h2>
            
            <div className="space-y-4 text-lg leading-relaxed text-ink1">
              <p>
                Lil Movements was born from a deep belief that dance is more than movement—
                it's a language of connection, where breath meets rhythm and precision flows 
                into authentic expression.
              </p>
              <p>
                Founded by Lily, our practice creates space for dancers and movers to explore 
                their unique voice through contemporary, urban, and fusion styles that honor 
                both technique and creative freedom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}