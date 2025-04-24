// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { MapPin, Bed, Bath, Square, Calendar, DollarSign, Percent, MessageSquare, Mail, Phone, User } from 'lucide-react';
// import PaymentModal from '../components/PaymentModal';
// import toast from 'react-hot-toast';

// const propertyDetails = {
//   1: {
//     title: 'Modern luxury condo with city views',
//     description: 'This stunning modern condo offers breathtaking views of Lagos Island and luxurious amenities. Located in the heart of Victoria Island, this property represents an excellent investment opportunity in Nigeria\'s most prestigious real estate market.',
//     location: 'Victoria Island, Lagos',
//     price: '₦6,750,000',
//     returnRate: '5%',
//     beds: 3,
//     baths: 2,
//     sqft: 1800,
//     yearBuilt: 2020,
//     images: [
//       'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//       'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//       'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     ],
//     features: [
//       'Floor-to-ceiling windows',
//       'Modern kitchen with European appliances',
//       'Private balcony',
//       'In-unit laundry',
//       'Secure parking',
//       'Access to pool and fitness center'
//     ],
//     investmentHighlights: [
//       'Prime VI location',
//       'High rental demand from expats & executives',
//       'Appreciating market value',
//       'Professional property management',
//       'Stable rental income in USD'
//     ]
//   },
//   2: {
//     title: 'Luxury waterfront apartment',
//     description: 'Experience luxury living at its finest in this stunning apartment overlooking the Lagos Lagoon. With breathtaking views and premium amenities, this property offers an exceptional investment opportunity in Eko Atlantic’s thriving real estate market.',
//     location: 'Eko Atlantic, Lagos',
//     price: '₦13,500,000',
//     returnRate: '4%',
//     beds: 4,
//     baths: 3,
//     sqft: 2200,
//     yearBuilt: 2019,
//     images: [
//       'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//       'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//       'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     ],
//     features: [
//       'Panoramic lagoon views',
//       'Gourmet kitchen with imported finishes',
//       'Private terrace',
//       'Smart home technology',
//       '24/7 security & concierge',
//       'Direct beach access'
//     ],
//     investmentHighlights: [
//       'Most exclusive neighborhood in Lagos',
//       'High rental demand from diplomats',
//       'Luxury market stability',
//       'Strong appreciation potential',
//       'USD-denominated leases available'
//     ]
//   },
//   3: {
//     title: 'Spacious family home in Lekki',
//     description: 'This beautifully designed family home offers the perfect blend of comfort and investment potential. Located in Lekki Phase 1, this property presents an excellent opportunity for long-term value appreciation in Lagos\' fastest-growing district.',
//     location: 'Lekki Phase 1, Lagos',
//     price: '₦9,300,000',
//     returnRate: '6%',
//     beds: 5,
//     baths: 3,
//     sqft: 2800,
//     yearBuilt: 2021,
//     images: [
//       'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//       'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//       'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     ],
//     features: [
//       'Open concept layout',
//       'Landscaped garden',
//       'Smart home system',
//       'BQ (Boys’ Quarters)',
//       'Solar power backup',
//       'Secure compound'
//     ],
//     investmentHighlights: [
//       'Lekki’s most desirable area',
//       'Family-friendly gated community',
//       'Proximity to international schools',
//       'Rapid infrastructure development',
//       'High demand from expat families'
//     ]
//   },
//   4: {
//     title: 'Contemporary urban loft in Ikoyi',
//     description: 'This modern loft space combines industrial charm with contemporary luxury. Located in Ikoyi, it offers an attractive investment opportunity in one of Lagos’ most exclusive neighborhoods with high rental yields.',
//     location: 'Ikoyi, Lagos',
//     price: '₦8,700,000',
//     returnRate: '4.5%',
//     beds: 2,
//     baths: 2,
//     sqft: 1500,
//     yearBuilt: 2018,
//     images: [
//       'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//       'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//       'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     ],
//     features: [
//       'High ceilings',
//       'Designer finishes',
//       'Chef’s kitchen',
//       'City skyline views',
//       '24/7 security',
//       'Backup generator'
//     ],
//     investmentHighlights: [
//       'Ikoyi’s prime location',
//       'Walking distance to business districts',
//       'Preferred by corporate tenants',
//       'Consistent rental demand',
//       'High capital appreciation'
//     ]
//   },
//   5: {
//     title: 'Renovated luxury home in Banana Island',
//     description: 'This meticulously renovated property combines timeless elegance with modern luxury. Located on exclusive Banana Island, it represents a unique investment opportunity in Lagos’ most prestigious residential enclave.',
//     location: 'Banana Island, Lagos',
//     price: '₦12,750,000',
//     returnRate: '3.8%',
//     beds: 4,
//     baths: 3,
//     sqft: 3000,
//     yearBuilt: 2015,
//     images: [
//       'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//       'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//       'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     ],
//     features: [
//       'Imported marble floors',
//       'Smart home automation',
//       'Private swimming pool',
//       'Staff quarters',
//       'Underground parking',
//       'Panic rooms'
//     ],
//     investmentHighlights: [
//       'Most exclusive address in Nigeria',
//       'Ultra-high-net-worth tenants',
//       'USD-denominated rentals',
//       'Limited inventory',
//       'Status symbol property'
//     ]
//   },
//   6: {
//     title: 'Modern smart home in Ajah',
//     description: 'This cutting-edge smart home offers the perfect blend of technology and comfort. Located in Ajah’s upscale neighborhood, it presents an excellent opportunity in one of Lagos’ fastest-growing real estate markets.',
//     location: 'Ajah, Lagos',
//     price: '₦10,800,000',
//     returnRate: '5.2%',
//     beds: 4,
//     baths: 3,
//     sqft: 2600,
//     yearBuilt: 2022,
//     images: [
//       'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//       'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//       'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     ],
//     features: [
//       'Full home automation',
//       'Solar power system',
//       'Water treatment plant',
//       'Home cinema',
//       'Outdoor lounge',
//       'Smart security'
//     ],
//     investmentHighlights: [
//       'Next growth corridor of Lagos',
//       'Middle-class family demand',
//       'Proximity to new tech hubs',
//       'Green energy features',
//       'High rental yields'
//     ]
//   },
//   7: {
//     title: 'Elegant penthouse with lagoon views',
//     description: 'This luxurious penthouse offers unparalleled views of the Lagos Lagoon. With premium finishes and exclusive amenities, it represents a premium investment opportunity in Ikate Elegushi’s luxury real estate market.',
//     location: 'Ikate Elegushi, Lagos',
//     price: '₦18,000,000',
//     returnRate: '4.8%',
//     beds: 3,
//     baths: 3.5,
//     sqft: 2800,
//     yearBuilt: 2020,
//     images: [
//       'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//       'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//       'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     ],
//     features: [
//       '360-degree views',
//       'Private elevator access',
//       'Italian kitchen',
//       'Home spa',
//       'Entertainment lounge',
//       'Smart climate control'
//     ],
//     investmentHighlights: [
//       'Celebrity neighborhood',
//       'Oil & gas executive tenants',
//       'Luxury market resilience',
//       'High-end amenities',
//       'Strong USD rental potential'
//     ]
//   },
//   8: {
//     title: 'Luxury villa with pool in Chevron',
//     description: 'This contemporary villa offers resort-style living in Chevron Drive. With its premium location and luxury amenities, it presents an exceptional investment opportunity in Lagos’ high-end real estate market.',
//     location: 'Chevron Drive, Lagos',
//     price: '₦23,250,000',
//     returnRate: '4.2%',
//     beds: 5,
//     baths: 4,
//     sqft: 4200,
//     yearBuilt: 2021,
//     images: [
//       'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//       'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//       'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     ],
//     features: [
//       'Infinity pool',
//       'Home cinema',
//       'Smart security',
//       'Guest house',
//       'Outdoor kitchen',
//       'Landscaped gardens'
//     ],
//     investmentHighlights: [
//       'Oil executive neighborhood',
//       'Gated community security',
//       'Long-term tenant potential',
//       'Premium rental market',
//       'Capital appreciation'
//     ]
//   },
//   9: {
//     title: 'Exclusive waterfront retreat in Lekki',
//     description: 'This charming waterfront home offers a perfect blend of comfort and investment potential. Located on Lekki Peninsula, it presents an opportunity in one of Lagos’ most sought-after residential areas.',
//     location: 'Lekki Peninsula, Lagos',
//     price: '₦11,700,000',
//     returnRate: '5.5%',
//     beds: 4,
//     baths: 3,
//     sqft: 2400,
//     yearBuilt: 2019,
//     images: [
//       'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//       'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//       'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     ],
//     features: [
//       'Private jetty',
//       'Waterfront views',
//       'Open-plan design',
//       'Solar power',
//       'Outdoor entertainment',
//       'Smart home features'
//     ],
//     investmentHighlights: [
//       'Exclusive peninsula location',
//       'Booming rental market',
//       'Proximity to new developments',
//       'High-end tenant demand',
//       'Strong capital growth'
//     ]
//   }
// };

