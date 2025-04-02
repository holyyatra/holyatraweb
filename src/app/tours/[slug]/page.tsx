import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, User, Star, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Sample tour data - this would normally come from an API
const tours = [
  {
    slug: 'chardham-9n-10d-ex-haridwar',
    title: 'Golden Triangle',
    image: 'https://ext.same-assets.com/42986993/2778590122.jpeg',
    duration: '5 Nights Days',
    description: `India's Golden Triangle is a circuit consisting of three most visited cities of India - Delhi, Agra and Jaipur. Completing the Golden Triangle tour usually takes about a week to 10 days, starting and ending in Delhi. The Golden Triangle is named such because of the triangular shape formed on the map between these places and got this name for the rich culture and history each of these cities offer. For the foreign tourists visiting India these cities are very popular. Delhi, the sprawling Indian capital, where you can spend a few weeks and not see it all. The bazaars in Old Delhi, the Jama Masjid and the very busy Chandni Chowk gives you the picture of Delhi in the 17th century. Travelling towards south of Delhi, you will be fascinated by the contrasting British built New Delhi. Agra, was once the main bastion of the Mogul empire and boasts of the world famous monument, The Taj Mahal. Jaipur, capital of the desert city, Rajasthan has some of the best bazaars in Asia. The Hawa Mahal in Jaipur in the icon of Rajasthani architecture.`,
    itinerary: [
      {
        id: 'day-1',
        day: 1,
        title: 'Arrive Delhi',
        description: 'Arrival, customs procedures, baggage collection and transfer to the hotel. Overnight at hotel.'
      },
      {
        id: 'day-2',
        day: 2,
        title: 'Delhi (Old and New Delhi) - Delhi (Old and New Delhi)',
        description: 'Breakfast. Visiting Old Delhi, starting with the great Jama Masjid, Continuation in rickshaw ride (bicycle cart) to visit Chandni Chowk and Spice Market in Old Delhi, later visit Raj Ghat, which is the memorial of Mahatma Gandhi. Later visit Agrasen ki baoli (step well), Bangla Sahib Gurudwara (Sikh Temple), India Gate, Parliament Building, President House, Ministries. Continue to visit Humayun Tomb, Lotus Temple (Bahai House) and Qutub Minar. Overnight at hotel.'
      },
      {
        id: 'day-3',
        day: 3,
        title: 'Delhi - Jaipur (260 Kms / 05 Hours)',
        description: 'Breakfast. Morning drive to Jaipur. Capital of the state of Rajasthan, Known as the Pink City. Its flourishing trade and its textile and jewelers industries, among others make Jaipur a thriving city. On arrival check in at hotel. In the evening attend an AARTI ceremony in a Hindu temple (Birla Temple) in Jaipur. Overnight at hotel.'
      },
      {
        id: 'day-4',
        day: 4,
        title: 'Jaipur - Jaipur',
        description: 'Breakfast. Full day visit Amer Fort (Amer Palace), this palatial complex is imposed on the top of a hill that can be reached on the back of an elephant. Evening visit the Maharaja Palace (City Palace) and its museum, the Jai Singh Observatory (Jantar Mantar), Galta ji temple (Monkey temple). Later you will also explore the colourful market of Jaipur. Overnight at hotel.'
      },
      {
        id: 'day-5',
        day: 5,
        title: 'Jaipur - Fatehpur Sikri - Agra (260 kms / 05 hours)',
        description: 'Breakfast and drive to Agra, in route visiting Abhaneri (90 KMS / 2 HRS) and visit Chand Baori and Temple of Harshat Mata dedicated to the god Vishnu. We continue drive to visit Fatehpur Sikri, built by the Mughal emperor Akbar between 1571 and 1585, in honor of the saint Salim Chishti. Continue drive to Agra. Its known for best inlay work on marble and soapstone by craftsmen, who are descendants of those who worked under the Mughals Kings. The city is also famous for good quality of carpets, embroidery with gold thread and leather items. On arrival check in at hotel. Overnight at hotel.'
      },
      {
        id: 'day-6',
        day: 6,
        title: 'Agra - Akshardham - Departure Delhi (210 Kms / 04 Hrs)',
        description: 'Early morning visit the Taj Mahal (Friday Closed) and enjoy one of the 7 wonders of the modern world, continue visit Red Fort (Agra Fort) built in red sandstone by the Mughal emperor Akbar. Breakfast at the hotel and drive to Delhi. Upon arrival visit Akshardham Temple which is most popular in the whole world which is one of the best Hindu templein India. After visit continue drive to the International airport to board their flight. END THE TOUR.'
      }
    ],
    ratings: { guide: 4.5, transportation: 4.2, valueForMoney: 4.8, safety: 5 },
    price: 30000
  },
  {
    slug: 'golden-triangle',
    title: 'Golden Triangle',
    image: 'https://ext.same-assets.com/42986993/2778590122.jpeg',
    duration: '5 Nights Days',
    description: `India's Golden Triangle is a circuit consisting of three most visited cities of India - Delhi, Agra and Jaipur. Completing the Golden Triangle tour usually takes about a week to 10 days, starting and ending in Delhi. The Golden Triangle is named such because of the triangular shape formed on the map between these places and got this name for the rich culture and history each of these cities offer. For the foreign tourists visiting India these cities are very popular. Delhi, the sprawling Indian capital, where you can spend a few weeks and not see it all. The bazaars in Old Delhi, the Jama Masjid and the very busy Chandni Chowk gives you the picture of Delhi in the 17th century. Travelling towards south of Delhi, you will be fascinated by the contrasting British built New Delhi. Agra, was once the main bastion of the Mogul empire and boasts of the world famous monument, The Taj Mahal. Jaipur, capital of the desert city, Rajasthan has some of the best bazaars in Asia. The Hawa Mahal in Jaipur in the icon of Rajasthani architecture.`,
    itinerary: [
      {
        id: 'day-1',
        day: 1,
        title: 'Arrive Delhi',
        description: 'Arrival, customs procedures, baggage collection and transfer to the hotel. Overnight at hotel.'
      },
      {
        id: 'day-2',
        day: 2,
        title: 'Delhi (Old and New Delhi) - Delhi (Old and New Delhi)',
        description: 'Breakfast. Visiting Old Delhi, starting with the great Jama Masjid, Continuation in rickshaw ride (bicycle cart) to visit Chandni Chowk and Spice Market in Old Delhi, later visit Raj Ghat, which is the memorial of Mahatma Gandhi. Later visit Agrasen ki baoli (step well), Bangla Sahib Gurudwara (Sikh Temple), India Gate, Parliament Building, President House, Ministries. Continue to visit Humayun Tomb, Lotus Temple (Bahai House) and Qutub Minar. Overnight at hotel.'
      },
      {
        id: 'day-3',
        day: 3,
        title: 'Delhi - Jaipur (260 Kms / 05 Hours)',
        description: 'Breakfast. Morning drive to Jaipur. Capital of the state of Rajasthan, Known as the Pink City. Its flourishing trade and its textile and jewelers industries, among others make Jaipur a thriving city. On arrival check in at hotel. In the evening attend an AARTI ceremony in a Hindu temple (Birla Temple) in Jaipur. Overnight at hotel.'
      },
      {
        id: 'day-4',
        day: 4,
        title: 'Jaipur - Jaipur',
        description: 'Breakfast. Full day visit Amer Fort (Amer Palace), this palatial complex is imposed on the top of a hill that can be reached on the back of an elephant. Evening visit the Maharaja Palace (City Palace) and its museum, the Jai Singh Observatory (Jantar Mantar), Galta ji temple (Monkey temple). Later you will also explore the colourful market of Jaipur. Overnight at hotel.'
      },
      {
        id: 'day-5',
        day: 5,
        title: 'Jaipur - Fatehpur Sikri - Agra (260 kms / 05 hours)',
        description: 'Breakfast and drive to Agra, in route visiting Abhaneri (90 KMS / 2 HRS) and visit Chand Baori and Temple of Harshat Mata dedicated to the god Vishnu. We continue drive to visit Fatehpur Sikri, built by the Mughal emperor Akbar between 1571 and 1585, in honor of the saint Salim Chishti. Continue drive to Agra. Its known for best inlay work on marble and soapstone by craftsmen, who are descendants of those who worked under the Mughals Kings. The city is also famous for good quality of carpets, embroidery with gold thread and leather items. On arrival check in at hotel. Overnight at hotel.'
      },
      {
        id: 'day-6',
        day: 6,
        title: 'Agra - Akshardham - Departure Delhi (210 Kms / 04 Hrs)',
        description: 'Early morning visit the Taj Mahal (Friday Closed) and enjoy one of the 7 wonders of the modern world, continue visit Red Fort (Agra Fort) built in red sandstone by the Mughal emperor Akbar. Breakfast at the hotel and drive to Delhi. Upon arrival visit Akshardham Temple which is most popular in the whole world which is one of the best Hindu templein India. After visit continue drive to the International airport to board their flight. END THE TOUR.'
      }
    ],
    ratings: { guide: 4.5, transportation: 4.2, valueForMoney: 4.8, safety: 5 },
    price: 30000
  },
  {
    slug: 'helicopter',
    title: 'Helicopter yatra Rishikesh - Kedarnath',
    image: 'https://yatrakey.com/wp-content/uploads/2023/12/1-1.jpg',
    duration: 'in just 30 Minutes',
    description: 'Kedarnath is the Hindu temple dedicated to Lord Shiva situated on the Himalaya in Uttrakhand state of India. Due to extreme weather condition the temple is open only between ends of April to November. If you are planning to visit divine kedarnath temple we would suggest you if you want to see the natural divine beauty of this spot, all you have to do Book Helicopter For Kedarnath From Rishikesh. Make sure book tickets soon to avoid rush when you travel with us we give you some extra privileges that make your journey memorable and you can be assured that we will fly you safe and comfortable with best possible price.'
    ,
    itinerary:[

    ],
    ratings: { guide: 4.7, transportation: 4.0, valueForMoney: 4.5, safety: 4.8 },
    price: 2500
  }
];

