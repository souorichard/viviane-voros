import { whatsappLink } from '@/utils/whatsapp-link'
import { ActionButton } from '../action-button'
import { Reveal } from '../reveal'
import { SectionLabel } from '../section-label'

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-368 px-6 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-2">
            <SectionLabel n="05">Contato</SectionLabel>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-10">
            <h2 className="font-heading max-w-4xl text-[clamp(2rem,5vw,4.2rem)] leading-none font-semibold">
              Confiança e autonomia —{' '}
              <span className="font-light italic">esse é o propósito.</span>
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-[1.7] text-muted-foreground">
              Quero que você use o inglês sem travar: naturalidade para falar,
              decidir e construir suas próprias oportunidades. Vamos conversar
              sobre o seu objetivo?
            </p>
            <div className="mt-10">
              <ActionButton
                href={whatsappLink(
                  'Olá! Gostaria de saber mais sobre as aulas de inglês particular e corporativo.',
                )}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
