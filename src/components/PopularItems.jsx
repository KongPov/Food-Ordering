import React from 'react';
import './PopularItems.css';

const PopularItems = () => {
  return (
    <div className="popular-items">
      <h2 className="popular-items__title">Popular Items</h2>
      <div className="popular-items__list">
        <div className="popular-items__item">
          <img src="https://i.pinimg.com/564x/39/9e/dc/399edc8f4292704d92a00bf03faea73d.jpg" alt="Food Item 1" />
          <h3>Food Item 1</h3>
          <p>$10.00</p>
        </div>
        <div className="popular-items__item">
          <img src="https://i.pinimg.com/564x/b9/1c/ec/b91cec2883d30c0c2171ba2b75d63131.jpg" alt="Food Item 2" />
          <h3>Food Item 2</h3>
          <p>$12.00</p>
        </div>
        <div className="popular-items__item">
          <img src="https://i.pinimg.com/736x/74/ed/83/74ed838e906d0578d4180df488ff1fa5.jpg" alt="Food Item 3" />
          <h3>Food Item 3</h3>
          <p>$15.00</p>
        </div>
        {/* Add more items as needed */}
      </div>
    </div>
  );
};

export default PopularItems;
