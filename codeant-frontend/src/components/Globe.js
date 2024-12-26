import React from 'react';
import './Globe.css';

const Globe = () => {
  return (
    <section className="globe">
      <h2>Explore the Globe</h2>
      {/* Use the absolute path to reference assets in the 'public' folder */}
      <img src="/globe.svg" alt="Animated Globe" className="globe-img" />
    </section>
  );
};

export default Globe;