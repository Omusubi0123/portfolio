import Layout from '../components/Layout';
import About from '../components/About';
import Works from '../components/Works';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';

export default function App() {
  return (
    <Layout>
      <About />
      <Works />
      <Skills />
      <Certifications />
    </Layout>
  );
};
