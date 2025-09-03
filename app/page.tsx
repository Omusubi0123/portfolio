import Layout from '@/components/Layout';
import Header from '@/components/Header';
import About from '@/components/About/About';
import Works from '@/components/Works/Works';
import Carriers from '@/components/Carriers/Carriers';
import Skills from '@/components/Skills/Skills';
import Certifications from '@/components/Certifications/Certifications';
import BlogSection from '@/components/Blog/BlogSection';
import { getBlogPostMetadata } from '@/lib/blog';

export default function HomePage() {
  const posts = getBlogPostMetadata();

  return (
    <Layout header={<Header />}>
      <About />
      <Works />
      <Carriers />
      <BlogSection posts={posts} />
      <Certifications />
      <Skills />
    </Layout>
  );
}