// const PropertyDetail = () => {
//   const { id } = useParams<{ id: string }>();
//   const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
//   const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
//   const property = id ? propertyDetails[Number(id)] : null;

 
//   if (!property) {
//     return <div className="text-center py-12">Property not found</div>;
//   }

//   const handleInvestClick = () => {
//     setIsPaymentModalOpen(true);
//   };

//   return (
//     <div className="bg-gray-50">
//       {/* Image Gallery */}
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {property.images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Property view ${index + 1}`}
//               className="w-full h-64 object-cover rounded-lg"
//             />
//           ))}
//         </div>
//       </div>
  
//       {/* Property Information */}
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-2">
//             <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
//             <div className="flex items-center gap-2 text-gray-600 mb-6">
//               <MapPin className="w-5 h-5" />
//               <span>{property.location}</span>
//             </div>
  
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//               <div className="bg-white p-4 rounded-lg shadow-sm">
//                 <div className="flex items-center gap-2 text-gray-600 mb-1">
//                   <Bed className="w-4 h-4" />
//                   <span>{property.beds} Beds</span>
//                 </div>
//               </div>
//               <div className="bg-white p-4 rounded-lg shadow-sm">
//                 <div className="flex items-center gap-2 text-gray-600 mb-1">
//                   <Bath className="w-4 h-4" />
//                   <span>{property.baths} Baths</span>
//                 </div>
//               </div>
//               <div className="bg-white p-4 rounded-lg shadow-sm">
//                 <div className="flex items-center gap-2 text-gray-600 mb-1">
//                   <Square className="w-4 h-4" />
//                   <span>{property.sqft} Sqft</span>
//                 </div>
//               </div>
//               <div className="bg-white p-4 rounded-lg shadow-sm">
//                 <div className="flex items-center gap-2 text-gray-600 mb-1">
//                   <Calendar className="w-4 h-4" />
//                   <span>Built {property.yearBuilt}</span>
//                 </div>
//               </div>
//             </div>
  
//             <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
//               <h2 className="text-xl font-semibold mb-4">Description</h2>
//               <p className="text-gray-600">{property.description}</p>
//             </div>
  
//             <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
//               <h2 className="text-xl font-semibold mb-4">Features</h2>
//               <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {property.features.map((feature, index) => (
//                   <li key={index} className="flex items-center gap-2 text-gray-600">
//                     <span className="w-2 h-2 bg-green-600 rounded-full"></span>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4 border border-gray-200">
//               {/* Contact Form */}
//               <div>
//                 <h3 className="text-lg font-bold mb-6 text-green-700 border-b pb-2 border-green-300">
//                   Contact Us
//                 </h3>
//                 <form
//                   action="https://formsubmit.co/alagbeolalekan1000@gmail.com"
//                   method="POST"
//                   className="space-y-4"
//                   target="_blank"
//                 >
//                   {/* Name */}
//                   <div className="relative">
//                     <User className="absolute left-3 top-3 text-green-600 w-5 h-5" />
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Your Name"
//                       required
//                       className="w-full pl-10 pr-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                     />
//                   </div>

//                   {/* Phone */}
//                   <div className="relative">
//                     <Phone className="absolute left-3 top-3 text-green-600 w-5 h-5" />
//                     <input
//                       type="tel"
//                       name="phone"
//                       placeholder="Phone Number"
//                       required
//                       className="w-full pl-10 pr-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                     />
//                   </div>

//                   {/* Email */}
//                   <div className="relative">
//                     <Mail className="absolute left-3 top-3 text-green-600 w-5 h-5" />
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Your Email"
//                       required
//                       className="w-full pl-10 pr-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//                     />
//                   </div>

//                   {/* Message */}
//                   <div className="relative">
//                     <MessageSquare className="absolute left-3 top-3 text-green-600 w-5 h-5" />
//                     <textarea
//                       name="message"
//                       defaultValue={`Hello, I am interested in [${property.title}]`}
//                       required
//                       className="w-full pl-10 pr-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 h-28 resize-none"
//                     />
//                   </div>

//                   {/* Terms */}
//                   <label className="text-sm text-gray-600 flex items-start gap-2">
//                     <input type="checkbox" required className="mt-1" />
//                     <span>
//                       By submitting this form I agree to the{" "}
//                       <a href="#" className="text-green-600 underline">
//                         Terms of Use
//                       </a>
//                     </span>
//                   </label>

//                   {/* Buttons */}
//                   <button
//                     type="submit"
//                     className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
//                   >
//                     Send Message
//                   </button>
//                   <a
//                     href="tel:+2348102525792"
//                     className="w-full block text-center border border-green-600 text-green-600 py-2 rounded-md hover:bg-green-50 transition duration-300"
//                   >
//                     Call
//                   </a>
//                   <a
//                     href="https://wa.me/2348102525792"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-full block text-center bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
//                   >
//                     WhatsApp
//                   </a>
//                 </form>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
  
//       <PaymentModal
//         isOpen={isPaymentModalOpen}
//         onClose={() => setIsPaymentModalOpen(false)}
//         propertyId={Number(id)}
//         propertyTitle={property.title}
//         propertyPrice={property.price}
//       />
//     </div>
//   );
  

// };

// export default PropertyDetail;






import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Calendar, DollarSign, Percent, MessageSquare, Mail, Phone, User, Heart, Share2, Home, TrendingUp, Shield, Star } from 'lucide-react';
import PaymentModal from '../components/PaymentModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import propertyDetails data (same as before)
const propertyDetails = {
    1: {
      title: 'Modern luxury condo with city views',
      description: 'This stunning modern condo offers breathtaking views of Lagos Island and luxurious amenities. Located in the heart of Victoria Island, this property represents an excellent investment opportunity in Nigeria\'s most prestigious real estate market.',
      location: 'Victoria Island, Lagos',
      price: '₦6,750,000',
      returnRate: '5%',
      beds: 3,
      baths: 2,
      sqft: 1800,
      yearBuilt: 2020,
      images: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      ],
      features: [
        'Floor-to-ceiling windows',
        'Modern kitchen with European appliances',
        'Private balcony',
        'In-unit laundry',
        'Secure parking',
        'Access to pool and fitness center'
      ],
      investmentHighlights: [
        'Prime VI location',
        'High rental demand from expats & executives',
        'Appreciating market value',
        'Professional property management',
        'Stable rental income in USD'
      ]
    },
    2: {
      title: 'Luxury waterfront apartment',
      description: 'Experience luxury living at its finest in this stunning apartment overlooking the Lagos Lagoon. With breathtaking views and premium amenities, this property offers an exceptional investment opportunity in Eko Atlantic’s thriving real estate market.',
      location: 'Eko Atlantic, Lagos',
      price: '₦13,500,000',
      returnRate: '4%',
      beds: 4,
      baths: 3,
      sqft: 2200,
      yearBuilt: 2019,
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      ],
      features: [
        'Panoramic lagoon views',
        'Gourmet kitchen with imported finishes',
        'Private terrace',
        'Smart home technology',
        '24/7 security & concierge',
        'Direct beach access'
      ],
      investmentHighlights: [
        'Most exclusive neighborhood in Lagos',
        'High rental demand from diplomats',
        'Luxury market stability',
        'Strong appreciation potential',
        'USD-denominated leases available'
      ]
    },
    3: {
      title: 'Spacious family home in Lekki',
      description: 'This beautifully designed family home offers the perfect blend of comfort and investment potential. Located in Lekki Phase 1, this property presents an excellent opportunity for long-term value appreciation in Lagos\' fastest-growing district.',
      location: 'Lekki Phase 1, Lagos',
      price: '₦9,300,000',
      returnRate: '6%',
      beds: 5,
      baths: 3,
      sqft: 2800,
      yearBuilt: 2021,
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      ],
      features: [
        'Open concept layout',
        'Landscaped garden',
        'Smart home system',
        'BQ (Boys’ Quarters)',
        'Solar power backup',
        'Secure compound'
      ],
      investmentHighlights: [
        'Lekki’s most desirable area',
        'Family-friendly gated community',
        'Proximity to international schools',
        'Rapid infrastructure development',
        'High demand from expat families'
      ]
    },
    4: {
      title: 'Contemporary urban loft in Ikoyi',
      description: 'This modern loft space combines industrial charm with contemporary luxury. Located in Ikoyi, it offers an attractive investment opportunity in one of Lagos’ most exclusive neighborhoods with high rental yields.',
      location: 'Ikoyi, Lagos',
      price: '₦8,700,000',
      returnRate: '4.5%',
      beds: 2,
      baths: 2,
      sqft: 1500,
      yearBuilt: 2018,
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      ],
      features: [
        'High ceilings',
        'Designer finishes',
        'Chef’s kitchen',
        'City skyline views',
        '24/7 security',
        'Backup generator'
      ],
      investmentHighlights: [
        'Ikoyi’s prime location',
        'Walking distance to business districts',
        'Preferred by corporate tenants',
        'Consistent rental demand',
        'High capital appreciation'
      ]
    },
    5: {
      title: 'Renovated luxury home in Banana Island',
      description: 'This meticulously renovated property combines timeless elegance with modern luxury. Located on exclusive Banana Island, it represents a unique investment opportunity in Lagos’ most prestigious residential enclave.',
      location: 'Banana Island, Lagos',
      price: '₦12,750,000',
      returnRate: '3.8%',
      beds: 4,
      baths: 3,
      sqft: 3000,
      yearBuilt: 2015,
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      ],
      features: [
        'Imported marble floors',
        'Smart home automation',
        'Private swimming pool',
        'Staff quarters',
        'Underground parking',
        'Panic rooms'
      ],
      investmentHighlights: [
        'Most exclusive address in Nigeria',
        'Ultra-high-net-worth tenants',
        'USD-denominated rentals',
        'Limited inventory',
        'Status symbol property'
      ]
    },
    6: {
      title: 'Modern smart home in Ajah',
      description: 'This cutting-edge smart home offers the perfect blend of technology and comfort. Located in Ajah’s upscale neighborhood, it presents an excellent opportunity in one of Lagos’ fastest-growing real estate markets.',
      location: 'Ajah, Lagos',
      price: '₦10,800,000',
      returnRate: '5.2%',
      beds: 4,
      baths: 3,
      sqft: 2600,
      yearBuilt: 2022,
      images: [
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      ],
      features: [
        'Full home automation',
        'Solar power system',
        'Water treatment plant',
        'Home cinema',
        'Outdoor lounge',
        'Smart security'
      ],
      investmentHighlights: [
        'Next growth corridor of Lagos',
        'Middle-class family demand',
        'Proximity to new tech hubs',
        'Green energy features',
        'High rental yields'
      ]
    },
    7: {
      title: 'Elegant penthouse with lagoon views',
      description: 'This luxurious penthouse offers unparalleled views of the Lagos Lagoon. With premium finishes and exclusive amenities, it represents a premium investment opportunity in Ikate Elegushi’s luxury real estate market.',
      location: 'Ikate Elegushi, Lagos',
      price: '₦18,000,000',
      returnRate: '4.8%',
      beds: 3,
      baths: 3.5,
      sqft: 2800,
      yearBuilt: 2020,
      images: [
        'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      ],
      features: [
        '360-degree views',
        'Private elevator access',
        'Italian kitchen',
        'Home spa',
        'Entertainment lounge',
        'Smart climate control'
      ],
      investmentHighlights: [
        'Celebrity neighborhood',
        'Oil & gas executive tenants',
        'Luxury market resilience',
        'High-end amenities',
        'Strong USD rental potential'
      ]
    },
    8: {
      title: 'Luxury villa with pool in Chevron',
      description: 'This contemporary villa offers resort-style living in Chevron Drive. With its premium location and luxury amenities, it presents an exceptional investment opportunity in Lagos’ high-end real estate market.',
      location: 'Chevron Drive, Lagos',
      price: '₦23,250,000',
      returnRate: '4.2%',
      beds: 5,
      baths: 4,
      sqft: 4200,
      yearBuilt: 2021,
      images: [
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      ],
      features: [
        'Infinity pool',
        'Home cinema',
        'Smart security',
        'Guest house',
        'Outdoor kitchen',
        'Landscaped gardens'
      ],
      investmentHighlights: [
        'Oil executive neighborhood',
        'Gated community security',
        'Long-term tenant potential',
        'Premium rental market',
        'Capital appreciation'
      ]
    },
    9: {
      title: 'Exclusive waterfront retreat in Lekki',
      description: 'This charming waterfront home offers a perfect blend of comfort and investment potential. Located on Lekki Peninsula, it presents an opportunity in one of Lagos’ most sought-after residential areas.',
      location: 'Lekki Peninsula, Lagos',
      price: '₦11,700,000',
      returnRate: '5.5%',
      beds: 4,
      baths: 3,
      sqft: 2400,
      yearBuilt: 2019,
      images: [
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      ],
      features: [
        'Private jetty',
        'Waterfront views',
        'Open-plan design',
        'Solar power',
        'Outdoor entertainment',
        'Smart home features'
      ],
      investmentHighlights: [
        'Exclusive peninsula location',
        'Booming rental market',
        'Proximity to new developments',
        'High-end tenant demand',
        'Strong capital growth'
      ]
    }
  };
const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const property = id ? propertyDetails[Number(id)] : null;

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
        <div className="text-center py-12 max-w-md mx-auto">
          <div className="text-6xl mb-4">🏡</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Property Not Found</h2>
          <p className="text-gray-600 mb-6">We couldn't find the property you're looking for.</p>
          <a 
            href="/properties" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition duration-300"
          >
            Browse Properties
          </a>
        </div>
      </div>
    );
  }

  const handleInvestClick = () => {
    setIsPaymentModalOpen(true);
  };

  return (
    <div className="bg-white">
      {/* Hero Gallery */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="h-96 md:h-[32rem] relative" // Added 'relative' for positioning
        >
          {property.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  src={image}
                  alt={`Property view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
          
          {/* Custom Navigation Buttons */}
          <div className="custom-next absolute right-4 top-1/2 z-10 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-green-50 hover:shadow-lg transition-all duration-300 text-green-600 hover:text-green-700">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className="custom-prev absolute left-4 top-1/2 z-10 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-green-50 hover:shadow-lg transition-all duration-300 text-green-600 hover:text-green-700">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </Swiper>
      </div>

      {/* Property Information */}
      <div className="container mx-auto px-4 lg:px-20 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-12">
              <div className="container mx-auto lg:px-4">
                <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

                    {/* Left: Title, Location, Features */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h1 className="lg:text-3xl text-xl font-bold text-gray-900">{property.title}</h1>
                        <div className="flex items-center gap-2 text-gray-600 mt-2">
                          <MapPin className="w-5 h-5 text-green-600" />
                          <span>{property.location}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 text-gray-700">
                            <Bed className="w-5 h-5 text-green-600" />
                            <span className="font-medium">{property.beds} Beds</span>
                          </div>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 text-gray-700">
                            <Bath className="w-5 h-5 text-green-600" />
                            <span className="font-medium">{property.baths} Baths</span>
                          </div>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 text-gray-700">
                            <Square className="w-5 h-5 text-green-600" />
                            <span className="font-medium">{property.sqft} Sqft</span>
                          </div>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 text-gray-700">
                            <Calendar className="w-5 h-5 text-green-600" />
                            <span className="font-medium">Built {property.yearBuilt}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Price & Actions */}
                    <div className="flex flex-col items-start md:items-end gap-4 w-full lg:w-64">
                      <div className="lg:text-3xl text-xl font-bold text-green-700">{property.price}</div>

                      <button
                        onClick={handleInvestClick}
                        className="w-full md:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium py-2.5 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                      >
                        Invest Now
                      </button>

                      <div className="flex items-center gap-3 mt-2">
                        <button 
                          onClick={() => setIsFavorite(!isFavorite)}
                          className={`p-2 rounded-full ${isFavorite ? 'text-red-500 bg-red-50' : 'text-gray-400 bg-white'} shadow-sm border border-gray-200 hover:shadow-md transition-all`}
                        >
                          <Heart className="w-5 h-5" fill={isFavorite ? 'currentColor' : 'none'} />
                        </button>
                        <button className="p-2 rounded-full text-gray-600 bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all">
                          <Share2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>


            {/* Description */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <Home className="w-5 h-5 text-green-600" />
                <span>Property Description</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">{property.description}</p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <Star className="w-5 h-5 text-green-600" />
                <span>Features & Amenities</span>
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-1 w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Investment Highlights */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span>Investment Highlights</span>
                </h2>
                <ul className="space-y-3">
                  {property.investmentHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-1 w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6  border border-gray-200">
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
                    defaultValue={`Hello, I am interested in [${property.title}]`}
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

            {/* Agent Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold mb-6 text-gray-800 border-b pb-3 border-gray-100">
                Listing Agent
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/men/42.jpg" 
                    alt="Agent" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">David Adeleke</h4>
                  <p className="text-gray-600 text-sm">Luxury Property Specialist</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Verified Agent</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-green-600" fill="currentColor" />
                  <span>4.9 (128 reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Home className="w-4 h-4 text-green-600" />
                  <span>15+ years experience</span>
                </div>
              </div>
            </div>

          
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        propertyId={Number(id)}
        propertyTitle={property.title}
        propertyPrice={property.price}
      />
    </div>
  );
};

export default PropertyDetail;