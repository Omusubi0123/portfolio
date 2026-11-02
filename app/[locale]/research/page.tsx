import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import ResearchAbout from '@/components/Research/ResearchAbout'
import { getSiteConfig, createLocalePageUrl } from '@/lib/config'
import { isValidLocale, type Locale } from '@/lib/i18n'
import { notFound } from 'next/navigation'

const Publications = dynamic(() => import('@/components/Research/Publications'), {
  loading: () => <div className="text-center py-8 text-gray-400">Loading Publications...</div>
})

const Awards = dynamic(() => import('@/components/Research/Awards'), {
  loading: () => <div className="text-center py-8 text-gray-400">Loading Awards...</div>
})

const Education = dynamic(() => import('@/components/Research/Education'), {
  loading: () => <div className="text-center py-8 text-gray-400">Loading Education...</div>
})

const Presentations = dynamic(() => import('@/components/Research/Presentations'), {
  loading: () => <div className="text-center py-8 text-gray-400">Loading Presentations...</div>
})

type Props = {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return [{ locale: 'ja' }, { locale: 'en' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!isValidLocale(locale)) return {}
  const config = getSiteConfig(locale as Locale)
  const isJapanese = locale === 'ja'
  const title = isJapanese ? `研究 | ${config.name}` : `Research | ${config.name}`
  const description = isJapanese
    ? '井澤慶広の研究成果、受賞歴、発表資料を掲載しています。Mechanistic Interpretabilityを中心としたAI研究を紹介します。'
    : 'Research publications, awards, and presentations by Yoshihiro Izawa, focusing on Mechanistic Interpretability and AI safety.'
  return {
    title,
    description,
    alternates: {
      canonical: createLocalePageUrl(locale as Locale, '/research'),
    },
    openGraph: {
      title,
      description,
      url: createLocalePageUrl(locale as Locale, '/research'),
    },
    twitter: {
      title,
      description,
    },
  }
}

export default async function ResearchPage({ params }: Props) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()

  return (
    <Layout header={<Header />}>
      <ResearchAbout />
      <Publications />
      <Awards />
      <Education />
      <Presentations />
    </Layout>
  )
}
