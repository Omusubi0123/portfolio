import dynamic from 'next/dynamic'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import About from '@/components/About/About'
import { getBlogPostMetadata } from '@/lib/blog'

const Works = dynamic(() => import('@/components/Works/Works'), {
  loading: () => <div className="text-center py-8 text-gray-400">Loading Works...</div>
})

const Carriers = dynamic(() => import('@/components/Carriers/Carriers'), {
  loading: () => <div className="text-center py-8 text-gray-400">Loading Career...</div>
})

const BlogSection = dynamic(() => import('@/components/Blog/BlogSection'), {
  loading: () => <div className="text-center py-8 text-gray-400">Loading Blog...</div>
})

const Education = dynamic(() => import('@/components/Research/Education'), {
  loading: () => <div className="text-center py-8 text-gray-400">Loading Education...</div>
})

const ResearchSection = dynamic(() => import('@/components/Research/ResearchSection'), {
  loading: () => <div className="text-center py-8 text-gray-400">Loading Research...</div>
})

const Certifications = dynamic(() => import('@/components/Certifications/Certifications'), {
  loading: () => <div className="text-center py-8 text-gray-400">Loading Certifications...</div>
})

const Skills = dynamic(() => import('@/components/Skills/Skills'), {
  loading: () => <div className="text-center py-8 text-gray-400">Loading Skills...</div>
})

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams(): Promise<{ locale: string }[]> {
  return [{ locale: 'ja' }, { locale: 'en' }]
}

export default async function LocaleHomePage({ params }: Props) {
  const { locale } = await params
  const posts = getBlogPostMetadata(locale as 'ja' | 'en')

  return (
    <Layout header={<Header />}>
      <About />
      <Works />
      <Carriers />
      <Education />
      <ResearchSection />
      <BlogSection posts={posts} />
      <Certifications />
      <Skills />
    </Layout>
  )
}
