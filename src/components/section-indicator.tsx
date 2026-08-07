'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { sections } from '@/mock'

export function SectionIndicator() {
  const [activeSection, setActiveSection] = useState('top')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' },
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const darkSections = ['top', 'business']

  const isDark = darkSections.includes(activeSection)

  return (
    <div className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 xl:flex">
      {sections.map(({ id, label }) => (
        // biome-ignore lint/a11y/useAnchorContent: The anchor content is provided by the aria-label attribute.
        <a
          key={id}
          href={`#${id}`}
          aria-label={label}
          className={cn(
            'size-2 rounded-full transition-all duration-300',
            activeSection === id ? 'h-6' : '',
            isDark
              ? activeSection === id
                ? 'bg-white'
                : 'bg-white/30 hover:bg-white/60'
              : activeSection === id
                ? 'bg-foreground'
                : 'bg-foreground/30 hover:bg-foreground/60',
          )}
        />
      ))}
    </div>
  )
}
