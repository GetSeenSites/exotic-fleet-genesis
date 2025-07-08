
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-luxury-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-chrome-light chrome-text-shadow">Executive Exotics</span>
          </h1>
          <p className="text-xl text-gray-300">
            Redefining luxury car rentals with passion, precision, and unmatched service
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold text-luxury-black mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Executive Exotics was born from a simple vision: to provide Florida's most discerning tourists and business travelers with access to the world's most exclusive vehicles, paired with service that exceeds every expectation.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Founded in 2018 by automotive enthusiasts who understood that luxury isn't just about the car—it's about the entire experience. From the moment you inquire about a vehicle to the final mile of your journey, we ensure every detail reflects our commitment to excellence.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, we're proud to serve clients who expect nothing but the best, offering a curated fleet of exotic and luxury vehicles that represent the pinnacle of automotive achievement.
              </p>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1606016793307-f2b3e02dd6b6?auto=format&fit=crop&w=800&q=80"
                alt="Luxury car showroom"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-luxury-black mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at Executive Exotics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg chrome-card-effect">
              <div className="w-16 h-16 chrome-premium-gradient rounded-full flex items-center justify-center mx-auto mb-6 chrome-button-shadow">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-luxury-black mb-4">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in every aspect of our service, from vehicle maintenance to customer care.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg chrome-card-effect">
              <div className="w-16 h-16 chrome-premium-gradient rounded-full flex items-center justify-center mx-auto mb-6 chrome-button-shadow">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-luxury-black mb-4">Trust</h3>
              <p className="text-gray-600">
                Your confidence in us is paramount. We handle every transaction with complete transparency and integrity.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg chrome-card-effect">
              <div className="w-16 h-16 chrome-premium-gradient rounded-full flex items-center justify-center mx-auto mb-6 chrome-button-shadow">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-luxury-black mb-4">Performance</h3>
              <p className="text-gray-600">
                Just like our vehicles, we deliver exceptional performance in everything we do—speed, precision, and power.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-luxury-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <Footer />
    </div>
  );
};

export default About;
