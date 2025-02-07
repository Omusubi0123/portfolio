import Layout from '../components/Layout';
import Header from '../components/Header';
import About from '../components/About/About';
import Works from '../components/Works/Works';
import Carriers from '../components/Carriers/Carriers';
import Skills from '../components/Skills/Skills';
import Certifications from '../components/Certifications/Certifications';

export default function App() {
  return (
    <Layout header={<Header />}>
      <About />
      <Works />
      <Carriers />
      <Certifications />
      <Skills />
    </Layout>
  );
};