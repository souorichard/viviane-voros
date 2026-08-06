import { Header } from '@/components/header'
import { AboutSection } from '@/components/sections/about-section'
import { HeroSection } from '@/components/sections/hero-section'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />

      <HeroSection />
      <AboutSection />
    </main>
  )
}
