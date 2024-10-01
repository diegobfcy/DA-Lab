import React from 'react';
import spidermanImage from '../assets/spiderman.webp';

function Spiderman() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={spidermanImage} alt="Spiderman" style={{ width: '300px', borderRadius: '8px' }} />
        <h1>Spiderman</h1>
        <p>Spiderman es un superhéroe creado por Stan Lee y Steve Ditko. Apareció por primera vez en Amazing Fantasy #15 (1962).</p>
        <a
          className="App-link"
          href={spidermanImage}
          target="_blank"
          rel="noopener noreferrer"
        >
          Más sobre Spiderman
        </a>
      </header>
    </div>
  );
}

export default Spiderman;
