"use client"

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Providers } from '@/components/providers'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/lib/language-context'
import { searchServices } from '@/lib/mock-services'
import { ServiceCard, type Service } from '@/components/service-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ZelligeBackground, MoroccanStar, GeometricDivider } from '@/components/moroccan-patterns'
import { Search, Filter, X, SearchX } from 'lucide-react'

function SearchContent() {
  const searchParams = useSearchParams()
  const { t, dir, language } = useLanguage()
  
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [city, setCity] = useState(searchParams.get('city') || '')
  const [category, setCategory] = useState(searchParams.get('category') || '')
  const [results, setResults] = useState<Service[]>([])
  const [showFilters, setShowFilters] = useState(false)

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

  const categories = [
    { value: 'plumber', label: t('category.plumber') },
    { value: 'electrician', label: t('category.electrician') },
    { value: 'carpenter', label: t('category.carpenter') },
    { value: 'painter', label: t('category.painter') },
    { value: 'cleaner', label: t('category.cleaner') },
    { value: 'cook', label: t('category.cook') },
    { value: 'driver', label: t('category.driver') },
    { value: 'mechanic', label: t('category.mechanic') },
  ]

  useEffect(() => {
    const filtered = searchServices(query, city, category)
    setResults(filtered)
  }, [query, city, category])

  const clearFilters = () => {
    setQuery('')
    setCity('')
    setCategory('')
  }

  const hasActiveFilters = query || city || category

  return (
    <div className="min-h-screen flex flex-col" dir={dir}>
      <Navbar />
      
      <main className="flex-1 relative">
        {/* Header section */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
          <ZelligeBackground className="opacity-50" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t('search.title')}
              </h1>
              <GeometricDivider />
            </div>

            {/* Search bar */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/80 backdrop-blur-xl rounded-3xl p-4 md:p-6 shadow-xl border border-border/50">
                <div className="flex flex-col md:flex-row md:items-center gap-3">                  {/* Search Input */}
                  <div className="relative flex-1">
                    <Search className="absolute top-1/2 -translate-y-1/2 start-4 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder={t('home.search.placeholder')}
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="h-14 ps-12 pe-4 text-base rounded-2xl border-0 bg-secondary/50 focus:bg-secondary"
                    />
                  </div>

                  {/* Filter toggle (mobile) */}
                  <Button 
                    variant="outline" 
                    onClick={() => setShowFilters(!showFilters)}
                    className="md:hidden h-14 rounded-2xl border-border hover:text-white cursor-pointer"
                  >
                    <Filter className="w-5 h-5 me-2" />
                    {language === 'ar' ? 'تصفية' : 'Filtrer'}
                  </Button>

                  {/* Desktop filters */}
                  <div className="hidden md:flex gap-3 flex-1">
                      <Select value={city} onValueChange={setCity}>
                      <SelectTrigger className="!h-14 w-full rounded-2xl border-0 bg-secondary/50 flex items-center px-4">                        <SelectValue placeholder={t('home.search.city')} />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl">
                        {cities.map((c) => (
                          <SelectItem key={c.value} value={c.value} className="py-3">
                            {c.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="!h-14 w-full rounded-2xl border-0 bg-secondary/50 flex items-center px-4">                        <SelectValue placeholder={language === 'ar' ? 'نوع الخدمة' : 'Type de service'} />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl">
                        {categories.map((c) => (
                          <SelectItem key={c.value} value={c.value} className="py-3">
                            {c.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Clear filters */}
                  {hasActiveFilters && (
                    <Button 
                      variant="ghost" 
                      onClick={clearFilters}
                      className="h-14 rounded-2xl text-muted-foreground hover:text-destructive cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  )}
                </div>

                {/* Mobile filters panel */}
                {showFilters && (
                  <div className="md:hidden mt-4 pt-4 border-t border-border/50 flex flex-col gap-3 items-stretch animate-in slide-in-from-top-2">                    <Select value={city} onValueChange={setCity}>
                      <SelectTrigger className="h-14 rounded-2xl border-0 bg-secondary/50">
                        <SelectValue placeholder={t('home.search.city')} />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl">
                        {cities.map((c) => (
                          <SelectItem key={c.value} value={c.value} className="py-3">
                            {c.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger className="h-14 rounded-2xl border-0 bg-secondary/50">
                        <SelectValue placeholder={language === 'ar' ? 'نوع الخدمة' : 'Type de service'} />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl">
                        {categories.map((c) => (
                          <SelectItem key={c.value} value={c.value} className="py-3">
                            {c.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>

              {/* Results count */}
              <div className="mt-6 text-center">
                <p className="text-muted-foreground">
                  {language === 'ar' 
                    ? `${results.length} نتيجة`
                    : `${results.length} résultats`
                  }
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results section */}
        <section className="relative py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {results.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {results.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            ) : (
              /* No results state */
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-secondary mb-6">
                  <SearchX className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {t('search.noResults')}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {t('search.tryAgain')}
                </p>
                <Button 
                  onClick={clearFilters}
                  variant="outline"
                  className="rounded-2xl h-12 px-6 cursor-pointer"
                >
                  {language === 'ar' ? 'مسح الفلاتر' : 'Effacer les filtres'}
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Decorative elements */}
        <MoroccanStar className="fixed bottom-20 end-10 text-primary/10 w-16 h-16 animate-float pointer-events-none" />
      </main>

      <Footer />
    </div>
  )
}

export default function SearchPage() {
  return (
    <Providers>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
        </div>
      }>
        <SearchContent />
      </Suspense>
    </Providers>
  )
}
