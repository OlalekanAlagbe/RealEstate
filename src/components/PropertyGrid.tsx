import React, { useEffect, useState } from 'react';
import PropertyCard from './PropertyCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
const properties = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Modern downtown condo with city views',
    location: 'Victoria Island, Lagos',
    price: '₦6,750,000 (5%)',
    beds: 3,
    baths: 2,
    sqft: 1800
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Luxury waterfront apartment',
    location: 'Eko Atlantic, Lagos',
    price: '₦13,500,000 (4%)',
    beds: 4,
    baths: 3,
    sqft: 2200
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Spacious family home in growing neighborhood',
    location: 'Lekki Phase 1, Lagos',
    price: '₦9,300,000 (6%)',
    beds: 5,
    baths: 3,
    sqft: 2800
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Contemporary urban loft in downtown',
    location: 'Ikoyi, Lagos',
    price: '₦8,700,000 (4.5%)',
    beds: 2,
    baths: 2,
    sqft: 1500
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Renovated historic property',
    location: 'Apapa GRA, Lagos',
    price: '₦12,750,000 (3.8%)',
    beds: 4,
    baths: 3,
    sqft: 3000
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Modern suburban smart home',
    location: 'Ajah, Lagos',
    price: '₦10,800,000 (5.2%)',
    beds: 4,
    baths: 3,
    sqft: 2600
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Elegant penthouse with skyline views',
    location: 'Banana Island, Lagos',
    price: '₦18,000,000 (4.8%)',
    beds: 3,
    baths: 3.5,
    sqft: 2800
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Modern villa with pool',
    location: 'Ikate Elegushi, Lagos',
    price: '₦23,250,000 (4.2%)',
    beds: 5,
    baths: 4,
    sqft: 4200
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Cozy waterfront retreat',
    location: 'Chevron Drive, Lagos',
    price: '₦11,700,000 (5.5%)',
    beds: 4,
    baths: 3,
    sqft: 2400
  }
];


const PropertyGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 9;
  const totalPages = Math.ceil(properties.length / propertiesPerPage);

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };


   useEffect(() => {
      AOS.init({ duration: 800, mirror: true });
    }, []);
    
  return (
    <div className="container mx-auto px-6 lg:px-20 py-12">
      <div className="flex items-center justify-between mb-8">
        <p className="text-gray-600">
          Showing {indexOfFirstProperty + 1}-{Math.min(indexOfLastProperty, properties.length)} of {properties.length} results
        </p>
        {currentPage < totalPages && (
          <button 
            onClick={handleNextPage}
            className="text-green-600 hover:text-green-700"
          >
            Next Results →
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProperties.map((property, index) => (
              <div
                key={property.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="h-full"
              >
                <PropertyCard {...property} />
              </div>
            ))}
      </div>


    </div>
  );
};

export default PropertyGrid;