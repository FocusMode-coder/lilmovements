import React from 'react';

export default function HowStartedSection() {
  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video */}
          <div className="order-2 lg:order-1">
            <div className="aspect-video w-full">
              <video
                src="/assets/howgotstarted.mp4"
                controls
                playsInline
                preload="metadata"
                poster="/assets/hero_poster.jpg"
                className="w-full h-full object-cover rounded-lg"
                aria-label="How Lil Movements started video"
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-brand heading-lg text-white mb-6">
              How Lil Movements Started
            </h2>
            <p className="body-lg text-white/80 leading-relaxed">
              Born from a mix of yoga, dance and qigong, Lil Movements became a 45-minute practice for energy release, precision and awareness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}