"use client"

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'
import { MoroccanStar, ZelligeBorder, GeometricDivider } from '@/components/moroccan-patterns'
import { ArrowLeft, ArrowRight, Plus, Search } from 'lucide-react'

export function CTASection() {
  const { t, dir, language } = useLanguage()
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight

  return (
    <section className="relative py-20 md:py-32 overflow-hidden" dir={dir}>
      {/* Rich background with Moroccan patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-background" />

      {/* keep patterns but MUCH lighter in light mode */}
      <div className="absolute inset-0 zellige-pattern opacity-5 dark:opacity-10" />
      <div className="absolute inset-0 arabesque-pattern opacity-5 dark:opacity-40" />
      {/* Floating decorative Moroccan stars */}
      <MoroccanStar className="absolute top-16 start-[8%] text-primary/30 w-10 h-10 animate-float" variant="double" />
      <MoroccanStar className="absolute top-32 end-[12%] text-accent/25 w-8 h-8 animate-float" style={{ animationDelay: '0.5s' }} />
      <MoroccanStar className="absolute bottom-24 start-[15%] text-accent/20 w-14 h-14 animate-float" style={{ animationDelay: '1.5s' }} variant="double" />
      <MoroccanStar className="absolute bottom-40 end-[8%] text-primary/25 w-12 h-12 animate-float" style={{ animationDelay: '2s' }} />
      <MoroccanStar className="absolute top-[45%] start-[3%] text-primary/15 w-6 h-6 animate-float" style={{ animationDelay: '2.5s' }} variant="outline" />
      <MoroccanStar className="absolute top-[55%] end-[5%] text-accent/15 w-8 h-8 animate-float" style={{ animationDelay: '3s' }} variant="outline" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card with Moroccan frame styling */}
        <div className="relative">
          {/* Decorative corner stars outside the card */}
          <MoroccanStar className="absolute -top-4 -start-4 text-primary w-8 h-8 z-10" variant="double" />
          <MoroccanStar className="absolute -top-4 -end-4 text-primary w-8 h-8 z-10" variant="double" />
          <MoroccanStar className="absolute -bottom-4 -start-4 text-accent w-8 h-8 z-10" variant="double" />
          <MoroccanStar className="absolute -bottom-4 -end-4 text-accent w-8 h-8 z-10" variant="double" />
          
          <div className="bg-card/95 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-16 shadow-2xl border-2 border-primary/25 text-center overflow-hidden relative">
            {/* Inner zellige pattern */}
            <div className="absolute inset-0 zellige-pattern opacity-15" />
            
            {/* Decorative Moroccan arch at top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 md:w-96 h-16 overflow-hidden">
              <svg viewBox="0 0 400 60" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0,60 Q200,0 400,60" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary/30" />
                <path d="M30,55 Q200,10 370,55" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent/20" />
                <path d="M60,50 Q200,15 340,50" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/15" />
              </svg>
            </div>

            {/* Logo with elaborate Moroccan frame */}
            <div className="relative inline-block mb-8 mt-8">
              {/* Outer decorative rings */}
              <div className="absolute -inset-6 md:-inset-8">
                <svg viewBox="0 0 160 160" className="w-full h-full">
                  <circle cx="80" cy="80" r="75" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/25" strokeDasharray="10 5" />
                  <circle cx="80" cy="80" r="65" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent/20" />
                </svg>
              </div>
              
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] bg-gradient-to-br from-primary via-primary to-accent shadow-2xl shadow-primary/40 flex items-center justify-center mx-auto border-2 border-primary-foreground/20 relative">
                <span className="text-primary-foreground font-bold text-5xl md:text-6xl">خ</span>
              </div>
              
              {/* Decorative stars around logo */}
              <MoroccanStar className="absolute -top-3 -end-3 text-accent w-8 h-8 animate-shimmer" variant="double" />
              <MoroccanStar className="absolute -bottom-2 -start-2 text-primary/70 w-6 h-6 animate-shimmer" style={{ animationDelay: '1s' }} />
              <MoroccanStar className="absolute top-1/2 -start-5 text-accent/60 w-4 h-4 animate-shimmer" style={{ animationDelay: '0.5s' }} variant="outline" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance relative">
              {language === 'ar' ? 'ابدأ الآن مع خدماتي' : 'Commencez maintenant avec Khadamati'}
            </h2>
            
            {/* Decorative divider */}
            <div className="max-w-md mx-auto mb-6">
              <GeometricDivider variant="simple" />
            </div>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty relative">
              {language === 'ar' 
                ? 'انضم إلى آلاف المغاربة الذين يستخدمون خدماتي للعثور على أفضل الحرفيين أو لعرض خدماتهم'
                : 'Rejoignez des milliers de Marocains qui utilisent Khadamati pour trouver les meilleurs artisans ou proposer leurs services'
              }
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto relative">
              <Link href="/search" className="flex-1">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="cursor-pointer w-full h-16 rounded-2xl text-lg font-semibold border-2 border-primary/40 hover:border-primary hover:bg-primary/10 hover:text-primary group transition-all"
                >
                  <Search className="w-5 h-5 me-2" />
                  {t('home.cta.findService')}
                  <ArrowIcon className="w-5 h-5 ms-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/add-service" className="flex-1">
                <Button 
                  size="lg"
                  className="cursor-pointer w-full h-16 rounded-2xl text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all border border-primary-foreground/10"
                >
                  <Plus className="w-5 h-5 me-2" />
                  {t('home.cta.addService')}
                </Button>
              </Link>
            </div>

            {/* Bottom decorative Moroccan border */}
            <div className="absolute bottom-0 left-0 right-0">
              <ZelligeBorder />
            </div>
            
            {/* Corner decorative patterns inside card */}
            <div className="absolute top-4 start-4 w-16 h-16 opacity-15">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M0,0 L50,0 L0,50 Z" fill="currentColor" className="text-primary" />
                <path d="M50 0L62 18L80 12L68 30L86 42L68 48L80 66L62 60L50 78L38 60L20 66L32 48L14 42L32 30L20 12L38 18L50 0z" fill="currentColor" className="text-accent" transform="scale(0.4) translate(60, 60)" />
              </svg>
            </div>
            <div className="absolute top-4 end-4 w-16 h-16 opacity-15 scale-x-[-1]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M0,0 L50,0 L0,50 Z" fill="currentColor" className="text-primary" />
                <path d="M50 0L62 18L80 12L68 30L86 42L68 48L80 66L62 60L50 78L38 60L20 66L32 48L14 42L32 30L20 12L38 18L50 0z" fill="currentColor" className="text-accent" transform="scale(0.4) translate(60, 60)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
