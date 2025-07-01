
import React from 'react';
import { Link } from 'react-router-dom';

const FleetGallery = () => {
  const vehicles = [
    {
      id: 1,
      name: 'Lamborghini Huracán',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80',
      price: '$1,200/day',
      category: 'Supercar'
    },
    {
      id: 2,
      name: 'Ferrari 488 GTB',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
      price: '$1,500/day',
      category: 'Supercar'
    },
    {
      id: 3,
      name: 'Rolls Royce Cullinan',
      image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=800&q=80',
      price: '$2,000/day',
      category: 'Luxury SUV'
    },
    {
      id: 4,
      name: 'McLaren 720S',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
      price: '$1,800/day',
      category: 'Supercar'
    },
    {
      id: 5,
      name: 'Bentley Continental GT',
      image: 'https://images.unsplash.com/photo-1617271808550-8e9a651194d2?auto=format&fit=crop&w=800&q=80',
      price: '$1,100/day',
      category: 'Luxury Coupe'
    },
    {
      id: 6,
      name: 'Porsche 911 Turbo S',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
      price: '$900/day',
      category: 'Sports Car'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-luxury-black mb-6">
            Choose Your Dream Ride
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Premium exotic cars available for your Florida experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <Link
              key={vehicle.id}
              to={`/vehicle/${vehicle.id}`}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover-lift luxury-shadow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-executive-gold text-luxury-black px-3 py-1 rounded-full text-sm font-semibold">
                    {vehicle.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-luxury-black mb-2">
                  {vehicle.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-executive-gold">
                    {vehicle.price}
                  </span>
                  <span className="text-gray-600 group-hover:text-executive-gold transition-colors">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/fleet"
            className="bg-luxury-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover-lift"
          >
            View Complete Fleet
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FleetGallery;
