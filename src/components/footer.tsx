import { whatsappLink } from '@/mock'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-368 flex-col gap-2 px-6 py-8 text-xs tracking-[0.12em] text-muted-foreground uppercase sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <span>Aulas de Inglês Particular &amp; Business English</span>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="link-underline w-fit"
        >
          WhatsApp
        </a>
      </div>
    </footer>
  )
}
