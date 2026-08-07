'use client'

import { ArrowUpRight } from 'lucide-react'
import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

interface ActionButtonProps extends ComponentProps<'a'> {
  href: string
  tone?: 'dark' | 'light'
  label?: string
}

export function ActionButton({
  href,
  tone = 'dark',
  label = 'Fale comigo no WhatsApp',
  className,
  ...props
}: ActionButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      className={cn(
        '',
        className,
        tone === 'dark'
          ? 'group inline-flex items-center gap-3 border border-foreground bg-foreground px-8 py-4 text-sm font-medium tracking-wide text-background transition-colors duration-300 hover:bg-background hover:text-foreground'
          : 'group inline-flex items-center gap-3 border border-primary-foreground/60 px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-colors duration-300 hover:bg-primary-foreground hover:text-foreground',
      )}
      rel="noreferrer"
      {...props}
    >
      {label}
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  )
}
