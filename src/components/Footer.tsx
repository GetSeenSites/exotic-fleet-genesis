import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I book a luxury vehicle?',
      answer: 'Browse our fleet online, select your preferred vehicle, and submit an inquiry form with your details. Our team will contact you within 24 hours to confirm availability and finalize your reservation.'
    },
    {
      question: 'What are the age and license requirements?',
      answer: 'Drivers must be at least 25 years old with a valid driver\'s license held for minimum 2 years. International visitors need a valid international driving permit along with their home country license.'
    },
    {
      question: 'What insurance coverage is required?',
      answer: 'All rentals include comprehensive insurance coverage. However, we require a security deposit that varies by vehicle value. We also recommend checking with your personal insurance provider about exotic vehicle coverage.'
    },
    {
      question: 'Do you offer delivery and pickup services?',
      answer: 'Yes! We offer complimentary delivery and pickup within Miami-Dade County. Extended delivery areas are available for an additional fee. We can deliver to hotels, airports, or any location convenient for you.'
    },
    {
      question: 'How are your vehicles maintained?',
      answer: 'Every vehicle in our fleet undergoes rigorous maintenance by certified technicians. We follow manufacturer guidelines and perform detailed inspections before and after each rental to ensure optimal performance and safety.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <footer className="bg-luxury-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-bold text-executive-gold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800 transition-colors"
                >
                  <h3 className="font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className={`transform transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-executive-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-700 pt-4">
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

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
              <div>📍 Tampa, Florida</div>
              <div>📞 (Your Business Number)</div>
              <div>✉️ contact@executiveexoticstpa.com</div>
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
              <a href="https://www.facebook.com/profile.php?id=61578105203716" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-executive-gold transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/executiveexoticstpa/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-executive-gold transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.004 5.367 18.635.001 12.017.001zm5.568 16.372c-.126.532-.565.97-1.098 1.098-.48.13-1.61.2-2.47.2-2.862 0-4.662-.13-5.141-.261-.532-.126-.971-.566-1.098-1.098-.13-.48-.2-1.609-.2-2.469 0-2.862.13-4.663.261-5.142.126-.532.565-.97 1.098-1.098.48-.13 1.609-.2 2.469-.2 2.862 0 4.663.13 5.142.261.532.126.97.565 1.098 1.098.13.48.2 1.608.2 2.469-.001 2.861-.131 4.662-.261 5.142z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@executive.exotics" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-executive-gold transition-colors">
                <span className="sr-only">TikTok</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
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
