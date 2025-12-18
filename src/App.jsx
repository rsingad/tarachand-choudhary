import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <HelmetProvider>
      <div className="bg-slate-950 text-white min-h-screen selection:bg-rose-500">
        <Helmet>
          <title>Tarachand Choudhary | Professional Video Editor Jodhpur</title>
          <meta name="description" content="5+ Years Experience in Cinematic Video Editing and Graphic Design. Worked with STAGE OTT." />
        </Helmet>

        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;