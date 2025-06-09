
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/50" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 gradient-bg rounded-full opacity-10 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 gradient-bg rounded-full opacity-5 animate-float animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-bg rounded-full opacity-3 animate-pulse-glow" />
      </div>

      <div className="container mx-auto section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
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
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              From intimate gatherings to grand celebrations, plan and manage your perfect events 
              with our comprehensive event planning platform.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="gradient-bg text-white hover:opacity-90 transition-all duration-300 hover-lift text-lg px-8 py-6"
            >
              <CalendarIcon className="w-5 h-5 mr-2" />
              Plan Your Event
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 hover-lift border-2 hover:border-primary transition-all duration-300"
            >
              <Search className="w-5 h-5 mr-2" />
              Browse Events
            </Button>
          </div>

          {/* Featured Stats */}
          <div className="animate-fade-in-up animation-delay-600 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">10K+</div>
              <div className="text-muted-foreground">Events Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">50K+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">25+</div>
              <div className="text-muted-foreground">Cities Covered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToEvents}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-primary transition-colors"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;
