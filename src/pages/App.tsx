import Layout from '../components/Layout';
import About from '../components/About';
import Works from '../components/Works';
import Skills from '../components/Skills';
import Certs from '../components/Certs';

export default function App() {
  return (
    <Layout>
      <About />
      <Works />
      <Skills />
      <Certs />
    </Layout>
  );
};
