"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Providers } from '@/components/providers'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { ZelligeBackground, MoroccanStar, GeometricDivider } from '@/components/moroccan-patterns'
import { Phone, Lock, Eye, EyeOff, ArrowRight, ArrowLeft, Check, KeyRound } from 'lucide-react'

function ForgotPasswordContent() {
  const router = useRouter()
  const { t, dir, language } = useLanguage()
  
  const [step, setStep] = useState<'phone' | 'otp' | 'reset'>('phone')
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    setStep('otp')
  }

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    setStep('reset')
  }

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    router.push('/login')
  }

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return
    
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
    
    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`)
      nextInput?.focus()
    }
  }

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`)
      prevInput?.focus()
    }
  }

  const isOtpComplete = otp.every(digit => digit !== '')
  const isPasswordValid = newPassword && confirmPassword && newPassword === confirmPassword

  return (
    <div className="min-h-screen flex flex-col" dir={dir}>
      <Navbar />
      
      <main className="flex-1 relative flex items-center">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
        <ZelligeBackground className="opacity-40" />
        
        {/* Decorative elements */}
        <MoroccanStar className="absolute top-20 end-[15%] text-primary/15 w-16 h-16 animate-float" />
        <MoroccanStar className="absolute bottom-32 start-[10%] text-accent/10 w-10 h-10 animate-float" style={{ animationDelay: '2s' }} />

        <div className="relative w-full max-w-md mx-auto px-4 sm:px-6 py-12">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary via-primary to-accent shadow-2xl shadow-primary/40 flex items-center justify-center mx-auto">
                <KeyRound className="w-10 h-10 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t('forgot.title')}
            </h1>
            <GeometricDivider />
          </div>

          {/* Progress indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className={`w-3 h-3 rounded-full transition-all ${step === 'phone' ? 'bg-primary scale-125' : 'bg-primary/30'}`} />
            <div className={`w-8 h-0.5 ${step !== 'phone' ? 'bg-primary' : 'bg-border'}`} />
            <div className={`w-3 h-3 rounded-full transition-all ${step === 'otp' ? 'bg-primary scale-125' : step === 'reset' ? 'bg-primary/30' : 'bg-border'}`} />
            <div className={`w-8 h-0.5 ${step === 'reset' ? 'bg-primary' : 'bg-border'}`} />
            <div className={`w-3 h-3 rounded-full transition-all ${step === 'reset' ? 'bg-primary scale-125' : 'bg-border'}`} />
          </div>

          {/* Card */}
          <Card className="relative overflow-hidden rounded-[2rem] border-border/50 shadow-2xl">
            {/* Top gradient bar */}
            <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary" />
            
            <div className="p-6 md:p-10">
              {step === 'phone' && (
                <form onSubmit={handleSendOtp} className="space-y-6">
                  <p className="text-center text-muted-foreground mb-6">
                    {language === 'ar' 
                      ? 'أدخل رقم هاتفك وسنرسل لك رمز التحقق'
                      : 'Entrez votre numéro de téléphone et nous vous enverrons un code de vérification'
                    }
                  </p>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base font-medium">
                      {t('forgot.phone')}
                    </Label>
                    <div className="relative">
                      <Phone className="absolute top-1/2 -translate-y-1/2 start-4 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="06XXXXXXXX"
                        className="h-14 ps-12 rounded-2xl text-base bg-secondary/50 border-0 focus:bg-secondary"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    disabled={!phone || isLoading}
                    size="lg"
                    className="cursor-pointer w-full h-16 rounded-2xl text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-xl shadow-primary/30 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
                    ) : (
                      <>
                        {t('forgot.sendOtp')}
                        <ArrowIcon className="w-5 h-5 ms-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}

              {step === 'otp' && (
                <form onSubmit={handleVerifyOtp} className="space-y-6">
                  <p className="text-center text-muted-foreground mb-6">
                    {language === 'ar' 
                      ? `تم إرسال رمز التحقق إلى ${phone}`
                      : `Code envoyé à ${phone}`
                    }
                  </p>

                  <div className="space-y-2">
                    <Label className="text-base font-medium text-center block">
                      {t('forgot.enterOtp')}
                    </Label>
                    <div className="flex justify-center gap-2 md:gap-3" dir="ltr">
                      {otp.map((digit, index) => (
                        <Input
                          key={index}
                          id={`otp-${index}`}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleOtpChange(index, e.target.value)}
                          onKeyDown={(e) => handleOtpKeyDown(index, e)}
                          className="w-12 h-14 md:w-14 md:h-16 text-center text-xl md:text-2xl font-bold rounded-2xl bg-secondary/50 border-0 focus:bg-secondary focus:ring-2 focus:ring-primary"
                        />
                      ))}
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    disabled={!isOtpComplete || isLoading}
                    size="lg"
                    className="cursor-pointer w-full h-16 rounded-2xl text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-xl shadow-primary/30 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
                    ) : (
                      <>
                        {language === 'ar' ? 'تحقق' : 'Vérifier'}
                        <Check className="w-5 h-5 ms-2" />
                      </>
                    )}
                  </Button>

                  <button
                    type="button"
                    onClick={() => setStep('phone')}
                    className="cursor-pointer w-full text-center text-sm text-primary hover:text-primary/80 font-medium"
                  >
                    {language === 'ar' ? 'تغيير رقم الهاتف' : 'Changer le numéro'}
                  </button>
                </form>
              )}

              {step === 'reset' && (
                <form onSubmit={handleResetPassword} className="space-y-6">
                  <p className="text-center text-muted-foreground mb-6">
                    {language === 'ar' 
                      ? 'أدخل كلمة المرور الجديدة'
                      : 'Entrez votre nouveau mot de passe'
                    }
                  </p>

                  <div className="space-y-2">
                    <Label htmlFor="newPassword" className="text-base font-medium">
                      {t('forgot.newPassword')}
                    </Label>
                    <div className="relative">
                      <Lock className="absolute top-1/2 -translate-y-1/2 start-4 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="newPassword"
                        type={showPassword ? 'text' : 'password'}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
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

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-base font-medium">
                      {t('forgot.confirmPassword')}
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
                        className="cursor-pointer absolute top-1/2 -translate-y-1/2 end-4 text-muted-foreground hover:text-foreground"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {confirmPassword && newPassword !== confirmPassword && (
                      <p className="text-sm text-destructive">
                        {language === 'ar' ? 'كلمات المرور غير متطابقة' : 'Les mots de passe ne correspondent pas'}
                      </p>
                    )}
                  </div>

                  <Button 
                    type="submit"
                    disabled={!isPasswordValid || isLoading}
                    size="lg"
                    className="cursor-pointer w-full h-16 rounded-2xl text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-xl shadow-primary/30 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
                    ) : (
                      <>
                        {t('forgot.resetPassword')}
                        <Check className="w-5 h-5 ms-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}

              {/* Back to login */}
              <div className="mt-6 text-center">
                <Link 
                  href="/login"
                  className="text-sm text-muted-foreground hover:text-primary font-medium transition-colors inline-flex items-center gap-2"
                >
                  <ArrowIcon className="w-4 h-4 rotate-180 rtl:rotate-0" />
                  {t('forgot.backToLogin')}
                </Link>
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
      </main>

      <Footer />
    </div>
  )
}

export default function ForgotPasswordPage() {
  return (
    <Providers>
      <ForgotPasswordContent />
    </Providers>
  )
}
