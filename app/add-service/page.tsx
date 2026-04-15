"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Providers } from '@/components/providers'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/lib/language-context'
import { useAuth } from '@/lib/auth-context'
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
import { ArrowRight, ArrowLeft, Check, Briefcase, User, Lock, Eye, EyeOff } from 'lucide-react'

function AddServiceContent() {
  const router = useRouter()
  const { t, dir, language } = useLanguage()
  const { isLoggedIn, login } = useAuth()
  
  const [step, setStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
  // Service form
  const [serviceName, setServiceName] = useState('')
  const [city, setCity] = useState('')
  const [phone, setPhone] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  
  // Account form
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight

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

  const isServiceFormValid = serviceName && city && phone && description && category
  const isAccountFormValid = username && password && confirmPassword && password === confirmPassword

  const handleContinue = () => {
    if (isLoggedIn) {
      // If already logged in, publish directly
      handlePublish()
    } else {
      setStep(2)
    }
  }

  const handlePublish = () => {
    // Create account if not logged in
    // if (!isLoggedIn) {
    //   login({
    //     id: Date.now().toString(),
    //     username,
    //     phone,
    //   })
    // }
    
    // Navigate to dashboard
    router.push('/dashboard')
  }

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
            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t('addService.title')}
              </h1>
              <GeometricDivider />
            </div>

            {/* Progress steps */}
            <div className="flex items-center justify-center gap-4 mb-10">
              {/* Step 1 */}
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg transition-all ${
                  step >= 1 
                    ? 'bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30' 
                    : 'bg-secondary text-muted-foreground'
                }`}>
                  {step > 1 ? <Check className="w-6 h-6" /> : '1'}
                </div>
                <span className={`hidden sm:block font-medium ${step >= 1 ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {t('addService.step1')}
                </span>
              </div>

              {/* Connector */}
              <div className={`w-12 md:w-24 h-1 rounded-full transition-all ${
                step > 1 ? 'bg-gradient-to-r from-primary to-accent' : 'bg-border'
              }`} />

              {/* Step 2 */}
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg transition-all ${
                  step >= 2 
                    ? 'bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30' 
                    : 'bg-secondary text-muted-foreground'
                }`}>
                  2
                </div>
                <span className={`hidden sm:block font-medium ${step >= 2 ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {t('addService.step2')}
                </span>
              </div>
            </div>

            {/* Form card */}
            <Card className="relative overflow-hidden rounded-[2rem] border-border/50 shadow-2xl">
              {/* Top gradient bar */}
              <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary" />
              
              <div className="p-6 md:p-10">
                {step === 1 ? (
                  /* Step 1: Service Form */
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-xl font-bold text-foreground">
                        {t('addService.step1')}
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
                        placeholder={t('addService.serviceNamePlaceholder')}
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
                          <SelectValue placeholder={language === 'ar' ? 'اختر نوع الخدمة' : 'Choisir le type'} />
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
                        placeholder={t('addService.phonePlaceholder')}
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
                        placeholder={t('addService.descriptionPlaceholder')}
                        className="min-h-[150px] rounded-2xl text-base bg-secondary/50 border-0 focus:bg-secondary resize-none"
                      />
                    </div>

                    {/* Continue button */}
                    <Button 
                      onClick={handleContinue}
                      disabled={!isServiceFormValid}
                      size="lg"
                      className="cursor-pointer w-full h-16 rounded-2xl text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-xl shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoggedIn ? t('addService.publish') : t('addService.continue')}
                      <ArrowIcon className="w-5 h-5 ms-2" />
                    </Button>
                  </div>
                ) : (
                  /* Step 2: Account Creation */
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <User className="w-6 h-6 text-accent" />
                      </div>
                      <h2 className="text-xl font-bold text-foreground">
                        {t('addService.step2')}
                      </h2>
                    </div>

                    {/* Username */}
                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-base font-medium">
                        {t('addService.username')}
                      </Label>
                      <Input
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="h-14 rounded-2xl text-base bg-secondary/50 border-0 focus:bg-secondary"
                      />
                    </div>

                    {/* Phone (pre-filled) */}
                    <div className="space-y-2">
                      <Label className="text-base font-medium">
                        {t('addService.phone')}
                      </Label>
                      <Input
                        value={phone}
                        disabled
                        className="h-14 rounded-2xl text-base bg-secondary/30 border-0"
                        dir="ltr"
                      />
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-base font-medium">
                        {t('addService.password')}
                      </Label>
                      <div className="relative">
                        <Lock className="absolute top-1/2 -translate-y-1/2 start-4 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="h-14 ps-12 pe-12 rounded-2xl text-base bg-secondary/50 border-0 focus:bg-secondary"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute top-1/2 -translate-y-1/2 end-4 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-base font-medium">
                        {t('addService.confirmPassword')}
                      </Label>
                      <div className="relative">
                        <Lock className="absolute top-1/2 -translate-y-1/2 start-4 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="h-14 ps-12 pe-12 rounded-2xl text-base bg-secondary/50 border-0 focus:bg-secondary"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute top-1/2 -translate-y-1/2 end-4 text-muted-foreground hover:text-foreground"
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                      {confirmPassword && password !== confirmPassword && (
                        <p className="text-sm text-destructive">
                          {language === 'ar' ? 'كلمات المرور غير متطابقة' : 'Les mots de passe ne correspondent pas'}
                        </p>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button 
                        onClick={() => setStep(1)}
                        variant="outline"
                        size="lg"
                        className="cursor-pointer flex-1 h-14 rounded-2xl text-base font-semibold border-2 hover:text-white"
                      >
                        <ArrowIcon className="w-5 h-5 me-2 rotate-180 rtl:rotate-0" />
                        {t('common.back')}
                      </Button>
                      <Button 
                        onClick={handlePublish}
                        disabled={!isAccountFormValid}
                        size="lg"
                        className="cursor-pointer flex-1 h-14 rounded-2xl text-base font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg shadow-primary/30 disabled:opacity-50"
                      >
                        {t('addService.publish')}
                        <Check className="w-5 h-5 ms-2" />
                      </Button>
                    </div>
                  </div>
                )}
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

export default function AddServicePage() {
  return (
    <Providers>
      <AddServiceContent />
    </Providers>
  )
}
