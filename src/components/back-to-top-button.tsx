'use client'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const pageHeight = document.documentElement.scrollHeight
      const nearBottom = scrollPosition >= pageHeight - 200 // 200px de margem antes do fim

      setVisible(nearBottom)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // checa estado inicial

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    // biome-ignore lint/a11y/useButtonType: The anchor content is provided by the aria-label attribute.
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao início"
      className={cn(
        'fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-foreground cursor-pointer text-background shadow-md transition-all duration-300 animate-gentle-bounce',
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  )
}
