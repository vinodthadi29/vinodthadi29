import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Globe from './components/Globe';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './components/styles/App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Globe />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default App;