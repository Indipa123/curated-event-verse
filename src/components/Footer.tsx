
import React from 'react';
import { CalendarIcon } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Create Event', href: '#' },
        { name: 'Browse Events', href: '#' },
        { name: 'Event Analytics', href: '#' },
        { name: 'Mobile App', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Community', href: '#' },
        { name: 'API Documentation', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press Kit', href: '#' },
        { name: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'GDPR', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 gradient-bg rounded-lg flex items-center justify-center">
                <CalendarIcon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold gradient-text">
                EventFlow
              </span>
            </div>
            <p className="text-muted-foreground mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Create, manage, and attend amazing events with our comprehensive event planning platform. 
              Join thousands of event organizers and attendees worldwide.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <span className="text-xs sm:text-sm font-bold">f</span>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <span className="text-xs sm:text-sm font-bold">t</span>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <span className="text-xs sm:text-sm font-bold">in</span>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <span className="text-xs sm:text-sm font-bold">ig</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="sm:col-span-1">
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-xs sm:text-sm mb-4 md:mb-0">
            © 2024 EventFlow. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-muted-foreground">
            <span>Made with ❤️ for event organizers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
