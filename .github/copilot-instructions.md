<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Lil Movements Website - Development Guidelines

## Project Overview
Premium Next.js website for "Lil Movements" dance & movement brand by Lily.

## Design System
- **Visual Identity**: Black/white color scheme, high contrast
- **Typography**: Bold, elegant spacing using custom font LilMovements.ttf
- **Motion**: Minimal, purposeful animations
- **Performance**: Critical focus on CLS/LCP optimization

## Technical Stack
- Next.js 14+ with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- HLS.js for adaptive video streaming
- Custom font loading with next/font/local

## Code Standards
- Use semantic HTML for accessibility
- Implement lazy loading for media
- Optimize images with Next.js Image component
- Keep JavaScript minimal
- Follow component-based architecture
- Use TypeScript interfaces for props

## Performance Requirements
- Prioritize Core Web Vitals (CLS, LCP, FID)
- Implement proper image optimization
- Use efficient video streaming
- Minimize bundle size
- Enable proper caching strategies