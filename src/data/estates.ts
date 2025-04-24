import { Estate } from '../types';

const estates: Estate[] = [
  {
    id: 'biemol-estate',
    name: 'Biemol Estate',
    location: 'Elebu extension, Ibadan',
    price: '₦75,000,000',
    status: 'Now Selling',
    shortDescription: 'Luxury living at its finest with complete documentation including C of O and Red Copy Registered Survey.',
    description: 'Biemol Estate offers the pinnacle of luxury living in Ibadan. This spectacular development features modern architectural design with premium finishes throughout. Each property sits on generous land with beautifully landscaped gardens and private swimming pools. The estate offers 24-hour security, reliable power supply, and clean water systems, ensuring residents enjoy comfort and peace of mind.',
    features: [
      'Premium location with excellent infrastructure',
      'C of O and Red Copy Registered Survey',
      'Private swimming pool',
      '24-hour security',
      'Reliable power supply',
      'Clean water system'
    ],
    amenities: [
      'Recreation center',
      'Children\'s playground',
      'Jogging tracks',
      'Green spaces',
      'Shopping complex',
      'Fitness center'
    ],
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
      'https://images.pexels.com/photos/1643385/pexels-photo-1643385.jpeg',
      'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg'
    ],
    specifications: {
      bedrooms: 5,
      bathrooms: 6,
      parkingSpaces: 3,
      landSize: '1000 sqm',
      buildingSize: '450 sqm',
      yearBuilt: 2023
    }
  },
  {
    id: 'greensburg-courtyard-phase-i',
    name: 'Greensburg Courtyard Phase I',
    location: 'Elebu Extensions, Near Oluyole',
    price: '₦65,000,000',
    status: 'Now Selling',
    shortDescription: 'Modern living spaces with easy access to Oluyole Extension, Ring Road, and Apata.',
    description: 'Greensburg Courtyard Phase I represents modern living at its best. This thoughtfully designed community offers spacious homes with contemporary finishes and open-concept floor plans. The strategic location provides easy access to key areas of the city while maintaining a serene environment. Residents enjoy excellent connectivity, proximity to quality schools, and all the amenities needed for comfortable family living.',
    features: [
      'Strategic location with excellent connectivity',
      'Access to quality schools and roads',
      'Modern architectural design',
      'Spacious living areas',
      'Quality finishes',
      'Energy-efficient systems'
    ],
    amenities: [
      'Community center',
      'Children\'s play area',
      'Walkways',
      'Green spaces',
      'Security post',
      'Visitors\' parking'
    ],
    images: [
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
      'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg',
      'https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg',
      'https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg',
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
      'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg',
      'https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg'
    ],
    specifications: {
      bedrooms: 4,
      bathrooms: 5,
      parkingSpaces: 2,
      landSize: '650 sqm',
      buildingSize: '350 sqm',
      yearBuilt: 2022
    }
  },
  {
    id: 'greensburg-courtyard-phase-ii',
    name: 'Greensburg Courtyard Phase II',
    location: 'Elebu Extensions, Ibadan',
    price: '₦70,000,000',
    status: 'Now Selling',
    shortDescription: 'The next phase of our successful Greensburg development.',
    description: 'Building on the success of Phase I, Greensburg Courtyard Phase II offers an enhanced living experience with upgraded features and amenities. This extension of our popular development maintains the same commitment to quality while introducing new home designs and community features. Each residence is built with attention to detail, using premium materials and incorporating smart home technology for modern convenience.',
    features: [
      'Premium location and amenities',
      'Modern infrastructure',
      'Smart home technology',
      'Energy-efficient design',
      'Premium finishes',
      'Spacious floor plans'
    ],
    amenities: [
      'Swimming pool',
      'Tennis court',
      'Community hall',
      'Jogging path',
      'Landscaped gardens',
      'BBQ area'
    ],
    images: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg',
      'https://images.pexels.com/photos/2121120/pexels-photo-2121120.jpeg',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg',
      'https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg',
      'https://images.pexels.com/photos/4119832/pexels-photo-4119832.jpeg',
      'https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg'
    ],
    specifications: {
      bedrooms: 4,
      bathrooms: 5,
      parkingSpaces: 2,
      landSize: '700 sqm',
      buildingSize: '380 sqm',
      yearBuilt: 2024
    }
  },
  {
    id: 'moniya-train-terminal-estate',
    name: 'Moniya Train Terminal Estate',
    location: 'Near Obafemi Awolowo Terminal Station',
    price: '₦55,000,000',
    status: 'Coming Soon',
    shortDescription: 'Strategic location near IITA, Dry Port, Fajuyi Army Cantonment.',
    description: 'Moniya Train Terminal Estate offers a strategic investment opportunity in a rapidly developing area. Located near the train terminal, this estate is positioned to benefit from ongoing infrastructure development and increasing property values. The estate features modern homes with practical designs and durable construction, catering to both residential and investment buyers. With excellent transport links and proximity to key facilities, this development offers both convenience and growth potential.',
    features: [
      'Free from acquisition',
      'Red Copy Registered Survey',
      'Proximity to train terminal',
      'Easy access to major roads',
      'Practical home designs',
      'Investment potential'
    ],
    amenities: [
      'Perimeter fencing',
      'Security gate',
      'Central water system',
      'Drainage system',
      'Good road network',
      'Street lighting'
    ],
    images: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg',
      'https://images.pexels.com/photos/2287310/pexels-photo-2287310.jpeg',
      'https://images.pexels.com/photos/2360673/pexels-photo-2360673.jpeg',
      'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg',
      'https://images.pexels.com/photos/2983472/pexels-photo-2983472.jpeg',
      'https://images.pexels.com/photos/3316923/pexels-photo-3316923.jpeg'
    ],
    specifications: {
      bedrooms: 3,
      bathrooms: 4,
      parkingSpaces: 2,
      landSize: '500 sqm',
      buildingSize: '300 sqm',
      yearBuilt: 2024
    }
  },
  {
    id: 'zuma-rock-estate',
    name: 'Zuma Rock Estate',
    location: 'Abuja',
    price: '₦120,000,000',
    status: 'Coming Soon',
    shortDescription: 'Coming soon: Premium residential development in Abuja.',
    description: 'Zuma Rock Estate is set to become one of Abuja\'s most prestigious addresses. This premium development will offer exceptional homes in a prime location, with expansive views and world-class amenities. The architectural design blends contemporary aesthetics with functional living spaces, creating homes that are both beautiful and practical. With a focus on quality and luxury, Zuma Rock Estate represents the pinnacle of residential development in Nigeria\'s capital city.',
    features: [
      'Premium location in Abuja',
      'Luxury finishes',
      'Expansive views',
      'Spacious layouts',
      'High-end fixtures',
      'Custom design options'
    ],
    amenities: [
      'Clubhouse',
      'Swimming pool',
      'Tennis courts',
      'Fitness center',
      'Event space',
      'Children\'s playground'
    ],
    images: [
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
      'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg',
      'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg',
      'https://images.pexels.com/photos/2459552/pexels-photo-2459552.jpeg',
      'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      'https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg'
    ],
    specifications: {
      bedrooms: 6,
      bathrooms: 7,
      parkingSpaces: 4,
      landSize: '1200 sqm',
      buildingSize: '600 sqm',
      yearBuilt: 2025
    }
  }
];

export default estates;