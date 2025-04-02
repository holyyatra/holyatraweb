import React from 'react';

const AboutIndia = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Discover India
        </h2>
        <h3 className="text-xl text-center text-muted mb-12">
          A Land of Timeless Beauty, Culture, and Adventure
        </h3>

        <div className="prose prose-lg max-w-4xl mx-auto text-secondary">
          <p>
            India, a country where ancient traditions coexist with modern vibrancy, offers travelers an unforgettable journey through its kaleidoscope of landscapes, cultures, and history. From the snow-capped Himalayas to sun-kissed beaches, bustling cities to serene villages, India is a destination that promises something extraordinary for every traveler. Dive into this guide to uncover the magic of India and start planning your dream getaway.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Top Destinations to Explore</h3>

          <h4 className="text-xl font-semibold mt-6 mb-2">The Golden Triangle: Delhi, Agra, Jaipur</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>Begin your journey in Delhi, where Mughal monuments like the Red Fort and Qutub Minar stand alongside colonial-era architecture.</li>
            <li>Witness the eternal symbol of love, the Taj Mahal, in Agra, and explore the majestic Agra Fort.</li>
            <li>Head to Jaipur, the Pink City, to marvel at the Amber Fort, Hawa Mahal, and vibrant bazaars.</li>
          </ul>

          <h4 className="text-xl font-semibold mt-6 mb-2">Kerala: God's Own Country</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>Cruise the tranquil backwaters on a traditional houseboat.</li>
            <li>Trek through lush tea plantations in Munnar and unwind at Ayurvedic wellness retreats.</li>
            <li>Spot wildlife in Periyar National Park or relax on the pristine beaches of Kovalam and Varkala.</li>
          </ul>

          <h4 className="text-xl font-semibold mt-6 mb-2">Rajasthan: Land of Kings</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>Explore the desert forts of Jaisalmer, the lakes of Udaipur, and the royal palaces of Jodhpur.</li>
            <li>Experience camel safaris, folk dances, and opulent heritage hotels.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Cultural Experiences You Can't Miss</h3>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Festivals:</strong> Time your visit with Holi (festival of colors), Diwali (festival of lights), or Rajasthan's Pushkar Camel Fair.</li>
            <li><strong>Cuisine:</strong> Indulge in regional delicacies—butter chicken in Delhi, dosas in Chennai, or street food like pani puri.</li>
            <li><strong>Handicrafts:</strong> Shop for intricate textiles, jewelry, pottery, and spices in local markets.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Why Choose India?</h3>
          <p>
            India is not just a destination—it's an emotion. Whether you're seeking spiritual awakening, historical wonders, culinary adventures, or natural beauty, India will leave you spellbound. Let its chaos charm you, its hospitality warm you, and its stories inspire you.
          </p>

          <p className="font-semibold text-primary text-center mt-8">
            Inspiring and unbelievable India awaits. Are you ready?
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutIndia;
