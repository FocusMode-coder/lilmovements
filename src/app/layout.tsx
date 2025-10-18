import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { Providers } from './providers'
import dynamic from 'next/dynamic'

// Import HydrationGuard with no SSR to avoid hydration issues
const HydrationGuard = dynamic(() => import('@/components/HydrationGuard'), {
  ssr: false
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const lilDisplay = localFont({
  src: '../public/fonts/LilMovementsDisplay.otf',
  variable: '--font-lil-display',
  display: 'swap',
})

// Basic metadata - DefaultSeo will handle detailed SEO
export const metadata = {
  title: 'Lil Movements — Breathe · Move · Align',
  description: 'Premium 45-minute practice blending yoga, dance & qigong.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable + " " + lilDisplay.variable}>
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
      <body className="font-sans bg-[var(--bg)] text-[var(--ink2)] antialiased">
        <HydrationGuard />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}