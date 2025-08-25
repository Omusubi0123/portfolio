import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@/styles/index.css'
import App from './App.tsx'
import BlogList from '../components/Blog/BlogList.tsx'
import BlogPost from '../components/Blog/BlogPost.tsx'
import Layout from '../components/Layout.tsx'
import Header from '../components/Header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={
          <Layout header={<Header />}>
            <BlogList />
          </Layout>
        } />
        <Route path="/blog/:id" element={
          <Layout header={<Header />}>
            <BlogPost />
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
