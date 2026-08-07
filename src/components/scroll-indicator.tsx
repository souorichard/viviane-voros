'use client'

import { ChevronDown } from 'lucide-react'

export function ScrollIndicator() {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    // biome-ignore lint/a11y/useButtonType: The anchor content is provided by the aria-label attribute.
    <button
      onClick={scrollToNext}
      aria-label="Rolar para baixo"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-background/70 transition-colors hover:text-background"
    >
      <ChevronDown
        className="size-6 animate-gentle-bounce-down"
        strokeWidth={1.5}
      />
    </button>
  )
}
