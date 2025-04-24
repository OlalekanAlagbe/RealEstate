export interface Estate {
    id: string;
    name: string;
    location: string;
    price: string;
    status: "Now Selling" | "Coming Soon";
    description: string;
    shortDescription: string;
    features: string[];
    amenities: string[];
    images: string[];
    specifications: {
      bedrooms: number;
      bathrooms: number;
      parkingSpaces: number;
      landSize: string;
      buildingSize: string;
      yearBuilt: number;
    };
  }