# Lil Movements - Premium Dance & Movement Website

A premium Next.js website for "Lil Movements" dance and movement brand by Lily, featuring elegant black/white design, HLS video streaming, and performance optimization.

## Features

- **Premium Design**: Black/white visual identity with bold typography and elegant spacing
- **Video Streaming**: HLS.js integration for adaptive video streaming with MP4 fallbacks
- **Performance Optimized**: Core Web Vitals focus (CLS/LCP), lazy loading, responsive images
- **Custom Font**: Local font loading with `next/font/local`
- **Responsive**: Mobile-first design with Tailwind CSS
- **Accessible**: Semantic HTML and keyboard navigation
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS
- **Typography**: Custom font (LilMovements.ttf)
- **Video**: HLS.js for streaming, HTML5 video for loops
- **Language**: TypeScript
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your custom font file:
   - Place `LilMovements.ttf` in `/public/fonts/`

3. Add video assets:
   - Hero video: `/public/videos/hero.m3u8` (HLS) and `/public/videos/hero.mp4` (fallback)
   - Movement videos: `/public/videos/` directory
   - Portrait image: `/public/images/lily-portrait.jpg`

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with font configuration
│   └── page.tsx             # Home page with all sections
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx      # Hero with HLS video background
│   │   ├── AboutSection.tsx     # About section with image
│   │   ├── MovementSection.tsx  # Video gallery with hover effects
│   │   └── ContactSection.tsx   # Contact form and information
│   └── ui/
│       └── HLSVideoPlayer.tsx   # HLS video player component
public/
├── fonts/
│   └── LilMovements.ttf     # Custom font file
├── videos/                  # Video assets
└── images/                  # Image assets
```

## Performance Features

- **Optimized Images**: Next.js Image component with AVIF/WebP formats
- **Lazy Loading**: Media assets load on demand
- **Font Optimization**: Local font loading with display swap
- **Video Streaming**: Adaptive HLS streaming with efficient fallbacks
- **Minimal JavaScript**: Clean, semantic HTML with progressive enhancement

## Customization

### Colors
The design uses a strict black/white palette defined in `tailwind.config.js`:
- Primary: `#000000` (black)
- Secondary: `#ffffff` (white)

### Typography
Custom typography scales defined in `globals.css`:
- `.heading-xl` - Hero headings
- `.heading-lg` - Section headings  
- `.heading-md` - Subsection headings
- `.body-lg` - Large body text
- `.body-base` - Standard body text

### Components
Reusable component classes:
- `.btn-primary` - Black background buttons
- `.btn-secondary` - White background with black border
- `.section-padding` - Consistent section spacing
- `.container` - Max-width container with responsive padding

## Development

### Building for Production

```bash
npm run build
npm start
```

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## Assets Required

To complete the website, you'll need to add these assets:

1. **Custom Font**: 
   - `LilMovements.ttf` in `/public/fonts/`

2. **Hero Video**:
   - `hero.m3u8` (HLS playlist) in `/public/videos/`
   - `hero.mp4` (fallback) in `/public/videos/`

3. **Movement Videos**:
   - `ephemeral.mp4`
   - `urban-rhythms.mp4` 
   - `solitude.mp4`
   - `collective.mp4`

4. **Portrait Image**:
   - `lily-portrait.jpg` in `/public/images/`

## License

Private project for Lil Movements brand.