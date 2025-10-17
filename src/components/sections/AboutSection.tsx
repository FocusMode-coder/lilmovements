'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Portrait Image */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/assets/lily.jpg"
                alt="Lily - Founder and Creative Director of Lil Movements"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Mission Statement */}
          <div className="order-1 lg:order-2">
            <h2 className="font-lil text-5xl md:text-6xl font-bold text-black mb-8 tracking-tight leading-none">
              About Lil Movements
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-800 mb-8">
              <p>
                Lil Movements was born from a deep belief that dance is more than movement—
                it's a language of the soul, a bridge between technique and authentic expression.
              </p>
              <p>
                Founded by Lily, our studio creates a space where dancers of all levels 
                can explore their unique voice through contemporary, urban, and fusion styles.
              </p>
            </div>
            
            <Button size="lg" asChild>
              <a href="/instructor">Meet Lily</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}