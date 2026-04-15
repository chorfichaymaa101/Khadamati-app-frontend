"use client"

import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Search, Plus, ArrowLeft, ArrowRight } from 'lucide-react'
import { ZelligeBackground, FloatingShapes, MoroccanStar, ZelligeBorder } from '@/components/moroccan-patterns'

export function HeroSection() {
  const { t, dir, language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState('')

  const cities = [
    { value: 'casablanca', label: t('city.casablanca') },
    { value: 'rabat', label: t('city.rabat') },
    { value: 'marrakech', label: t('city.marrakech') },
    { value: 'fes', label: t('city.fes') },
    { value: 'tangier', label: t('city.tangier') },
    { value: 'agadir', label: t('city.agadir') },
    { value: 'meknes', label: t('city.meknes') },
    { value: 'oujda', label: t('city.oujda') },
  ]

  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight

  return (
    <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center overflow-hidden" dir={dir}>
      {/* Rich layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-background to-background" />
      
      {/* Zellige pattern overlay - more visible in light mode */}
      <ZelligeBackground className="opacity-15 dark:opacity-30" variant="default" />      
      {/* Floating decorative shapes */}
      <FloatingShapes />
      
      {/* Top decorative Moroccan arch with zakhraf */}
      <div className="absolute top-0 left-0 right-0 h-40 md:h-56 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
          {/* Main arch fill */}
          <path 
            d="M0,200 C360,60 1080,60 1440,200 L1440,0 L0,0 Z" 
            className="fill-primary/10 dark:fill-primary/5"
          />
          {/* Decorative inner arch line */}
          <path 
            d="M100,180 C400,80 1040,80 1340,180" 
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary/30 dark:text-primary/20"
          />
          {/* Second decorative line */}
          <path 
            d="M200,160 C480,70 960,70 1240,160" 
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-accent/20 dark:text-accent/10"
          />
        </svg>
        
        {/* Zellige border at bottom of arch */}
        <div className="absolute bottom-0 left-0 right-0">
          <ZelligeBorder />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo badge with Moroccan decorative frame */}
          <div className="mb-6 md:mb-8 animate-float relative">
            {/* Outer decorative ring */}
            <div className="absolute -inset-4 md:-inset-6">
              <svg viewBox="0 0 120 120" className="w-full h-full">
                <circle cx="60" cy="60" r="55" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/30" strokeDasharray="8 4" />
                <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent/20" />
              </svg>
            </div>
            
            <div className="relative">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-3xl bg-gradient-to-br from-primary via-primary to-accent shadow-2xl shadow-primary/40 flex items-center justify-center border-2 border-primary-foreground/20">
                <span className="text-primary-foreground font-bold text-4xl md:text-5xl">خ</span>
              </div>
              {/* Decorative stars around logo */}
              <MoroccanStar className="absolute -top-4 -right-4 text-accent w-7 h-7 md:w-9 md:h-9 animate-shimmer" variant="double" />
              <MoroccanStar className="absolute -bottom-3 -left-3 text-primary/70 w-5 h-5 md:w-6 md:h-6 animate-shimmer" style={{ animationDelay: '1s' }} />
              <MoroccanStar className="absolute top-1/2 -right-6 text-accent/60 w-4 h-4 animate-shimmer" style={{ animationDelay: '0.5s' }} variant="outline" />
            </div>
          </div>

          {/* Title with decorative elements */}
          <div className="relative mb-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance">
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                {t('home.hero.title')}
              </span>
            </h1>
            {/* Small decorative stars beside title */}
            <MoroccanStar className="absolute -left-8 top-1/2 -translate-y-1/2 text-primary/40 w-5 h-5 hidden md:block" />
            <MoroccanStar className="absolute -right-8 top-1/2 -translate-y-1/2 text-accent/40 w-5 h-5 hidden md:block" />
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 font-medium mb-3 text-balance">
            {t('home.hero.subtitle')}
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-12 max-w-2xl text-pretty">
            {t('home.hero.description')}
          </p>

          {/* Search Bar with Moroccan frame */}
          <div className="w-full max-w-3xl mb-8 md:mb-12 relative">
            {/* Decorative corner accents */}
            <div className="absolute -top-2 -left-2 w-4 h-4">
              <MoroccanStar className="text-primary" size={16} />
            </div>
            <div className="absolute -top-2 -right-2 w-4 h-4">
              <MoroccanStar className="text-primary" size={16} />
            </div>
            
            <div className="bg-card/80 backdrop-blur-md rounded-3xl p-3 md:p-4 shadow-2xl shadow-primary/15 border-2 border-primary/20 relative overflow-hidden">
              {/* Subtle zellige pattern inside search box */}
              <div className="absolute inset-0 zellige-pattern opacity-[0.03] dark:opacity-10" />              
              <div className="relative flex flex-col md:flex-row gap-3 md:items-center">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="absolute top-1/2 -translate-y-1/2 start-4 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder={t('home.search.placeholder')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-14 md:h-16 ps-12 pe-4 text-base md:text-lg rounded-2xl border-2 border-border/50 bg-background/80 focus:bg-background focus:border-primary placeholder:text-muted-foreground/70"
                  />
                </div>

                {/* City Select */}
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger className="h-14 md:!h-16 w-full md:w-48 rounded-2xl border-2 border-border/50 bg-background/80 text-base md:text-lg flex items-center">                    
                    <SelectValue placeholder={t('home.search.city')} />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl">
                    {cities.map((city) => (
                      <SelectItem 
                        key={city.value} 
                        value={city.value}
                        className="py-3 text-base"
                      >
                        {city.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Search Button */}
                <Link href={`/search?q=${searchQuery}&city=${selectedCity}`}>
                  <Button 
                    size="lg" 
                    className="cursor-pointer h-14 md:h-16 w-full md:w-auto px-8 rounded-2xl text-base md:text-lg font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40 border border-primary-foreground/10"
                  >
                    <Search className="w-5 h-5 me-2" />
                    {t('home.search.button')}
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Bottom decorative accents */}
            <div className="absolute -bottom-2 -left-2 w-4 h-4">
              <MoroccanStar className="text-accent" size={16} />
            </div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4">
              <MoroccanStar className="text-accent" size={16} />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mb-10">
            <Link href="/search" className="flex-1">
              <Button 
                size="lg" 
                variant="outline"
                className="cursor-pointer w-full h-14 md:h-16 rounded-2xl text-base md:text-lg font-semibold border-2 border-primary/40 hover:border-primary hover:bg-primary/10 hover:text-primary group transition-all"
              >
                {t('home.cta.findService')}
                <ArrowIcon className="w-5 h-5 ms-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/add-service" className="flex-1">
              <Button 
                size="lg"
                className="cursor-pointer w-full h-14 md:h-16 rounded-2xl text-base md:text-lg font-semibold bg-accent hover:bg-accent/90 hover:color-white text-accent-foreground shadow-lg shadow-accent/30 border border-accent-foreground/10"
              >
                <Plus className="w-5 h-5 me-2" />
                {t('home.cta.addService')}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom decorative Moroccan wave with zellige */}
      <div className="absolute bottom-0 left-0 right-0">
        <ZelligeBorder className="mb-0" />
        <svg className="w-full h-16 md:h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path 
            d="M0,20 C480,100 960,100 1440,20 L1440,100 L0,100 Z" 
            className="fill-background"
          />
          <path 
            d="M0,30 C480,90 960,90 1440,30" 
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary/20"
          />
        </svg>
      </div>
    </section>
  )
}
