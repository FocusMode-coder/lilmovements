import { Inter } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Use a fallback font family for now until we add the custom font
const lil = Inter({
  subsets: ['latin'],
  variable: '--font-lil',
  display: 'swap',
  weight: ['700', '800', '900'], // Bold weights for the brand
})

export const metadata: Metadata = {
  title: 'Lil Movements — Strength · Flow · Precision',
  description: 'Premium dance and movement experiences curated by Lily. Explore the art of movement through elegant choreography and expressive dance.',
  keywords: ['dance', 'movement', 'choreography', 'lily', 'premium dance', 'modern dance', 'strength', 'flow', 'precision'],
  authors: [{ name: 'Lily' }],
  creator: 'Lily',
  publisher: 'Lil Movements',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lilmovements.com',
    title: 'Lil Movements — Strength · Flow · Precision',
    description: 'Premium dance and movement experiences curated by Lily. Explore the art of movement through elegant choreography and expressive dance.',
    siteName: 'Lil Movements',
    images: [
      {
        url: '/assets/hero_poster.jpg',
        width: 1200,
        height: 630,
        alt: 'Lil Movements - Premium dance and movement experiences',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lil Movements — Strength · Flow · Precision',
    description: 'Premium dance and movement experiences curated by Lily. Explore the art of movement through elegant choreography and expressive dance.',
    images: ['/assets/hero_poster.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lil.variable}`}>
      <head>
        {/* Preload critical hero assets */}
        <link
          rel="preload"
          href="/assets/hero_poster.jpg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preload"
          href="/assets/hero.mp4"
          as="video"
          type="video/mp4"
        />
      </head>
      <body className={`${inter.variable} font-sans bg-black text-white antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}