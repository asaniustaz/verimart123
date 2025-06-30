import React from 'react';
import ProductCard from './ProductCard';

const featuredProducts = [
  {
    id: '1',
    title: 'iPhone 14 Pro Max - 256GB Deep Purple',
    price: '850,000',
    location: 'Lagos, Nigeria',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
    timePosted: '2 hours ago',
    isPromoted: true
  },
  {
    id: '2',
    title: 'Toyota Camry 2020 - Clean Title',
    price: '12,500,000',
    location: 'Abuja, Nigeria',
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400',
    timePosted: '4 hours ago'
  },
  {
    id: '3',
    title: '3 Bedroom Apartment in Lekki',
    price: '85,000,000',
    location: 'Lagos, Nigeria',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400',
    timePosted: '1 day ago',
    isPromoted: true
  },
  {
    id: '4',
    title: 'MacBook Pro M2 - 16 inch, 512GB',
    price: '1,200,000',
    location: 'Port Harcourt, Nigeria',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    timePosted: '6 hours ago'
  },
  {
    id: '5',
    title: 'Nike Air Jordan 1 Retro High',
    price: '95,000',
    location: 'Kano, Nigeria',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    timePosted: '3 hours ago'
  },
  {
    id: '6',
    title: 'Samsung 65" QLED 4K Smart TV',
    price: '450,000',
    location: 'Ibadan, Nigeria',
    image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=400',
    timePosted: '5 hours ago'
  },
  {
    id: '7',
    title: 'Honda CR-V 2019 - Low Mileage',
    price: '9,800,000',
    location: 'Lagos, Nigeria',
    image: 'https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=400',
    timePosted: '8 hours ago'
  },
  {
    id: '8',
    title: 'Office Space for Rent - Victoria Island',
    price: '2,500,000',
    location: 'Lagos, Nigeria',
    image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=400',
    timePosted: '12 hours ago',
    isPromoted: true
  }
];

const FeaturedListings = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Listings
            </h2>
            <p className="text-lg text-gray-600">
              Hand-picked deals you don't want to miss
            </p>
          </div>
          <button className="hidden md:block text-green-600 hover:text-green-700 font-semibold">
            View All →
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View More Listings
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;