import { Navbar } from '@/components/Navbar'
import { ReelGrid } from '@/components/ReelGrid'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { MovementSection } from '@/components/sections/MovementSection'
import { ContactSection } from '@/components/sections/ContactSection'
import InterviewSection from '@/components/InterviewSection'
import HowStartedSection from '@/components/HowStartedSection'
import ReelSection from '@/components/ReelSection'

export function LilMovementsLanding() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main>
        {/* Hero Section with Video */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* How Started Section */}
        <HowStartedSection />
        
        {/* Interview Section */}
        <InterviewSection />
        
        {/* Classes/Movement Section */}
        <MovementSection />
        
        {/* Reel Section */}
        <ReelSection />
        
        {/* Reel Grid Section */}
        <div id="reel">
          <ReelGrid />
        </div>
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  )
}