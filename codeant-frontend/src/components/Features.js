import React from 'react';
import './styles/Features.css';

const Features = () => {
  const features = [
    { icon: "⚡", title: "Fast", description: "Experience lightning-fast performance." },
    { icon: "🔒", title: "Secure", description: "Your code is safe with top-notch security." },
    { icon: "🤖", title: "AI-Powered", description: "Leverage the power of AI for clean code." }
  ];

  return (
    <section className="features">
      <h2>Our Features</h2>
      <div className="features-list">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;