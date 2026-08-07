import type { Metadata } from 'next'
import { Fraunces, Geist } from 'next/font/google'
import './globals.css'

const frauncesHeading = Fraunces({
  variable: '--font-heading',
  subsets: ['latin'],
})

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Viviane Voros',
  description:
    'Professora de inglês com 16 anos de experiência. Aulas VIP, grupos reduzidos e treinamentos corporativos de Business English sob medida',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${frauncesHeading.variable} ${geistSans.variable} h-full antialiased scroll-smooth select-none`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
