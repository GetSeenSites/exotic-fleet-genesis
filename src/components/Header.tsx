
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Fleet', href: '/fleet' },
    { name: 'About', href: '/about' },
    { name: 'Locations', href: '/locations' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="w-[140px]">
              <h1 className="font-heading text-2xl font-bold text-white">
                Executive <span className="text-executive-gold">Exotics</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-white hover:text-executive-gold transition-colors duration-300 font-medium ${
                  location.pathname === item.href ? 'text-executive-gold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/fleet"
              className="bg-executive-gold text-luxury-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 hover-lift"
            >
              Browse Fleet
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-executive-gold transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-luxury-black bg-opacity-95 rounded-lg mt-2 p-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-white hover:text-executive-gold transition-colors duration-300 font-medium ${
                    location.pathname === item.href ? 'text-executive-gold' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/fleet"
                onClick={() => setIsMenuOpen(false)}
                className="bg-executive-gold text-luxury-black px-6 py-3 rounded-lg font-semibold text-center hover:bg-yellow-400 transition-all duration-300"
              >
                Browse Fleet
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
