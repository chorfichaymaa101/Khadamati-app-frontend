"use client"

import { use } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Providers } from '@/components/providers'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/lib/language-context'
import { getServiceById } from '@/lib/mock-services'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ZelligeBackground, MoroccanStar, GeometricDivider } from '@/components/moroccan-patterns'
import { Phone, MessageCircle, MapPin, ArrowRight, ArrowLeft, User, FileText } from 'lucide-react'

function ServiceDetailsContent({ id }: { id: string }) {
  const { t, dir, language } = useLanguage()
  const service = getServiceById(id)
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight

  if (!service) {
    notFound()
  }

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
    <div className="min-h-screen flex flex-col" dir={dir}>
      <Navbar />
      
      <main className="flex-1 relative">
        {/* Header section */}
        <section className="relative py-12 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
          <ZelligeBackground className="opacity-40" />
          
          {/* Decorative elements */}
          <MoroccanStar className="absolute top-20 end-[10%] text-primary/15 w-12 h-12 animate-float" />
          <MoroccanStar className="absolute bottom-10 start-[5%] text-accent/10 w-8 h-8 animate-float" style={{ animationDelay: '2s' }} />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back button */}
            <Link href="/search">
              <Button variant="ghost" className="mb-6 rounded-xl hover:bg-secondary gap-2 hover:text-black cursor-pointer">
                <ArrowIcon className="w-4 h-4 rotate-180 rtl:rotate-0" />
                {t('common.back')}
              </Button>
            </Link>

            {/* Service card */}
            <Card className="relative overflow-hidden rounded-[2rem] border-border/50 shadow-2xl">
              {/* Top gradient bar */}
              <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary" />
              
              <div className="p-8 md:p-12">
                {/* Category badge */}
                <div className="inline-flex px-4 py-2 rounded-2xl bg-primary/10 text-primary text-sm font-semibold mb-6">
                  {t(`category.${service.category}`)}
                </div>

                {/* Service name */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                  {service.name}
                </h1>

                <GeometricDivider />

                {/* Info grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Worker name */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {language === 'ar' ? 'مقدم الخدمة' : 'Prestataire'}
                      </p>
                      <p className="text-lg font-semibold text-foreground">
                        {service.workerName}
                      </p>
                    </div>
                  </div>

                  {/* City */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/50">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {t('service.city')}
                      </p>
                      <p className="text-lg font-semibold text-foreground">
                        {t(`city.${service.cityKey}`)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">
                      {t('service.description')}
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed p-6 rounded-2xl bg-secondary/30">
                    {service.description}
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleCall}
                    size="lg"
                    className="flex-1 h-16 rounded-2xl text-lg font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-xl shadow-primary/30 cursor-pointer"
                  >
                    <Phone className="w-6 h-6 me-3" />
                    {t('service.call')}
                  </Button>

                  <Button 
                    onClick={handleWhatsApp}
                    size="lg"
                    variant="outline"
                    className="flex-1 h-16 rounded-2xl text-lg font-semibold border-2 border-green-500/40 text-green-600 hover:text-green dark:text-green-400 hover:bg-green-500/10 hover:border-green-500  cursor-pointer"
                  >
                    <MessageCircle className="w-6 h-6 me-3" />
                    {t('service.whatsapp')}
                  </Button>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 end-0 w-32 h-32 opacity-5">
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

export default function ServiceDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  
  return (
    <Providers>
      <ServiceDetailsContent id={resolvedParams.id} />
    </Providers>
  )
}
