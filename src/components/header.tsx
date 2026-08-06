'use client'

import { useScrolled } from '@/hooks/use-scrolled'
import { cn } from '@/lib/utils'
import { NavLink } from './nav-link'
// import { HeaderItem } from './header-item'

export function Header() {
  const scrolled = useScrolled()

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 left-0 z-50 transition-colors duration-300',
        scrolled
          ? 'bg-foreground/60 backdrop-blur-sm shadow-md shadow-black/40'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-368 items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#top"
          className="font-heading text-xl font-light text-background"
        >
          viviane<span className="font-bold">.voros</span>
        </a>

        <nav className="flex items-center gap-8 text-background">
          <NavLink href="#top">Início</NavLink>
          <NavLink href="#about">Sobre</NavLink>
          <NavLink href="#methodology">Metodologia</NavLink>
          <NavLink href="#businessEnglish">Business English</NavLink>
          {/* <NavLink href="#testimonials">Depoimentos</NavLink> */}
          <NavLink href="#contact">Contato</NavLink>
        </nav>
      </div>
    </header>
  )
}
