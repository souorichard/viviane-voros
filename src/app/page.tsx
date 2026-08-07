import { Header } from '@/components/header'
import { AboutSection } from '@/components/sections/about-section'
import { BusinessSection } from '@/components/sections/business-section'
import { HeroSection } from '@/components/sections/hero-section'
import { MethodologySection } from '@/components/sections/methodology-section'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />

      <HeroSection />
      <AboutSection />
      <MethodologySection />
      <BusinessSection />
    </main>
  )
}
