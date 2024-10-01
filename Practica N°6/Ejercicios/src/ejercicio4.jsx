import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useParams } from 'react-router-dom';

const Perfil = () => <h2>Perfil del Usuario</h2>;
const Configuracion = () => <h2>Configuración del Usuario</h2>;

const Usuario = () => {
    const { opcion } = useParams();
    return (
        <div>
            <h2>Página de Usuario</h2>
            <ul>
                <li><Link to="perfil">Perfil</Link></li>
                <li><Link to="configuracion">Configuración</Link></li>
            </ul>

            {opcion === 'perfil' && <Perfil />}
            {opcion === 'configuracion' && <Configuracion />}
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <nav>
                <Link to="/usuario">Usuario</Link>
            </nav>
            <Routes>
                <Route path="/usuario/:opcion" element={<Usuario />} />
            </Routes>
        </Router>
    );
};

export default App;
