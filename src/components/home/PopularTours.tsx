import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Popular tour package data
const popularTours = [
  {
    id: 1,
    title: 'Gangotri (4N/5D) Ex-Delhi',
    image: 'https://ext.same-assets.com/42986993/4217586806.jpeg',
    slug: 'gangotri-4n-5d-ex-delhi'
  },
  {
    id: 2,
    title: 'Yamunotri (4N/5D) Ex-Delhi',
    image: 'https://ext.same-assets.com/42986993/1435777775.jpeg',
    slug: 'yamunotri-4n-5d-ex-delhi'
  },
  {
    id: 3,
    title: 'Chopta (4N/5D) Ex-Delhi',
    image: 'https://ext.same-assets.com/42986993/943494264.jpeg',
    slug: 'chopta-4n-5d-ex-delhi'
  },
  {
    id: 4,
    title: 'Auli (4N/5D) Ex-Delhi',
    image: 'https://ext.same-assets.com/42986993/1879928294.jpeg',
    slug: 'auli-4n-5d-ex-delhi'
  },
  {
    id: 5,
    title: 'Mussoorie (2N/3D) Ex-Delhi',
    image: 'https://ext.same-assets.com/42986993/791803424.jpeg',
    slug: 'mussoorie-2n-3d-ex-delhi'
  },
  {
    id: 6,
    title: 'Haridwar (2N/3D) Ex-Delhi',
    image: 'https://ext.same-assets.com/42986993/295344696.jpeg',
    slug: 'haridwar-2n-3d-ex-delhi'
  },
  {
    id: 7,
    title: 'Rishikesh (2N/3D) Ex-Delhi',
    image: 'https://ext.same-assets.com/42986993/1252337960.jpeg',
    slug: 'rishikesh-2n-3d-ex-delhi'
  },
  {
    id: 8,
    title: 'Nainital (2N/3D) Ex-Delhi',
    image: 'https://ext.same-assets.com/42986993/481499835.jpeg',
    slug: 'nainital-2n-3d-ex-delhi'
  },
];

const PopularTours = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Tour Packages</h2>
          <p className="text-muted max-w-2xl mx-auto">Pre-Experienced Tours Designed for a Safe & Delightful Journey</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularTours.map((tour) => (
            <Link
              key={tour.id}
              href={`/tours/${tour.slug}`}
              className="group block"
            >
              <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-secondary hover:text-primary transition-colors">{tour.title}</h3>
                </CardContent>
              </Card>
            </Link>
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

export default PopularTours;
