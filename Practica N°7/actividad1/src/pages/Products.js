import { Link, Outlet } from "react-router-dom";

const Products = () => {
    return (
        <>
            <h1 className="page-title">Productos</h1>
            <nav>
                <ul className="products-nav">
                    <li><Link to="featured">Productos Destacados</Link></li>
                    <li><Link to="new">Nuevos Productos</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Products;
