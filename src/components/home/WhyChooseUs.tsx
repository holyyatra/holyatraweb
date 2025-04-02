import React from 'react';
import { MapPin, Shield, Heart, Clock, DollarSign, Rocket } from 'lucide-react';

const features = [
  {
    id: 'travel-agent',
    icon: <MapPin className="h-10 w-10 text-primary" />,
    title: 'Best Travel Agent',
    description: 'A travel agent ensures smooth, personalized, and hassle-free travel experiences.'
  },
  {
    id: 'beautiful-places',
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: 'Beautiful Places',
    description: 'Discover breathtaking destinations that inspire wonder and unforgettable memories.'
  },
  {
    id: 'trust-safety',
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: 'Trust & Safety',
    description: 'Trust and safety ensure secure, reliable, and worry-free travel experiences.'
  },
  {
    id: 'passionate-travel',
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: 'Passionate Travel',
    description: 'Passionate travel creates unforgettable experiences, fostering connection and exploration.'
  },
  {
    id: 'best-price',
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    title: 'Best Price Guarantee',
    description: 'Best Price Guarantee offers lowest rates, ensuring unbeatable travel deals.'
  },
  {
    id: 'fast-booking',
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: 'Fast Booking',
    description: 'Fast booking streamlines your travel plans for a hassle-free experience.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-background-alt">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why us
        </h2>
        <h3 className="text-xl text-center text-muted mb-12">
          We Make All The Process Easy
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
