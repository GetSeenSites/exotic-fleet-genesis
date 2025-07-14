
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
                src="/EE_Logo.PNG"
                alt="Executive Exotics Logo"
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

      {/* Follow Us Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold mb-8">Follow Us</h2>
          <div className="flex justify-center space-x-8">
            {/* Facebook */}
            <a 
              href="https://www.facebook.com/profile.php?id=61578105203716" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/executiveexoticstpa/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.004 5.367 18.635.001 12.017.001zm5.568 16.372c-.126.532-.565.97-1.098 1.098-.48.13-1.61.2-2.47.2-2.862 0-4.662-.13-5.141-.261-.532-.126-.971-.566-1.098-1.098-.13-.48-.2-1.609-.2-2.469 0-2.862.13-4.663.261-5.142.126-.532.565-.97 1.098-1.098.48-.13 1.609-.2 2.469-.2 2.862 0 4.663.13 5.142.261.532.126.97.565 1.098 1.098.13.48.2 1.608.2 2.469-.001 2.861-.131 4.662-.261 5.142z"/>
              </svg>
            </a>

            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@executive.exotics" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              <span className="sr-only">TikTok</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
