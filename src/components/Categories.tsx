import React from 'react';
import { 
  Smartphone, 
  Car, 
  Home, 
  Shirt, 
  Laptop, 
  Gamepad2, 
  Baby, 
  Dumbbell,
  Briefcase,
  Wrench,
  Book,
  Music
} from 'lucide-react';

const categories = [
  { name: 'Mobile Phones', icon: Smartphone, color: 'bg-blue-500' },
  { name: 'Vehicles', icon: Car, color: 'bg-red-500' },
  { name: 'Property', icon: Home, color: 'bg-green-500' },
  { name: 'Fashion', icon: Shirt, color: 'bg-purple-500' },
  { name: 'Electronics', icon: Laptop, color: 'bg-indigo-500' },
  { name: 'Gaming', icon: Gamepad2, color: 'bg-orange-500' },
  { name: 'Baby & Kids', icon: Baby, color: 'bg-pink-500' },
  { name: 'Sports', icon: Dumbbell, color: 'bg-teal-500' },
  { name: 'Jobs', icon: Briefcase, color: 'bg-gray-600' },
  { name: 'Services', icon: Wrench, color: 'bg-yellow-600' },
  { name: 'Books', icon: Book, color: 'bg-emerald-500' },
  { name: 'Music', icon: Music, color: 'bg-rose-500' }
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Browse Categories
          </h2>
          <p className="text-lg text-gray-600">
            Find exactly what you're looking for in our popular categories
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.name}
                className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100 hover:border-green-200"
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${category.color} text-white mb-3 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                    {category.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;