// ========================================
// HOTEL BRAND
// ========================================

export const hotelData = {
  name: "Ethiopian International Hotel",
  shortName: "Ethiopian International",
  tagline: "A New Standard of Luxury. Rooted in Ethiopia.",
  description:
    "Experience exceptional Ethiopian hospitality where timeless culture meets contemporary luxury.",
  location: "Addis Ababa, Ethiopia",
  rating: 4.8,
  established: "1960",
};


// ========================================
// NAVIGATION
// ========================================

export const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Rooms",
    path: "/rooms",
  },
  {
    name: "Dining",
    path: "/dining",
  },
  {
    name: "Facilities",
    path: "/facilities",
  },
  {
    name: "Offers",
    path: "/offers",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];


// ========================================
// HERO SLIDES
// ========================================

export const heroSlides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "WELCOME TO ETHIOPIA",
    title: "A New Standard",
    highlight: "of Luxury.",
    description:
      "Experience exceptional Ethiopian hospitality where timeless culture meets contemporary luxury.",
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "YOUR PERFECT ESCAPE",
    title: "Stay Above",
    highlight: "Expectation.",
    description:
      "Elegant rooms, unforgettable dining, and thoughtful service designed around your stay.",
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "ROOTED IN ETHIOPIA",
    title: "Discover",
    highlight: "Exceptional.",
    description:
      "A sophisticated destination inspired by Ethiopia and created for the modern traveler.",
  },
];


// ========================================
// HOTEL SERVICES
// ========================================

export const services = [
  {
    id: 1,
    number: "01",
    title: "Luxury Rooms",
    description:
      "Thoughtfully designed rooms and suites combining contemporary comfort with Ethiopian character.",
    icon: "BedDouble",
    path: "/rooms",
  },

  {
    id: 2,
    number: "02",
    title: "Fine Dining",
    description:
      "Discover exceptional Ethiopian and international cuisine prepared with carefully selected ingredients.",
    icon: "UtensilsCrossed",
    path: "/dining",
  },

  {
    id: 3,
    number: "03",
    title: "Wellness",
    description:
      "Restore your balance with relaxing treatments, wellness experiences, and tranquil spaces.",
    icon: "Sparkles",
    path: "/facilities",
  },

  {
    id: 4,
    number: "04",
    title: "Concierge",
    description:
      "Personalized assistance designed to make every moment of your stay effortless and memorable.",
    icon: "ConciergeBell",
    path: "/contact",
  },
];


// ========================================
// HOTEL STATISTICS
// ========================================

export const statistics = [
  {
    id: 1,
    value: 120,
    suffix: "+",
    label: "Luxury Rooms",
  },

  {
    id: 2,
    value: 64,
    suffix: "+",
    label: "Years of Hospitality",
  },

  {
    id: 3,
    value: 25,
    suffix: "+",
    label: "Dining Experiences",
  },

  {
    id: 4,
    value: 4.8,
    suffix: "/5",
    label: "Guest Rating",
  },
];


// ========================================
// ROOMS
// ========================================

export const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    type: "King Bed",
    price: 180,
    currency: "USD",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85",
    description:
      "A beautifully appointed room designed for comfort, relaxation, and effortless living.",
    guests: 2,
    size: "32 m²",
    features: [
      "King Bed",
      "City View",
      "Free Wi-Fi",
      "Breakfast Included",
    ],
  },

  {
    id: 2,
    name: "Executive Suite",
    type: "King Bed",
    price: 280,
    currency: "USD",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85",
    description:
      "Spacious elegance with a separate living area and premium amenities.",
    guests: 3,
    size: "52 m²",
    features: [
      "King Bed",
      "Living Room",
      "City View",
      "Breakfast Included",
    ],
  },

  {
    id: 3,
    name: "Presidential Suite",
    type: "King Bed",
    price: 520,
    currency: "USD",
    image:
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=85",
    description:
      "Our most prestigious accommodation, combining extraordinary space and refined Ethiopian luxury.",
    guests: 4,
    size: "95 m²",
    features: [
      "King Bed",
      "Private Lounge",
      "Premium View",
      "Butler Service",
    ],
  },
];


// ========================================
// DINING
// ========================================

