const newProducts = [
    {
      id: 1,
      name: "Smartwatch Series 7",
      price: "$399",
      description: "Un reloj inteligente de alta tecnología con seguimiento de actividad física y control de frecuencia cardíaca.",
      image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      id: 2,
      name: "Gaming Console Pro",
      price: "$499",
      description: "Consola de juegos de próxima generación con resolución 4K y rendimiento de 120 fps.",
      image: "https://images.unsplash.com/photo-1678761442615-5af77170f925?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: "Electric Scooter X1",
      price: "$699",
      description: "Patinete eléctrico rápido y ecológico con una autonomía de hasta 40 millas.",
      image: "https://plus.unsplash.com/premium_photo-1679895479773-70c031d24a4e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];  
  
  const NewProducts = () => {
    return (
      <div className="new-products-container">
        <h1 className="page-title">Lista de Nuevos Productos</h1>
        <div className="products-grid">
          {newProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">{product.price}</p>
              <p className="product-description">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default NewProducts;
  