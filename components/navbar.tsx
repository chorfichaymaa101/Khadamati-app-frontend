"use client"

import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '@/lib/language-context'
import { useAuth } from '@/lib/auth-context'
import { useTheme } from '@/lib/theme-context'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MoroccanStar } from '@/components/moroccan-patterns'
import { Menu, X, Sun, Moon, Globe, Home, Search, Plus, User, LogOut } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t, dir } = useLanguage()
  const { isLoggedIn, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-primary/20" dir={dir}>
      {/* Glass background with zellige hint */}
      <div className="absolute inset-0 glass" />
      <div className="absolute inset-0 zellige-pattern opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with Moroccan styling */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow border border-primary-foreground/10">
                <span className="text-primary-foreground font-bold text-lg md:text-xl">خ</span>
              </div>
              {/* Small decorative star */}
              <MoroccanStar className="absolute -top-1 -end-1 text-accent w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-foreground hidden sm:block">
              {t('home.hero.title')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/">
              <Button variant="ghost" className="cursor-pointer text-foreground hover:bg-primary/10 hover:text-primary gap-2 rounded-xl">
                <Home className="w-4 h-4" />
                {t('nav.home')}
              </Button>
            </Link>
            <Link href="/search">
              <Button variant="ghost" className="cursor-pointer text-foreground hover:bg-primary/10 hover:text-primary gap-2 rounded-xl">
                <Search className="w-4 h-4" />
                {t('nav.search')}
              </Button>
            </Link>
            <Link href="/add-service">
              <Button variant="ghost" className="cursor-pointer text-foreground hover:bg-accent/10 hover:text-accent gap-2 rounded-xl">
                <Plus className="w-4 h-4" />
                {t('nav.addService')}
              </Button>
            </Link>
            {isLoggedIn && (
              <Link href="/dashboard">
                <Button variant="ghost" className="cursor-pointer text-foreground hover:bg-primary/10 hover:text-primary gap-2 rounded-xl">
                  <User className="w-4 h-4" />
                  {t('nav.myServices')}
                </Button>
              </Link>
            )}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Language Switcher with Moroccan styling */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="cursor-pointer rounded-xl hover:bg-primary/10  hover:text-primary+">
                  <Globe className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[140px] rounded-xl border-2 border-primary/20">
             <DropdownMenuItem 
              onClick={() => setLanguage('ar')}
              className={`rounded-lg mb-1 cursor-pointer 
                ${language === 'ar' ? ' text-primary' : ''}`}
            >
                  <span className="flex items-center gap-2">
                    <span className="text-lg">🇲🇦</span>
                    العربية
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage('fr')}
                  className={`rounded-lg cursor-pointer 
                    ${language === 'fr' ? ' text-primary' : ''}`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-lg">🇫🇷</span>
                    Français
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle with Moroccan accent */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="rounded-xl hover:bg-accent/10 cursor-pointer  hover:text-primary"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5 text-amber-400" />
              )}
            </Button>

            {/* Auth Buttons (Desktop) */}
            <div className="hidden md:flex items-center gap-2">
              {isLoggedIn ? (
                <Button 
                  variant="ghost" 
                  onClick={logout}
                  className="cursor-pointer gap-2 text-destructive hover:text-destructive hover:bg-destructive/10 rounded-xl"
                >
                  <LogOut className="w-4 h-4" />
                  {t('nav.logout')}
                </Button>
              ) : (
                <Link href="/login">
                  <Button variant="outline" className="cursor-pointer rounded-xl border-2 border-primary/30 hover:border-primary  hover:text-primary hover:bg-primary/5">
                    {t('nav.login')}
                  </Button>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="cursor-pointer md:hidden rounded-xl hover:bg-primary/10  hover:text-primary"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu with Moroccan styling */}
        {isOpen && (
          <div className="md:hidden py-4 border-t-2 border-primary/20 animate-in slide-in-from-top-2 duration-200 relative">
            {/* Zellige pattern in mobile menu */}
            <div className="absolute inset-0 zellige-pattern opacity-5" />
            
            <div className="relative flex flex-col gap-2">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="cursor-pointer w-full justify-start gap-3 h-12 text-base rounded-xl hover:bg-primary/10 hover:text-black">
                  <Home className="w-5 h-5" />
                  {t('nav.home')}
                </Button>
              </Link>
              <Link href="/search" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="cursor-pointer w-full justify-start gap-3 h-12 text-base rounded-xl hover:bg-primary/10 hover:text-black">
                  <Search className="w-5 h-5" />
                  {t('nav.search')}
                </Button>
              </Link>
              <Link href="/add-service" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="cursor-pointer w-full justify-start gap-3 h-12 text-base rounded-xl hover:bg-accent/10 hover:text-black">
                  <Plus className="w-5 h-5" />
                  {t('nav.addService')}
                </Button>
              </Link>
              {isLoggedIn && (
                <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="cursor-pointer w-full justify-start gap-3 h-12 text-base rounded-xl hover:bg-primary/10 hover:text-black">
                    <User className="w-5 h-5" />
                    {t('nav.myServices')}
                  </Button>
                </Link>
              )}
              <div className="border-t-2 border-primary/20 pt-2 mt-2">
                {isLoggedIn ? (
                  <Button 
                    variant="ghost" 
                    onClick={() => {
                      logout()
                      setIsOpen(false)
                    }}
                    className="cursor-pointer w-full justify-start gap-3 h-12 text-base text-destructive hover:text-destructive rounded-xl hover:text-black"
                  >
                    <LogOut className="w-5 h-5" />
                    {t('nav.logout')}
                  </Button>
                ) : (
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="cursor-pointer w-full justify-start gap-3 h-12 text-base rounded-xl hover:bg-primary/10 hover:text-black">
                      <User className="w-5 h-5" />
                      {t('nav.login')}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Bottom decorative border line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </nav>
  )
}
