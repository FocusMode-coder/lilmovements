'use client'

import { Button } from '@/components/ui/Button'
import CTAGroup from '@/components/CTAGroup'

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-brand text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight mb-6">
              Connect
            </h2>
            <p className="text-lg lg:text-xl text-gray-800 leading-relaxed">
              Ready to begin your movement journey? Let's start a conversation 
              about classes, workshops, or collaborative opportunities.
            </p>
          </div>

          {/* CTA Group for primary actions */}
          <div className="flex justify-center mb-16">
            <CTAGroup program="Classes and Workshops" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <form className="space-y-6" action="mailto:hello@lilmovements.com" method="post" encType="text/plain">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-black mb-3 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-6 py-4 ring-1 ring-inset ring-gray-200 rounded-2xl focus:ring-2 focus:ring-accent/40 focus:outline-none transition-all duration-200 text-lg"
                    required
                    aria-describedby="name-help"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-black mb-3 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-6 py-4 ring-1 ring-inset ring-gray-200 rounded-2xl focus:ring-2 focus:ring-accent/40 focus:outline-none transition-all duration-200 text-lg"
                    required
                    aria-describedby="email-help"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-black mb-3 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-6 py-4 ring-1 ring-inset ring-gray-200 rounded-2xl focus:ring-2 focus:ring-accent/40 focus:outline-none transition-all duration-200 resize-none text-lg"
                    required
                    aria-describedby="message-help"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full text-lg min-w-[220px] focus-visible:ring-2 focus-visible:ring-accent/40"
                  aria-describedby="submit-help"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-black font-bold text-2xl mb-6 tracking-tight">Get in Touch</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-black uppercase tracking-wide mb-2">
                      Email
                    </div>
                    <a 
                      href="mailto:hello@lilmovements.com" 
                      className="text-gray-800 hover:text-black transition-colors duration-200 text-lg"
                      aria-label="Send email to Lil Movements"
                    >
                      hello@lilmovements.com
                    </a>
                  </div>
                  
                  <div>
                    <div className="text-sm font-semibold text-black uppercase tracking-wide mb-2">
                      Instagram
                    </div>
                    <a 
                      href="https://instagram.com/lilmovements" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-black transition-colors duration-200 text-lg"
                      aria-label="Follow Lil Movements on Instagram"
                    >
                      @lilmovements
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-black font-bold text-2xl mb-6 tracking-tight">Services</h3>
                <ul className="space-y-2 text-gray-800 text-lg leading-relaxed" role="list">
                  <li>• Choreography & Performance</li>
                  <li>• Movement Workshops</li>
                  <li>• Private Coaching</li>
                  <li>• Creative Collaborations</li>
                  <li>• Event Performances</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}