import React from "react";
import Layout from '../components/Layout';
import About from '../components/About';
import Works from '../components/Works';
import Skills from '../components/Skills';
import Certs from '../components/Certs';

const App: React.FC = () => {
  return (
    <Layout>
      <About />
      <Works />
      <Skills />
      <Certs />
    </Layout>
  );
};

export default App;
