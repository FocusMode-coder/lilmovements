# Lil Movements - Vercel Deployment Checklist

## Pre-Deployment Setup

### 1. Environment Variables
Set in Vercel Dashboard → Project Settings → Environment Variables:

```bash
# Analytics Configuration
NEXT_PUBLIC_ANALYTICS_ENABLED=true

# Optional: Custom domain settings
NEXT_PUBLIC_SITE_URL=https://lilmovements.com
```

### 2. Domain Configuration
- [ ] Configure custom domain: `lilmovements.com`
- [ ] Set up SSL certificate (automatic with Vercel)
- [ ] Configure DNS records for custom domain
- [ ] Set up www redirect if needed

## Build & Performance Configuration

### 3. Vercel Project Settings
- [ ] Framework Preset: **Next.js**
- [ ] Node.js Version: **18.x** (specified in vercel.json)
- [ ] Build Command: `npm run build` (default)
- [ ] Install Command: `npm install` (default)
- [ ] Output Directory: `.next` (default)

### 4. Asset Optimization
- [ ] Verify `vercel.json` is configured for:
  - Video files (mp4): 1-year cache with immutable
  - Images: 1-year cache with immutable
  - Fonts: 1-year cache with cross-origin policy

### 5. Image Domains (if using remote images)
If using external image sources, add to `next.config.js`:
```js
images: {
  domains: [
    'images.unsplash.com',    // Example: if using Unsplash
    'cdn.lilmovements.com',   // Example: if using CDN
  ],
}
```

## Core Web Vitals Targets

### 6. Lighthouse Performance Targets
Test on: https://pagespeed.web.dev/

**Mobile (4G Connection):**
- [ ] **LCP < 2.5s** (Largest Contentful Paint)
- [ ] **CLS ≤ 0.1** (Cumulative Layout Shift) - Target: ~0.0
- [ ] **TBT < 200ms** (Total Blocking Time)
- [ ] **FCP < 1.8s** (First Contentful Paint)
- [ ] **Speed Index < 3.4s**

**Desktop:**
- [ ] **LCP < 1.5s**
- [ ] **CLS ≤ 0.1**
- [ ] **TBT < 150ms**
- [ ] **FCP < 1.0s**

### 7. Performance Optimization Checklist
- [ ] Hero video poster image preloaded
- [ ] Above-the-fold images use `priority` prop
- [ ] Below-the-fold images use `loading="lazy"`
- [ ] Custom font (LilMovements.ttf) uses `display: swap`
- [ ] Analytics script lazy-loaded after 2s delay
- [ ] Video files compressed and optimized

## Content & SEO Verification

### 8. SEO & Metadata
- [ ] Default SEO configuration active
- [ ] Open Graph images accessible
- [ ] Structured data (JSON-LD) for LocalBusiness/Person
- [ ] Sitemap.xml generates correctly
- [ ] Robots.txt configured properly
- [ ] All pages have unique meta descriptions

### 9. Content Assets
Verify all assets are uploaded to `/public/assets/`:
- [ ] `hero.mp4` (6-12s, H.264, ~8Mbps)
- [ ] `hero_poster.jpg` (optimized for preload)
- [ ] `loop1.mp4` - `loop4.mp4` (4-8s each)
- [ ] `lily.jpg` (instructor portrait)
- [ ] `logo.svg` (brand logo)
- [ ] `og.jpg` (1200x630 Open Graph image)

## Functionality Testing

### 10. Core Features
- [ ] Hero video autoplay works (with fallback)
- [ ] Navigation links work correctly
- [ ] Stripe payment links functional
- [ ] Contact forms work
- [ ] Mobile menu functions properly
- [ ] Reduced motion preferences respected

### 11. Cross-Browser Testing
Test on:
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Post-Deployment Verification

### 12. Live Site Checks
- [ ] All pages load correctly
- [ ] Images optimize to WebP/AVIF
- [ ] Video caching headers active (check DevTools)
- [ ] Analytics tracking works (if enabled)
- [ ] Error pages (404/500) display correctly

### 13. Performance Monitoring
- [ ] Set up Vercel Analytics dashboard
- [ ] Monitor Core Web Vitals in production
- [ ] Check real user metrics after 24-48 hours
- [ ] Verify video streaming performance

## Security & Best Practices

### 14. Security Headers
- [ ] Content Security Policy active
- [ ] HTTPS redirect working
- [ ] No sensitive data exposed in client
- [ ] Environment variables properly scoped

### 15. Backup & Monitoring
- [ ] Git repository backed up
- [ ] Domain ownership verified
- [ ] Contact email addresses functional
- [ ] Analytics and monitoring active

## Emergency Rollback Plan

### 16. Rollback Procedure
- [ ] Previous deployment available in Vercel dashboard
- [ ] DNS changes can be reverted quickly
- [ ] Asset CDN has previous versions
- [ ] Contact information for quick fixes

---

## Quick Performance Test Commands

After deployment, run these tests:

```bash
# Lighthouse CI (if installed)
npx lighthouse https://lilmovements.com --only-categories=performance

# Core Web Vitals
# Visit: https://pagespeed.web.dev/analysis?url=https://lilmovements.com

# Check cache headers
curl -I https://lilmovements.com/assets/hero.mp4
# Should return: Cache-Control: public, max-age=31536000, immutable
```

## Performance Budget Targets

- **JavaScript Bundle**: < 250KB gzipped
- **Total Page Weight**: < 1.5MB
- **Image Optimization**: 90%+ WebP/AVIF adoption
- **Video Compression**: H.264, 8Mbps max bitrate
- **Font Loading**: FOIT/FOUT < 100ms

---

*Last Updated: October 17, 2025*
*Lil Movements - Premium Performance Standards*