import React from 'react';
import { Clock, Award, RefreshCw, Map } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <Clock size={36} className="text-blue-600" />,
      title: '24/7 Booking',
      description: 'Book your sports venue anytime, day or night, from anywhere'
    },
    {
      id: 2,
      icon: <Award size={36} className="text-blue-600" />,
      title: 'Certified Coaches',
      description: 'Access to professional trainers and certified coaches'
    },
    {
      id: 3,
      icon: <RefreshCw size={36} className="text-blue-600" />,
      title: 'Easy Refunds',
      description: 'Hassle-free cancelation and quick refund process'
    },
    {
      id: 4,
      icon: <Map size={36} className="text-blue-600" />,
      title: 'Top-Rated Venues',
      description: 'Premium locations with state-of-the-art facilities'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer the best sports and event booking experience with premium features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;