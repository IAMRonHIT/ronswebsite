import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Team from './components/Team';
import Metrics from './components/Metrics';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Benefits />
        <Team />
        <Metrics />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;