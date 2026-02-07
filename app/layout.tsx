import type { Metadata } from 'next'
import { siteConfig, getSiteConfig } from '@/lib/config'
import './globals.css'

const defaultConfig = getSiteConfig('ja')

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: defaultConfig.title,
  description: defaultConfig.description,
  keywords: defaultConfig.keywords,
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.author.name,
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteConfig.url,
    title: defaultConfig.title,
    description: defaultConfig.description,
    siteName: defaultConfig.name,
    images: [
      { url: siteConfig.ogImage, width: 1200, height: 630, alt: defaultConfig.name },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultConfig.title,
    description: defaultConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href={siteConfig.favicon} />
        <link rel="apple-touch-icon" href={siteConfig.favicon} />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
