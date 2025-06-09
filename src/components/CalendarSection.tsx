
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarSection = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Mock events for calendar
  const mockEvents = {
    '2024-03-15': [{ title: 'Tech Innovation Summit', time: '9:00 AM', type: 'conference' }],
    '2024-03-22': [{ title: 'Food & Wine Festival', time: '12:00 PM', type: 'festival' }],
    '2024-03-28': [{ title: 'Digital Marketing Masterclass', time: '10:00 AM', type: 'workshop' }],
    '2024-04-05': [{ title: 'Community Charity Run', time: '7:00 AM', type: 'sports' }],
    '2024-04-12': [{ title: 'Startup Pitch Competition', time: '6:00 PM', type: 'business' }],
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const formatDateKey = (date: Date, day: number) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    return `${year}-${month}-${dayStr}`;
  };

  const hasEvents = (day: number) => {
    if (!day) return false;
    const dateKey = formatDateKey(currentDate, day);
    return mockEvents[dateKey as keyof typeof mockEvents];
  };

  const getEventsForDay = (day: number) => {
    if (!day) return [];
    const dateKey = formatDateKey(currentDate, day);
    return mockEvents[dateKey as keyof typeof mockEvents] || [];
  };

  const handleDateClick = (day: number) => {
    if (!day) return;
    const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(selectedDate);
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayNamesShort = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <section id="calendar" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Event{' '}
            <span className="gradient-text">Calendar</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Browse events by date and plan your schedule accordingly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg sm:text-xl md:text-2xl">
                  {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </CardTitle>
                <div className="flex space-x-1 sm:space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => navigateMonth('prev')}
                    className="hover-lift w-8 h-8 sm:w-10 sm:h-10"
                  >
                    <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => navigateMonth('next')}
                    className="hover-lift w-8 h-8 sm:w-10 sm:h-10"
                  >
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-3 sm:p-6">
                {/* Day Headers */}
                <div className="grid grid-cols-7 gap-1 mb-2 sm:mb-4">
                  {(window.innerWidth < 640 ? dayNamesShort : dayNames).map(day => (
                    <div key={day} className="text-center text-xs sm:text-sm font-medium text-muted-foreground py-1 sm:py-2">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1">
                  {getDaysInMonth(currentDate).map((day, index) => (
                    <button
                      key={index}
                      onClick={() => handleDateClick(day)}
                      disabled={!day}
                      className={`
                        relative h-8 sm:h-10 md:h-12 rounded-lg transition-all duration-200 text-xs sm:text-sm
                        ${day 
                          ? 'hover:bg-muted cursor-pointer' 
                          : 'cursor-default'
                        }
                        ${selectedDate && 
                          selectedDate.getDate() === day &&
                          selectedDate.getMonth() === currentDate.getMonth() &&
                          selectedDate.getFullYear() === currentDate.getFullYear()
                          ? 'gradient-bg text-white' 
                          : ''
                        }
                      `}
                    >
                      {day && (
                        <>
                          <span>{day}</span>
                          {hasEvents(day) && (
                            <div className="absolute bottom-0.5 sm:bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 sm:w-1.5 sm:h-1.5 gradient-bg rounded-full" />
                          )}
                        </>
                      )}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Events List */}
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary" />
                  <span className="truncate">
                    {selectedDate 
                      ? `Events for ${selectedDate.toLocaleDateString()}`
                      : 'Select a Date'
                    }
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-6">
                {selectedDate ? (
                  <div className="space-y-3 sm:space-y-4">
                    {getEventsForDay(selectedDate.getDate()).length > 0 ? (
                      getEventsForDay(selectedDate.getDate()).map((event, index) => (
                        <div key={index} className="border rounded-lg p-3 sm:p-4 hover-lift">
                          <h4 className="font-semibold mb-2 text-sm sm:text-base">{event.title}</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground mb-2">{event.time}</p>
                          <Badge variant="secondary" className="text-xs">
                            {event.type}
                          </Badge>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-6 sm:py-8 text-muted-foreground">
                        <CalendarIcon className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 opacity-50" />
                        <p className="text-sm sm:text-base">No events scheduled for this date</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-6 sm:py-8 text-muted-foreground">
                    <CalendarIcon className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 opacity-50" />
                    <p className="text-sm sm:text-base">Click on a date to view events</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
