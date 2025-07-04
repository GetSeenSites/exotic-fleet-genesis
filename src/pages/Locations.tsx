
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Locations = () => {
  const locations = [
    {
      city: 'St. Petersburg',
      address: '3456 Central Avenue, St. Petersburg, FL 33705',
      phone: '(727) XXX-XXXX',
      hours: 'Mon-Sun: 8:00 AM - 9:00 PM',
      services: ['Waterfront Delivery', 'Downtown Pickup', 'Special Events'],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80'
    },
    {
      city: 'Tampa',
      address: '9012 Westshore Blvd, Tampa, FL 33607',
      phone: '(813) XXX-XXXX',
      hours: 'Mon-Sun: 8:00 AM - 9:00 PM',
      services: ['Business District Delivery', 'Corporate Rentals', 'Special Events'],
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const deliveryAreas = [
    'Pinellas County',
    'Hillsborough County',
    'Pasco County',
    'Manatee County',
    'Sarasota County',
    'Polk County'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-luxury-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-chrome-light chrome-text-shadow">Locations</span>
          </h1>
          <p className="text-xl text-gray-300">
            Serving Florida's premier destinations with luxury vehicle rentals
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift chrome-card-effect">
                <div className="relative h-48">
                  <img
                    src={location.image}
                    alt={`${location.city} location`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-heading text-2xl font-bold text-white chrome-text-shadow">
                      {location.city}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-chrome-mid text-lg mr-3">📍</span>
                      <div>
                        <h4 className="font-semibold text-luxury-black mb-1">Address</h4>
                        <p className="text-gray-600 text-sm">{location.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <span className="text-chrome-mid text-lg mr-3">📞</span>
                      <div>
                        <h4 className="font-semibold text-luxury-black mb-1">Phone</h4>
                        <p className="text-gray-600 text-sm">{location.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <span className="text-chrome-mid text-lg mr-3">🕒</span>
                      <div>
                        <h4 className="font-semibold text-luxury-black mb-1">Hours</h4>
                        <p className="text-gray-600 text-sm">{location.hours}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-luxury-black mb-2">Services</h4>
                      <div className="flex flex-wrap gap-2">
                        {location.services.map((service, idx) => (
                          <span key={idx} className="bg-chrome-light bg-opacity-20 text-chrome-dark px-3 py-1 rounded-full text-xs font-medium">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href="/contact"
                      className="w-full chrome-premium-gradient text-luxury-black py-3 rounded-lg font-semibold text-center block hover:chrome-button-hover transition-all duration-300 chrome-button-shadow"
                    >
                      Contact This Location
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Delivery Areas */}
          <div className="bg-white rounded-xl shadow-lg p-8 chrome-card-effect">
            <h2 className="font-heading text-3xl font-bold text-luxury-black mb-6 text-center">
              Delivery Areas
            </h2>
            <p className="text-gray-600 text-center mb-8">
              We provide complimentary delivery within these areas. Extended delivery available upon request.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {deliveryAreas.map((area, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-chrome-mid mr-2">✓</span>
                  <span className="text-luxury-black font-medium">{area}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Don't see your area? Contact us for extended delivery options.
              </p>
              <a
                href="/contact"
                className="inline-block bg-luxury-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
              >
                Request Delivery Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-luxury-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Ready to Experience <span className="text-chrome-light chrome-text-shadow">Luxury?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact any of our locations or request delivery to your preferred destination.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/fleet"
              className="chrome-premium-gradient text-luxury-black px-8 py-4 rounded-lg text-lg font-semibold hover:chrome-button-hover transition-all duration-300 chrome-button-shadow"
            >
              Browse Fleet
            </a>
            <a
              href="/contact"
              className="border-2 border-chrome-light text-chrome-light px-8 py-4 rounded-lg text-lg font-semibold hover:bg-chrome-light hover:text-luxury-black transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Locations;
