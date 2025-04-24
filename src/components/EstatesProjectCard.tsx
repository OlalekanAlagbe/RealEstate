import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { Estate } from '../types';
import AOS from 'aos';
import 'aos/dist/aos.css';
interface EstateCardProps {
  estate: Estate;
}

const EstatesProjectCard: React.FC<EstateCardProps> = ({ estate }) => {


  useEffect(() => {
      AOS.init({ duration: 800, mirror: true });
    }, []);
    
  return (
    <Link 
    to={`/projects/${estate.id}`}
    // data-aos="fade-down" 
    className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
  >
    <div className="relative">
      <img 
        src={estate.images[0]} 
        alt={estate.name} 
        className="w-full h-64 object-cover" // Reduced height
      />
      <div className={`absolute top-3 right-3 py-0.5 px-2 rounded-full text-xs font-semibold ${
        estate.status === 'Now Selling' 
          ? 'bg-emerald-100 text-emerald-800' 
          : 'bg-amber-100 text-amber-800'
      }`}>
        {estate.status}
      </div>
    </div>
    
    <div className="p-4"> {/* Reduced padding */}
      <h3 className="text-lg font-bold text-gray-900 mb-1">{estate.name}</h3>
      
      <div className="flex items-start mb-2">
        <MapPin className="h-4 w-4 text-gray-500 mr-1" />
        <p className="text-gray-600 text-sm">{estate.location}</p>
      </div>
      
      <p className="text-gray-700 text-sm mb-3 line-clamp-2">
        {estate.shortDescription}
      </p>
      
      <div className="border-t border-gray-200 pt-3">
        <ul className="space-y-1.5 text-sm">
          {estate.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <span className="text-emerald-500 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-200 flex items-center justify-between">
        <span className="text-emerald-500 font-bold text-sm hover:underline">Learn More →</span>
      </div>
    </div>
    </Link>
  
  );
};

export default EstatesProjectCard;