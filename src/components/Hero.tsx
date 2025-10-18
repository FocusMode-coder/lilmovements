'use client'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-[var(--bg)] bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(199,166,116,.10),transparent)]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-brand text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[var(--ink2)] tracking-tight leading-none mb-6">
            Lil Movements
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[var(--ink1)] font-light tracking-wide mb-12 lg:mb-16 leading-relaxed">
            Breathe · Move · Align
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
            {/* Primary CTA - Email */}
            <a
              href="mailto:hello@lilmovements.com"
              className="inline-flex items-center justify-center bg-white text-black rounded-2xl h-12 px-6 font-semibold transition-all duration-200 hover:bg-[var(--ink1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] min-w-[200px] text-center"
              aria-label="Book a class via email"
            >
              Book a Class via Email
            </a>

            {/* Secondary CTA - Watch Reel */}
            <a
              href="#reel"
              className="inline-flex items-center justify-center hairline text-[var(--ink1)] hover:bg-white/5 rounded-2xl h-12 px-6 font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] min-w-[200px] text-center"
              aria-label="Watch movement reel"
            >
              Watch Reel
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-[var(--ink1)]/60">
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <div className="w-px h-6 bg-[var(--ink1)]/30"></div>
        </div>
      </div>
    </section>
  )
}