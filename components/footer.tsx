"use client"

import { useLanguage } from '@/lib/language-context'
import { MoroccanStar, ZelligeBorder, GeometricDivider } from '@/components/moroccan-patterns'
import { Heart } from 'lucide-react'

export function Footer() {
  const { t, dir } = useLanguage()
  
  return (
    <footer className="relative overflow-hidden" dir={dir}>
      {/* Decorative Moroccan top border */}
      <ZelligeBorder />
      
      {/* Background with rich Moroccan patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-card" />
      <div className="absolute inset-0 zellige-pattern opacity-10" />
      <div className="absolute inset-0 arabesque-pattern opacity-20" />
      
      {/* Floating decorative stars */}
      <MoroccanStar className="absolute top-8 start-[10%] text-primary/15 w-8 h-8 animate-float" variant="double" />
      <MoroccanStar className="absolute top-12 end-[15%] text-accent/10 w-6 h-6 animate-float" style={{ animationDelay: '1s' }} />
      <MoroccanStar className="absolute bottom-16 start-[20%] text-accent/15 w-10 h-10 animate-float" style={{ animationDelay: '2s' }} variant="outline" />
      <MoroccanStar className="absolute bottom-20 end-[10%] text-primary/10 w-7 h-7 animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="relative py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8">
            {/* Logo with Moroccan frame */}
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/20" strokeDasharray="8 4" />
                </svg>
              </div>
              
              <div className="flex items-center gap-3 relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl border border-primary-foreground/10">
                  <span className="text-primary-foreground font-bold text-2xl">خ</span>
                </div>
                <span className="text-2xl md:text-3xl font-bold text-foreground">
                  {t('home.hero.title')}
                </span>
              </div>
              
              {/* Corner stars */}
              <MoroccanStar className="absolute -top-2 -end-2 text-accent w-5 h-5" />
            </div>

            {/* Moroccan decorative divider */}
            <div className="w-full max-w-md">
              <GeometricDivider variant="ornate" />
            </div>
            
            {/* Made with love - Moroccan style */}
            <div className="flex items-center gap-3 text-muted-foreground">
              <MoroccanStar className="text-primary/40 w-4 h-4" />
              <span className="text-base">{t('footer.madeWith')}</span>
              <Heart className="w-5 h-5 text-primary fill-primary animate-pulse" />
              <MoroccanStar className="text-primary/40 w-4 h-4" />
            </div>
            
            {/* Copyright with decorative frame */}
            <div className="relative px-8 py-3 rounded-2xl bg-card/50 border border-primary/20">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Khadamati. {t('footer.rights')}
              </p>
              {/* Small corner decorations */}
              <div className="absolute -top-1 -start-1 w-2 h-2 rotate-45 bg-primary/40" />
              <div className="absolute -top-1 -end-1 w-2 h-2 rotate-45 bg-primary/40" />
              <div className="absolute -bottom-1 -start-1 w-2 h-2 rotate-45 bg-accent/40" />
              <div className="absolute -bottom-1 -end-1 w-2 h-2 rotate-45 bg-accent/40" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative border */}
      <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary" />
    </footer>
  )
}
