import React from 'react';
import Hero from '../components/Hero';
import FeaturedSports from '../components/FeaturedSports';
import WhyChooseUs from '../components/WhyChooseUs';
import EventBooking from '../components/EventBooking';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedSports />
      <WhyChooseUs />
      <EventBooking />
      <Testimonials />
    </main>
  );
};

export default HomePage;