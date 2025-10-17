import React from 'react';

export default function InterviewSection() {
  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-brand heading-lg text-white mb-4">
            Meet Lily — The Creator of Lil Movements
          </h2>
          <p className="body-lg text-white/80 max-w-2xl mx-auto">
            In this interview, Lily shares how movement, breath and rhythm connect in her classes.
          </p>
        </div>
        
        <div className="relative">
          <div className="aspect-[9/16] md:aspect-video w-full max-w-3xl mx-auto">
            <video
              src="/assets/Lilinteview.mp4"
              controls
              playsInline
              preload="metadata"
              poster="/assets/lily.jpg"
              className="w-full h-full object-cover rounded-lg"
              aria-label="Interview with Lily, creator of Lil Movements"
            />
          </div>
        </div>
      </div>
    </section>
  );
}