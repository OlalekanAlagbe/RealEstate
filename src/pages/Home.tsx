import React from 'react';
import Hero from '../components/Hero';
import PropertyGrid from '../components/PropertyGrid';
import Services from '../components/Services';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Hero />
      <PropertyGrid />
      <Services />
      <div className="bg-gradient-to-r from-[#f0fdf4] via-[#e0f7e9] to-[#f5f7f2] py-24 px-6 text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
          Secure Your Land Today
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-8 max-w-xl mx-auto">
          Complete a short form to begin your land allocation process.
        </p>
        <Link to="/apply">
          <button className="px-10 py-4 bg-green-600 text-white text-lg rounded-xl hover:bg-green-700 transition duration-300 shadow-xl hover:shadow-2xl">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;