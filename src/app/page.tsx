'use client'

import { LilMovementsLanding } from '@/components/LilMovementsLanding'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ReelBackground from '@/components/ReelBackground'
import HowStartedSection from '@/components/HowStartedSection'
import InterviewSection from '@/components/InterviewSection'
import AboutSection from '@/components/AboutSection'
import LoopMosaic from '@/components/LoopMosaic'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <ReelBackground />
        <HowStartedSection />
        <InterviewSection />
        <AboutSection />
        
        {/* Add more sections here as needed */}
        
        {/* Loop Mosaic near bottom */}
        <LoopMosaic />
      </main>
    </div>
  )
}