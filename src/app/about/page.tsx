import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const teamMembers = [
  { id: 'member-1', name: 'Team Member 1', role: 'Travel Expert' },
  { id: 'member-2', name: 'Team Member 2', role: 'Travel Expert' },
  { id: 'member-3', name: 'Team Member 3', role: 'Travel Expert' },
  { id: 'member-4', name: 'Team Member 4', role: 'Travel Expert' },
];

const testimonials = [
  {
    id: 'testimonial-1',
    quote: "Our Golden Triangle tour with Holy Yatra exceeded all expectations. The guides were knowledgeable, accommodations excellent, and the entire experience was seamless.",
    author: "John D., USA"
  },
  {
    id: 'testimonial-2',
    quote: "The Kerala backwaters tour was a dream come true. Holy Yatra arranged everything perfectly, from the houseboat stay to the Ayurvedic retreat. Unforgettable!",
    author: "Maria S., Spain"
  },
  {
    id: 'testimonial-3',
    quote: "As a solo female traveler, safety was my primary concern. Holy Yatra ensured I felt secure throughout my journey while experiencing the authentic India I was seeking.",
    author: "Emma L., Australia"
  }
];

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <div className="relative h-[300px]">
        <Image
          src="https://ext.same-assets.com/42986993/1369073273.jpeg"
          alt="About Holy Yatra"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="prose max-w-none text-secondary">
                <p>
                  Founded in 2018, Holy Yatra was born from a passion to showcase the true essence of India to travelers from across the globe. As ardent travelers ourselves, we noticed a gap in the market for genuinely authentic and personalized experiences that go beyond typical tourist routes.
                </p>
                <p>
                  We started with a small team of travel enthusiasts with deep knowledge of India's diverse landscapes, cultures, and hidden gems. Over the years, we've grown to become one of the most trusted travel partners for exploring the incredible tapestry that is India.
                </p>
                <p>
                  At Holy Yatra, we believe travel is not just about visiting places; it's about creating connections, understanding different cultures, and returning home with stories that last a lifetime. That's why every journey we curate is crafted with attention to detail, respect for local communities, and a commitment to sustainable travel practices.
                </p>
              </div>
            </div>

            <div className="md:w-1/2 relative h-[400px]">
              <Image
                src="https://ext.same-assets.com/42986993/273543150.jpeg"
                alt="Holy Yatra Journey"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-background-alt">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted mb-12 max-w-3xl mx-auto">
            To craft journeys that inspire, educate, and transform travelers while supporting local communities and preserving India's rich cultural and natural heritage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Authentic Experiences</h3>
              <p className="text-muted">
                We go beyond ordinary tourism to offer immersive, genuine interactions with local cultures, cuisines, and traditions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Personalized Service</h3>
              <p className="text-muted">
                Every traveler is unique, and so should be their journey. We take time to understand your preferences and design trips that resonate with you.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Sustainable Tourism</h3>
              <p className="text-muted">
                We're committed to responsible travel practices that benefit local communities and minimize environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
          <p className="text-muted text-center mb-12 max-w-3xl mx-auto">
            Passionate travel experts with extensive knowledge of India's diverse regions and a dedication to creating memorable journeys.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-background-alt rounded-lg overflow-hidden shadow-md">
                <div className="aspect-square relative">
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                    <span className="text-secondary font-medium">Photo</span>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">What Our Travelers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-secondary mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <p className="font-medium text-primary">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
