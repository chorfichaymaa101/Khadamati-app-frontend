"use client"

import { Providers } from '@/components/providers'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero-section'
import { CategoriesSection } from '@/components/home/categories-section'
import { HowItWorksSection } from '@/components/home/how-it-works-section'
import { CTASection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <Providers>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <CategoriesSection />
          <HowItWorksSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </Providers>
  )
}
