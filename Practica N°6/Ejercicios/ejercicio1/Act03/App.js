import React from 'react';
import Comp1 from './Componentes/Comp1/Comp1';
import Comp2 from './Componentes/Comp2/Comp2';

const App = () => {
  const data = [
    { id: 1, name: 'Elemento 1' },
    { id: 2, name: 'Elemento 2' },
    { id: 3, name: 'Elemento 3' },
  ];
  const handleClick = () => {
    console.log('Botón clicado en Comp1');
  };

  return (
    <div>
      <h1>Mi Aplicación</h1>
      <Comp1 message="Hola desde Componente 1!" onClick={handleClick} />
      <Comp2 items={data} />
    </div>
  );
};


export default App;
