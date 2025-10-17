'use client'

import { useState, useEffect } from 'react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { href: '#classes', label: 'Classes' },
    { href: '/instructor', label: 'Instructor' },
    { href: '#about', label: 'About' },
    { href: '#reel', label: 'Reel' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-md bg-black/80 border-b border-white/10'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Brand */}
            <div className="flex-shrink-0">
              <a
                href="#"
                className="font-lil text-xl lg:text-2xl font-bold text-white tracking-wider hover:opacity-80 transition-opacity duration-200 focus-ring-white rounded-sm"
                aria-label="Lil Movements home"
              >
                LIL MOVEMENTS
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium tracking-wide kinetic-underline transition-colors duration-200 focus-ring-white rounded-sm"
                    aria-label={`Navigate to ${link.label} section`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-white hover:text-gray-300 hover:bg-white/10 focus-ring-white transition-colors duration-200 rounded-sm"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">
                  {isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
                </span>
                {/* Hamburger icon */}
                <svg
                  className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Close icon */}
                <svg
                  className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            aria-hidden="true"
            onClick={closeMobileMenu}
          />
          
          {/* Menu panel */}
          <div className="fixed top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-6 space-y-4" id="mobile-menu">
              <h2 id="mobile-menu-title" className="sr-only">
                Navigation menu
              </h2>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-3 text-base font-medium text-white hover:text-gray-300 hover:bg-white/10 transition-colors duration-200 focus-ring-white rounded-sm"
                  onClick={closeMobileMenu}
                  aria-label={`Navigate to ${link.label} section`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}