import React from 'react';
import { Heart, MapPin } from 'lucide-react';

interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  image: string;
  timePosted: string;
  isPromoted?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  location,
  image,
  timePosted,
  isPromoted = false
}) => {
  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden cursor-pointer">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isPromoted && (
          <div className="absolute top-2 left-2">
            <span className="bg-yellow-400 text-yellow-900 text-xs font-semibold px-2 py-1 rounded">
              PROMOTED
            </span>
          </div>
        )}
        <button className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
        </button>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
          {title}
        </h3>
        <p className="text-lg font-bold text-gray-900 mb-2">
          ₦{price}
        </p>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          {location}
        </div>
        <p className="text-xs text-gray-400">
          {timePosted}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;