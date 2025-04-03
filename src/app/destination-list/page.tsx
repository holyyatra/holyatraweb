import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Tour package data - simulating data from the Holy Yatra website
const tourPackages = [
  {
    id: 1,
    title: 'Nainital (2N/3D) Ex-Delhi',
    description: 'Escape to the Lake District of India — Nainital, a',
    image: 'https://ext.same-assets.com/42986993/481499835.jpeg',
    slug: 'nainital-2n-3d-ex-delhi'
  },
  {
    id: 2,
    title: 'Rishikesh (2N/3D) Ex-Delhi',
    description: 'Explore the Yoga Capital of the World, Rishikesh, known for',
    image: 'https://ext.same-assets.com/42986993/1252337960.jpeg',
    slug: 'rishikesh-2n-3d-ex-delhi'
  },
  {
    id: 3,
    title: 'Haridwar (2N/3D) Ex-Delhi',
    description: 'Experience the spiritual essence of Haridwar, one of the holiest',
    image: 'https://ext.same-assets.com/42986993/295344696.jpeg',
    slug: 'haridwar-2n-3d-ex-delhi'
  },
  {
    id: 4,
    title: 'Mussoorie (2N/3D) Ex-Delhi',
    description: 'Enjoy a relaxing getaway to Mussoorie, the Queen of Hills',
    image: 'https://ext.same-assets.com/42986993/791803424.jpeg',
    slug: 'mussoorie-2n-3d-ex-delhi'
  },
  {
    id: 5,
    title: 'Auli (4N/5D) Ex-Delhi',
    description: 'Experience the breathtaking beauty of Auli, a stunning hill station',
    image: 'https://ext.same-assets.com/42986993/1879928294.jpeg',
    slug: 'auli-4n-5d-ex-delhi'
  },
  {
    id: 6,
    title: 'Chopta (4N/5D) Ex-Delhi',
    description: 'Discover the pristine beauty of Chopta, known as Mini Switzerland',
    image: 'https://ext.same-assets.com/42986993/943494264.jpeg',
    slug: 'chopta-4n-5d-ex-delhi'
  },
  {
    id: 7,
    title: 'Yamunotri (4N/5D) Ex-Delhi',
    description: 'Embark on a spiritual journey to Yamunotri, the sacred source',
    image: 'https://ext.same-assets.com/42986993/1435777775.jpeg',
    slug: 'chopta-4n-5d-ex-delhi'
  },
  {
    id: 8,
    title: 'Gangotri (4N/5D) Ex-Delhi',
    description: 'Embark on a spiritual journey to Gangotri, one of the',
    image: 'https://ext.same-assets.com/42986993/4217586806.jpeg',
    slug: 'chopta-4n-5d-ex-delhi'
  },
  {
    id: 9,
    title: 'Do Dham (4N/5D) Ex-Haridwar',
    description: 'Embark on a sacred journey to Kedarnath and Badrinath, two',
    image: 'https://ext.same-assets.com/42986993/1369073273.jpeg',
    slug: 'chopta-4n-5d-ex-delhi'
  },
  {
    id: 10,
    title: 'Do Dham (7N/8D) Ex-Delhi',
    description: 'Embark on a spiritual Do Dham Yatra covering two of',
    image: 'https://ext.same-assets.com/42986993/273543150.jpeg',
    slug: 'chopta-4n-5d-ex-delhi'
  },
  {
    id: 11,
    title: 'Chardham (9N/10D) Ex-Haridwar',
    description: 'Embark on the sacred Chardham Yatra, covering the four most',
    image: 'https://ext.same-assets.com/42986993/2663070483.jpeg',
    slug: 'chopta-4n-5d-ex-delhi'
  },
  {
    id: 12,
    title: 'Kedarnath (5N/6D) Ex-Delhi',
    description: 'Embark on a spiritual and adventurous journey to Kedarnath, one',
    image: 'https://ext.same-assets.com/42986993/4287053519.jpeg',
    slug: 'chopta-4n-5d-ex-delhi'
  },
];

export default function DestinationList() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <div className="relative h-[300px]">
        <Image
          src="https://ext.same-assets.com/42986993/2778590122.jpeg"
          alt="Destinations in India"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">All Tours</h1>
        </div>
      </div>

      {/* Tour Listings */}
      <section className="py-16 bg-background-alt">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tourPackages.map((tour) => (
              <Link
                key={tour.id}
                href={`/tours/${tour.slug}`}
                
                className="group block"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
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
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-secondary group-hover:text-primary transition-colors">
                      {tour.title}
                    </h3>
                    <p className="text-muted text-sm line-clamp-2">
                      {tour.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
