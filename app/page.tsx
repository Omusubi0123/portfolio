import dynamic from 'next/dynamic';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import About from '@/components/About/About';
import { getBlogPostMetadata } from '@/lib/blog';

// 重いコンポーネントを動的読み込み
const Works = dynamic(() => import('@/components/Works/Works'), {
  loading: () => <div className="text-center py-8 text-gray-400">Loading Works...</div>
});

const Carriers = dynamic(() => import('@/components/Carriers/Carriers'), {
  loading: () => <div className="text-center py-8 text-gray-400">Loading Career...</div>
});

const BlogSection = dynamic(() => import('@/components/Blog/BlogSection'), {
  loading: () => <div className="text-center py-8 text-gray-400">Loading Blog...</div>
});

const Certifications = dynamic(() => import('@/components/Certifications/Certifications'), {
  loading: () => <div className="text-center py-8 text-gray-400">Loading Certifications...</div>
});

const Skills = dynamic(() => import('@/components/Skills/Skills'), {
  loading: () => <div className="text-center py-8 text-gray-400">Loading Skills...</div>
});

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