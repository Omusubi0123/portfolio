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
  const title = `Research | ${config.author.name}`
  const description = 'Publications, awards, and presentations in AI research, focusing on Mechanistic Interpretability. By Yoshihiro Izawa, The University of Tokyo.'
  return {
    title,
    description,
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
