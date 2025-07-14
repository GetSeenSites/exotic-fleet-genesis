
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1920&q=80',
      alt: 'Luxury Lamborghini in Miami',
    },
    {
      url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80',
      alt: 'Ferrari on Florida coastline',
    },
    {
      url: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1920&q=80',
      alt: 'Rolls Royce luxury experience',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Image replacing the text */}
        <div className="mb-8 animate-fade-in">
          <img
            src="/EET_Logo.png"
            alt="Executive Exotics Tampa - Drive Tampa's Most Exclusive Exotic Cars"
            className="mx-auto max-w-full h-auto w-72 sm:w-96 md:w-[28rem] lg:w-[32rem] object-contain"
          />
        </div>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in">
          Book your dream ride with ease. Experience luxury, performance, and style with Executive Exotics.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <Link
            to="/fleet"
            className="border-2 border-executive-gold bg-executive-gold text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 hover-lift"
          >
            Browse Our Fleet
          </Link>
          <Link
            to="/contact"
            className="border-2 border-executive-gold text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
          >
            Reserve Your Vehicle
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300 animate-fade-in">
          <div className="flex items-center justify-center">
            <span className="text-executive-gold mr-2">✓</span>
            Seamless Online Booking
          </div>
          <div className="flex items-center justify-center">
            <span className="text-executive-gold mr-2">✓</span>
            Immaculately Maintained Fleet
          </div>
          <div className="flex items-center justify-center">
            <span className="text-executive-gold mr-2">✓</span>
            Premium Delivery & Pickup Options
          </div>
          <div className="flex items-center justify-center">
            <span className="text-executive-gold mr-2">✓</span>
            Trusted by Florida's Elite Tourists
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-executive-gold' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
