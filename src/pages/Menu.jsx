import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import useCart
import products from '../data/productData'; // Import product data
import './Menu.css';

const Menu = () => {
  const { addToCart } = useCart(); // Use Cart Context

  const handleAddToCart = (product, e) => {
    e.stopPropagation(); // Prevent navigation
    addToCart(product);
  };

  return (
    <div className="menu">
      <div className="menu__container">
        <h1 className="menu__title">Our Menu</h1>
        <div className="menu__items">
          {products.map(product => (
            <Link key={product.id} to={`/food/${product.id}`} className="menu__item">
              <img src={product.imageUrl} alt={product.name} />
              <h2>{product.name}</h2>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={(e) => handleAddToCart(product, e)}>Add to Cart</button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
