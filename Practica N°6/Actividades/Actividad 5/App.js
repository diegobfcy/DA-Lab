import React, { useState } from 'react';
import './App.css';
import CounterWithEffect from './components/CounterWithEffect';
import HeroInfo from './components/HeroInfo';
import HeroImage from './components/HeroImage';
import HeroAbilities from './components/HeroHabilities';

function App() {
  const [showMore, setShowMore] = useState(false);

  const handleToggleInfo = () => {
    setShowMore(!showMore);
  };

  const abilities = ['Fuerza sobrehumana', 'Agilidad mejorada', 'Sentido arácnido'];

  return (
    <div className="App">
      <header className="App-header">
        <HeroImage />
        <HeroInfo
          name="Spiderman"
          description="Spiderman es un superhéroe creado por Stan Lee y Steve Ditko."
        />
        <HeroAbilities abilities={abilities} />
        <button onClick={handleToggleInfo}>
          {showMore ? 'Ocultar Más Información' : 'Mostrar Más Información'}
        </button>
        {showMore && <p>Peter Parker, estudiante de ciencias, lucha contra el crimen en Nueva York.</p>}
      </header>

      <header className="App-header">
        <CounterWithEffect />
      </header>

    </div>
  );
}

export default App;
