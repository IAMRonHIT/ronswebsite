import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Team from './components/Team';
import FinalRule from './components/FinalRule';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { NotificationProvider } from './components/CaseManagement/NotificationSystem';

function App() {
  return (
    <NotificationProvider>
      <div className="min-h-screen bg-[#0A0F1B]">
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Benefits />
        <Team />
        <FinalRule />
        <Contact />
        <Footer />
      </div>
    </NotificationProvider>
  );
}

export default App;