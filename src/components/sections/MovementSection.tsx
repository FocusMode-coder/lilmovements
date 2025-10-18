'use client'

import React from 'react'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import CTAGroup from '@/components/CTAGroup'

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
    <section id="classes" className="py-16 md:py-24 bg-bg">
      <div className="container max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-lil text-4xl md:text-5xl lg:text-6xl font-bold text-ink2 tracking-tight mb-6">
            Programs
          </h2>
          <p className="text-lg lg:text-xl text-ink1 leading-relaxed">
            Experiencias de movimiento diseñadas para cada etapa de tu práctica, combinando técnica consciente y expresión auténtica.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Contemporary Foundations */}
          <article className="bg-warm1 p-8 rounded-2xl ring-1 ring-inset ring-white/10 hover:bg-warm2 transition-colors duration-300">
            <h3 className="text-ink2 font-bold text-xl mb-4 tracking-tight">Contemporary Foundations</h3>
            <p className="text-ink1 leading-relaxed mb-6">
              Explora fundamentos de danza contemporánea con énfasis en floor work, release technique y vocabulario expresivo de movimiento.
            </p>
            <div className="space-y-2 text-ink1/80 text-sm mb-6">
              <p><strong>Horario:</strong> Miércoles 7:00 PM</p>
              <p><strong>Duración:</strong> 90 minutos</p>
              <p><strong>Nivel:</strong> Principiante a Intermedio</p>
            </div>
          </article>
          
          {/* Urban Flow */}
          <article className="bg-warm1 p-8 rounded-2xl ring-1 ring-inset ring-white/10 hover:bg-warm2 transition-colors duration-300">
            <h3 className="text-ink2 font-bold text-xl mb-4 tracking-tight">Urban Flow</h3>
            <p className="text-ink1 leading-relaxed mb-6">
              Movimiento urbano encuentra técnica contemporánea en esta exploración dinámica de estilos de street dance y expresión personal.
            </p>
            <div className="space-y-2 text-ink1/80 text-sm mb-6">
              <p><strong>Horario:</strong> Sábados 2:00 PM</p>
              <p><strong>Duración:</strong> 75 minutos</p>
              <p><strong>Nivel:</strong> Todos los niveles</p>
            </div>
          </article>
          
          {/* Private Sessions */}
          <article className="bg-warm1 p-8 rounded-2xl ring-1 ring-inset ring-white/10 hover:bg-warm2 transition-colors duration-300">
            <h3 className="text-ink2 font-bold text-xl mb-4 tracking-tight">Sesiones Privadas</h3>
            <p className="text-ink1 leading-relaxed mb-6">
              Coaching personalizado uno-a-uno adaptado a tus objetivos específicos, ya sea preparación para audiciones o desarrollo de tu estilo único.
            </p>
            <div className="space-y-2 text-ink1/80 text-sm mb-6">
              <p><strong>Horario:</strong> Por cita</p>
              <p><strong>Duración:</strong> 60 o 90 minutos</p>
              <p><strong>Nivel:</strong> Personalizado</p>
            </div>
          </article>
        </div>
        
        {/* CTA Group */}
        <div className="flex justify-center">
          <CTAGroup program="Movement Classes" />
        </div>
      </div>
    </section>
  )
}