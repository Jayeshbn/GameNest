import React from 'react';
import { sportsData } from '../data';

const FeaturedSports = () => {
  return (
    <section id="sports" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Sports</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover a variety of sports options available at our premium venues. Book now and play your favorite game!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sportsData.map((sport) => (
            <div 
              key={sport.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={sport.image} 
                  alt={sport.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{sport.name}</h3>
                <p className="text-gray-600 mb-4">{sport.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-semibold">{sport.price}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSports;