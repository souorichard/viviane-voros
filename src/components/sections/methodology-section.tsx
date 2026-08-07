import { method } from '@/mock'
import { Reveal } from '../reveal'
import { SectionLabel } from '../section-label'

export function MethodologySection() {
  return (
    <section id="methodology" className="border-t border-border">
      <div className="mx-auto max-w-368 px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionLabel n="02">Metodologia</SectionLabel>
            <h2 className="font-display mt-8 text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.06] font-semibold">
              Construída em cima de evidência, não de intuição
            </h2>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Quatro princípios que sustentam cada aula, do primeiro diagnóstico
              à conversa espontânea.
            </p>
          </Reveal>

          <div className="lg:col-span-8 lg:pl-10">
            <dl>
              {method.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 90}
                  className="group grid grid-cols-[2.5rem_1fr] gap-6 border-t border-border py-8 transition-colors duration-300 last:border-b hover:border-foreground/40 md:grid-cols-[3.5rem_1fr] md:gap-10"
                >
                  <span className="font-heading pt-1 text-sm text-muted-foreground italic transition-colors duration-300 group-hover:text-foreground">
                    {item.n}
                  </span>
                  <div>
                    <dt className="font-display text-xl font-semibold sm:text-2xl">
                      {item.title}
                    </dt>
                    <dd className="mt-3 max-w-xl text-[0.975rem] leading-[1.7] text-muted-foreground">
                      {item.text}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
