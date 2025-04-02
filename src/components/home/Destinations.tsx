import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

// Popular destination data
const destinations = [
  {
    id: 1,
    name: 'New Delhi',
    image: 'https://ext.same-assets.com/42986993/842559843.webp',
    slug: 'delhi'
  },
  {
    id: 2,
    name: 'Agra',
    image: 'https://ext.same-assets.com/42986993/2778590122.jpeg',
    slug: 'agra'
  },
  {
    id: 3,
    name: 'Jaipur',
    image: 'https://ext.same-assets.com/42986993/1144804427.webp',
    slug: 'jaipur'
  },
  {
    id: 4,
    name: 'Udaipur',
    image: 'https://ext.same-assets.com/42986993/1061888497.jpeg',
    slug: 'udaipur'
  }
];

const Destinations = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore India: Tailored Tour Packages by Destination</h2>
          <p className="text-muted max-w-2xl mx-auto">Carefully Curated Locations for Exceptional Experiences</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/${destination.slug}`}
              className="group relative overflow-hidden rounded-lg h-64 block"
            >
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-6">
                <h3 className="text-xl font-semibold text-white">{destination.name}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/destination-list">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8"
            >
              View All Destinations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
