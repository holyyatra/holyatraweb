import React from 'react';

const Welcome = () => {
  return (
    <section className="py-16 bg-background-alt">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Welcome to Holy Yatra: Crafting Unforgettable Journeys Across Incredible India
        </h2>

        <div className="prose prose-lg max-w-4xl mx-auto text-secondary">
          <p className="text-center mb-8">
            At Holy Yatra, we believe that travel is more than just visiting places—it's about creating memories, connecting with cultures, and discovering the soul of India. As a trusted tours and travels agency, we specialize in curating personalized, seamless, and immersive experiences that showcase India's timeless beauty, rich heritage, and vibrant diversity. Whether you're a solo explorer, a family seeking adventure, or a couple on a romantic getaway, let us turn your travel dreams into reality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Why Choose Holy Yatra?</h3>
              <ul className="list-disc pl-6">
                <li><strong>Tailored Itineraries:</strong> From classic tours to offbeat trails, we design trips that match your interests, pace, and budget.</li>
                <li><strong>Local Expertise:</strong> Our team of passionate travel experts and guides ensures authentic, insider experiences.</li>
                <li><strong>Hassle-Free Travel:</strong> Enjoy end-to-end services—flights, hotels, transport, visas, and 24/7 support.</li>
                <li><strong>Sustainable Tourism:</strong> We promote eco-friendly practices and support local communities.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
              <ul className="list-disc pl-6">
                <li><strong>Cultural & Heritage Tours:</strong> Golden Triangle, Rajasthan Royalty, Spiritual Trails</li>
                <li><strong>Adventure & Nature Escapes:</strong> Himalayan Treks, Wildlife Safaris, Beach & Backwaters</li>
                <li><strong>Luxury & Wellness Retreats:</strong> Palace Stays, Ayurvedic Wellness, Private Tours</li>
                <li><strong>Group Tours & Pilgrimage Packages:</strong> Custom Group Tours, Religious Journeys</li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">Signature Holy Yatra Experiences</h3>
            <ul className="list-disc pl-6">
              <li><strong>Village Homestays:</strong> Live with local families, savor home-cooked meals, and learn traditional crafts.</li>
              <li><strong>Culinary Tours:</strong> Master the art of making biryani in Hyderabad, taste street food in Delhi, or sip chai in Darjeeling.</li>
              <li><strong>Festive Celebrations:</strong> Join Holi in Mathura, Diwali in Jaipur, or Durga Puja in Kolkata.</li>
            </ul>
          </div>

          <p className="font-semibold text-primary text-center mt-8">
            Your journey begins with Holy Yatra—where every trip feels like coming home.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
