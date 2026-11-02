import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import BlogList from '@/components/Blog/BlogList'
import { getBlogPostMetadata } from '@/lib/blog'
import { getSiteConfig, createLocalePageUrl } from '@/lib/config'
import { isValidLocale, type Locale } from '@/lib/i18n'
import { notFound } from 'next/navigation'

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
  const blogTitle = isJapanese ? `ブログ | ${config.name}` : `Blog | ${config.name}`
  const blogDescription = isJapanese
    ? 'ソフトウェア開発、機械学習、コンピュータサイエンスに関する技術記事や活動記録を掲載しています。'
    : 'Technical blog posts and activity reports about software development, machine learning, and computer science by Yoshihiro Izawa.'
  return {
    title: blogTitle,
    description: blogDescription,
    alternates: {
      canonical: createLocalePageUrl(locale as Locale, '/blog'),
    },
    openGraph: {
      title: blogTitle,
      description: blogDescription,
      url: createLocalePageUrl(locale as Locale, '/blog'),
    },
    twitter: {
      title: blogTitle,
      description: blogDescription,
    },
  }
}

export default async function LocaleBlogPage({ params }: Props) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()

  const posts = getBlogPostMetadata(locale as Locale)

  return (
    <Layout header={<Header />}>
      <BlogList posts={posts} />
    </Layout>
  )
}
