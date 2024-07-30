import React from 'react';
import Hero from '../components/Hero';
import PopularItems from '../components/PopularItems';
import Testimonials from '../components/Testimonials';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <PopularItems />
     <Testimonials />
    </div>
  );
};

export default Home;
