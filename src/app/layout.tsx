import localFont from 'next/font/local'
import { Inter } from 'next/font/google'
import { DefaultSeo } from 'next-seo'
import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const lil = localFont({
  src: '../../public/fonts/LilMovements.ttf',
  variable: '--font-lil',
  display: 'swap',
  preload: true,
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
        url: '/assets/og.jpg',
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
    images: ['/assets/og.jpg'],
  },
  // Performance optimizations
  other: {
    'preload-hero-poster': '/media/hero/poster.jpg',
    'preload-hero-playlist': '/media/hero/master.m3u8',
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
        <DefaultSeo
          title="Lil Movements — Strength · Flow · Precision"
          description="Premium dance and movement experiences curated by Lily. Explore the art of movement through elegant choreography and expressive dance."
          canonical="https://lilmovements.com"
          openGraph={{
            type: 'website',
            locale: 'en_US',
            url: 'https://lilmovements.com',
            siteName: 'Lil Movements',
            title: 'Lil Movements — Strength · Flow · Precision',
            description: 'Premium dance and movement experiences curated by Lily. Explore the art of movement through elegant choreography and expressive dance.',
            images: [
              {
                url: '/assets/og.jpg',
                width: 1200,
                height: 630,
                alt: 'Lil Movements - Premium dance and movement experiences',
              },
            ],
          }}
          twitter={{
            cardType: 'summary_large_image',
            site: '@lilmovements',
            handle: '@lilmovements',
          }}
          additionalMetaTags={[
            {
              name: 'keywords',
              content: 'dance, movement, choreography, lily, premium dance, modern dance, strength, flow, precision',
            },
            {
              name: 'author',
              content: 'Lily',
            },
          ]}
        />
        {/* Preload critical hero assets */}
        <link
          rel="preload"
          href="/assets/hero_poster.jpg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preload"
          href="/media/hero/poster.jpg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preload"
          href="/media/hero/master.m3u8"
          as="fetch"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} font-sans bg-black text-white antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}