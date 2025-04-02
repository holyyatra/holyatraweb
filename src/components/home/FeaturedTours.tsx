import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Tour package data
const tourPackages = [
  {
    id: 1,
    title: 'Helicopter Yatra',
    image: 'https://ext.same-assets.com/42986993/4287053519.jpeg',
    slug: 'helicopter'
  },
  {
    id: 2,
    title: 'Kedarnath (3N/4D) Ex-Haridwar',
    image: 'https://ext.same-assets.com/42986993/3124839909.jpeg',
    slug: 'kedarnath-3n-4d-ex-haridwar'
  },
  {
    id: 3,
    title: 'Badrinath (4N/5D) Ex-Delhi',
    image: 'https://ext.same-assets.com/42986993/4199696306.jpeg',
    slug: 'badrinath-4n-5d-ex-delhi'
  },
  {
    id: 4,
    title: 'Badrinath (2N/3D) Ex-Haridwar',
    image: 'https://ext.same-assets.com/42986993/96132912.jpeg',
    slug: 'badrinath-2n-3d-ex-haridwar'
  },
  {
    id: 5,
    title: 'Chardham (9N/10D) Ex-Haridwar',
    image: 'https://ext.same-assets.com/42986993/2663070483.jpeg',
    slug: 'chardham-9n-10d-ex-haridwar'
  },
  {
    id: 6,
    title: 'Chardham (10N/11D) Ex-Delhi',
    image: 'https://ext.same-assets.com/42986993/1328792868.jpeg',
    slug: 'chardham-10n-11d-ex-delhi'
  },
  {
    id: 7,
    title: 'Do Dham (7N/8D) Ex-Delhi',
    image: 'https://ext.same-assets.com/42986993/273543150.jpeg',
    slug: 'do-dham-7n-8d-ex-delhi'
  },
  {
    id: 8,
    title: 'Do Dham (4N/5D) Ex-Haridwar',
    image: 'https://ext.same-assets.com/42986993/1369073273.jpeg',
    slug: 'do-dham-4n-5d-ex-haridwar'
  },
];

const FeaturedTours = () => {
  return (
    <section className="py-16 bg-background-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Best Tour Packages in India</h2>
          <p className="text-muted max-w-2xl mx-auto">Handpicked Destinations for Unforgettable Experiences</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tourPackages.map((tour) => (
            <Card key={tour.id} className="group overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border-none">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4 flex flex-col items-center">
                <h3 className="font-semibold text-center mt-2 mb-4">{tour.title}</h3>
                <Link href={`/tours/${tour.slug}`} className="w-full">
                  <Button
                    variant="default"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    View Package
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/destination-list">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8"
            >
              View All Packages
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
