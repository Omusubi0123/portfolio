import Layout from '../components/Layout';
import Header from '../components/Header';
import About from '../components/About';
import Works from '../components/Works';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';

export default function App() {
  return (
    <Layout header={<Header />}>
      <About />
      <Works />
      <Skills />
      <Certifications />
    </Layout>
  );
};