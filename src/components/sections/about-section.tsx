import { Reveal } from '../reveal'
import { SectionLabel } from '../section-label'

export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto max-w-368 px-6 pt-24 pb-20 lg:px-10 lg:pt-36"
    >
      <Reveal>
        <SectionLabel n="01">Sobre</SectionLabel>
      </Reveal>
      <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <h2 className="font-heading text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.02] font-semibold">
            16 anos ensinando pessoas a se comunicarem{' '}
            <span className="font-light italic">de verdade</span>
          </h2>
        </Reveal>
        <Reveal
          delay={120}
          className="space-y-6 text-[1.0625rem] leading-[1.75] text-muted-foreground lg:col-span-5 lg:pt-3"
        >
          <p>
            Fluência não nasce de listas de regras — nasce do uso real da
            língua. Meu trabalho é criar o ambiente certo para que isso
            aconteça, aula após aula.
          </p>
          <p>
            Atendo em{' '}
            <strong className="font-medium text-foreground">
              aulas VIP individuais
            </strong>{' '}
            e em{' '}
            <strong className="font-medium text-foreground">
              grupos reduzidos
            </strong>
            , sempre com abordagem <em>tailor-made</em>: conteúdo, ritmo e
            materiais construídos a partir de quem você é e do que precisa
            comunicar.
          </p>
        </Reveal>
      </div>

      <Reveal
        delay={180}
        className="mt-16 grid grid-cols-2 border-t border-border md:grid-cols-4"
      >
        {[
          ['16', 'anos de sala de aula'],
          ['2', 'pós-graduações'],
          ['1:1', 'ou grupos de até 4'],
          ['100%', 'material sob medida'],
        ].map(([value, label], i) => (
          <div
            key={label}
            className={`py-7 pr-6 ${i % 2 === 1 ? 'border-l border-border pl-6' : ''} ${
              i === 2 ? 'md:border-l md:pl-6' : ''
            } ${i === 3 ? 'border-l pl-6' : ''}`}
          >
            <p className="font-display text-3xl font-semibold sm:text-4xl">
              {value}
            </p>
            <p className="mt-2 text-xs tracking-[0.14em] text-muted-foreground uppercase">
              {label}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
