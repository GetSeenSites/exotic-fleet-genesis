
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-luxury-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Executive <span className="text-executive-gold">Exotics</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Executive Exotics – Tampa's Premier Luxury Car Rentals. Experience the finest exotic vehicles with unmatched service and sophistication.
            </p>
            <div className="space-y-2 text-gray-300">
              <div>📍 Miami, Florida</div>
              <div>📞 (Your Business Number)</div>
              <div>✉️ info@executiveexotics.com</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-executive-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/fleet" className="text-gray-300 hover:text-executive-gold transition-colors">Browse Fleet</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-executive-gold transition-colors">Reserve Now</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-executive-gold transition-colors">About Us</Link></li>
              <li><Link to="/locations" className="text-gray-300 hover:text-executive-gold transition-colors">Locations</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-executive-gold transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-executive-gold transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-executive-gold">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-executive-gold transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.004 5.367 18.635.001 12.017.001zm5.568 16.372c-.126.532-.565.97-1.098 1.098-.48.13-1.61.2-2.47.2-2.862 0-4.662-.13-5.141-.261-.532-.126-.971-.566-1.098-1.098-.13-.48-.2-1.609-.2-2.469 0-2.862.13-4.663.261-5.142.126-.532.565-.97 1.098-1.098.48-.13 1.609-.2 2.469-.2 2.862 0 4.663.13 5.142.261.532.126.97.565 1.098 1.098.13.48.2 1.608.2 2.469-.001 2.861-.131 4.662-.261 5.142z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-executive-gold transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-executive-gold transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Executive Exotics. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Website by <a href="https://www.getseensites.com" className="text-executive-gold hover:text-yellow-400 transition-colors">GetSeenSites</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
