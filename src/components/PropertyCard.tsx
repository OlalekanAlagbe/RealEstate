import React from 'react';
import { MapPin, Bed, Bath, Square } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  id: number;
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
}

const PropertyCard = ({ id, image, title, location, price, beds, baths, sqft }: PropertyCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transform hover:shadow-xl transition-transform duration-500 transition-shadow" >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        {/* <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3> */}
        <div className="flex items-center gap-1 text-gray-600 mb-3">
          {/* <MapPin className="w-4 h-4" /> */}
          {/* <span className="text-sm">{location}</span> */}
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              <span>{beds} Beds</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              <span>{baths} Bath</span>
            </div>
            <div className="flex items-center gap-1">
              <Square className="w-4 h-4" />
              <span>{sqft} Sqft</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* <span className="text-lg font-semibold text-green-600">{price}</span> */}
          <Link 
            to={`/property/${id}`}
            className="px-4 py-1 text-green-600 border border-green-600 rounded-full hover:bg-green-600 hover:text-white transition-colors"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;