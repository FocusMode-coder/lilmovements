'use client'

import { useEffect } from 'react'

/**
 * HydrationGuard - Detects browser extension interference with body classes
 * 
 * This component monitors the document.body for classes added by browser extensions
 * that can cause hydration mismatches in Next.js. It logs warnings but does not
 * modify any classes to avoid further hydration issues.
 */
export default function HydrationGuard() {
  useEffect(() => {
    if (typeof window === 'undefined' || !document.body) return

    // Expected classes from our app (static classes in layout.tsx)
    const expectedClasses = ['font-sans', 'antialiased']
    
    // Common extension class patterns that cause hydration issues
    const extensionPatterns = [
      /^expansion-.*-init$/, // Expansion extension
      /^grammarly-.*/, // Grammarly
      /^__web-inspector-/, // DevTools extensions  
      /^translate-/, // Translation extensions
      /^dark-/, // Dark mode extensions
      /^reader-/, // Reader mode extensions
      /^extension-/, // Generic extension prefix
      /^chrome-/, // Chrome extension prefix
      /^__/, // Double underscore (common extension pattern)
    ]

    const checkBodyClasses = () => {
      const currentClasses = Array.from(document.body.classList)
      const unexpectedClasses = currentClasses.filter(className => {
        // Skip expected app classes
        if (expectedClasses.includes(className)) return false
        
        // Check if it matches any extension pattern
        return extensionPatterns.some(pattern => pattern.test(className))
      })

      if (unexpectedClasses.length > 0) {
        console.warn(
          '🚨 Lil Movements: Browser extension detected that may cause hydration mismatches.\n' +
          `Found classes: ${unexpectedClasses.join(', ')}\n` +
          'Solution: Disable browser extensions or use incognito mode.\n' +
          'This is not an app bug - extensions modify the DOM after SSR.'
        )
      }
    }

    // Check immediately after hydration
    checkBodyClasses()

    // Set up observer to detect dynamic class changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          checkBodyClasses()
        }
      })
    })

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    })

    // Cleanup observer
    return () => observer.disconnect()
  }, [])

  // This component renders nothing - it's purely diagnostic
  return null
}