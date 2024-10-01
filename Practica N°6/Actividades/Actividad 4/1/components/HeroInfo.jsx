import React from 'react';
import './HeroInfo.css'

function HeroInfo({ name, description }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export default HeroInfo;
