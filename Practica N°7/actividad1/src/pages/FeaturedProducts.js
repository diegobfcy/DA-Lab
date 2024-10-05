const featuredProducts = [
    {
      id: 1,
      name: "Smartphone X100",
      price: "$899",
      description: "A high-end smartphone with a stunning display and great performance.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHwxfGFsbHwxfHx8fHx8fHwxNjI3NzQwMDg2&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
      id: 2,
      name: "Laptop Pro 15",
      price: "$1,299",
      description: "Powerful laptop for professional use, featuring 16GB RAM and 1TB SSD.",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHwxfGFsbHwyfHx8fHx8fHwxNjI3NzQwMDg2&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: "$199",
      description: "Noise-cancelling wireless headphones with crystal clear sound.",
      image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHwxfGFsbHwzfHx8fHx8fHwxNjI3NzQwMDg2&ixlib=rb-1.2.1&q=80&w=400"
    }
  ];
  
  
  const FeaturedProducts = () => {
    return (
      <div className="featured-products-container">
        <h1 className="page-title">Lista de Productos Destacados</h1>
        <div className="products-grid">
          {featuredProducts.map(product => (
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
  
  export default FeaturedProducts;
  