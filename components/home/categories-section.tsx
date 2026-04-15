"use client"

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { GeometricDivider, MoroccanStar, ZelligeBorder } from '@/components/moroccan-patterns'
import { Wrench, Zap, Hammer, Paintbrush, Sparkles, ChefHat, Car, Settings } from 'lucide-react'

const categories = [
  { id: 'plumber', key: 'category.plumber', icon: Wrench, color: 'from-[#285078] to-[#1a3a5c]', iconBg: 'bg-[#285078]' },
  { id: 'electrician', key: 'category.electrician', icon: Zap, color: 'from-[#c4784a] to-[#a05a30]', iconBg: 'bg-[#c4784a]' },
  { id: 'carpenter', key: 'category.carpenter', icon: Hammer, color: 'from-[#8b6914] to-[#6d5210]', iconBg: 'bg-[#8b6914]' },
  { id: 'painter', key: 'category.painter', icon: Paintbrush, color: 'from-[#a0522d] to-[#803d1a]', iconBg: 'bg-[#a0522d]' },
  { id: 'cleaner', key: 'category.cleaner', icon: Sparkles, color: 'from-[#2d6a4f] to-[#1b4d35]', iconBg: 'bg-[#2d6a4f]' },
  { id: 'cook', key: 'category.cook', icon: ChefHat, color: 'from-[#9c3d3d] to-[#7a2e2e]', iconBg: 'bg-[#9c3d3d]' },
  { id: 'driver', key: 'category.driver', icon: Car, color: 'from-[#4a5568] to-[#2d3748]', iconBg: 'bg-[#4a5568]' },
  { id: 'mechanic', key: 'category.mechanic', icon: Settings, color: 'from-[#5a4a3a] to-[#3d3228]', iconBg: 'bg-[#5a4a3a]' },
]

export function CategoriesSection() {
  const { t, dir } = useLanguage()

  return (
    <section className="relative py-16 md:py-24 overflow-hidden" dir={dir}>
      {/* Rich background with multiple patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 zakhraf-pattern opacity-30" />
      
      {/* Decorative side elements */}
      <div className="absolute top-20 left-4 md:left-10 opacity-30">
        <MoroccanStar className="text-primary w-12 h-12 animate-float" variant="double" />
      </div>
      <div className="absolute bottom-20 right-4 md:right-10 opacity-25">
        <MoroccanStar className="text-accent w-16 h-16 animate-float" style={{ animationDelay: '1.5s' }} variant="double" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with decorative elements */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 text-balance">
              {t('home.categories.title')}
            </h2>
            {/* Decorative underline */}
            <div className="mt-4">
              <ZelligeBorder />
            </div>
          </div>
          <GeometricDivider variant="ornate" />
        </div>

        {/* Categories grid with Moroccan tile styling */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link 
                key={category.id}
                href={`/search?category=${category.id}`}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-card rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-border/50 hover:border-primary/40 overflow-hidden group-hover:-translate-y-2">
                  {/* Zellige pattern background on hover */}
                  <div className="absolute inset-0 zellige-pattern opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Icon container with Moroccan frame */}
                  <div className="relative mb-4 md:mb-6">
                    {/* Decorative ring behind icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-dashed border-primary/30" />
                    </div>
                    
                    <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    
                    {/* Decorative star on hover */}
                    <div className="absolute -top-2 -end-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoroccanStar className="text-primary w-5 h-5" />
                    </div>
                  </div>

                  {/* Category name */}
                  <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {t(category.key)}
                  </h3>

                  {/* Decorative corner zellige pattern */}
                  <div className="absolute bottom-0 end-0 w-20 h-20 opacity-10 group-hover:opacity-25 transition-opacity">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M100,0 L100,100 L0,100 Z" fill="currentColor" className="text-primary" />
                      <path d="M100,30 L100,100 L30,100 Z" fill="currentColor" className="text-accent" opacity="0.5" />
                    </svg>
                  </div>
                  
                  {/* Top corner accent */}
                  <div className="absolute top-0 start-0 w-12 h-12 opacity-5 group-hover:opacity-15 transition-opacity">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path d="M0,0 L100,0 L0,100 Z" fill="currentColor" className="text-accent" />
                    </svg>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
