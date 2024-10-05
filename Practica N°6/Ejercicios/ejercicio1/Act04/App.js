import React, { useState } from 'react';
import StatefulClass from './components/StatefulClass';
import FunctionalState from './components/FunctionalState';
import './index.css';

function App() {
  return (
    <div className="App">
      <h1>Manejo de Estados en React</h1>
      <StatefulClass />
      <FunctionalState />
    </div>
  );
}

export default App;
