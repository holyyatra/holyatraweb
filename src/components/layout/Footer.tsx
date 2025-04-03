import Link from "next/link";
import Image from "next/image";
import logo from "./logo.jpg"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Youtube, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Column */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Guest Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Tours Column */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Featured Tours</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/to_book/golden-triangle/" className="text-gray-300 hover:text-primary transition-colors">
                  Best Tour Package
                </Link>
              </li>
              <li>
                <Link href="/to_book/golden-triangle-with-amritsar-and-chandigarh/" className="text-gray-300 hover:text-primary transition-colors">
                  Top Travel Destinations
                </Link>
              </li>
              <li>
                <Link href="/to_book/south-india-temple-tour/" className="text-gray-300 hover:text-primary transition-colors">
                  Tour by States of India
                </Link>
              </li>
              <li>
                <Link href="/destination-list/" className="text-gray-300 hover:text-primary transition-colors">
                  Top Tourist Attractions
                </Link>
              </li>
              <li>
                <Link href="/destination-list/" className="text-gray-300 hover:text-primary transition-colors">
                  Fixed Departure Tour
                </Link>
              </li>
              <li>
                <Link href="/destination-list/" className="text-gray-300 hover:text-primary transition-colors">
                  MICE - Meeting, Incentive, Conference, and Events
                </Link>
              </li>
            </ul>
          </div>

          {/* General Information Column */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">General Information</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/destination-list/" className="text-gray-300 hover:text-primary transition-colors">
                  Tourist Attractions of India
                </Link>
              </li>
              <li>
                <Link href="/to_book/golden-triangle-with-amritsar-and-chandigarh/" className="text-gray-300 hover:text-primary transition-colors">
                  Tourist Attractions of India
                </Link>
              </li>
              <li>
                <Link href="/to_book/south-india-temple-tour/" className="text-gray-300 hover:text-primary transition-colors">
                  Fair and Festivals of India
                </Link>
              </li>
              <li>
                <Link href="/destination-list/" className="text-gray-300 hover:text-primary transition-colors">
                  Shopping in India
                </Link>
              </li>
              <li>
                <Link href="/destination-list/" className="text-gray-300 hover:text-primary transition-colors">
                  Climates of India
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="text-gray-300 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter to receive updates on new tours and special offers.</p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Email"
                className="rounded-l-md rounded-r-none text-secondary"
              />
              <Button variant="default" className="bg-primary hover:bg-primary/90 rounded-l-none">
                Subscribe
              </Button>
            </div>
            <div className="mt-6">
              <h5 className="text-white font-medium mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image
              src="https://github.com/holyyatra/holyatraweb/blob/main/logohy.png?raw=true"
              alt="Holy Yatra Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <div className="text-gray-400 text-sm">
            <span className="text-primary font-semibold">Holy Yatra</span> | Built by <a href="https://wa.me/+918757794679" className="text-white font-bold">Holy Yatra</a>. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
