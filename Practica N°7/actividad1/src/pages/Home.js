import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <section className="welcome-section">
        <h1 className="page-title">¡Bienvenido a nuestra tienda!</h1>
        <p>Descubra los mejores y más recientes productos, seleccionados especialmente para usted. Explore nuestra exclusiva selección de dispositivos, accesorios y más.</p>
      </section>

      <section className="featured-section">
        <h2>Productos destacados</h2>
        <p>Echa un vistazo a algunas de nuestras mejores selecciones para ti:</p>
        <div className="featured-links">
          <Link to="/products/featured" className="featured-link">Ver productos destacados</Link>
          <Link to="/products/new" className="featured-link">Ver nuevos productos</Link>
        </div>
      </section>

      <section className="offers-section">
        <h2>Ofertas Especiales</h2>
        <p>No te pierdas estas increíbles ofertas:</p>
        <ul className="offers-list">
          <li><strong>¡50% de descuento</strong> en todos los Smartwatches!</li>
          <li><strong>Compre 1 y obtenga 1 gratis</strong> en consolas de juego seleccionadas.</li>
          <li><strong>¡20% de descuento</strong> ¡Sólo este fin de semana en patinetes eléctricos!</li>
        </ul>
      </section>

      <section className="quick-links-section">
        <h2>Enlaces rápidos</h2>
        <div className="quick-links">
          <Link to="/products" className="quick-link">Explorar todos los productos</Link>
          <Link to="/contact" className="quick-link">Contacta con nosotros</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
