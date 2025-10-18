# Lil Movements - Premium Dance & Movement Website

A premium Next.js website for "Lil Movements" dance and movement brand by Lily, featuring elegant black/white design, optimized video streaming, and performance optimization.

## 🚀 Quick Start

### Development
```bash
# Install dependencies
npm i

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Production Build
```bash
npm run build
npm start
```

## 📹 Video Guidelines

### Adding Videos
Place all video files in `/public/assets/` directory:

**Background Videos** (autoplay, muted):
- Format: H.264 MP4
- Resolution: 1920x1080 or higher
- Compression: Optimize for web (< 10MB recommended)
- Audio: Remove or mute (required for autoplay)
- Examples: `LOOP-01.mp4`, `LOOP-02.mp4`

**Interview/Content Videos** (with controls):
- Format: H.264 MP4
- Include audio track
- Add poster images for better loading experience
- Examples: `Lilinteview.mp4`, `howgotstarted.mp4`

### Video Optimization Tips
- Use tools like HandBrake or FFmpeg for compression
- Target bitrate: 2-4 Mbps for 1080p
- Include poster frames for better UX
- Test autoplay compliance across browsers

## ✉️ Contact System

### Prefilled Mailto Links
The website uses dynamic mailto generation with user names:

**How it Works:**
1. User enters name in input field (optional)
2. CTA buttons generate personalized mailto links:
   ```
   mailto:hello@lilmovements.com?subject=Class%20Inquiry%20-%20[Name]&body=Hi%20Lil%20Movements,%0AI'm%20[Name]%20and%20I'd%20like%20to%20learn%20more%20about%20[Program].
   ```
3. Falls back to generic subject if no name provided

**Components Using This:**
- `CTAGroup.tsx` - Reusable contact component
- `MovementSection.tsx` - Program-specific inquiries
- `ContactSection.tsx` - General contact

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **SEO**: next-seo with structured data
- **Fonts**: Custom local font + Inter
- **Performance**: Optimized images, lazy loading, Core Web Vitals focus

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with fonts & providers
│   ├── page.tsx            # Home page composition
│   ├── globals.css         # Global styles & CSS variables
│   └── providers.tsx       # SEO & analytics providers
├── components/
│   ├── Nav.tsx             # Navigation with backdrop blur
│   ├── Hero.tsx            # Hero section with CTAs
│   ├── CTAGroup.tsx        # Reusable contact buttons
│   ├── BackgroundVideo.tsx # Video background component
│   ├── AboutSection.tsx    # About with image optimization
│   └── sections/           # Page sections
└── lib/
    └── utils.ts           # Utility functions
```

## 🎨 Design System

### Colors (CSS Variables)
```css
--bg: #0e0d0b        /* Carbon warm background */
--warm1: #15110e     /* Espresso tone */
--warm2: #1f1914     /* Cacao accent */
--panel: #12100e     /* Deep panel */
--accent: #c7a674    /* Soft bronze */
--ink1: #e7e2dd      /* Warm sand text */
--ink2: #ffffff      /* Pure white titles */
```

### Typography Classes
- `.font-brand` - Custom LilMovements display font
- `tracking-tight` - Headings
- `leading-relaxed` - Body text
- `.hairline` - Subtle borders (`ring-1 ring-inset ring-white/10`)

## 📦 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Import project from GitHub
   - Set project root to `.` (current directory)

2. **Domain Setup**
   ```
   Custom Domain: lilmovements.com
   DNS Configuration: Follow Vercel's DNS instructions
   - A record: Point to Vercel's IP
   - Or CNAME: Point subdomain to Vercel
   Force HTTPS: Enabled (automatic)
   ```

3. **Environment Variables**
   - No environment variables required for basic setup
   - Add analytics keys if using third-party services

### Build Configuration
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next` (automatic)
- Install Command: `npm ci`

## 🚨 Troubleshooting

### Hydration Mismatch Warnings
If you see browser extension warnings in console:

**Symptoms:**
- Classes like `grammarly-*`, `expansion-*-init` on document.body
- Hydration mismatch errors in development

**Solutions:**
1. Disable browser extensions temporarily
2. Use incognito/private mode for testing
3. These are extension issues, not app bugs

### Performance Debugging
- Use Lighthouse for Core Web Vitals
- Check Network tab for large assets
- Verify lazy loading is working
- Monitor CLS with Layout Shift debugging

### Video Issues
- Ensure videos are H.264 encoded
- Check file sizes (< 10MB recommended)
- Verify autoplay videos are muted
- Test across different browsers

## 📄 License

Private project for Lil Movements brand.

---

**Built with ❤️ following premium web standards**