"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

type Language = 'ar' | 'fr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: 'rtl' | 'ltr'
}

const translations = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.search': 'البحث',
    'nav.addService': 'أضف خدمتك',
    'nav.myServices': 'خدماتي',
    'nav.login': 'تسجيل الدخول',
    'nav.logout': 'تسجيل الخروج',
    
    // Home
    'home.hero.title': 'خدماتي',
    'home.hero.subtitle': 'وجهتك للخدمات المحلية في المغرب',
    'home.hero.description': 'ابحث عن أفضل الحرفيين ومقدمي الخدمات بالقرب منك',
    'home.search.placeholder': 'ابحث عن خدمة...',
    'home.search.city': 'اختر المدينة',
    'home.search.button': 'ابحث',
    'home.cta.findService': 'ابحث عن خدمة',
    'home.cta.addService': 'أضف خدمتك',
    'home.categories.title': 'الخدمات الشائعة',
    'home.howItWorks.title': 'كيف يعمل؟',
    'home.howItWorks.step1.title': 'ابحث',
    'home.howItWorks.step1.desc': 'ابحث عن الخدمة التي تحتاجها',
    'home.howItWorks.step2.title': 'اختر',
    'home.howItWorks.step2.desc': 'اختر مقدم الخدمة المناسب',
    'home.howItWorks.step3.title': 'تواصل',
    'home.howItWorks.step3.desc': 'تواصل مباشرة عبر الهاتف أو واتساب',
    
    // Categories
    'category.plumber': 'سباك',
    'category.electrician': 'كهربائي',
    'category.carpenter': 'نجار',
    'category.painter': 'دهان',
    'category.cleaner': 'تنظيف',
    'category.cook': 'طباخ',
    'category.driver': 'سائق',
    'category.mechanic': 'ميكانيكي',
    
    // Cities
    'city.casablanca': 'الدار البيضاء',
    'city.rabat': 'الرباط',
    'city.marrakech': 'مراكش',
    'city.fes': 'فاس',
    'city.tangier': 'طنجة',
    'city.agadir': 'أكادير',
    'city.meknes': 'مكناس',
    'city.oujda': 'وجدة',
    
    // Search
    'search.title': 'نتائج البحث',
    'search.noResults': 'لم يتم العثور على نتائج',
    'search.tryAgain': 'جرب البحث بكلمات مختلفة',
    
    // Service Card
    'service.call': 'اتصل',
    'service.whatsapp': 'واتساب',
    'service.details': 'التفاصيل',
    'service.city': 'المدينة',
    'service.description': 'الوصف',
    
    // Add Service
    'addService.title': 'أضف خدمتك',
    'addService.step1': 'معلومات الخدمة',
    'addService.step2': 'إنشاء حساب',
    'addService.serviceName': 'اسم الخدمة',
    'addService.serviceNamePlaceholder': 'مثال: سباك منازل',
    'addService.phone': 'رقم الهاتف',
    'addService.phonePlaceholder': '06XXXXXXXX',
    'addService.city': 'المدينة',
    'addService.description': 'وصف الخدمة',
    'addService.descriptionPlaceholder': 'اكتب وصفاً مفصلاً لخدمتك...',
    'addService.continue': 'متابعة',
    'addService.publish': 'نشر الخدمة',
    'addService.username': 'اسم المستخدم',
    'addService.password': 'كلمة المرور',
    'addService.confirmPassword': 'تأكيد كلمة المرور',
    
    // Login
    'login.title': 'تسجيل الدخول',
    'login.phoneOrUsername': 'رقم الهاتف أو اسم المستخدم',
    'login.password': 'كلمة المرور',
    'login.forgotPassword': 'نسيت كلمة المرور؟',
    'login.submit': 'دخول',
    'login.noAccount': 'ليس لديك حساب؟',
    'login.createAccount': 'أضف خدمتك الآن',
    
    // Forgot Password
    'forgot.title': 'استعادة كلمة المرور',
    'forgot.phone': 'رقم الهاتف',
    'forgot.sendOtp': 'إرسال رمز التحقق',
    'forgot.enterOtp': 'أدخل رمز التحقق',
    'forgot.newPassword': 'كلمة المرور الجديدة',
    'forgot.confirmPassword': 'تأكيد كلمة المرور',
    'forgot.resetPassword': 'تغيير كلمة المرور',
    'forgot.backToLogin': 'العودة لتسجيل الدخول',
    
    // Dashboard
    'dashboard.title': 'خدماتي',
    'dashboard.addNew': 'إضافة خدمة جديدة',
    'dashboard.edit': 'تعديل',
    'dashboard.delete': 'حذف',
    'dashboard.noServices': 'لم تضف أي خدمات بعد',
    'dashboard.deleteConfirm': 'هل أنت متأكد من حذف هذه الخدمة؟',
    
    // Edit Service
    'editService.title': 'تعديل الخدمة',
    'editService.save': 'حفظ التعديلات',
    
    // Common
    'common.loading': 'جاري التحميل...',
    'common.error': 'حدث خطأ',
    'common.success': 'تم بنجاح',
    'common.cancel': 'إلغاء',
    'common.confirm': 'تأكيد',
    'common.back': 'رجوع',
    'common.next': 'التالي',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.madeWith': 'صنع بكل حب في المغرب',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.search': 'Rechercher',
    'nav.addService': 'Ajouter Service',
    'nav.myServices': 'Mes Services',
    'nav.login': 'Connexion',
    'nav.logout': 'Déconnexion',
    
    // Home
    'home.hero.title': 'Khadamati',
    'home.hero.subtitle': 'Votre destination pour les services locaux au Maroc',
    'home.hero.description': 'Trouvez les meilleurs artisans et prestataires près de chez vous',
    'home.search.placeholder': 'Rechercher un service...',
    'home.search.city': 'Choisir la ville',
    'home.search.button': 'Rechercher',
    'home.cta.findService': 'Trouver un service',
    'home.cta.addService': 'Ajouter votre service',
    'home.categories.title': 'Services populaires',
    'home.howItWorks.title': 'Comment ça marche?',
    'home.howItWorks.step1.title': 'Recherchez',
    'home.howItWorks.step1.desc': 'Trouvez le service dont vous avez besoin',
    'home.howItWorks.step2.title': 'Choisissez',
    'home.howItWorks.step2.desc': 'Sélectionnez le prestataire idéal',
    'home.howItWorks.step3.title': 'Contactez',
    'home.howItWorks.step3.desc': 'Contactez directement par téléphone ou WhatsApp',
    
    // Categories
    'category.plumber': 'Plombier',
    'category.electrician': 'Électricien',
    'category.carpenter': 'Menuisier',
    'category.painter': 'Peintre',
    'category.cleaner': 'Nettoyage',
    'category.cook': 'Cuisinier',
    'category.driver': 'Chauffeur',
    'category.mechanic': 'Mécanicien',
    
    // Cities
    'city.casablanca': 'Casablanca',
    'city.rabat': 'Rabat',
    'city.marrakech': 'Marrakech',
    'city.fes': 'Fès',
    'city.tangier': 'Tanger',
    'city.agadir': 'Agadir',
    'city.meknes': 'Meknès',
    'city.oujda': 'Oujda',
    
    // Search
    'search.title': 'Résultats de recherche',
    'search.noResults': 'Aucun résultat trouvé',
    'search.tryAgain': 'Essayez avec d\'autres mots-clés',
    
    // Service Card
    'service.call': 'Appeler',
    'service.whatsapp': 'WhatsApp',
    'service.details': 'Détails',
    'service.city': 'Ville',
    'service.description': 'Description',
    
    // Add Service
    'addService.title': 'Ajouter votre service',
    'addService.step1': 'Informations du service',
    'addService.step2': 'Créer un compte',
    'addService.serviceName': 'Nom du service',
    'addService.serviceNamePlaceholder': 'Ex: Plombier à domicile',
    'addService.phone': 'Numéro de téléphone',
    'addService.phonePlaceholder': '06XXXXXXXX',
    'addService.city': 'Ville',
    'addService.description': 'Description du service',
    'addService.descriptionPlaceholder': 'Décrivez votre service en détail...',
    'addService.continue': 'Continuer',
    'addService.publish': 'Publier le service',
    'addService.username': 'Nom d\'utilisateur',
    'addService.password': 'Mot de passe',
    'addService.confirmPassword': 'Confirmer le mot de passe',
    
    // Login
    'login.title': 'Connexion',
    'login.phoneOrUsername': 'Téléphone ou nom d\'utilisateur',
    'login.password': 'Mot de passe',
    'login.forgotPassword': 'Mot de passe oublié?',
    'login.submit': 'Se connecter',
    'login.noAccount': 'Pas de compte?',
    'login.createAccount': 'Ajoutez votre service maintenant',
    
    // Forgot Password
    'forgot.title': 'Récupération du mot de passe',
    'forgot.phone': 'Numéro de téléphone',
    'forgot.sendOtp': 'Envoyer le code',
    'forgot.enterOtp': 'Entrez le code de vérification',
    'forgot.newPassword': 'Nouveau mot de passe',
    'forgot.confirmPassword': 'Confirmer le mot de passe',
    'forgot.resetPassword': 'Changer le mot de passe',
    'forgot.backToLogin': 'Retour à la connexion',
    
    // Dashboard
    'dashboard.title': 'Mes Services',
    'dashboard.addNew': 'Ajouter un nouveau service',
    'dashboard.edit': 'Modifier',
    'dashboard.delete': 'Supprimer',
    'dashboard.noServices': 'Vous n\'avez pas encore ajouté de services',
    'dashboard.deleteConfirm': 'Êtes-vous sûr de vouloir supprimer ce service?',
    
    // Edit Service
    'editService.title': 'Modifier le service',
    'editService.save': 'Enregistrer les modifications',
    
    // Common
    'common.loading': 'Chargement...',
    'common.error': 'Une erreur est survenue',
    'common.success': 'Succès',
    'common.cancel': 'Annuler',
    'common.confirm': 'Confirmer',
    'common.back': 'Retour',
    'common.next': 'Suivant',
    
    // Footer
    'footer.rights': 'Tous droits réservés',
    'footer.madeWith': 'Fait avec amour au Maroc',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ar')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language

    if (saved && (saved === 'ar' || saved === 'fr')) {
      setLanguageState(saved)
    }

    setMounted(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key
  }

  const dir = language === 'ar' ? 'rtl' : 'ltr'

  if (!mounted) return null

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
