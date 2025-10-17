'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

interface MovementPiece {
  id: string
  title: string
  description: string
  videoSrc: string
  duration: string
  year: string
}

const movementPieces: MovementPiece[] = [
  {
    id: '1',
    title: 'Ephemeral',
    description: 'A contemporary exploration of fleeting moments and lasting impact.',
    videoSrc: '/videos/ephemeral.mp4',
    duration: '3:42',
    year: '2024'
  },
  {
    id: '2',
    title: 'Urban Rhythms',
    description: 'Street-inspired choreography meets classical technique.',
    videoSrc: '/videos/urban-rhythms.mp4',
    duration: '4:15',
    year: '2024'
  },
  {
    id: '3',
    title: 'Solitude',
    description: 'An intimate solo piece exploring inner landscapes.',
    videoSrc: '/videos/solitude.mp4',
    duration: '2:58',
    year: '2023'
  },
  {
    id: '4',
    title: 'Collective',
    description: 'Ensemble work celebrating unity through movement.',
    videoSrc: '/videos/collective.mp4',
    duration: '5:20',
    year: '2023'
  }
]

export function MovementSection() {
  return (
    <section id="classes" className="py-32 bg-black">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="font-lil text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Classes & Workshops
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Discover your movement potential through our carefully curated programs 
            designed for dancers at every stage of their journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
          {/* Contemporary Foundations */}
          <article className="bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300">
            <h3 className="text-white font-bold text-xl mb-4">Contemporary Foundations</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Explore contemporary dance fundamentals with emphasis on floor work, 
              release technique, and expressive movement vocabulary.
            </p>
            <div className="space-y-2 text-white/70 mb-6">
              <p><strong>Schedule:</strong> Wednesdays 7:00 PM</p>
              <p><strong>Duration:</strong> 90 minutes</p>
              <p><strong>Level:</strong> Beginner to Intermediate</p>
            </div>
          </article>
          
          {/* Urban Flow */}
          <article className="bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300">
            <h3 className="text-white font-bold text-xl mb-4">Urban Flow</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Street-inspired movement meets contemporary technique in this 
              dynamic exploration of urban dance styles and personal expression.
            </p>
            <div className="space-y-2 text-white/70 mb-6">
              <p><strong>Schedule:</strong> Saturdays 2:00 PM</p>
              <p><strong>Duration:</strong> 75 minutes</p>
              <p><strong>Level:</strong> All levels welcome</p>
            </div>
          </article>
          
          {/* Private Sessions */}
          <article className="bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300">
            <h3 className="text-white font-bold text-xl mb-4">Private Sessions</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Personalized one-on-one coaching tailored to your specific goals, 
              whether preparing for auditions or developing your unique style.
            </p>
            <div className="space-y-2 text-white/70 mb-6">
              <p><strong>Schedule:</strong> By appointment</p>
              <p><strong>Duration:</strong> 60 or 90 minutes</p>
              <p><strong>Level:</strong> Customized to you</p>
            </div>
          </article>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
          {/* Private 1:1 Sessions - FEATURED */}
          <article className="gradient-border bg-white/5 p-8 hover:bg-white/10 transition-colors duration-300">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-bold text-xl">Private 1:1</h3>
                <span className="text-xs font-semibold text-black bg-white px-2 py-1 rounded-full">
                  FEATURED
                </span>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Personalized one-on-one coaching tailored to your specific goals, 
                whether preparing for auditions or developing your unique style.
              </p>
              <div className="space-y-2 text-white/70 mb-6">
                <p><strong>Schedule:</strong> By appointment</p>
                <p><strong>Duration:</strong> 60 or 90 minutes</p>
                <p><strong>Level:</strong> Customized to you</p>
                <p className="text-white font-semibold text-lg">From $120/session</p>
              </div>
              <Button
                size="lg"
                className="w-full text-lg micro-scale"
                asChild
              >
                <a
                  href="https://buy.stripe.com/..."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book Private 1:1 Session"
                >
                  Book Now
                </a>
              </Button>
            </div>
          </article>
          
          {/* Small Group */}
          <article className="bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 micro-scale">
            <h3 className="text-white font-bold text-xl mb-4">Small Group</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Intimate group sessions (3-5 dancers) combining contemporary foundations 
              with urban flow techniques for collaborative learning.
            </p>
            <div className="space-y-2 text-white/70 mb-6">
              <p><strong>Schedule:</strong> Saturdays 2:00 PM</p>
              <p><strong>Duration:</strong> 75 minutes</p>
              <p><strong>Level:</strong> All levels welcome</p>
              <p className="text-white font-semibold text-lg">$45/class</p>
            </div>
            <Button
              size="lg"
              className="w-full text-lg"
              asChild
            >
              <a
                href="https://buy.stripe.com/..."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book Small Group Session"
              >
                Book Now
              </a>
            </Button>
          </article>
          
          {/* Choreo Lab */}
          <article className="bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 micro-scale">
            <h3 className="text-white font-bold text-xl mb-4">Choreo Lab</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Experimental workshop for advanced dancers exploring creative process, 
              improvisation, and collaborative choreography development.
            </p>
            <div className="space-y-2 text-white/70 mb-6">
              <p><strong>Schedule:</strong> Monthly workshops</p>
              <p><strong>Duration:</strong> 3 hours</p>
              <p><strong>Level:</strong> Advanced</p>
              <p className="text-white font-semibold text-lg">Contact for details</p>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="w-full text-lg"
              asChild
            >
              <a
                href="mailto:bookings@lilmovements.com?subject=Choreo%20Lab%20Inquiry"
                aria-label="Contact for Choreo Lab booking"
              >
                Contact Us
              </a>
            </Button>
          </article>
        </div>
        
        {/* Book a Class CTAs */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-4"
              asChild
            >
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a class via WhatsApp"
              >
                Book a Class via WhatsApp
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4"
              asChild
            >
              <a
                href="mailto:hello@lilmovements.com?subject=Class%20Booking%20Inquiry"
                aria-label="Book a class via email"
              >
                Email Us
              </a>
            </Button>
          </div>
        </div>
        
        {/* Additional Info CTAs */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-4"
              asChild
            >
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Questions via WhatsApp"
              >
                Questions? WhatsApp Us
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4"
              asChild
            >
              <a
                href="mailto:hello@lilmovements.com?subject=Class%20Information"
                aria-label="General inquiries via email"
              >
                General Inquiries
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}