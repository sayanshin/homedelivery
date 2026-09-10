import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bahari-brown text-bahari-cream pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-bahari-red rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">
                B
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight text-white">
                Bahari<span className="text-bahari-red">Ranna</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Authentic Bengali Flavors Delivered to Your Doorstep. Experience the taste of tradition.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-bahari-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-bahari-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-bahari-red transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-bahari-yellow transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-bahari-yellow transition-colors">Our Menu</a></li>
              <li><a href="#about" className="hover:text-bahari-yellow transition-colors">About Us</a></li>
              <li><a href="#reviews" className="hover:text-bahari-yellow transition-colors">Customer Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-bahari-red shrink-0 mt-1" />
                <span>123 Park Street, Kolkata, West Bengal 700016</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-bahari-red shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-bahari-red shrink-0" />
                <span>hello@bahariranna.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-6">Opening Hours</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Mon - Fri</span>
                <span>11:00 AM - 10:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Saturday</span>
                <span>10:00 AM - 11:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Sunday</span>
                <span>10:00 AM - 11:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Bahari Ranna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
