import { Navbar } from '@/components/Navbar'
import { ReelGrid } from '@/components/ReelGrid'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { LilMovementsLanding } from '@/components/LilMovementsLanding'

// Dynamic import for VideoHero to optimize performance and avoid SSR issues with HLS.js
const VideoHero = dynamic(() => import('@/components/VideoHero'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[78vh] min-h-[600px] bg-black flex items-center justify-center">
      <div className="text-white text-center">
        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm opacity-75">Loading experience...</p>
      </div>
    </div>
  )
})

// Premium Footer component following Lil Movements design system
function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-lil text-2xl font-bold text-white mb-6 tracking-wider">
              LIL MOVEMENTS
            </h3>
            <p className="text-white/80 max-w-md leading-relaxed text-lg">
              Premium dance and movement experiences curated by Lily. 
              Exploring the art of expression through elegant choreography 
              and transformative movement.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wide text-sm">Navigate</h4>
            <ul className="space-y-3">
              <li><a href="#classes" className="text-white/70 hover:text-white transition-colors duration-200 text-lg">Classes</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors duration-200 text-lg">About</a></li>
              <li><a href="#reel" className="text-white/70 hover:text-white transition-colors duration-200 text-lg">Reel</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors duration-200 text-lg">Contact</a></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wide text-sm">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:hello@lilmovements.com" 
                  className="text-white/70 hover:text-white transition-colors duration-200 text-lg"
                >
                  hello@lilmovements.com
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/lilmovements" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors duration-200 text-lg"
                >
                  @lilmovements
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-12 border-t border-white/10 text-center">
          <p className="text-white/60">
            © 2024 Lil Movements. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function HomePage() {
  return <LilMovementsLanding />
}