import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Aerolinea from './pages/Aerolinea';
import Matriz from './pages/Matriz';
import Inscripcion from './pages/Inscripcion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Aerolinea" element={<Aerolinea />} />
        <Route path="/Matriz" element={<Matriz/>} />
        <Route path="/Inscripcion" element={<Inscripcion />} />
        {/* Añade más rutas según necesites */}
      </Routes>
    </Router>
  );
}

export default App;
