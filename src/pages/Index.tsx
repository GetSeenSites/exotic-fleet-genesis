
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FleetGallery from '../components/FleetGallery';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FleetGallery />
      
      {/* Experience Matters Section */}
      <section className="py-20 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Experience <span className="text-executive-gold">Matters</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Founded by passionate car enthusiasts for true automotive lovers.
              Executive Exotics was built to redefine Tampa's car rental industry. Our team ensures every detail of your rental is handled with care and discretion. From Ferrari thrills to Rolls Royce luxury, we deliver more than a car – we deliver an unforgettable experience.
            </p>
            
            <div className="mb-16">
              <img
                src="/EE_Logo.PNG"
                alt="Executive Exotics Logo"
                className="mx-auto rounded-xl shadow-2xl max-w-md"
              />
              <p className="text-gray-300 mt-4">Premium Service</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-chrome-light chrome-active-glow mb-2">25+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-chrome-light chrome-active-glow mb-2">10+</div>
              <div className="text-gray-300">Luxury Vehicles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-chrome-light chrome-active-glow mb-2">24/7</div>
              <div className="text-gray-300">Concierge Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-chrome-light chrome-active-glow mb-2">5★</div>
              <div className="text-gray-300">Ratings</div>
            </div>
          </div>
        </div>
      </section>
      
      <AboutSection />
      
      {/* Final CTA Section */}
      <section className="py-20 gradient-luxury">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Ready To Drive Your Dream Car?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Reserve your exotic rental today and elevate your Florida experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/fleet"
              className="chrome-premium-gradient text-white px-8 py-4 rounded-lg text-lg font-semibold hover:chrome-metallic-surface transition-all duration-300 hover-lift chrome-button-shadow"
            >
              Browse Our Fleet
            </a>
            <a
              href="/contact"
              className="border-2 border-chrome-light text-white px-8 py-4 rounded-lg text-lg font-semibold hover:chrome-metallic-surface hover:border-chrome-specular transition-all duration-300"
            >
              Reserve Your Vehicle
            </a>
          </div>
          
          <p className="text-gray-300 text-sm">
            🔒 Transparent pricing • Premium customer service • Luxury guaranteed
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
