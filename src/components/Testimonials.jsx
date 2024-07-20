import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2 className="testimonials__title">What Our Customers Say</h2>
      <div className="testimonials__list">
        <div className="testimonials__item">
          <p>"The food was amazing and delivered hot!"</p>
          <h4>- Customer 1</h4>
        </div>
        <div className="testimonials__item">
          <p>"Great service and delicious meals. Will order again!"</p>
          <h4>- Customer 2</h4>
        </div>
        <div className="testimonials__item">
          <p>"Fast delivery and the food quality was excellent!"</p>
          <h4>- Customer 3</h4>
        </div>
        {/* Add more testimonials as needed */}
      </div>
    </div>
  );
};

export default Testimonials;
