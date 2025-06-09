
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Grid2x2 } from 'lucide-react';
import EventCard from './EventCard';

const EventsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  // Mock event data
  const mockEvents = [
    {
      id: '1',
      title: 'Tech Innovation Summit 2024',
      description: 'Join industry leaders and innovators for a day of cutting-edge technology discussions, networking, and workshops.',
      date: 'March 15, 2024',
      time: '9:00 AM - 6:00 PM',
      location: 'San Francisco Convention Center',
      category: 'Technology',
      price: 299,
      attendees: 1250,
      image: '',
      featured: true,
    },
    {
      id: '2',
      title: 'Local Food & Wine Festival',
      description: 'Experience the finest local cuisine and wines from artisanal producers in a beautiful outdoor setting.',
      date: 'March 22, 2024',
      time: '12:00 PM - 8:00 PM',
      location: 'Central Park',
      category: 'Food & Drink',
      price: 75,
      attendees: 800,
      image: '',
    },
    {
      id: '3',
      title: 'Digital Marketing Masterclass',
      description: 'Learn the latest digital marketing strategies from experts who have helped brands achieve remarkable growth.',
      date: 'March 28, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Online Event',
      category: 'Business',
      price: 149,
      attendees: 500,
      image: '',
    },
    {
      id: '4',
      title: 'Community Charity Run',
      description: 'Join our annual charity run to support local causes while staying fit and connecting with your community.',
      date: 'April 5, 2024',
      time: '7:00 AM - 11:00 AM',
      location: 'Riverside Park',
      category: 'Sports',
      price: 0,
      attendees: 2000,
      image: '',
      featured: true,
    },
    {
      id: '5',
      title: 'Startup Pitch Competition',
      description: 'Watch emerging startups pitch their innovative ideas to a panel of successful entrepreneurs and investors.',
      date: 'April 12, 2024',
      time: '6:00 PM - 9:00 PM',
      location: 'Innovation Hub',
      category: 'Business',
      price: 25,
      attendees: 300,
      image: '',
    },
    {
      id: '6',
      title: 'Art & Culture Exhibition',
      description: 'Discover contemporary art from local and international artists in an immersive cultural experience.',
      date: 'April 18, 2024',
      time: '11:00 AM - 7:00 PM',
      location: 'Modern Art Gallery',
      category: 'Arts & Culture',
      price: 20,
      attendees: 600,
      image: '',
    },
  ];

  const categories = ['all', 'Technology', 'Food & Drink', 'Business', 'Sports', 'Arts & Culture'];

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || event.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="events" className="py-20 bg-muted/30">
      <div className="container mx-auto section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Amazing{' '}
            <span className="gradient-text">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find events that match your interests and connect with like-minded people in your community.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
          
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full md:w-48 h-12">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-48 h-12">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">Date</SelectItem>
              <SelectItem value="price">Price</SelectItem>
              <SelectItem value="popularity">Popularity</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <div 
              key={event.id} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <EventCard event={event} />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredEvents.length > 0 && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="hover-lift border-2 hover:border-primary transition-all duration-300"
            >
              <Grid2x2 className="w-5 h-5 mr-2" />
              Load More Events
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold mb-2">No events found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or browse all events.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
