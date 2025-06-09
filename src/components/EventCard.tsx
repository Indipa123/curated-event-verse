
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
    <Card className="group hover-lift transition-all duration-300 overflow-hidden border-0 shadow-md hover:shadow-xl h-full flex flex-col">
      {/* Event Image */}
      <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
          <CalendarIcon className="w-12 h-12 sm:w-16 sm:h-16 text-primary/30" />
        </div>
        
        {/* Category Badge */}
        <Badge 
          className="absolute top-2 sm:top-4 left-2 sm:left-4 gradient-bg text-white border-0 text-xs sm:text-sm"
          variant="secondary"
        >
          {event.category}
        </Badge>

        {/* Featured Badge */}
        {event.featured && (
          <Badge 
            className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-yellow-500 text-yellow-900 border-0 text-xs sm:text-sm"
            variant="secondary"
          >
            Featured
          </Badge>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
      </div>

      <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
        {/* Event Title */}
        <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {event.title}
        </h3>

        {/* Event Description */}
        <p className="text-muted-foreground mb-4 line-clamp-3 text-sm sm:text-base flex-1">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
            <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-primary flex-shrink-0" />
            <span className="truncate">{event.date}</span>
          </div>
          
          <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-primary flex-shrink-0" />
            <span className="truncate">{event.time}</span>
          </div>
          
          <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
            <User className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-primary flex-shrink-0" />
            <span>{event.attendees} attending</span>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            {event.price === 0 ? (
              <span className="text-base sm:text-lg font-semibold text-green-600">Free</span>
            ) : (
              <span className="text-base sm:text-lg font-semibold">${event.price}</span>
            )}
          </div>
          
          <Button className="gradient-bg text-white hover:opacity-90 transition-opacity text-xs sm:text-sm px-3 sm:px-4 py-2">
            <span className="hidden sm:inline">Register Now</span>
            <span className="sm:hidden">Register</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
