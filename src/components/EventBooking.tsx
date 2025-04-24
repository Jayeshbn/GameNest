import React from 'react';

const EventBooking = () => {
  const events = [
    {
      id: 1,
      title: 'Birthday Parties',
      description: 'Make your special day unforgettable with our customized birthday party packages at our premium sports venues.',
      image: 'https://images.pexels.com/photos/7180788/pexels-photo-7180788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      buttonText: 'Plan Your Party'
    },
    {
      id: 2,
      title: 'Corporate Events',
      description: 'Team building activities, sports tournaments, and corporate wellness programs designed for your organization.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      buttonText: 'Book Corporate Event'
    }
  ];

  return (
    <section id="events" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Event Booking</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Host memorable events at our world-class venues
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                </div>
              </div>
              <div className="p-6 bg-white">
                <p className="text-gray-600 mb-4">{event.description}</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded transition-colors">
                  {event.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventBooking;