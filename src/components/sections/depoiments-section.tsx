import { featured, testimonials } from '@/mock'
import { Reveal } from '../reveal'
import { SectionLabel } from '../section-label'

export function DepoimentsSection() {
  return (
    <section
      id="depoiments"
      className="mx-auto max-w-368 px-6 py-24 lg:px-10 lg:py-32"
    >
      <Reveal>
        <SectionLabel n="04">Depoimentos</SectionLabel>
      </Reveal>

      <Reveal
        delay={80}
        as="figure"
        className="mt-14 grid gap-10 lg:grid-cols-12"
      >
        <blockquote className="font-heading text-[clamp(1.5rem,3.1vw,2.6rem)] leading-[1.2] font-light italic lg:col-span-9">
          “{featured.quote}”
        </blockquote>
        <figcaption className="self-end border-t border-border pt-4 text-sm lg:col-span-3">
          <span className="block font-medium">{featured.name}</span>
          <span className="block text-muted-foreground">{featured.role}</span>
        </figcaption>
      </Reveal>

      <div className="mt-20 grid gap-x-12 border-t border-border md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal
            key={t.name}
            as="figure"
            delay={i * 100}
            className={`flex flex-col py-10 ${
              i > 0
                ? 'border-t border-border md:border-t-0 md:border-l md:pl-12'
                : ''
            } ${i === 1 ? 'md:pt-20' : ''} ${i === 2 ? 'md:pt-32' : ''}`}
          >
            <blockquote className="flex-1 text-[0.975rem] leading-[1.75] text-muted-foreground">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="block font-medium">{t.name}</span>
              <span className="block text-muted-foreground">{t.role}</span>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
