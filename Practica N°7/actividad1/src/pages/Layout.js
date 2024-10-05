import { Outlet, Link } from "react-router-dom";
import '../App.css';

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Productos</Link></li>
          <li><Link to="/users">Usuarios</Link></li>
          <li><Link to="/contact">Contáctanos</Link></li>
          <li><Link to="/prueba">Prueba</Link></li>
        </ul>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
