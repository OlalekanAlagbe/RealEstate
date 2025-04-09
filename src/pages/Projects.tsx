import { MapPin, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Projects() {
  return (
    <div className="py-8">
      <div className="px-2 sm:px-4 lg:px-6">
        <h1 className="text-3xl font-bold text-gray-900 mt-0 my-10 text-center">Our Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Biemol Estate */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
              alt="Biemol Estate"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold">Biemol Estate</h2>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Now Selling
                </span>
              </div>
              <div className="flex items-center text-gray-600 mb-2 text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Elebu extension, Ibadan</span>
              </div>
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                Luxury living at its finest with complete documentation including C of O and Red Copy Registered Survey.
              </p>
              <ul className="space-y-1 text-gray-600 text-sm mb-3">
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-1 text-emerald-600" />
                  <span className="line-clamp-1">Premium location with excellent infrastructure</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-1 text-emerald-600" />
                  <span className="line-clamp-1">C of O and Red Copy Registered Survey</span>
                </li>
              </ul>
              <Link
                to="/projects/biemol-estate"
                className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-700"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Greensburg Courtyard Phase I */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80"
              alt="Greensburg Courtyard Phase I"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold">Greensburg Courtyard Phase I</h2>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Now Selling
                </span>
              </div>
              <div className="flex items-center text-gray-600 mb-2 text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Elebu Extensions, Near Oluyole</span>
              </div>
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                Modern living spaces with easy access to Oluyole Extension, Ring Road, and Apata.
              </p>
              <ul className="space-y-1 text-gray-600 text-sm mb-3">
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-1 text-emerald-600" />
                  <span className="line-clamp-1">Strategic location with excellent connectivity</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-1 text-emerald-600" />
                  <span className="line-clamp-1">Access to quality schools and roads</span>
                </li>
              </ul>
              <Link
                to="/projects/greensburg-courtyard"
                className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-700"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Greensburg Courtyard Phase II */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Greensburg Courtyard Phase II"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold">Greensburg Courtyard Phase II</h2>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Now Selling
                </span>
              </div>
              <div className="flex items-center text-gray-600 mb-2 text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Elebu Extensions, Ibadan</span>
              </div>
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                The next phase of our successful Greensburg development.
              </p>
              <ul className="space-y-1 text-gray-600 text-sm mb-3">
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-1 text-emerald-600" />
                  <span className="line-clamp-1">Premium location and amenities</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-1 text-emerald-600" />
                  <span className="line-clamp-1">Modern infrastructure</span>
                </li>
              </ul>
              <Link
                to="/projects/greensburg-courtyard-2"
                className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-700"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Moniya Train Terminal Estate */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Moniya Train Terminal Estate"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold">Moniya Train Terminal Estate</h2>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Coming Soon
                </span>
              </div>
              <div className="flex items-center text-gray-600 mb-2 text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Near Obafemi Awolowo Terminal Station</span>
              </div>
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                Strategic location near IITA, Dry Port, Fajuyi Army Cantonment.
              </p>
              <ul className="space-y-1 text-gray-600 text-sm mb-3">
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-1 text-emerald-600" />
                  <span className="line-clamp-1">Free from acquisition</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 mr-1 text-emerald-600" />
                  <span className="line-clamp-1">Red Copy Registered Survey</span>
                </li>
              </ul>
              <div className="inline-flex items-center px-3 py-1 text-xs bg-yellow-50 text-yellow-800 rounded-md">
                Register Interest
              </div>
            </div>
          </div>

          {/* Zuma Rock Estate */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Zuma Rock Estate"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold">Zuma Rock Estate</h2>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Coming Soon
                </span>
              </div>
              <div className="flex items-center text-gray-600 mb-2 text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Abuja</span>
              </div>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                Coming soon: Premium residential development in Abuja.
              </p>
              <div className="inline-flex items-center px-3 py-1 text-xs bg-yellow-50 text-yellow-800 rounded-md">
                Register Interest
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;