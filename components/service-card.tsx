"use client"

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MoroccanStar } from '@/components/moroccan-patterns'
import { Phone, MessageCircle, MapPin, ArrowLeft, ArrowRight } from 'lucide-react'

export interface Service {
  id: string
  name: string
  workerName: string
  city: string
  cityKey: string
  phone: string
  description: string
  category: string
}

interface ServiceCardProps {
  service: Service
  showDetails?: boolean
}

export function ServiceCard({ service, showDetails = true }: ServiceCardProps) {
  const { t, dir, language } = useLanguage()
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight

  const handleCall = () => {
    window.location.href = `tel:${service.phone}`
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      language === 'ar' 
        ? `مرحبا، أريد الاستفسار عن خدمة ${service.name}`
        : `Bonjour, je souhaite me renseigner sur le service ${service.name}`
    )
    window.open(`https://wa.me/212${service.phone.replace(/^0/, '')}?text=${message}`, '_blank')
  }

  return (
    <Card className="group relative overflow-hidden rounded-3xl border-2 border-border/50 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl" dir={dir}>
      {/* Zellige pattern background on hover */}
      <div className="absolute inset-0 zellige-pattern opacity-0 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none" />
      
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300  pointer-events-none" />
      
      <div className="relative p-6 md:p-8 pb-0 md:pb-0">
        {/* Header with decorative star */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 relative">
            {/* Decorative star next to name */}
            <MoroccanStar className="absolute -start-2 top-1 text-primary/30 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity  pointer-events-none" />
            
            {/* Service name */}
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {service.name}
            </h3>
            
            {/* Worker name */}
            <p className="text-base md:text-lg text-muted-foreground">
              {service.workerName}
            </p>
          </div>

          {/* Category badge with Moroccan styling */}
          <div className="relative">
            <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary/15 to-accent/10 text-primary text-sm font-semibold border border-primary/20 ml-12">
              {t(`category.${service.category}`)}
            </div>
            <MoroccanStar className="absolute -top-1 -end-1 text-accent w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity  pointer-events-none" />
          </div>
        </div>

        {/* City with Moroccan icon styling */}
        <div className="flex items-center gap-3 text-muted-foreground mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center border border-accent/20">
            <MapPin className="w-5 h-5 text-accent" />
          </div>
          <span className="text-base font-medium">{t(`city.${service.cityKey}`)}</span>
        </div>

        {/* Description preview */}
        <p className="text-muted-foreground mb-6 line-clamp-2 leading-relaxed">
          {service.description}
        </p>

        {/* Action buttons with enhanced styling */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Call button */}
          <Button 
            onClick={handleCall}
            className=" cursor-pointer flex-1 h-14 rounded-2xl text-base font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/25 border border-primary-foreground/10"
          >
            <Phone className="w-5 h-5 me-2" />
            {t('service.call')}
          </Button>

          {/* WhatsApp button */}
          <Button 
            onClick={handleWhatsApp}
            variant="outline"
            className="cursor-pointer flex-1 h-14 rounded-2xl text-base font-semibold border-2 border-green-500/40 text-green-600 dark:text-green-400 hover:bg-green-500/10 hover:border-green-500 hover:text-green"
          >
            <MessageCircle className="w-5 h-5 me-2" />
            {t('service.whatsapp')}
          </Button>

         </div>
         {/* Details button */}
          {showDetails && (
            <Link
              href={`/service/${service.id}`}
              className="flex-1 sm:flex-none block cursor-pointer mt-3"
            >
              <Button
                variant="ghost"
                className="w-full h-14 rounded-2xl text-base font-semibold hover:bg-primary/10 hover:text-primary group/btn cursor-pointer"
              >
                {t('service.details')}
                <ArrowIcon className="w-4 h-4 ms-2 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform " />
              </Button>
            </Link>
            )}
        </div>

      {/* Decorative Moroccan corner pattern */}
      <div className="absolute bottom-0 end-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M100,0 L100,100 L0,100 Z" fill="currentColor" className="text-primary" />
          <path d="M100,30 L100,100 L30,100 Z" fill="currentColor" className="text-accent" opacity="0.5" />
        </svg>
      </div>
      
      {/* Top corner accent */}
      <div className="absolute top-0 start-0 w-16 h-16 opacity-5 group-hover:opacity-15 transition-opacity">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M0,0 L100,0 L0,100 Z" fill="currentColor" className="text-accent" />
        </svg>
      </div>
    </Card>
  )
}
