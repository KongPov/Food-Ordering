import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleOrderNowClick = () => {
    navigate('/menu'); // Navigate to the Menu page
  };

  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Delicious Food Delivered To You</h1>
        <p className="hero__subtitle">Order now and enjoy our delicious meals at home.</p>
        <button className="hero__button" onClick={handleOrderNowClick}>Order Now</button>
      </div>
    </div>
  );
};

export default Hero;
