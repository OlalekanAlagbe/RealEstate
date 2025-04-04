import React, { useState } from 'react';
import { Search, MapPin, Building } from 'lucide-react';

interface SearchBarProps {
  onSearch?: (filters: SearchFilters) => void;
}

export interface SearchFilters {
  address: string;
  location: string;
  propertyType: string;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [filters, setFilters] = useState<SearchFilters>({
    address: '',
    location: '',
    propertyType: ''
  });

  const handleSearch = () => {
    if (onSearch) {
      onSearch(filters);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full max-w-4xl">
      <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center flex-1 gap-2 w-full">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Enter address"
            className="w-full outline-none"
            value={filters.address}
            onChange={(e) => setFilters({ ...filters, address: e.target.value })}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="w-full md:w-px h-px md:h-8 bg-gray-200" />
        <div className="flex items-center flex-1 gap-2 w-full">
          <MapPin className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Location"
            className="w-full outline-none"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="w-full md:w-px h-px md:h-8 bg-gray-200" />
        <div className="flex items-center flex-1 gap-2 w-full">
          <Building className="w-5 h-5 text-gray-400" />
          <select 
            className="w-full outline-none bg-transparent"
            value={filters.propertyType}
            onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
          >
            <option value="">Property type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
            <option value="villa">Villa</option>
            <option value="townhouse">Townhouse</option>
          </select>
        </div>
        <button 
          className="w-full md:w-auto px-6 py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
          onClick={handleSearch}
        >
          Search Property
        </button>
      </div>
      <button 
        className="self-start text-gray-600 hover:text-gray-900 flex items-center gap-1"
        onClick={handleSearch}
      >
        {/* <Search className="w-4 h-4" />
        Advanced Search */}
      </button>
    </div>
  );
};

export default SearchBar