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
  const blogTitle = `Blog | ${config.author.name}`
  const blogDescription = 'Technical blog posts about software development, machine learning, and computer science. By Yoshihiro Izawa, The University of Tokyo.'
  return {
    title: blogTitle,
    description: blogDescription,
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
