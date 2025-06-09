
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, Clock, User } from 'lucide-react';

interface EventCardProps {
  event: {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    category: string;
    price: number;
    attendees: number;
    image: string;
    featured?: boolean;
  };
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Card className="group hover-lift transition-all duration-300 overflow-hidden border-0 shadow-md hover:shadow-xl">
      {/* Event Image */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
          <CalendarIcon className="w-16 h-16 text-primary/30" />
        </div>
        
        {/* Category Badge */}
        <Badge 
          className="absolute top-4 left-4 gradient-bg text-white border-0"
          variant="secondary"
        >
          {event.category}
        </Badge>

        {/* Featured Badge */}
        {event.featured && (
          <Badge 
            className="absolute top-4 right-4 bg-yellow-500 text-yellow-900 border-0"
            variant="secondary"
          >
            Featured
          </Badge>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
      </div>

      <CardContent className="p-6">
        {/* Event Title */}
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {event.title}
        </h3>

        {/* Event Description */}
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarIcon className="w-4 h-4 mr-2 text-primary" />
            <span>{event.date}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-2 text-primary" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <User className="w-4 h-4 mr-2 text-primary" />
            <span>{event.attendees} attending</span>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div>
            {event.price === 0 ? (
              <span className="text-lg font-semibold text-green-600">Free</span>
            ) : (
              <span className="text-lg font-semibold">${event.price}</span>
            )}
          </div>
          
          <Button className="gradient-bg text-white hover:opacity-90 transition-opacity">
            Register Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
