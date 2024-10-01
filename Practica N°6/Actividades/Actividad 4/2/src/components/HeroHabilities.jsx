import React from 'react';
import './HeroHabilities.css'

function HeroAbilities({ abilities }) {
  return (
    <ul>
      {abilities.map((ability, index) => (
        <li key={index}>{ability}</li>
      ))}
    </ul>
  );
}

export default HeroAbilities;
