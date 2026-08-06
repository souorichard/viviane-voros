'use client'

import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

interface NavLinkProps extends ComponentProps<'a'> {}

export function NavLink({ href, className, children, ...props }: NavLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        'link-underline text-xs tracking-[0.14em] text-primary-foreground/75 uppercase transition-colors duration-300 hover:text-primary-foreground',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
