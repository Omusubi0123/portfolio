import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { generatePersonLD, generateWebsiteLD } from '@/lib/structured-data'
import { getSiteConfig } from '@/lib/config'
import { isValidLocale, type Locale } from '@/lib/i18n'
import { notFound } from 'next/navigation'
import SetHtmlLang from '@/components/SetHtmlLang'
import '../globals.css'
import ja from '../../messages/ja.json'
import en from '../../messages/en.json'

const messagesMap = { ja, en } as const

export async function generateStaticParams(): Promise<{ locale: string }[]> {
  return [{ locale: 'ja' }, { locale: 'en' }]
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!isValidLocale(locale)) return {}
  const config = getSiteConfig(locale)
  const localeTag = locale === 'ja' ? 'ja_JP' : 'en_US'
  return {
    metadataBase: new URL(config.url),
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: config.author.name }],
    creator: config.author.name,
    openGraph: {
      type: 'website',
      locale: localeTag,
      url: config.url,
      title: config.title,
      description: config.description,
      siteName: config.name,
      images: [
        { url: config.ogImage, width: 1200, height: 630, alt: config.name },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: config.title,
      description: config.description,
      images: [config.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()

  const messages = messagesMap[locale as Locale]
  const config = getSiteConfig(locale as Locale)
  const personLD = generatePersonLD(config)
  const websiteLD = generateWebsiteLD(config)

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <SetHtmlLang locale={locale as Locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLD) }}
      />
      {children}
    </NextIntlClientProvider>
  )
}
