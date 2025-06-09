
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);
    
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="transition-transform duration-300 hover:scale-110"
    >
      {theme === 'light' ? (
        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300" />
      ) : (
        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 transition-all duration-300" />
      )}
    </Button>
  );
};

export { ThemeToggle };
