import { Navbar } from '@/components/Navbar'
import { ReelGrid } from '@/components/ReelGrid'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { MovementSection } from '@/components/sections/MovementSection'
import { ContactSection } from '@/components/sections/ContactSection'

export function LilMovementsLanding() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main>
        {/* Hero Section with Video */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Classes/Movement Section */}
        <MovementSection />
        
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