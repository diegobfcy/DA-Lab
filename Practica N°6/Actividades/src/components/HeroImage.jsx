import React from 'react';
import spidermanImage from '../assets/spiderman.webp';

function HeroImage() {
  return (
    <img 
      src={spidermanImage} 
      alt="Spiderman" 
      style={{ width: '300px', borderRadius: '8px' }}
    />
  );
}

export default HeroImage;
