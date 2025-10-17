'use client'

import { AnalyticsProvider } from '@/components/AnalyticsProvider'

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://lilmovements.com/#organization",
      "name": "Lil Movements",
      "url": "https://lilmovements.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lilmovements.com/assets/logo.svg"
      },
      "description": "Premium dance and movement experiences curated by Lily. Explore the art of movement through elegant choreography and expressive dance.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Your City",
        "addressRegion": "Your State",
        "addressCountry": "US"
      },
      "telephone": "+1234567890",
      "email": "hello@lilmovements.com",
      "sameAs": [
        "https://instagram.com/lilmovements"
      ],
      "priceRange": "$45-$120",
      "serviceArea": {
        "@type": "Place",
        "name": "Your City Area"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dance Classes & Workshops",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Private 1:1 Sessions",
              "description": "Personalized one-on-one coaching"
            },
            "price": "120",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Small Group Classes",
              "description": "Intimate group sessions (3-5 dancers)"
            },
            "price": "45",
            "priceCurrency": "USD"
          }
        ]
      }
    },
    {
      "@type": "Person",
      "@id": "https://lilmovements.com/#person",
      "name": "Lily",
      "jobTitle": "Founder & Creative Director",
      "description": "Professional dancer, choreographer, and movement instructor specializing in contemporary and urban dance styles.",
      "url": "https://lilmovements.com/instructor",
      "image": "https://lilmovements.com/assets/lily.jpg",
      "sameAs": [
        "https://instagram.com/lilmovements"
      ],
      "worksFor": {
        "@id": "https://lilmovements.com/#organization"
      },
      "knowsAbout": [
        "Contemporary Dance",
        "Urban Dance",
        "Choreography",
        "Movement Coaching",
        "Dance Instruction"
      ]
    }
  ]
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      {/* Analytics Provider - minimal performance impact */}
      <AnalyticsProvider />
      
      {children}
    </>
  )
}