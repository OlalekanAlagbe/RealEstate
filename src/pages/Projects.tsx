// import { MapPin, ArrowRight, Check } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const projectsData = [
//   {
//     id: 'biemol-estate',
//     title: 'Biemol Estate',
//     status: 'Now Selling',
//     statusColor: 'bg-green-100 text-green-800',
//     location: 'Elebu extension, Ibadan',
//     description: 'Luxury living at its finest with complete documentation including C of O and Red Copy Registered Survey.',
//     features: [
//       'Premium location with excellent infrastructure',
//       'C of O and Red Copy Registered Survey'
//     ],
//     imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80',
//     ctaType: 'link',
//     ctaText: 'Learn More'
//   },
//   {
//     id: 'greensburg-courtyard',
//     title: 'Greensburg Courtyard Phase I',
//     status: 'Now Selling',
//     statusColor: 'bg-green-100 text-green-800',
//     location: 'Elebu Extensions, Near Oluyole',
//     description: 'Modern living spaces with easy access to Oluyole Extension, Ring Road, and Apata.',
//     features: [
//       'Strategic location with excellent connectivity',
//       'Access to quality schools and roads'
//     ],
//     imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
//     ctaType: 'link',
//     ctaText: 'Learn More'
//   },
//   {
//     id: 'greensburg-courtyard-2',
//     title: 'Greensburg Courtyard Phase II',
//     status: 'Now Selling',
//     statusColor: 'bg-green-100 text-green-800',
//     location: 'Elebu Extensions, Ibadan',
//     description: 'The next phase of our successful Greensburg development.',
//     features: [
//       'Premium location and amenities',
//       'Modern infrastructure'
//     ],
//     imageUrl: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
//     ctaType: 'link',
//     ctaText: 'Learn More'
//   },
//   {
//     id: 'moniya-train-terminal-estate',
//     title: 'Moniya Train Terminal Estate',
//     status: 'Coming Soon',
//     statusColor: 'bg-yellow-100 text-yellow-800',
//     location: 'Near Obafemi Awolowo Terminal Station',
//     description: 'Strategic location near IITA, Dry Port, Fajuyi Army Cantonment.',
//     features: [
//       'Free from acquisition',
//       'Red Copy Registered Survey'
//     ],
//     imageUrl: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
//     ctaType: 'button',
//     ctaText: 'Register Interest'
//   },
//   {
//     id: 'zuma-rock-estate',
//     title: 'Zuma Rock Estate',
//     status: 'Coming Soon',
//     statusColor: 'bg-yellow-100 text-yellow-800',
//     location: 'Abuja',
//     description: 'Coming soon: Premium residential development in Abuja.',
//     features: [],
//     imageUrl: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
//     ctaType: 'button',
//     ctaText: 'Register Interest'
//   }
// ];

// export function Projects() {
//   return (
//     <div className="py-8">
//       <div className="px-2 sm:px-4 lg:px-6">
//         <h1 className="text-3xl font-bold text-gray-900 mt-0 my-10 text-center">Our Projects</h1>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projectsData.map((project) => (
//             <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-500 transition-shadow">
//               <img
//                 src={project.imageUrl}
//                 alt={project.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <div className="flex justify-between items-start mb-2">
//                   <h2 className="text-xl font-semibold">{project.title}</h2>
//                   <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${project.statusColor}`}>
//                     {project.status}
//                   </span>
//                 </div>
//                 <div className="flex items-center text-gray-600 mb-2 text-sm">
//                   <MapPin className="h-4 w-4 mr-1" />
//                   <span>{project.location}</span>
//                 </div>
//                 <p className="text-gray-600 text-sm mb-2 line-clamp-2">
//                   {project.description}
//                 </p>
//                 {project.features.length > 0 && (
//                   <ul className="space-y-1 text-gray-600 text-sm mb-3">
//                     {project.features.map((feature, index) => (
//                       <li key={index} className="flex items-center">
//                         <Check className="h-4 w-4 mr-1 text-emerald-600" />
//                         <span className="line-clamp-1">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//                 {project.ctaType === 'link' ? (
//                   <Link
//                     to={`/projects/${project.id}`}
//                     className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-700"
//                   >
//                     {project.ctaText}
//                     <ArrowRight className="ml-1 h-4 w-4" />
//                   </Link>
//                 ) : (
//                   <div className="inline-flex items-center px-3 py-1 text-xs bg-yellow-50 text-yellow-800 rounded-md">
//                     {project.ctaText}
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Projects;











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