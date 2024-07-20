import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import useCart
import products from '../data/productData'; // Import product data
import './FoodDetail.css';

const FoodDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart(); // Use Cart Context
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent navigation
    addToCart(product);
  };

  return (
    <div className="food-detail">
      <img src={product.imageUrl} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default FoodDetail;
