import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-secondary text-white text-sm py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2" /> 
            </div>

 

            <div className="flex items-center">
 

              <Phone className="w-4 h-4 mr-2" />  
            </div>
            <div className="flex items-center space-x-4">
 

                <a href="https://holyatra.com/" className="hover:text-primary">
 

              Contact Us
 

            </a>
          </div>
          
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 rounded">
              <a href="http://Wa.me/+919162456760">
                Book Now
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://github.com/holyyatra/holyatraweb/blob/main/logohy.png?raw=true"
              alt="Holy Yatra Logo"
              width={180}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex space-x-6">
            <Link href="/" className="text-secondary hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link href="/destination-list" className="text-secondary hover:text-primary font-medium transition-colors">
              Destinations
            </Link>
            <Link href="/destination-list" className="text-secondary hover:text-primary font-medium transition-colors">
              Regions
            </Link>
            <div className="relative group">
              <span className="text-secondary hover:text-primary font-medium transition-colors cursor-pointer">
                Tour By Interest
              </span>
              <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-md py-2 hidden group-hover:block z-10">
                <Link href="#" className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white">
                  Cultural Tours
                </Link>
                <Link href="#" className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white">
                  Wildlife Tours
                </Link>
                <Link href="#" className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white">
                  Pilgrimage Tours
                </Link>
                <Link href="#" className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white">
                  Adventure Tours
                </Link>
              </div>
            </div>
            <Link href="/contact" className="text-secondary hover:text-primary font-medium transition-colors">
              Weekend Tour
            </Link>
            <Link href="/about" className="text-secondary hover:text-primary font-medium transition-colors">
 

              About Us
 

            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" className="text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
