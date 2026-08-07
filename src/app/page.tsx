import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { AboutSection } from '@/components/sections/about-section'
import { BusinessSection } from '@/components/sections/business-section'
import { ContactSection } from '@/components/sections/contact-section'
import { DepoimentsSection } from '@/components/sections/depoiments-section'
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
      <DepoimentsSection />
      <ContactSection />

      <Footer />
    </main>
  )
}
