import Image from 'next/image'

import londonHero from '@/assets/london-hero.jpg'
import { ActionButton } from '../action-button'
import { ScrollIndicator } from '../scroll-indicator'

export function HeroSection() {
  return (
    <section id="top" className="relative isolate min-h-svh overflow-hidden">
      <ScrollIndicator />

      <Image
        src={londonHero}
        alt="Vista em preto e branco da Tower Bridge e do Big Ben em Londres"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-10 h-full w-full object-cover grayscale"
      />
      <div className="absolute inset-0 -z-10 bg-[oklch(0.12_0_0/0.72)]" />
      {/* <div className="absolute inset-x-0 bottom-0 -z-10 h-8 bg-linear-to-t from-background via-background/20 to-transparent" /> */}

      <div className="mx-auto grid min-h-svh max-w-368 grid-cols-1 items-end gap-10 px-6 pt-32 pb-14 lg:grid-cols-12 lg:px-10 lg:pb-20">
        <div className="lg:col-span-8">
          <p className="animate-rise text-[0.7rem] font-medium tracking-[0.3em] text-primary-foreground/70 uppercase">
            Inglês particular &amp; corporativo — desde 2010
          </p>
          <h1 className="animate-rise font-heading mt-8 text-[clamp(2.6rem,7.2vw,6.5rem)] leading-[0.92] font-semibold text-primary-foreground [animation-delay:120ms]">
            Inglês que conecta
            <br />
            <span className="font-light italic">conhecimento,</span> comunicação
            <br />
            <span className="text-primary-foreground/55">e resultados.</span>
          </h1>
        </div>
        <div className="lg:col-span-4 lg:pb-3">
          <div className="animate-rise h-px w-full bg-primary-foreground/25 [animation-delay:240ms]" />
          <p className="animate-rise mt-6 max-w-sm text-base leading-relaxed text-primary-foreground/80 [animation-delay:300ms]">
            Aulas sob medida para quem precisa falar com confiança — na vida, na
            carreira e no mundo.
          </p>
          <div className="animate-rise mt-8 [animation-delay:380ms]">
            <ActionButton tone="light" />
          </div>
        </div>
      </div>
    </section>
  )
}
