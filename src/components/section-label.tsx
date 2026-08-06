import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

interface SectionLabelProps extends ComponentProps<'p'> {
  n: string
}

export function SectionLabel({
  className,
  n,
  children,
  ...props
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        'flex items-baseline gap-3 text-[0.7rem] font-medium tracking-[0.28em] text-muted-foreground uppercase',
        className,
      )}
      {...props}
    >
      <span className="tabular-nums">{n}</span>
      <span aria-hidden className="h-px w-8 bg-border" />
      <span>{children}</span>
    </p>
  )
}
