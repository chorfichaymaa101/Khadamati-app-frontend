"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Providers } from '@/components/providers'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/lib/language-context'
import { useAuth } from '@/lib/auth-context'
import { mockServices } from '@/lib/mock-services'
import type { Service } from '@/components/service-card'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { ZelligeBackground, MoroccanStar, GeometricDivider } from '@/components/moroccan-patterns'
import { Plus, Edit2, Trash2, MapPin, Briefcase, FolderOpen } from 'lucide-react'

function DashboardContent() {
  const router = useRouter()
  const { t, dir, language } = useLanguage()
  const { isLoggedIn, user } = useAuth()
  
  const [userServices, setUserServices] = useState<Service[]>([])
  const [deleteServiceId, setDeleteServiceId] = useState<string | null>(null)

  useEffect(() => {
    // if (!isLoggedIn) {
    //   router.push('/login')
    //   return
    // }
    // In real app, fetch user's services from API
    // For demo, show first 3 services
    setUserServices(mockServices.slice(0, 3))
  }, [isLoggedIn, router])

  const handleDelete = (id: string) => {
    setUserServices(prev => prev.filter(s => s.id !== id))
    setDeleteServiceId(null)
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

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Welcome header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                  {t('dashboard.title')}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {language === 'ar' 
                    ? `مرحبا، ${user?.username || 'مستخدم'}`
                    : `Bonjour, ${user?.username || 'Utilisateur'}`
                  }
                </p>
              </div>
              <Link href="/add-service">
                <Button 
                  size="lg"
                  className="cursor-pointer h-14 px-8 rounded-2xl text-base font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-xl shadow-primary/30"
                >
                  <Plus className="w-5 h-5 me-2" />
                  {t('dashboard.addNew')}
                </Button>
              </Link>
            </div>

            <GeometricDivider />

            {/* Services list */}
            {userServices.length > 0 ? (
              <div className="space-y-4 md:space-y-6">
                {userServices.map((service) => (
                  <Card 
                    key={service.id}
                    className="group relative overflow-hidden rounded-3xl border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                        {/* Service info */}
                        <div className="flex-1">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg flex-shrink-0">
                              <Briefcase className="w-7 h-7 text-primary-foreground" />
                            </div>
                            <div>
                              <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                {service.name}
                              </h3>
                              <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                                <MapPin className="w-4 h-4" />
                                <span>{t(`city.${service.cityKey}`)}</span>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground line-clamp-2 leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3 md:flex-col md:mt-5">
                          <Link href={`/edit-service/${service.id}`} className="cursor-pointer flex-1 md:flex-none">
                            <Button 
                              variant="outline"
                              className="cursor-pointer w-full h-12 md:h-14 px-6 rounded-2xl text-base font-medium border-2 border-primary/30 hover:border-primary hover:bg-primary/5 hover:text-primary"
                            >
                              <Edit2 className="w-5 h-5 me-2" />
                              {t('dashboard.edit')}
                            </Button>
                          </Link>
                          <Button 
                            variant="outline"
                            onClick={() => setDeleteServiceId(service.id)}
                            className="cursor-pointer hover:text-primary flex-1 md:flex-none h-12 md:h-14 px-6 rounded-2xl text-base font-medium border-2 border-destructive/30 text-destructive hover:border-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="w-5 h-5 me-2" />
                            {t('dashboard.delete')}
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 end-4 px-3 py-1.5 rounded-xl bg-primary/10 text-primary text-sm font-medium">
                      {t(`category.${service.category}`)}
                    </div>

                    {/* Decorative corner */}
                    <div className="absolute bottom-0 end-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M100,0 L100,100 L0,100 Z" fill="currentColor" className="text-primary" />
                      </svg>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              /* Empty state */
              <Card className="rounded-3xl border-border/50 overflow-hidden">
                <div className="p-12 md:p-20 text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-secondary mb-6">
                    <FolderOpen className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {t('dashboard.noServices')}
                  </h3>
                  <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    {language === 'ar' 
                      ? 'ابدأ بإضافة خدمتك الأولى لتصل إلى العملاء في منطقتك'
                      : 'Commencez par ajouter votre premier service pour atteindre les clients de votre région'
                    }
                  </p>
                  <Link href="/add-service">
                    <Button 
                      size="lg"
                      className="cursor-pointer h-16 px-10 rounded-2xl text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-xl shadow-primary/30"
                    >
                      <Plus className="w-5 h-5 me-2" />
                      {t('dashboard.addNew')}
                    </Button>
                  </Link>
                </div>
              </Card>
            )}
          </div>
        </section>
      </main>

      <Footer />

      {/* Delete confirmation dialog */}
      <AlertDialog open={!!deleteServiceId} onOpenChange={() => setDeleteServiceId(null)}>
        <AlertDialogContent className="rounded-3xl" dir={dir}>

          <AlertDialogHeader>
            <AlertDialogTitle className={`text-xl ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
              {language === 'ar' ? 'تأكيد الحذف' : 'Confirmer la suppression'}
            </AlertDialogTitle>

            <AlertDialogDescription
              className={`text-base cursor-pointer ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
            >
              {t('dashboard.deleteConfirm')}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter
            className={`gap-3 flex ${dir === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <AlertDialogCancel
              className={`rounded-xl h-12 cursor-pointer dark:text-white hover:text-black hover:bg-beige ${
                dir === 'rtl' ? 'text-right' : 'text-left'
              }`}
            >
              {t('common.cancel')}
            </AlertDialogCancel>

          <AlertDialogAction
            onClick={() => deleteServiceId && handleDelete(deleteServiceId)}
            className={`rounded-xl h-12 bg-destructive hover:bg-destructive/90 cursor-pointer ${
              dir === 'rtl' ? 'text-right' : 'text-left'
            }`}
          >
            {t('dashboard.delete')}
          </AlertDialogAction>
          </AlertDialogFooter>

        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <Providers>
      <DashboardContent />
    </Providers>
  )
}
