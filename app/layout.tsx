import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans_Arabic, Noto_Naskh_Arabic } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-arabic',
})

const notoNaskh = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-naskh',
})

export const metadata: Metadata = {
  title: 'خدماتي | Khadamati - خدمات محلية في المغرب',
  description: 'منصة تربط بين مقدمي الخدمات والعملاء في المغرب. ابحث عن سباك، نجار، طباخ وغيرهم بسهولة',
  generator: 'v0.app',
  keywords: ['خدمات', 'المغرب', 'سباك', 'نجار', 'طباخ', 'services', 'Morocco'],
  icons: {
    icon: '/icon_again.png',
  },}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#c4784a' },
    { media: '(prefers-color-scheme: dark)', color: '#1e2838' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${ibmPlexArabic.variable} ${notoNaskh.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
