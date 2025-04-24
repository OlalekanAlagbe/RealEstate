import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Home, BedDouble, Bath, CarFront, Ruler, Calendar, ArrowLeft, Phone, MessageSquare, User, Mail } from 'lucide-react';
import ImageCarousel from '../components/EstatesProjectCardImageCarousel';
import estates from '../data/estates';
import { Estate } from '../types';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Find the estate by ID
  const estate = estates.find(e => e.id === id);
  
  // Handle case when estate is not found
  useEffect(() => {
    AOS.init({ duration: 800, mirror: true });
    if (!estate) {
      navigate('/');
    }
  }, [estate, navigate]);
  
  if (!estate) {
    return null;
  }

  // Get related estates (excluding the current one)
  const relatedEstates = estates
    .filter(e => e.id !== estate.id)
    .slice(0, 3);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Estate Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 lg:px-20 py-6">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-green-600 transition-colors mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-1" />
            Back to listings
          </button>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{estate.name}</h1>
              <div className="flex items-center mt-2">
                <MapPin className="h-5 w-5 text-gray-500 mr-1" />
                <p className="text-gray-600">{estate.location}</p>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0 flex flex-col md:items-end">
              <div className={`inline-block py-1 px-3 rounded-full text-xs font-semibold mb-2 ${
                estate.status === 'Now Selling' 
                  ? 'bg-emerald-100 text-emerald-800' 
                  : 'bg-amber-100 text-amber-800'
              }`}>
                {estate.status}
              </div>
              <p className="text-2xl font-bold text-green-600">{estate.price}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Carousel */}
      <div className="mb-8">
        <ImageCarousel images={estate.images} />
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (Estate Details) */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <div data-aos="fade-up" className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{estate.description}</p>
              
              {/* Specifications */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center">
                  <BedDouble className="h-6 w-6 text-green-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Bedrooms</p>
                    <p className="font-semibold">{estate.specifications.bedrooms}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Bath className="h-6 w-6 text-green-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Bathrooms</p>
                    <p className="font-semibold">{estate.specifications.bathrooms}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <CarFront className="h-6 w-6 text-green-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Parking</p>
                    <p className="font-semibold">{estate.specifications.parkingSpaces} spaces</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Ruler className="h-6 w-6 text-green-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Land Size</p>
                    <p className="font-semibold">{estate.specifications.landSize}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Home className="h-6 w-6 text-green-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Building Size</p>
                    <p className="font-semibold">{estate.specifications.buildingSize}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-green-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Year Built</p>
                    <p className="font-semibold">{estate.specifications.yearBuilt}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Features */}
            <div data-aos="fade-up" data-aos-delay={2 * 100} className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {estate.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Amenities */}
            <div data-aos="fade-up" data-aos-delay={3 * 100} className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Amenities</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {estate.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Right Column (Contact & Related) */}
          <div>
            {/* Contact Card */}
            <div data-aos="fade-up" data-aos-delay={1 * 100} className="rounded-lg  lg:p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Interested in this property?</h2>
              
              <div className="rounded-2xl shadow-lg p-6  border border-gray-200">
                <h3 className="text-lg font-bold mb-6 text-green-700 border-b pb-3 border-green-100 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    <span>Contact Agent</span>
                </h3>
                <form
                    action="https://formsubmit.co/alagbeolalekan1000@gmail.com"
                    method="POST"
                    className="space-y-4"
                    target="_blank"
                >
                    <div className="relative">
                    <User className="absolute left-3 top-3 text-green-600 w-5 h-5" />
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    </div>

                    <div className="relative">
                    <Phone className="absolute left-3 top-3 text-green-600 w-5 h-5" />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    </div>

                    <div className="relative">
                    <Mail className="absolute left-3 top-3 text-green-600 w-5 h-5" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    </div>

                    <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-green-600 w-5 h-5" />
                    <textarea
                        name="message"
                        defaultValue={`Hello, I am interested in [${estate.name}]`}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent h-32 resize-none"
                    />
                    </div>

                    <label className="flex items-start gap-2 text-sm text-gray-600">
                    <input 
                        type="checkbox" 
                        required 
                        className="mt-1 rounded border-gray-300 text-green-600 focus:ring-green-500" 
                    />
                    <span>
                        I agree to the <a href="#" className="text-green-600 hover:underline">privacy policy</a> and <a href="#" className="text-green-600 hover:underline">terms of service</a>
                    </span>
                    </label>

                    <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                    >
                    Send Message
                    </button>
                </form>
                <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex flex-col sm:flex-row gap-3">
                                  <a
                                    href="tel:+2348102525792"
                                    className="flex-1 flex items-center justify-center gap-2 border border-green-600 text-green-600 py-2 rounded-lg hover:bg-green-50 transition duration-300"
                                  >
                                    <Phone className="w-4 h-4" />
                                    <span>Call Agent</span>
                                  </a>
                                  <a
                                    href="https://wa.me/2348102525792"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition duration-300"
                                  >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                    <span>WhatsApp</span>
                                  </a>
                    </div>
                </div>
              </div>
            </div>
            
            {/* Similar Properties */}
            <div data-aos="fade-up" data-aos-delay={2 * 100} className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Similar Properties</h2>
              
              <div className="space-y-4">
                {relatedEstates.map((relatedEstate) => (
                  <div 
                    key={relatedEstate.id}
                    className="flex space-x-3 pb-4 border-b last:border-b-0 border-gray-200"
                  >
                    <img 
                      src={relatedEstate.images[0]} 
                      alt={relatedEstate.name} 
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    
                    <div>
                      <h3 className="font-medium text-gray-900 hover:text-green-600 transition-colors">
                        <a href={`/projects/${relatedEstate.id}`}>{relatedEstate.name}</a>
                      </h3>
                      <p className="text-sm text-gray-600">{relatedEstate.location}</p>
                      <p className="text-green-600 font-medium mt-1">{relatedEstate.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;