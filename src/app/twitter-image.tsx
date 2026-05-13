import { OG_IMAGE_ALT, OG_IMAGE_SIZE, buildDefaultShareImage } from '@/lib/og-default-image'

export const alt = OG_IMAGE_ALT
export const size = OG_IMAGE_SIZE
export const contentType = 'image/png'

export default function TwitterImage() {
  return buildDefaultShareImage()
}
