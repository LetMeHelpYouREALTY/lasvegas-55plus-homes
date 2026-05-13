import { ImageResponse } from 'next/og'
import { AGENT_NAME, PHONE_DISPLAY, SITE_BRAND } from '@/lib/business'

export const OG_IMAGE_SIZE = { width: 1200, height: 630 } as const

export const OG_IMAGE_ALT = `${SITE_BRAND} — ${AGENT_NAME}, Las Vegas 55+ active adult real estate`

export function buildDefaultShareImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(145deg, #052e16 0%, #14532d 42%, #166534 100%)',
          padding: 56,
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              width: 120,
              height: 8,
              background: '#facc15',
              borderRadius: 4,
            }}
          />
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.05,
              letterSpacing: -1,
            }}
          >
            {SITE_BRAND}
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 600,
              color: '#fef9c3',
              maxWidth: 900,
              lineHeight: 1.25,
            }}
          >
            Sun City Summerlin · Las Vegas 55+ communities
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 32,
          }}
        >
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: '#ffffff',
            }}
          >
            {AGENT_NAME}
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: '#facc15',
            }}
          >
            {PHONE_DISPLAY}
          </div>
        </div>
      </div>
    ),
    {
      ...OG_IMAGE_SIZE,
    },
  )
}
