'use client'

import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--warm2)]/70 backdrop-blur-xl hairline border-b">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Wordmark */}
          <Link 
            href="/" 
            className="font-brand text-xl lg:text-2xl font-bold text-[var(--ink2)] tracking-tight hover:opacity-80 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--warm2)] rounded-sm"
          >
            LIL MOVEMENTS
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="#classes" 
              className="text-[var(--ink1)] hover:text-[var(--ink2)] transition-colors duration-200 font-medium tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--warm2)] rounded-sm"
            >
              Classes
            </Link>
            <Link 
              href="/instructor" 
              className="text-[var(--ink1)] hover:text-[var(--ink2)] transition-colors duration-200 font-medium tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--warm2)] rounded-sm"
            >
              Instructor
            </Link>
            <Link 
              href="#about" 
              className="text-[var(--ink1)] hover:text-[var(--ink2)] transition-colors duration-200 font-medium tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--warm2)] rounded-sm"
            >
              About
            </Link>
            <Link 
              href="#reel" 
              className="text-[var(--ink1)] hover:text-[var(--ink2)] transition-colors duration-200 font-medium tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--warm2)] rounded-sm"
            >
              Reel
            </Link>
            <Link 
              href="#contact" 
              className="text-[var(--ink1)] hover:text-[var(--ink2)] transition-colors duration-200 font-medium tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--warm2)] rounded-sm"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-[var(--ink1)] hover:text-[var(--ink2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--warm2)] rounded-sm"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}