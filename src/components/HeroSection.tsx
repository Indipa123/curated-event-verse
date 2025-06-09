
import React from 'react';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Search, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/50" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-32 h-32 sm:w-72 sm:h-72 gradient-bg rounded-full opacity-10 animate-float" />
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 gradient-bg rounded-full opacity-5 animate-float animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] gradient-bg rounded-full opacity-3 animate-pulse-glow" />
      </div>

      <div className="container mx-auto relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Create{' '}
              <span className="gradient-text">
                Unforgettable
              </span>
              <br />
              Events
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-in-up animation-delay-200">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              From intimate gatherings to grand celebrations, plan and manage your perfect events 
              with our comprehensive event planning platform.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <Button 
              size="lg" 
              className="gradient-bg text-white hover:opacity-90 transition-all duration-300 hover-lift text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto"
            >
              <CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Plan Your Event
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-4 sm:py-6 hover-lift border-2 hover:border-primary transition-all duration-300 w-full sm:w-auto"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Browse Events
            </Button>
          </div>

          {/* Featured Stats */}
          <div className="animate-fade-in-up animation-delay-600 grid grid-cols-1 xs:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">10K+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Events Created</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">50K+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">25+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Cities Covered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToEvents}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-primary transition-colors"
      >
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </section>
  );
};

export default HeroSection;
