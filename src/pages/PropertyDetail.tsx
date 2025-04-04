import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Calendar, DollarSign, Percent } from 'lucide-react';
import PaymentModal from '../components/PaymentModal';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

// const propertyDetails = {
//   1: {
//     title: 'Modern downtown condo with city views',
//     description: 'This stunning modern condo offers breathtaking city views and luxurious amenities. Located in the heart of downtown Phoenix, this property represents an excellent investment opportunity in a rapidly growing market.',
//     location: 'Phoenix, Arizona',
//     price: '$4,500',
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
//       'Modern kitchen with stainless steel appliances',
//       'Private balcony',
//       'In-unit laundry',
//       'Secure parking',
//       'Access to pool and fitness center'
//     ],
//     investmentHighlights: [
//       'Prime downtown location',
//       'Strong rental demand',
//       'Appreciating market value',
//       'Professional property management',
//       'Stable rental income'
//     ]
//   },
//   2: {
//     title: 'Luxury oceanfront apartment in Miami',
//     description: 'Experience luxury living at its finest in this stunning oceanfront apartment. With breathtaking views of the Atlantic and premium amenities, this property offers an exceptional investment opportunity in Miami\'s thriving real estate market.',
//     location: 'Miami Beach',
//     price: '$9,000',
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
//       'Ocean views from every room',
//       'Gourmet kitchen',
//       'Private terrace',
//       'Smart home technology',
//       'Wine cellar',
//       'Beach access'
//     ],
//     investmentHighlights: [
//       'Premium location',
//       'High rental demand',
//       'Luxury market stability',
//       'Strong appreciation potential',
//       'Year-round rental opportunity'
//     ]
//   },
//   3: {
//     title: 'Spacious family home in growing neighborhood',
//     description: 'This beautifully designed family home offers the perfect blend of comfort and investment potential. Located in a rapidly developing area of Portland, this property presents an excellent opportunity for long-term value appreciation.',
//     location: 'Portland, Oregon',
//     price: '$6,200',
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
//       'Large backyard',
//       'Modern appliances',
//       'Home office space',
//       'Energy efficient',
//       'Smart security system'
//     ],
//     investmentHighlights: [
//       'Growing neighborhood',
//       'Family-friendly area',
//       'Strong school district',
//       'Increasing property values',
//       'Low maintenance costs'
//     ]
//   },
//   4: {
//     title: 'Contemporary urban loft in downtown',
//     description: 'This modern loft space combines industrial charm with contemporary luxury. Located in Seattle\'s vibrant downtown, it offers an attractive investment opportunity in one of the city\'s most dynamic neighborhoods.',
//     location: 'Seattle, Washington',
//     price: '$5,800',
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
//       'Exposed brick walls',
//       'Designer kitchen',
//       'City views',
//       'Building gym access',
//       'Secured parking'
//     ],
//     investmentHighlights: [
//       'Prime urban location',
//       'Tech hub proximity',
//       'Strong rental market',
//       'Modern amenities',
//       'Appreciation potential'
//     ]
//   },
//   5: {
//     title: 'Renovated historic brownstone',
//     description: 'This meticulously renovated brownstone combines historic charm with modern luxury. Located in Boston\'s prestigious neighborhood, it represents a unique investment opportunity in a historically appreciating market.',
//     location: 'Boston, Massachusetts',
//     price: '$8,500',
//     returnRate: '3.8%',
//     beds: 4,
//     baths: 3,
//     sqft: 3000,
//     yearBuilt: 1890,
//     images: [
//       'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//       'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//       'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//     ],
//     features: [
//       'Original hardwood floors',
//       'Custom millwork',
//       'Chef\'s kitchen',
//       'Period details',
//       'Garden space',
//       'Wine cellar'
//     ],
//     investmentHighlights: [
//       'Historic district',
//       'Limited inventory market',
//       'Strong appreciation history',
//       'High-end rental market',
//       'Tax advantages'
//     ]
//   },
//   6: {
//     title: 'Modern suburban smart home',
//     description: 'This cutting-edge smart home offers the perfect blend of technology and comfort. Located in Austin\'s growing suburbs, it presents an excellent opportunity in one of America\'s fastest-growing real estate markets.',
//     location: 'Austin, Texas',
//     price: '$7,200',
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
//       'Smart home automation',
//       'Solar panels',
//       'Electric car charging',
//       'Home theater',
//       'Outdoor kitchen',
//       'Pool'
//     ],
//     investmentHighlights: [
//       'Tech hub growth',
//       'Strong job market',
//       'Population growth',
//       'Green features',
//       'High rental demand'
//     ]
//   },
//   7: {
//     title: 'Elegant penthouse with skyline views',
//     description: 'This luxurious penthouse offers unparalleled views of the Chicago skyline. With premium finishes and exclusive amenities, it represents a premium investment opportunity in the luxury real estate market.',
//     location: 'Chicago, Illinois',
//     price: '$12,000',
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
//       'Floor-to-ceiling windows',
//       'Private elevator',
//       'Custom cabinetry',
//       'Smart home features',
//       'Private terrace',
//       'Wine room'
//     ],
//     investmentHighlights: [
//       'Premium location',
//       'Luxury market stability',
//       'High-end amenities',
//       'Strong rental yield',
//       'Tax advantages'
//     ]
//   },
//   8: {
//     title: 'Modern villa with pool',
//     description: 'This contemporary villa offers resort-style living in the heart of Los Angeles. With its premium location and luxury amenities, it presents an exceptional investment opportunity in the high-end real estate market.',
//     location: 'Los Angeles, California',
//     price: '$15,500',
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
//       'Home theater',
//       'Smart home system',
//       'Guest house',
//       'Outdoor kitchen',
//       'Mountain views'
//     ],
//     investmentHighlights: [
//       'Prime location',
//       'Luxury market',
//       'Celebrity neighborhood',
//       'Strong appreciation',
//       'Premium rental potential'
//     ]
//   },
//   9: {
//     title: 'Cozy mountain retreat',
//     description: 'This charming mountain home offers a perfect blend of comfort and investment potential. Located in Denver\'s sought-after neighborhood, it presents an opportunity in Colorado\'s growing real estate market.',
//     location: 'Denver, Colorado',
//     price: '$7,800',
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
//       'Mountain views',
//       'Fireplace',
//       'Updated kitchen',
//       'Home office',
//       'Heated garage',
//       'Outdoor deck'
//     ],
//     investmentHighlights: [
//       'Growing market',
//       'Outdoor lifestyle',
//       'Strong rental demand',
//       'Appreciation potential',
//       'Year-round appeal'
//     ]
//   }
// };

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
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const property = id ? propertyDetails[Number(id)] : null;

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const { data: payments } = await supabase
          .from('payments')
          .select('status')
          .eq('property_id', id)
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })
          .limit(1);

        if (payments && payments.length > 0) {
          setPaymentStatus(payments[0].status);
        }
      } catch (error) {
        console.error('Error checking payment status:', error);
      }
    };

    if (id) {
      checkPaymentStatus();
    }
  }, [id]);

  if (!property) {
    return <div className="text-center py-12">Property not found</div>;
  }

  const handleInvestClick = () => {
    setIsPaymentModalOpen(true);
  };

  return (
    <div className="bg-gray-50">
      {/* Image Gallery */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {property.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Property view ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Property Information */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
            <div className="flex items-center gap-2 text-gray-600 mb-6">
              <MapPin className="w-5 h-5" />
              <span>{property.location}</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <Bed className="w-4 h-4" />
                  <span>{property.beds} Beds</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <Bath className="w-4 h-4" />
                  <span>{property.baths} Baths</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <Square className="w-4 h-4" />
                  <span>{property.sqft} Sqft</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>Built {property.yearBuilt}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-gray-600">{property.description}</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  {/* <DollarSign className="w-6 h-6 text-green-600" /> */}
                  <span className="text-2xl font-bold">{property.price}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Percent className="w-5 h-5" />
                  <span>{property.returnRate} Expected Return</span>
                </div>
              </div>

              {paymentStatus ? (
                <div className={`mb-4 p-3 rounded-md ${
                  paymentStatus === 'confirmed' 
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  Payment Status: {paymentStatus.charAt(0).toUpperCase() + paymentStatus.slice(1)}
                </div>
              ) : (
                <button
                  onClick={handleInvestClick}
                  className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 mb-4"
                >
                  Invest Now
                </button>
              )}

              <button className="w-full border border-green-600 text-green-600 py-3 rounded-md hover:bg-green-50">
                Schedule Viewing
              </button>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">Investment Highlights</h3>
                <ul className="space-y-3">
                  {property.investmentHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
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