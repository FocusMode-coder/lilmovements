'use client'

import React, { useState } from 'react'

interface CTAGroupProps {
  program?: string
}

export default function CTAGroup({ program = "Classes" }: CTAGroupProps) {
  const [userName, setUserName] = useState('')

  const generateMailto = (isGeneral = false) => {
    const name = userName.trim()
    
    if (isGeneral) {
      const subject = name ? `General%20Inquiry%20-%20${encodeURIComponent(name)}` : 'General%20Inquiry'
      const body = name 
        ? `Hi%20Lil%20Movements,%0AI'm%20${encodeURIComponent(name)}%20and%20I%20have%20a%20general%20inquiry.%0A`
        : `Hi%20Lil%20Movements,%0AI%20have%20a%20general%20inquiry.%0A`
      return `mailto:hello@lilmovements.com?subject=${subject}&body=${body}`
    }
    
    const subject = name ? `Class%20Inquiry%20-%20${encodeURIComponent(name)}` : 'Class%20Inquiry'
    const body = name 
      ? `Hi%20Lil%20Movements,%0AI'm%20${encodeURIComponent(name)}%20and%20I'd%20like%20to%20learn%20more%20about%20${encodeURIComponent(program)}.%0A`
      : `Hi%20Lil%20Movements,%0AI'd%20like%20to%20learn%20more%20about%20${encodeURIComponent(program)}.%0A`
    return `mailto:hello@lilmovements.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="space-y-4">
      {/* Name Input */}
      <div className="flex justify-center">
        <input
          id="userName"
          type="text"
          placeholder="Your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="h-11 px-4 rounded-xl bg-[var(--panel)] hairline text-[var(--ink1)] placeholder-[var(--ink1)]/60 w-full md:w-[260px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40 transition-all duration-200"
        />
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-3 md:gap-4 items-center justify-center">
        {/* Primary CTA - Email Us */}
        <a
          href={generateMailto(false)}
          className="inline-flex items-center justify-center bg-white text-black rounded-2xl h-12 px-6 font-semibold transition-all duration-200 hover:bg-[var(--ink1)] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40 min-w-[220px] text-center"
        >
          Email Us
        </a>

        {/* Secondary CTA - General Inquiries */}
        <a
          href={generateMailto(true)}
          className="inline-flex items-center justify-center hairline text-[var(--ink1)] hover:bg-white/5 rounded-2xl h-12 px-6 font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40 min-w-[220px] text-center"
        >
          General Inquiries
        </a>
      </div>
    </div>
  )
}