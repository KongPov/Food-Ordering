import React from 'react';
import { useCart } from '../context/CartContext'; // Import useCart
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useCart(); // Use Cart Context

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart">
      <div className="cart__container">
        <h1 className="cart__title">Your Cart</h1>
        <div className="cart__items">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart__item">
                <h2>{item.name}</h2>
                <p>${item.price.toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))
          )}
        </div>
        <div className="cart__summary">
          <h2>Total: ${calculateTotal()}</h2>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
