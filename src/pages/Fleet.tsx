
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Fleet = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Supercar', 'Luxury SUV', 'Luxury Coupe', 'Sports Car'];

  const vehicles = [
    {
      id: 1,
      name: 'Lamborghini Huracán',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80',
      price: '$1,200',
      category: 'Supercar',
      specs: ['630 HP', '0-60 in 3.2s', 'V10 Engine']
    },
    {
      id: 2,
      name: 'Ferrari 488 GTB',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
      price: '$1,500',
      category: 'Supercar',
      specs: ['661 HP', '0-60 in 3.0s', 'Twin-Turbo V8']
    },
    {
      id: 3,
      name: 'Rolls Royce Cullinan',
      image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=800&q=80',
      price: '$2,000',
      category: 'Luxury SUV',
      specs: ['563 HP', 'Ultra Luxury', 'V12 Engine']
    },
    {
      id: 4,
      name: 'McLaren 720S',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
      price: '$1,800',
      category: 'Supercar',
      specs: ['710 HP', '0-60 in 2.8s', 'Twin-Turbo V8']
    },
    {
      id: 5,
      name: 'Bentley Continental GT',
      image: 'https://images.unsplash.com/photo-1617271808550-8e9a651194d2?auto=format&fit=crop&w=800&q=80',
      price: '$1,100',
      category: 'Luxury Coupe',
      specs: ['626 HP', 'Grand Touring', 'W12 Engine']
    },
    {
      id: 6,
      name: 'Porsche 911 Turbo S',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
      price: '$900',
      category: 'Sports Car',
      specs: ['640 HP', '0-60 in 2.6s', 'Twin-Turbo Flat-6']
    },
    {
      id: 7,
      name: 'Aston Martin DB11',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
      price: '$1,300',
      category: 'Luxury Coupe',
      specs: ['630 HP', 'British Luxury', 'Twin-Turbo V12']
    },
    {
      id: 8,
      name: 'Maserati MC20',
      image: 'https://images.unsplash.com/photo-1606016793307-f2b3e02dd6b6?auto=format&fit=crop&w=800&q=80',
      price: '$1,400',
      category: 'Supercar',
      specs: ['621 HP', '0-60 in 2.9s', 'Twin-Turbo V6']
    }
  ];

  const filteredVehicles = selectedCategory === 'All' 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-luxury-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-chrome-light chrome-text-shadow">Exotic Fleet</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from Florida's most exclusive collection of luxury and exotic vehicles
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'chrome-premium-gradient text-luxury-black chrome-button-shadow'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredVehicles.map((vehicle) => (
              <Link
                key={vehicle.id}
                to={`/vehicle/${vehicle.id}`}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover-lift luxury-shadow chrome-card-effect"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="chrome-premium-gradient text-luxury-black px-3 py-1 rounded-full text-sm font-semibold chrome-button-shadow">
                      {vehicle.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-luxury-black mb-2">
                    {vehicle.name}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {vehicle.specs.map((spec, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {spec}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-chrome-mid chrome-text-shadow">
                      {vehicle.price}<span className="text-sm text-gray-500">/day</span>
                    </span>
                    <span className="text-gray-600 group-hover:text-chrome-mid transition-colors">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fleet;
