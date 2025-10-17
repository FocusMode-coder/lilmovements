'use client'

import { Analytics } from '@vercel/analytics/react'
import { useEffect, useState } from 'react'

export function AnalyticsProvider() {
  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    // Check if analytics is enabled via environment variable
    const analyticsEnabled = process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true'
    
    if (analyticsEnabled) {
      // Lazy load analytics after initial page load
      const timer = setTimeout(() => {
        setIsEnabled(true)
      }, 2000) // Delay to not impact Core Web Vitals

      return () => clearTimeout(timer)
    }
  }, [])

  // Only render Analytics component when enabled and after delay
  if (!isEnabled) return null

  return <Analytics />
}