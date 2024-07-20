import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">FoodApp</div>
      <ul className="navbar__menu">
        <li className="navbar__item"><a href="/">Home</a></li>
        <li className="navbar__item"><a href="/menu">Menu</a></li>
        <li className="navbar__item"><a href="/cart">Cart</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
