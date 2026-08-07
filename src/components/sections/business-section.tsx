import { corporate } from '@/mock'
import { whatsappLink } from '@/utils/whatsapp-link'
import { ActionButton } from '../action-button'
import { Reveal } from '../reveal'

export function BusinessSection() {
  return (
    <section id="business" className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-368 px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-7">
            <p className="flex items-baseline gap-3 text-[0.7rem] font-medium tracking-[0.28em] text-primary-foreground/60 uppercase">
              <span>03</span>
              <span aria-hidden className="h-px w-8 bg-primary-foreground/30" />
              <span>Business English</span>
            </p>
            <h2 className="font-heading mt-8 text-[clamp(2rem,4.6vw,3.8rem)] leading-none font-semibold">
              Treinamento corporativo{' '}
              <span className="font-light italic">sob medida</span> para o seu
              time
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-[1.7] text-primary-foreground/75">
              Desenhado a partir da rotina real da equipe: o vocabulário, os
              cenários e a postura que cada área precisa dominar em inglês — do
              diagnóstico inicial ao acompanhamento de progresso.
            </p>
            <div className="mt-10">
              <ActionButton
                href={whatsappLink(
                  'Olá! Gostaria de saber mais sobre o treinamento corporativo de Business English para minha equipe.',
                )}
                label="Solicitar proposta corporativa"
                tone="light"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-5">
            {corporate.map((item, i) => (
              <Reveal
                key={item.label}
                delay={i * 100}
                className="flex items-baseline justify-between gap-8 border-t border-primary-foreground/20 py-7 last:border-b"
              >
                <span className="font-heading text-2xl font-semibold sm:text-3xl">
                  {item.label}
                </span>
                <span className="max-w-56 text-right text-sm leading-relaxed text-primary-foreground/70">
                  {item.text}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
