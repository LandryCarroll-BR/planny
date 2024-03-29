import type { Metadata } from 'next'

import '@/styles/globals.css'
import { cn } from '@/lib/utils'
import { fontSans } from '@/lib/fonts'
import { siteConfig } from '@/config/site'
import { Providers } from '@/components/providers'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    'Lesson planning',
    'Educator tools',
    'Teaching resources',
    'Classroom management',
    'AI lesson planner',
    'Teacher assistant app',
    'Curriculum planning',
    'Educational technology',
    'Teacher productivity',
    'Lesson organization',
    'School planning software',
    'AI-driven education',
    'Classroom efficiency',
    'Teacher support',
    'Custom lesson plans',
    'Lesson scheduling',
    'Education innovation',
    'Teacher empowerment',
    'Streamlined lesson preparation',
    'Personalized teaching assistant',
  ],
  creator: 'landrycarroll',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: '/favicon.ico',
    // shortcut: '/favicon-16x16.png',
    // apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>{children}</body>
      </html>
    </Providers>
  )
}
