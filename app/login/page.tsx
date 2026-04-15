"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Providers } from '@/components/providers'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/lib/language-context'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { ZelligeBackground, MoroccanStar, GeometricDivider } from '@/components/moroccan-patterns'
import { User, Lock, Eye, EyeOff, ArrowRight, ArrowLeft, Plus } from 'lucide-react'

function LoginContent() {
  const router = useRouter()
  const { t, dir, language } = useLanguage()
  const { login } = useAuth()
  
  const [phoneOrUsername, setPhoneOrUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate login
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    login({
      id: Date.now().toString(),
      username: phoneOrUsername,
      phone: phoneOrUsername,
    })
    
    router.push('/dashboard')
  }

  const isFormValid = phoneOrUsername && password

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
        <MoroccanStar className="absolute top-[40%] start-[5%] text-primary/8 w-8 h-8 animate-float" style={{ animationDelay: '1s' }} />

        <div className="relative w-full max-w-md mx-auto px-4 sm:px-6 py-12">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-block mb-6">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary via-primary to-accent shadow-2xl shadow-primary/40 flex items-center justify-center mx-auto">
                <span className="text-primary-foreground font-bold text-4xl">خ</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t('login.title')}
            </h1>
            <GeometricDivider />
          </div>

          {/* Login card */}
          <Card className="relative overflow-hidden rounded-[2rem] border-border/50 shadow-2xl">
            {/* Top gradient bar */}
            <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary" />
            
            <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-6">
              {/* Phone or username */}
              <div className="space-y-2">
                <Label htmlFor="phoneOrUsername" className="text-base font-medium">
                  {t('login.phoneOrUsername')}
                </Label>
                <div className="relative">
                  <User className="absolute top-1/2 -translate-y-1/2 start-4 w-5 h-5 text-muted-foreground" />
                <Input
                  id="phoneOrUsername"
                  value={phoneOrUsername}
                  onChange={(e) => setPhoneOrUsername(e.target.value)}
                  placeholder={language === 'ar' ? 'رقم الهاتف أو اسم المستخدم' : 'Téléphone ou nom d’utilisateur'}
                  className="h-14 ps-12 rounded-2xl text-base bg-secondary/50 border-0 focus:bg-secondary"
                  autoComplete="username"
                />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-base font-medium">
                  {t('login.password')}
                </Label>
                <div className="relative">
                  <Lock className="absolute top-1/2 -translate-y-1/2 start-4 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={language === 'ar' ? 'كلمة المرور' : 'Mot de passe'}
                  className="h-14 ps-12 pe-12 rounded-2xl text-base bg-secondary/50 border-0 focus:bg-secondary"
                  autoComplete="current-password"
                />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer absolute top-1/2 -translate-y-1/2 end-4 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Forgot password link */}
              <div className="text-end">
                <Link 
                  href="/forgot-password"
                  className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  {t('login.forgotPassword')}
                </Link>
              </div>

              {/* Submit button */}
              <Button 
                type="submit"
                disabled={!isFormValid || isLoading}
                size="lg"
                className="cursor-pointer w-full h-16 rounded-2xl text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-xl shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-6 h-6 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
                ) : (
                  <>
                    {t('login.submit')}
                    <ArrowIcon className="w-5 h-5 ms-2" />
                  </>
                )}
              </Button>

              {/* Divider */}
              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border/50" />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-card text-sm text-muted-foreground">
                    {language === 'ar' ? 'أو' : 'ou'}
                  </span>
                </div>
              </div>

              {/* Create account */}
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  {t('login.noAccount')}
                </p>
                <Link href="/add-service">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="cursor-pointer w-full h-14 rounded-2xl text-base font-semibold border-2 border-accent/30 hover:border-accent dark:text-white hover:text-black hover:bg-accent/5"
                  >
                    <Plus className="w-5 h-5 me-2" />
                    {t('login.createAccount')}
                  </Button>
                </Link>
              </div>
            </form>

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

export default function LoginPage() {
  return (
    <Providers>
      <LoginContent />
    </Providers>
  )
}
