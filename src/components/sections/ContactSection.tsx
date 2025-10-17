'use client'

import { Button } from '@/components/ui/Button'

export function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-lil text-5xl md:text-6xl font-bold text-black mb-8 tracking-tight">
              Connect
            </h2>
            <p className="text-xl text-gray-800 leading-relaxed">
              Ready to begin your movement journey? Let's start a conversation 
              about classes, workshops, or collaborative opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div>
              <form className="space-y-8" action="mailto:hello@lilmovements.com" method="post" encType="text/plain">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-black mb-3 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-black focus:outline-none transition-colors duration-200 text-lg"
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
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-black focus:outline-none transition-colors duration-200 text-lg"
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
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-black focus:outline-none transition-colors duration-200 resize-none text-lg"
                    required
                    aria-describedby="message-help"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full text-lg"
                  aria-describedby="submit-help"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h3 className="text-black font-bold text-2xl mb-6">Get in Touch</h3>
                <div className="space-y-6">
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
                      WhatsApp
                    </div>
                    <Button
                      variant="outline"
                      asChild
                    >
                      <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Contact via WhatsApp"
                      >
                        Message on WhatsApp
                      </a>
                    </Button>
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
                <h3 className="text-black font-bold text-2xl mb-6">Services</h3>
                <ul className="space-y-3 text-gray-800 text-lg" role="list">
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