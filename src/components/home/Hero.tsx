import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://ext.same-assets.com/42986993/1961786019.jpeg')`,
          filter: 'brightness(0.7)'
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Find Your Visit
        </h1>
        <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
          Discover Premier Tours, Luxury Hotels & Exquisite Restaurants Across India
        </p>

        {/* Search Bar */}
        <div className="flex max-w-md mx-auto">
          <Input
            type="text"
            placeholder="Search for destinations, tours, experiences..."
            className="rounded-l-md rounded-r-none h-12 border-r-0 focus-visible:ring-0"
          />
          <Button className="bg-primary hover:bg-primary/90 rounded-l-none h-12 px-6">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
