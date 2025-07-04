
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
              className="chrome-premium-gradient text-luxury-black px-8 py-4 rounded-lg text-lg font-semibold hover:chrome-button-hover transition-all duration-300 hover-lift chrome-button-shadow"
            >
              Browse Our Fleet
            </a>
            <a
              href="/contact"
              className="border-2 border-chrome-light text-chrome-light px-8 py-4 rounded-lg text-lg font-semibold hover:bg-chrome-light hover:text-luxury-black transition-all duration-300"
            >
              Contact Us
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
