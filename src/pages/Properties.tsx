import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import SearchBar, { SearchFilters } from '../components/SearchBar';

// const allProperties = [
//   {
//     id: 1,
//     image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     title: 'Modern downtown condo with city views',
//     location: 'Phoenix, Arizona',
//     price: '$4,500 (5%)',
//     beds: 3,
//     baths: 2,
//     sqft: 1800
//   },
//   {
//     id: 2,
//     image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     title: 'Luxury oceanfront apartment in Miami',
//     location: 'Miami Beach',
//     price: '$9,000 (4%)',
//     beds: 4,
//     baths: 3,
//     sqft: 2200
//   },
//   {
//     id: 3,
//     image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     title: 'Spacious family home in growing neighborhood',
//     location: 'Portland, Oregon',
//     price: '$6,200 (6%)',
//     beds: 5,
//     baths: 3,
//     sqft: 2800
//   },
//   {
//     id: 4,
//     image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     title: 'Contemporary urban loft in downtown',
//     location: 'Seattle, Washington',
//     price: '$5,800 (4.5%)',
//     beds: 2,
//     baths: 2,
//     sqft: 1500
//   },
//   {
//     id: 5,
//     image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     title: 'Renovated historic brownstone',
//     location: 'Boston, Massachusetts',
//     price: '$8,500 (3.8%)',
//     beds: 4,
//     baths: 3,
//     sqft: 3000
//   },
//   {
//     id: 6,
//     image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     title: 'Modern suburban smart home',
//     location: 'Austin, Texas',
//     price: '$7,200 (5.2%)',
//     beds: 4,
//     baths: 3,
//     sqft: 2600
//   },
//   {
//     id: 7,
//     image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     title: 'Elegant penthouse with skyline views',
//     location: 'Chicago, Illinois',
//     price: '$12,000 (4.8%)',
//     beds: 3,
//     baths: 3.5,
//     sqft: 2800
//   },
//   {
//     id: 8,
//     image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     title: 'Modern villa with pool',
//     location: 'Los Angeles, California',
//     price: '$15,500 (4.2%)',
//     beds: 5,
//     baths: 4,
//     sqft: 4200
//   },
//   {
//     id: 9,
//     image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     title: 'Cozy mountain retreat',
//     location: 'Denver, Colorado',
//     price: '$7,800 (5.5%)',
//     beds: 4,
//     baths: 3,
//     sqft: 2400
//   }
// ];


const allProperties = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Modern luxury condo with city views',
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
    title: 'Spacious family home in Lekki',
    location: 'Lekki Phase 1, Lagos',
    price: '₦9,300,000 (6%)',
    beds: 5,
    baths: 3,
    sqft: 2800
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Contemporary urban loft in Ikoyi',
    location: 'Ikoyi, Lagos',
    price: '₦8,700,000 (4.5%)',
    beds: 2,
    baths: 2,
    sqft: 1500
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Renovated luxury home',
    location: 'Banana Island, Lagos',
    price: '₦12,750,000 (3.8%)',
    beds: 4,
    baths: 3,
    sqft: 3000
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Modern smart home in Ajah',
    location: 'Ajah, Lagos',
    price: '₦10,800,000 (5.2%)',
    beds: 4,
    baths: 3,
    sqft: 2600
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Elegant penthouse with lagoon views',
    location: 'Ikate Elegushi, Lagos',
    price: '₦18,000,000 (4.8%)',
    beds: 3,
    baths: 3.5,
    sqft: 2800
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Luxury villa with pool',
    location: 'Chevron Drive, Lagos',
    price: '₦23,250,000 (4.2%)',
    beds: 5,
    baths: 4,
    sqft: 4200
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    title: 'Exclusive waterfront retreat',
    location: 'Lekki Peninsula, Lagos',
    price: '₦11,700,000 (5.5%)',
    beds: 4,
    baths: 3,
    sqft: 2400
  }
];


const Properties = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    location: '',
    propertyType: '',
    address: ''
  });
  
  const propertiesPerPage = 9;

  // Filter properties based on search criteria
  const filteredProperties = allProperties.filter(property => {
    const matchesLocation = !searchFilters.location || 
      property.location.toLowerCase().includes(searchFilters.location.toLowerCase());
    const matchesAddress = !searchFilters.address || 
      property.title.toLowerCase().includes(searchFilters.address.toLowerCase());
    return matchesLocation && matchesAddress;
  });

  // Calculate pagination
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

  const handleSearch = (filters: SearchFilters) => {
    setSearchFilters(filters);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-[#f5f7f2] py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">Available Properties</h1>
          <div className="max-w-4xl mx-auto">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <p className="text-gray-600">
            Showing {indexOfFirstProperty + 1}-{Math.min(indexOfLastProperty, filteredProperties.length)} of {filteredProperties.length} results
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
          {currentProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === page
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;