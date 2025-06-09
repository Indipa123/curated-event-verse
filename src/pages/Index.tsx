
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import EventsSection from '@/components/EventsSection';
import CalendarSection from '@/components/CalendarSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <EventsSection />
        <CalendarSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
