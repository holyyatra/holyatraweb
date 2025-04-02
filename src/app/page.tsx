import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedTours from "@/components/home/FeaturedTours";
import Destinations from "@/components/home/Destinations";
import PopularTours from "@/components/home/PopularTours";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AboutIndia from "@/components/home/AboutIndia";
import Welcome from "@/components/home/Welcome";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedTours />
      <Destinations />
      <PopularTours />
      <AboutIndia />
      <WhyChooseUs />
      <Welcome />
      <Footer />
    </main>
  );
}
