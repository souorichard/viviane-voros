import { whatsappBaseLink } from '@/mock'

export function whatsappLink(message: string) {
  return `${whatsappBaseLink}?text=${encodeURIComponent(message)}`
}
