import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import BlogList from '@/components/Blog/BlogList'
import { getBlogPostMetadata } from '@/lib/blog'
import { siteConfig, createPageUrl } from '@/lib/config'

const blogTitle = `Blog | ${siteConfig.author.name}`
const blogDescription = 'Technical blog posts about software development, machine learning, and computer science.'

export const metadata: Metadata = {
  title: blogTitle,
  description: blogDescription,
  openGraph: {
    title: blogTitle,
    description: blogDescription,
    url: createPageUrl('/blog'),
  },
  twitter: {
    title: blogTitle,
    description: blogDescription,
  },
}

export default function BlogPage() {
  const posts = getBlogPostMetadata();

  return (
    <Layout header={<Header />}>
      <BlogList posts={posts} />
    </Layout>
  )
}
