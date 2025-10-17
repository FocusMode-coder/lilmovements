import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function InstructorPage() {
  return (
    <>
      <NextSeo
        title="Meet Lily - Instructor"
        description="Professional dancer, choreographer, and movement instructor specializing in contemporary and urban dance styles. Founder and Creative Director of Lil Movements."
        canonical="https://lilmovements.com/instructor"
        openGraph={{
          url: 'https://lilmovements.com/instructor',
          title: 'Meet Lily - Instructor — Lil Movements',
          description: 'Professional dancer, choreographer, and movement instructor specializing in contemporary and urban dance styles.',
          images: [
            {
              url: 'https://lilmovements.com/assets/lily.jpg',
              width: 1200,
              height: 630,
              alt: 'Lily - Professional dancer and choreographer',
            },
          ],
        }}
      />
      
      <div className="min-h-screen bg-black">
        <Navbar />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-32 bg-white">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                {/* Portrait Images */}
                <div className="order-2 lg:order-1">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
                      <Image
                        src="/assets/lily.jpg"
                        alt="Lily - Founder and Creative Director of Lil Movements"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        priority
                      />
                    </div>
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 mt-12">
                      <Image
                        src="/assets/lily.jpg"
                        alt="Lily teaching dance"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Introduction */}
                <div className="order-1 lg:order-2">
                  <div className="mb-6">
                    <Badge variant="outline" className="mb-4">Founder & Creative Director</Badge>
                    <h1 className="font-lil text-5xl md:text-6xl font-bold text-black mb-8 tracking-tight leading-none">
                      Meet Lily
                    </h1>
                  </div>
                  
                  <div className="space-y-6 text-lg leading-relaxed text-gray-800 mb-8">
                    <p>
                      With over a decade of experience in contemporary and urban dance, 
                      Lily brings a unique fusion of technical precision and raw emotional 
                      expression to every movement she creates.
                    </p>
                    <p>
                      Her journey began in classical ballet before evolving into contemporary 
                      and street dance, creating a distinctive style that bridges worlds—where 
                      structure meets freedom, and tradition meets innovation.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <a href="#experience">Learn More</a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="mailto:hello@lilmovements.com">Work Together</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience & Philosophy */}
          <section id="experience" className="py-32 bg-black">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-lil text-4xl md:text-5xl font-bold text-white mb-16 text-center tracking-tight">
                  Philosophy & Approach
                </h2>
                
                <div className="grid md:grid-cols-2 gap-16 mb-20">
                  <div>
                    <h3 className="text-white font-bold text-2xl mb-6">Teaching Philosophy</h3>
                    <div className="space-y-4 text-white/90 leading-relaxed">
                      <p>
                        Movement is a language that transcends words. My approach centers 
                        on helping dancers discover their authentic voice while building 
                        technical strength and artistic confidence.
                      </p>
                      <p>
                        Every body tells a different story. I believe in meeting each 
                        student where they are, honoring their unique journey while 
                        challenging them to grow beyond their perceived limitations.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold text-2xl mb-6">Creative Process</h3>
                    <div className="space-y-4 text-white/90 leading-relaxed">
                      <p>
                        My choreography emerges from the intersection of emotion and 
                        physicality—exploring how internal landscapes manifest through 
                        external movement.
                      </p>
                      <p>
                        I draw inspiration from urban environments, human connections, 
                        and the subtle moments between stillness and action that define 
                        our daily existence.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Specialties */}
                <div className="text-center mb-16">
                  <h3 className="text-white font-bold text-2xl mb-8">Areas of Expertise</h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Badge>Contemporary Dance</Badge>
                    <Badge variant="secondary">Urban Choreography</Badge>
                    <Badge>Movement Coaching</Badge>
                    <Badge variant="secondary">Creative Direction</Badge>
                    <Badge>Improvisation</Badge>
                    <Badge variant="secondary">Performance Art</Badge>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Background & Training */}
          <section className="py-32 bg-white">
            <div className="container max-w-7xl mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-lil text-4xl md:text-5xl font-bold text-black mb-16 text-center tracking-tight">
                  Background & Training
                </h2>
                
                <div className="space-y-12">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <h3 className="font-bold text-xl text-black mb-4">Professional Training</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>Royal Academy of Dance</li>
                        <li>Alvin Ailey Extension</li>
                        <li>Broadway Dance Center</li>
                        <li>Millennium Dance Complex</li>
                      </ul>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="font-bold text-xl text-black mb-4">Performance Credits</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>Contemporary Dance Theater</li>
                        <li>Urban Arts Collective</li>
                        <li>Independent Film Projects</li>
                        <li>Commercial Campaigns</li>
                      </ul>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="font-bold text-xl text-black mb-4">Certifications</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>Certified Movement Analyst</li>
                        <li>Yoga Alliance RYT-200</li>
                        <li>First Aid/CPR Certified</li>
                        <li>Continuing Education</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-32 bg-black">
            <div className="container max-w-7xl mx-auto px-4 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="font-lil text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                  Ready to Move?
                </h2>
                <p className="text-xl text-white/90 leading-relaxed mb-12">
                  Whether you're beginning your dance journey or looking to deepen your practice, 
                  let's explore what movement can unlock within you.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button size="lg" asChild>
                    <a href="/#classes">View Classes</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="mailto:hello@lilmovements.com">Schedule Consultation</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  )
}