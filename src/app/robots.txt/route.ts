import { NextResponse } from 'next/server'

export function GET() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://lilmovements.com/sitemap.xml
`

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}