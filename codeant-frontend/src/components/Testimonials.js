import React from 'react';
import './styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    { name: "vinod", image: "/user1.jpg", feedback: "CodeAnt AI improved my workflow dramatically!" },
    { name: "vamsi", image: "/user2.jpg", feedback: "I love how secure and fast their platform is." }
  ];

  return (
    <section className="testimonials">
      <h2>What People Say</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p>"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;