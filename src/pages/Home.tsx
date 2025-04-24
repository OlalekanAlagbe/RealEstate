import React from 'react';
import Hero from '../components/Hero';
import PropertyGrid from '../components/PropertyGrid';
import Services from '../components/Services';

const Home = () => {
  return (
    <div>
      <Hero />
      <PropertyGrid />
      <Services />
      <div data-aos="fade-up" className="bg-[#f5f7f2] py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Invest in real estate with confidence</h2>
        <button className="px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">
          Invest Now
        </button>
      </div>
    </div>
  );
};

export default Home;