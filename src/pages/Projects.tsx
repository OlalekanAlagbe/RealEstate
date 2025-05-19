import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Home as HomeIcon, Building, PenSquare } from 'lucide-react';
import EstateCard from '../components/EstatesProjectCard';
import estates from '../data/estates';
import AOS from 'aos';
import 'aos/dist/aos.css'
const Projects: React.FC = () => {

  useEffect(() => {
      AOS.init({ duration: 800, mirror: true });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section 
        data-aos="fade-left"
        className="bg-cover bg-center h-[60vh] relative"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg)' 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center text-white max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Find Your Dream Home
            </h1>
            <p className="text-xl mb-8">
              Discover premium real estate properties across Nigeria
            </p>
            
            {/* Search Form */}
            <div className="bg-white rounded-lg p-2 flex flex-col md:flex-row">
              <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-200 p-2">
                <MapPin className="text-gray-400 h-5 w-5 mr-2" />
                <input 
                  type="text" 
                  placeholder="Location" 
                  className="w-full outline-none text-gray-700"
                />
              </div>
              <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-200 p-2">
                <HomeIcon className="text-gray-400 h-5 w-5 mr-2" />
                <select className="w-full outline-none bg-transparent text-gray-700">
                  <option value="">Property Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="land">Land</option>
                </select>
              </div>
              <div className="flex-1 flex items-center p-2">
                <PenSquare className="text-gray-400 h-5 w-5 mr-2" />
                <select className="w-full outline-none bg-transparent text-gray-700">
                  <option value="">Price Range</option>
                  <option value="50-100">₦50M - ₦100M</option>
                  <option value="100-200">₦100M - ₦200M</option>
                  <option value="200+">Above ₦200M</option>
                </select>
              </div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-lg flex items-center justify-center transition duration-300 w-full md:w-auto mt-2 md:mt-0">
                <Search className="h-5 w-5 mr-2" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our exclusive collection of premium properties, each offering unique features and exceptional living experiences.
            </p>
          </div>

          <div data-aos="f" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:pr-20 lg:pl-20">
          {estates.map((estate, index) => (
              <div className='h-full flex' data-aos="fade-up" data-aos-delay={index * 100} key={estate.id}>
                <EstateCard estate={estate} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/"
              className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
            >
              <Building className="h-5 w-5 mr-2" />
              View All Properties
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;