"use client"

import { use, useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, notFound } from 'next/navigation'
import { Providers } from '@/components/providers'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/lib/language-context'
import { useAuth } from '@/lib/auth-context'
import { getServiceById } from '@/lib/mock-services'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card } from '@/components/ui/card'
import { ZelligeBackground, MoroccanStar, GeometricDivider } from '@/components/moroccan-patterns'
import { ArrowRight, ArrowLeft, Check, Edit2 } from 'lucide-react'

function EditServiceContent({ id }: { id: string }) {
  const router = useRouter()
  const { t, dir, language } = useLanguage()
  const { isLoggedIn } = useAuth()
  
  const service = getServiceById(id)
  
  const [serviceName, setServiceName] = useState('')
  const [city, setCity] = useState('')
  const [phone, setPhone] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight

  useEffect(() => {
    // if (!isLoggedIn) {
    //   router.push('/login')
    //   return
    // }
    
    if (service) {
      setServiceName(service.name)
      setCity(service.cityKey)
      setPhone(service.phone)
      setDescription(service.description)
      setCategory(service.category)
    }
  }, [isLoggedIn, router, service])

  if (!service) {
    notFound()
  }

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

  const isFormValid = serviceName && city && phone && description && category

  const handleSave = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    router.push('/dashboard')
  }

  // if (!isLoggedIn) {
  //   return null
  // }

  return (
    <div className="min-h-screen flex flex-col" dir={dir}>
      <Navbar />
      
      <main className="flex-1 relative">
        {/* Header section */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
          <ZelligeBackground className="opacity-40" />
          
          {/* Decorative elements */}
          <MoroccanStar className="absolute top-20 end-[10%] text-primary/15 w-12 h-12 animate-float" />
          <MoroccanStar className="absolute bottom-10 start-[5%] text-accent/10 w-8 h-8 animate-float" style={{ animationDelay: '2s' }} />

          <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back button */}
            <Link href="/dashboard">
              <Button variant="ghost" className="cursor-pointer mb-6 rounded-xl hover:bg-secondary gap-2 hover:text-black">
                <ArrowIcon className="w-4 h-4 rotate-180 rtl:rotate-0" />
                {t('common.back')}
              </Button>
            </Link>

            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t('editService.title')}
              </h1>
              <GeometricDivider />
            </div>

            {/* Form card */}
            <Card className="relative overflow-hidden rounded-[2rem] border-border/50 shadow-2xl">
              {/* Top gradient bar */}
              <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary" />
              
              <div className="p-6 md:p-10 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Edit2 className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">
                    {language === 'ar' ? 'تعديل معلومات الخدمة' : 'Modifier les informations'}
                  </h2>
                </div>

                {/* Service name */}
                <div className="space-y-2">
                  <Label htmlFor="serviceName" className="text-base font-medium">
                    {t('addService.serviceName')}
                  </Label>
                  <Input
                    id="serviceName"
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)}
                    className="h-14 rounded-2xl text-base bg-secondary/50 border-0 focus:bg-secondary"
                  />
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label className="text-base font-medium">
                    {language === 'ar' ? 'نوع الخدمة' : 'Type de service'}
                  </Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="h-14 rounded-2xl text-base bg-secondary/50 border-0">
                      <SelectValue />
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

                {/* City */}
                <div className="space-y-2">
                  <Label className="text-base font-medium">
                    {t('addService.city')}
                  </Label>
                  <Select value={city} onValueChange={setCity}>
                    <SelectTrigger className="h-14 rounded-2xl text-base bg-secondary/50 border-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl">
                      {cities.map((c) => (
                        <SelectItem key={c.value} value={c.value} className="py-3">
                          {c.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-medium">
                    {t('addService.phone')}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-14 rounded-2xl text-base bg-secondary/50 border-0 focus:bg-secondary"
                    dir="ltr"
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-base font-medium">
                    {t('addService.description')} <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="min-h-[150px] rounded-2xl text-base bg-secondary/50 border-0 focus:bg-secondary resize-none"
                  />
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/dashboard" className="flex-1">
                    <Button 
                      variant="outline"
                      size="lg"
                      className="cursor-pointer w-full h-14 rounded-2xl text-base font-semibold border-2 hover:bg-beige hover:text-black dark:text-white"
                    >
                      {t('common.cancel')}
                    </Button>
                  </Link>
                  <Button 
                    onClick={handleSave}
                    disabled={!isFormValid || isLoading}
                    size="lg"
                    className="cursor-pointer flex-1 h-14 rounded-2xl text-base font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg shadow-primary/30 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
                    ) : (
                      <>
                        {t('editService.save')}
                        <Check className="w-5 h-5 ms-2" />
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 end-0 w-24 h-24 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M100,0 L100,100 L0,100 Z" fill="currentColor" className="text-primary" />
                </svg>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default function EditServicePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  
  return (
    <Providers>
      <EditServiceContent id={resolvedParams.id} />
    </Providers>
  )
}
