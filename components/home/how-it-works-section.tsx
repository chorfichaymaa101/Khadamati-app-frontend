"use client"

import { useLanguage } from '@/lib/language-context'
import { GeometricDivider, MoroccanStar, ZelligeBorder, MoroccanFrame } from '@/components/moroccan-patterns'
import { Search, UserCheck, MessageCircle } from 'lucide-react'

const steps = [
  { 
    key: 'step1', 
    icon: Search,
    gradient: 'from-primary to-primary/80',
    accentColor: 'text-primary'
  },
  { 
    key: 'step2', 
    icon: UserCheck,
    gradient: 'from-accent to-accent/80',
    accentColor: 'text-accent'
  },
  { 
    key: 'step3', 
    icon: MessageCircle,
    gradient: 'from-primary via-accent to-primary',
    accentColor: 'text-primary'
  },
]

export function HowItWorksSection() {
  const { t, dir, language } = useLanguage()

  return (
    <section className="relative py-16 md:py-24 overflow-hidden" dir={dir}>
      {/* Rich background layers */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-background to-secondary/20" />
      <div className="absolute inset-0 arabesque-pattern" />
      <div className="absolute inset-0 bg-background" /> */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/50" />
      <div className="absolute inset-0 arabesque-pattern opacity-[0.04] dark:opacity-50" />

      {/* Decorative floating elements */}
      <div className="absolute top-16 start-8 md:start-16 opacity-25">
        <MoroccanStar className="text-primary w-14 h-14 animate-float" variant="double" />
      </div>
      <div className="absolute top-1/3 end-6 md:end-12 opacity-20">
        <MoroccanStar className="text-accent w-10 h-10 animate-float" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute bottom-24 start-12 opacity-15">
        <MoroccanStar className="text-accent w-16 h-16 animate-float" style={{ animationDelay: '2s' }} variant="outline" />
      </div>
      <div className="absolute bottom-16 end-20 opacity-20">
        <MoroccanStar className="text-primary w-12 h-12 animate-float" style={{ animationDelay: '1.5s' }} variant="double" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block relative">
            {/* Decorative arch above title */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-48 md:w-64">
              <svg viewBox="0 0 200 30" className="w-full h-6">
                <path d="M0,30 Q100,0 200,30" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/30" />
                <path d="M20,28 Q100,5 180,28" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/20" />
              </svg>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 text-balance">
              {t('home.howItWorks.title')}
            </h2>
            
            <div className="mt-4">
              <ZelligeBorder />
            </div>
          </div>
          <GeometricDivider variant="ornate" />
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line with Moroccan pattern (desktop) */}
          <div className="hidden md:block absolute top-28 start-[16%] end-[16%] h-2">
            <div className="w-full h-full geometric-border rounded-full opacity-30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.key} className="relative group">
                  {/* Step card with Moroccan styling */}
                  <div className="bg-card rounded-[2rem] p-8 md:p-10 shadow-xl border-2 border-border/50 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-visible">
                    {/* Zellige pattern background */}
                    <div className="absolute inset-0 zellige-pattern opacity-10 group-hover:opacity-20 transition-opacity" />
                    
                    {/* Step number badge with Moroccan frame */}
                    <div className="absolute -top-5 start-8">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg border-2 border-primary-foreground/20">
                          {language === 'ar' ? ['١', '٢', '٣'][index] : index + 1}
                        </div>
                        <MoroccanStar className="absolute -top-2 -end-2 text-accent w-5 h-5" />
                      </div>
                    </div>

                    {/* Icon with decorative frame */}
                    <div className="relative mb-6 md:mb-8 mt-4">
                      {/* Decorative circle behind icon */}
                      <div className="absolute inset-0 flex items-center justify-start">
                        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-dashed border-primary/20 group-hover:border-primary/40 transition-colors" />
                      </div>
                      
                      <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground" />
                      </div>
                      
                      {/* Small decorative star */}
                      <MoroccanStar className={`absolute -bottom-1 end-0 ${step.accentColor} w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity`} variant="double" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 relative">
                      {t(`home.howItWorks.${step.key}.title`)}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed relative">
                      {t(`home.howItWorks.${step.key}.desc`)}
                    </p>

                    {/* Decorative corner zakhraf pattern */}
                    <div className="absolute bottom-4 end-4 opacity-15 group-hover:opacity-30 transition-opacity">
                      <svg viewBox="0 0 80 80" className="w-16 h-16">
                        <path d="M40 0L50 15L65 10L55 25L70 35L55 40L65 55L50 50L40 65L30 50L15 55L25 40L10 35L25 25L15 10L30 15L40 0z" fill="currentColor" className="text-primary" />
                      </svg>
                    </div>
                    
                    {/* Top corner accent */}
                    <div className="absolute top-0 end-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M100,0 L100,100 L0,0 Z" fill="currentColor" className="text-accent" />
                      </svg>
                    </div>
                  </div>

                  {/* Mobile connector line with Moroccan styling */}
                  {index < 2 && (
                    <div className="md:hidden flex flex-col items-center my-6">
                      <div className="w-1 h-4 bg-primary/30 rounded-full" />
                      <MoroccanStar className="text-primary/50 w-4 h-4 my-1" />
                      <div className="w-1 h-4 bg-accent/30 rounded-full" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
