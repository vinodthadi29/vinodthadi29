import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 CodeAnt AI. All Rights Reserved.</p>
        <ul className="footer-links">
          <li><a href="#contact">Contact</a></li>
          <li><a href="#privacy">Privacy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;