import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Revolutionizing Code Quality</h1>
        <p>AI-driven, deterministic fixes for cleaner and safer code.</p>
        <button className="cta-btn">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;