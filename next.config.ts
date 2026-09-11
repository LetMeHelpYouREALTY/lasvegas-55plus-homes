import type { NextConfig } from 'next'

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline' https://em.realscout.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self' https://www.realscout.com https://em.realscout.com https://*.supabase.co https://www.simplifyingthemarket.com wss://*.supabase.co https://vitals.vercel-insights.com",
  "frame-src 'self' https://www.realscout.com https://em.realscout.com",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
].join('; ')

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [{ key: 'Content-Security-Policy', value: csp }],
      },
    ]
  },
}

export default nextConfig
