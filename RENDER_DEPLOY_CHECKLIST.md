# Lil Movements - Render Deployment Checklist

## Pre-Deployment Setup

### 1. Repository Setup
- [ ] Push code to GitHub repository
- [ ] Ensure `render.yaml` is in root directory
- [ ] Verify all assets are in `/public/assets/` directory
- [ ] Check `.gitignore` excludes `node_modules/`, `.next/`, `.env*`

### 2. Render Service Configuration
- [ ] **Service Type**: Web Service
- [ ] **Runtime**: Node.js
- [ ] **Plan**: Starter (can upgrade later)
- [ ] **Region**: Oregon (or closest to your audience)
- [ ] **Branch**: main
- [ ] **Build Command**: `npm ci && npm run build`
- [ ] **Start Command**: `npm start`

### 3. Environment Variables (Optional)
Set in Render Dashboard if needed:
```
NEXT_PUBLIC_ANALYTICS_ENABLED=true
NODE_ENV=production
```

## Asset Optimization Checklist

### 4. Video Files
Verify these files exist in `/public/assets/`:
- [ ] `hero.mp4` (< 10MB, H.264, muted for autoplay)
- [ ] `hero_poster.jpg` (optimized poster image)
- [ ] `LOOP-01.mp4` (< 5MB, H.264, muted)
- [ ] `LOOP-02.mp4` (< 5MB, H.264, muted)
- [ ] `howgotstarted.mp4` (interview video with audio)
- [ ] `Lilinteview.mp4` (interview video with audio)
- [ ] `lily.jpg` (instructor portrait, optimized)
- [ ] `logo.svg` (brand logo)

### 5. Font Files
Verify custom font in `/public/fonts/`:
- [ ] `LilMovementsDisplay.otf` (custom brand font)

## Performance Targets for Render

### 6. Core Web Vitals Goals
**Mobile (4G):**
- [ ] **LCP < 2.5s** (Largest Contentful Paint)
- [ ] **CLS ≤ 0.1** (Cumulative Layout Shift)
- [ ] **FID < 100ms** (First Input Delay)

**Desktop:**
- [ ] **LCP < 1.5s**
- [ ] **CLS ≤ 0.1** 
- [ ] **FID < 100ms**

### 7. Build Optimization
- [ ] Bundle size < 300KB gzipped
- [ ] Images optimized (WebP/AVIF when possible)
- [ ] Videos compressed for web delivery
- [ ] Critical CSS inlined
- [ ] Font loading optimized

## Render-Specific Configuration

### 8. Custom Headers (via render.yaml)
- [ ] Video caching: 1-year cache for `/assets/*`
- [ ] Font caching: 1-year cache for `/fonts/*`
- [ ] Static asset caching: 1-year cache for `/_next/static/*`
- [ ] Security headers: X-Frame-Options, X-Content-Type-Options

### 9. Domain Configuration
- [ ] Add custom domain in Render dashboard
- [ ] Configure DNS records:
  ```
  Type: CNAME
  Name: www (or @)
  Value: [your-app-name].onrender.com
  ```
- [ ] Enable SSL certificate (automatic with Render)
- [ ] Set up redirect from non-www to www (or vice versa)

## Testing & Validation

### 10. Pre-Deploy Testing
Run locally to verify:
```bash
npm run build
npm start
```
- [ ] Build completes without errors
- [ ] All pages load correctly
- [ ] Videos autoplay and loop properly
- [ ] Navigation works on all devices
- [ ] Contact forms generate correct mailto links

### 11. Post-Deploy Verification
After deployment, test:
- [ ] Homepage loads within 3 seconds
- [ ] Hero video autoplays (muted)
- [ ] All navigation links work
- [ ] Contact CTAs generate proper mailto links
- [ ] Images load with proper optimization
- [ ] Mobile responsiveness works

### 12. Performance Testing
- [ ] Run Lighthouse audit (aim for 90+ performance score)
- [ ] Test on PageSpeed Insights
- [ ] Verify Core Web Vitals pass
- [ ] Check video streaming performance

## SEO & Content Verification

### 13. SEO Setup
- [ ] Meta descriptions on all pages
- [ ] Open Graph images accessible
- [ ] Structured data (JSON-LD) included
- [ ] Sitemap.xml generates at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`

### 14. Content Assets
- [ ] All video files under 10MB each
- [ ] Image alt texts descriptive and accessible
- [ ] Contact email `hello@lilmovements.com` functional
- [ ] Social media links work correctly

## Monitoring & Maintenance

### 15. Post-Launch Monitoring
- [ ] Set up uptime monitoring
- [ ] Monitor build logs for errors
- [ ] Check analytics setup (if enabled)
- [ ] Verify email delivery works
- [ ] Test from different devices/browsers

### 16. Backup Strategy
- [ ] Repository backed up on GitHub
- [ ] Regular commits and version control
- [ ] Document any custom configurations
- [ ] Keep local development environment synced

## Quick Deploy Commands

```bash
# Local development
npm run dev

# Production build test
npm run build && npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

## Render vs Vercel Notes

**Render Advantages:**
- Simple pricing model
- PostgreSQL databases included
- Great for full-stack apps
- No function limits

**Considerations:**
- Slightly longer cold start times
- Different caching configuration
- Manual SSL setup for custom domains

## Emergency Procedures

### 17. Rollback Plan
- [ ] Previous deployment available in Render dashboard
- [ ] Manual deployment possible via GitHub
- [ ] Local build serves as backup
- [ ] Contact information for quick fixes

---

## Performance Budget

- **Total Page Weight**: < 2MB
- **JavaScript Bundle**: < 300KB gzipped
- **Video Files**: < 10MB each
- **Image Optimization**: 85%+ modern formats
- **Time to Interactive**: < 3.5s on 3G

---

*Render Deployment Checklist for Lil Movements*
*Premium Performance Standards - October 2025*