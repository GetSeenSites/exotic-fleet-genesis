
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-luxury-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Experience <span className="text-executive-gold">Matters</span>
            </h2>
            <h3 className="text-xl text-gray-300 mb-6">
              Founded by passionate car enthusiasts for true automotive lovers.
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Executive Exotics was built to redefine Tampa's car rental industry. Our team ensures every detail of your rental is handled with care and discretion. From Ferrari thrills to Rolls Royce luxury, we deliver more than a car – we deliver an unforgettable experience.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-executive-gold mb-2">25+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-executive-gold mb-2">10+</div>
                <div className="text-gray-400">Luxury Vehicles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-executive-gold mb-2">24/7</div>
                <div className="text-gray-400">Concierge Service</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-executive-gold mb-2">5★</div>
                <div className="text-gray-400">Ratings</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1606016793307-f2b3e02dd6b6?auto=format&fit=crop&w=800&q=80"
              alt="Luxury car dealership interior"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-executive-gold text-luxury-black p-6 rounded-lg shadow-xl">
              <div className="text-2xl font-bold">Premium Service</div>
              <div className="text-sm">Since 2018</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
