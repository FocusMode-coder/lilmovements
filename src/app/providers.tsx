'use client'

import { DefaultSeo } from 'next-seo'
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
      {/* Default SEO Configuration */}
      <DefaultSeo
        titleTemplate="%s — Lil Movements"
        defaultTitle="Lil Movements — Breathe · Move · Align"
        description="Premium 45-minute practice blending yoga, dance & qigong."
        canonical="https://lilmovements.com"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://lilmovements.com',
          siteName: 'Lil Movements',
          title: 'Lil Movements — Breathe · Move · Align',
          description: 'Premium 45-minute practice blending yoga, dance & qigong.',
          images: [
            {
              url: 'https://lilmovements.com/assets/og.jpg',
              width: 1200,
              height: 630,
              alt: 'Lil Movements - Premium dance and movement practice',
              type: 'image/jpeg',
            },
          ],
        }}
        twitter={{
          handle: '@lilmovements',
          site: '@lilmovements',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
          {
            name: 'theme-color',
            content: '#0e0d0b',
          },
          {
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black-translucent',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: '/assets/apple-touch-icon.png',
            sizes: '180x180',
          },
          {
            rel: 'manifest',
            href: '/manifest.json',
          },
        ]}
      />

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