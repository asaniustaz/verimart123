import React from 'react';
import { Search, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Anything You Need
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Buy and sell with confidence on Nigeria's trusted marketplace
          </p>
          
          {/* Enhanced Search */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="search"
                      placeholder="What are you looking for?"
                      className="w-full pl-10 pr-3 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select className="w-full pl-10 pr-3 py-3 text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white">
                      <option>All Nigeria</option>
                      <option>Lagos</option>
                      <option>Abuja</option>
                      <option>Port Harcourt</option>
                      <option>Kano</option>
                      <option>Ibadan</option>
                    </select>
                  </div>
                </div>
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;