export const diningOptions = [
  {
    id: 1,
    name: "Addis Restaurant",
    category: "Ethiopian Cuisine",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
    description:
      "Authentic Ethiopian flavors presented with contemporary elegance.",
  },

  {
    id: 2,
    name: "International Kitchen",
    category: "International Cuisine",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",
    description:
      "A sophisticated menu bringing together flavors from around the world.",
  },

  {
    id: 3,
    name: "Sky Lounge",
    category: "Bar & Lounge",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=85",
    description:
      "Relax above the city with signature drinks and unforgettable views.",
  },
];


// ========================================
// FACILITIES
// ========================================

export const facilities = [
  {
    id: 1,
    title: "Fitness Center",
    icon: "Dumbbell",
    description:
      "Modern equipment and dedicated spaces for maintaining your fitness routine.",
  },

  {
    id: 2,
    title: "Swimming Pool",
    icon: "Waves",
    description:
      "Relax beside our elegant pool and enjoy a peaceful escape from the city.",
  },

  {
    id: 3,
    title: "Spa & Wellness",
    icon: "Sparkles",
    description:
      "Rejuvenating treatments designed to restore balance and relaxation.",
  },

  {
    id: 4,
    title: "Business Center",
    icon: "BriefcaseBusiness",
    description:
      "Professional spaces and services for productive business travel.",
  },

  {
    id: 5,
    title: "Airport Transfer",
    icon: "Car",
    description:
      "Comfortable and reliable transportation to and from the airport.",
  },

  {
    id: 6,
    title: "24/7 Concierge",
    icon: "ConciergeBell",
    description:
      "Our team is available around the clock to assist with your needs.",
  },
];


// ========================================
// SPECIAL OFFERS
// ========================================

export const offers = [
  {
    id: 1,
    title: "Weekend Escape",
    discount: "20% OFF",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=85",
    description:
      "Enjoy a relaxing weekend with luxury accommodation and breakfast included.",
  },

  {
    id: 2,
    title: "Stay Longer",
    discount: "15% OFF",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85",
    description:
      "Stay longer and experience more of Ethiopia with our extended stay offer.",
  },

  {
    id: 3,
    title: "Business Stay",
    discount: "SPECIAL RATE",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
    description:
      "Exclusive rates and services designed for business travelers.",
  },
];


// ========================================
// TESTIMONIALS
// ========================================

export const testimonials = [
  {
    id: 1,
    name: "James Anderson",
    country: "United Kingdom",
    rating: 5,
    text:
      "An exceptional hotel with outstanding service. The combination of Ethiopian hospitality and modern luxury was unforgettable.",
  },

  {
    id: 2,
    name: "Sophia Martin",
    country: "France",
    rating: 5,
    text:
      "Beautiful rooms, wonderful food, and incredibly welcoming staff. I would happily stay here again.",
  },

  {
    id: 3,
    name: "Daniel Wilson",
    country: "United States",
    rating: 5,
    text:
      "The perfect base for exploring Addis Ababa. Everything from check-in to breakfast was excellent.",
  },
];


// ========================================
// GALLERY
// ========================================

export const gallery = [
  {
    id: 1,
    category: "Hotel",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85",
  },

  {
    id: 2,
    category: "Rooms",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: 3,
    category: "Dining",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: 4,
    category: "Wellness",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: 5,
    category: "Pool",
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: 6,
    category: "Lounge",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
  },
];


// ========================================
// CONTACT INFORMATION
// ========================================

export const contactData = {
  address: "Addis Ababa, Ethiopia",
  phone: "+251 11 000 0000",
  email: "info@ethiopianinternationalhotel.com",

  openingHours: {
    reception: "24 Hours",
    restaurant: "06:30 AM – 11:00 PM",
    spa: "09:00 AM – 09:00 PM",
  },

  socialLinks: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    linkedin: "#",
  },
};
export const aboutData = {
  eyebrow: "OUR STORY",
  title: "Where heritage meets",
  highlight: "exceptional hospitality.",
  description:
    "For generations, Ethiopian hospitality has been defined by warmth, generosity, and a deep respect for every guest. Ethiopian International Hotel brings that heritage into a contemporary luxury experience designed for today's traveler.",
  secondaryText:
    "From refined accommodation to memorable dining and personalized service, every detail reflects our commitment to creating stays that feel both distinctly Ethiopian and internationally exceptional.",
  image:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90",
  imageAlt: "Luxury hotel interior",
  established: "1960",
  location: "Addis Ababa",
  buttonText: "Discover Our Story",
  buttonLink: "/about",
};