// Generate star rating components
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={`star-${star}`}
          className={`w-4 h-4 ${star <= Math.floor(rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
};

// This function generates the static paths for all tour slugs
export function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export default function TourDetail({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Find the tour by slug
  const tour = tours.find(t => t.slug === slug);

  // If tour not found, return 404
  if (!tour) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <div className="relative h-[400px]">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {tour.title}
            </h1>

            {/* Share button */}
            <div className="flex items-center gap-2 text-white">
              <Share2 className="w-5 h-5" />
              <span>Share with friends</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - 2/3 width */}
          <div className="w-full lg:w-2/3">
            {/* Duration */}
            <div className="flex items-center gap-2 mb-6 text-muted">
              <Clock className="w-5 h-5" />
              <span>{tour.duration}</span>
            </div>

            {/* Description */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Description</h2>
              <div className="prose max-w-none">
                <p>{tour.description}</p>
              </div>
            </section>

            {/* Itinerary */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Travel Itinerary</h2>

              <div className="space-y-6">
                {tour.itinerary.map((day) => (
                  <div key={day.id} className="relative pl-8 pb-6 border-l-2 border-primary/20 last:border-0">
                    {/* Day indicator */}
                    <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">
                      {day.day}
                    </div>

                    <h3 className="text-lg font-semibold mb-2">Day {day.day}: {day.title}</h3>
                    <p className="text-muted">{day.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Average Guest Reviews</h2>

              {/* Rating Categories */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="flex flex-col items-center p-4 bg-background-alt rounded-lg">
                  <h4 className="text-sm mb-2">Guide</h4>
                  <StarRating rating={tour.ratings.guide} />
                  <span className="text-sm mt-1">{tour.ratings.guide}</span>
                </div>

                <div className="flex flex-col items-center p-4 bg-background-alt rounded-lg">
                  <h4 className="text-sm mb-2">Transportation</h4>
                  <StarRating rating={tour.ratings.transportation} />
                  <span className="text-sm mt-1">{tour.ratings.transportation}</span>
                </div>

                <div className="flex flex-col items-center p-4 bg-background-alt rounded-lg">
                  <h4 className="text-sm mb-2">Value for Money</h4>
                  <StarRating rating={tour.ratings.valueForMoney} />
                  <span className="text-sm mt-1">{tour.ratings.valueForMoney}</span>
                </div>

                <div className="flex flex-col items-center p-4 bg-background-alt rounded-lg">
                  <h4 className="text-sm mb-2">Safety</h4>
                  <StarRating rating={tour.ratings.safety} />
                  <span className="text-sm mt-1">{tour.ratings.safety}</span>
                </div>
              </div>

              <p className="text-center text-muted">No Review Available</p>
            </section>
          </div>

          {/* Sidebar - 1/3 width */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Book This Tour</h2>

              {/* Date Picker Placeholder */}
              <div className="mb-4">
                <p className="text-sm mb-2">Select Date</p>
                <div className="border rounded-md p-2 flex items-center gap-2 text-muted">
                  <Clock className="w-4 h-4" />
                  <span>Pick a date</span>
                </div>
              </div>

              {/* Person Info */}
              <div className="mb-4">
                <p className="text-sm mb-2">Person Info</p>
                <div className="border rounded-md p-2 flex items-center gap-2 text-muted">
                  <User className="w-4 h-4" />
                  <span>1 Adult</span>
                </div>
              </div>

              {/* Price */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-bold text-primary">From ₹{tour.price.toLocaleString()}</span>
              </div>

              {/* Book Now Button */}
              <a href="https://api.whatsapp.com/send/?phone=919452006434&text&type=phone_number&app_absent=0"><Button className="w-full bg-primary hover:bg-primary/90">
                Book Now
              </Button></a>

              {/* Ask Question */}
              <div className="mt-8 bg-background-alt p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-sm">?</span>
                  </div>
                  Have a question in mind
                </h3>
                <p className="text-sm text-muted mb-4">
                  Looking for more info? Send a question to the tour agent to find out more.
                </p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  Ask a Question
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
