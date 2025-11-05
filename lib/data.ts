export interface Listing {
  id: string;
  title: string;
  location: string;
  city: string;
  country: string;
  price: number;
  rating: number;
  images: string[];
  description: string;
  amenities: string[];
  bedrooms: number;
  bathrooms: number;
  guests: number;
  hostName: string;
  hostAvatar: string;
  hostBio: string;
  category: string;
  available: boolean;
}

export interface Booking {
  id: string;
  listingId: string;
  listingTitle: string;
  listingImage: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  isHost: boolean;
}

export const mockListings: Listing[] = [
  {
    id: '1',
    title: 'Cozy Mountain Cabin with Fireplace',
    location: 'Aspen, Colorado',
    city: 'Aspen',
    country: 'United States',
    price: 250,
    rating: 4.9,
    images: [
      'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
      'https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg',
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg',
    ],
    description: 'Experience the perfect mountain getaway in this charming cabin featuring a stone fireplace, mountain views, and modern amenities. Perfect for couples or small families looking to disconnect and enjoy nature.',
    amenities: ['WiFi', 'Fireplace', 'Kitchen', 'Parking', 'Hot Tub', 'Ski Access'],
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    hostName: 'Sarah Johnson',
    hostAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    hostBio: 'Local mountain guide and hospitality enthusiast',
    category: 'Cabin',
    available: true,
  },
  {
    id: '2',
    title: 'Modern Downtown Loft',
    location: 'Austin, Texas',
    city: 'Austin',
    country: 'United States',
    price: 180,
    rating: 4.7,
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    ],
    description: 'Stylish loft in the heart of downtown Austin. Walking distance to the best restaurants, bars, and live music venues. Features exposed brick, high ceilings, and contemporary furnishings.',
    amenities: ['WiFi', 'Air Conditioning', 'Kitchen', 'Washer/Dryer', 'Gym Access'],
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    hostName: 'Mike Rodriguez',
    hostAvatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
    hostBio: 'Austin local and music lover',
    category: 'Loft',
    available: true,
  },
  {
    id: '3',
    title: 'Beachfront Villa with Ocean Views',
    location: 'Malibu, California',
    city: 'Malibu',
    country: 'United States',
    price: 500,
    rating: 4.8,
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
      'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg',
    ],
    description: 'Luxurious beachfront villa with panoramic ocean views. Direct beach access, private pool, and spacious outdoor entertaining areas. Perfect for groups and special occasions.',
    amenities: ['WiFi', 'Beach Access', 'Pool', 'Kitchen', 'Parking', 'BBQ Grill', 'Ocean View'],
    bedrooms: 4,
    bathrooms: 3,
    guests: 8,
    hostName: 'Emma Thompson',
    hostAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    hostBio: 'Luxury hospitality specialist',
    category: 'Villa',
    available: true,
  },
  {
    id: '4',
    title: 'Historic Brownstone Apartment',
    location: 'Brooklyn, New York',
    city: 'Brooklyn',
    country: 'United States',
    price: 200,
    rating: 4.6,
    images: [
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg',
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
    ],
    description: 'Charming apartment in a historic Brooklyn brownstone. Original hardwood floors, high ceilings, and modern updates while maintaining old-world charm.',
    amenities: ['WiFi', 'Kitchen', 'Washer/Dryer', 'Heating', 'Near Subway'],
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    hostName: 'David Chen',
    hostAvatar: 'https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg',
    hostBio: 'Brooklyn resident and architecture enthusiast',
    category: 'Apartment',
    available: true,
  },
  {
    id: '5',
    title: 'Rustic Farmhouse Retreat',
    location: 'Napa Valley, California',
    city: 'Napa',
    country: 'United States',
    price: 350,
    rating: 4.9,
    images: [
      'https://images.pexels.com/photos/1396124/pexels-photo-1396124.jpeg',
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg',
    ],
    description: 'Peaceful farmhouse surrounded by vineyards and rolling hills. Features a wraparound porch, country kitchen, and stunning sunset views.',
    amenities: ['WiFi', 'Kitchen', 'Fireplace', 'Garden', 'Parking', 'Wine Tasting'],
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    hostName: 'Lisa Parker',
    hostAvatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
    hostBio: 'Wine country host and sommelier',
    category: 'Farmhouse',
    available: true,
  },
  {
    id: '6',
    title: 'Minimalist Studio in Arts District',
    location: 'Los Angeles, California',
    city: 'Los Angeles',
    country: 'United States',
    price: 120,
    rating: 4.5,
    images: [
      'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
      'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg',
    ],
    description: 'Clean, minimalist studio in the trendy Arts District. Perfect for solo travelers or couples. Walking distance to galleries, cafes, and nightlife.',
    amenities: ['WiFi', 'Air Conditioning', 'Kitchenette', 'Near Metro'],
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    hostName: 'Alex Kim',
    hostAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    hostBio: 'Artist and design enthusiast',
    category: 'Studio',
    available: true,
  },
];

export const mockBookings: Booking[] = [
  {
    id: '1',
    listingId: '1',
    listingTitle: 'Cozy Mountain Cabin with Fireplace',
    listingImage: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
    checkIn: '2024-02-15',
    checkOut: '2024-02-18',
    guests: 2,
    totalPrice: 750,
    status: 'upcoming',
  },
  {
    id: '2',
    listingId: '3',
    listingTitle: 'Beachfront Villa with Ocean Views',
    listingImage: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
    checkIn: '2024-01-10',
    checkOut: '2024-01-12',
    guests: 4,
    totalPrice: 1000,
    status: 'completed',
  },
];

export const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
  isHost: true,
};

export const categories = [
  'All',
  'Cabin',
  'Loft',
  'Villa',
  'Apartment',
  'Farmhouse',
  'Studio',
];

export const amenities = [
  'WiFi',
  'Kitchen',
  'Parking',
  'Pool',
  'Hot Tub',
  'Fireplace',
  'Air Conditioning',
  'Washer/Dryer',
  'Beach Access',
  'Ocean View',
  'Mountain View',
  'BBQ Grill',
  'Gym Access',
  'Pet Friendly',
  'Smoking Allowed',
];