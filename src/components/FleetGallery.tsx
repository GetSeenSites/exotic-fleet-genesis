
import React from 'react';
import { Link } from 'react-router-dom';

const FleetGallery = () => {
  const vehicles = [
    {
      id: 1,
      name: 'Lamborghini Huracán',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80',
      price: '$1,200/day',
      category: 'Supercar',
      engine: 'V10',
      horsepower: '630 HP',
      acceleration: '0-60 in 3.2s',
      transmission: 'Automatic',
      drivetrain: 'AWD'
    },
    {
      id: 2,
      name: 'Ferrari 488 GTB',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
      price: '$1,500/day',
      category: 'Supercar',
      engine: 'Twin-Turbo V8',
      horsepower: '661 HP',
      acceleration: '0-60 in 3.0s',
      transmission: 'Automatic',
      drivetrain: 'RWD'
    },
    {
      id: 3,
      name: 'Rolls Royce Cullinan',
      image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=800&q=80',
      price: '$2,000/day',
      category: 'Luxury SUV',
      engine: 'V12',
      horsepower: '563 HP',
      acceleration: '0-60 in 5.2s',
      transmission: 'Automatic',
      drivetrain: 'AWD'
    },
    {
      id: 4,
      name: 'McLaren 720S',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
      price: '$1,800/day',
      category: 'Supercar',
      engine: 'Twin-Turbo V8',
      horsepower: '710 HP',
      acceleration: '0-60 in 2.8s',
      transmission: 'Automatic',
      drivetrain: 'RWD'
    },
    {
      id: 5,
      name: 'Bentley Continental GT',
      image: 'https://images.unsplash.com/photo-1617271808550-8e9a651194d2?auto=format&fit=crop&w=800&q=80',
      price: '$1,100/day',
      category: 'Luxury Coupe',
      engine: 'W12',
      horsepower: '626 HP',
      acceleration: '0-60 in 3.7s',
      transmission: 'Automatic',
      drivetrain: 'AWD'
    },
    {
      id: 6,
      name: 'Porsche 911 Turbo S',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
      price: '$900/day',
      category: 'Sports Car',
      engine: 'Twin-Turbo Flat-6',
      horsepower: '640 HP',
      acceleration: '0-60 in 2.6s',
      transmission: 'Automatic',
      drivetrain: 'AWD'
    }
  ];

  const reserveThisCar = (vehicle: typeof vehicles[0]) => {
    const params = new URLSearchParams({
      car: vehicle.name,
      price: vehicle.price.replace('$', '').replace('/day', '').replace(',', ''),
      engine: vehicle.engine,
      horsepower: vehicle.horsepower,
      acceleration: vehicle.acceleration,
      transmission: vehicle.transmission,
      drivetrain: vehicle.drivetrain,
      image: vehicle.image,
      category: vehicle.category
    });
    
    window.location.href = `/reservation?${params.toString()}`;
  };

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
            <div
              key={vehicle.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover-lift luxury-shadow"
              data-car-name={vehicle.name}
              data-car-price={vehicle.price.replace('$', '').replace('/day', '').replace(',', '')}
              data-car-engine={vehicle.engine}
              data-car-horsepower={vehicle.horsepower}
              data-car-acceleration={vehicle.acceleration}
              data-car-transmission={vehicle.transmission}
              data-car-drivetrain={vehicle.drivetrain}
              data-car-image={vehicle.image}
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
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-executive-gold">
                    {vehicle.price}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <Link
                    to={`/vehicle/${vehicle.id}`}
                    className="block w-full text-center bg-gray-100 text-luxury-black py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
                  >
                    View Details →
                  </Link>
                  <button
                    onClick={() => reserveThisCar(vehicle)}
                    className="w-full bg-executive-gold text-luxury-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 hover-lift"
                  >
                    Reserve This Vehicle
                  </button>
                </div>
              </div>
            </div>
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
