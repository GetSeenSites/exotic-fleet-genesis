
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VehicleDetail = () => {
  const { id } = useParams();

  // Vehicle data - this should match the data from Fleet page
  const vehicles = [
    {
      id: 1,
      name: 'Lamborghini Huracán',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80',
      price: '$1,200',
      category: 'Supercar',
      specs: [
        { label: 'Engine', value: '5.2L V10' },
        { label: 'Horsepower', value: '630 HP' },
        { label: '0-60 mph', value: '3.2 seconds' },
        { label: 'Top Speed', value: '202 mph' },
        { label: 'Transmission', value: '7-speed dual-clutch' },
        { label: 'Drivetrain', value: 'All-wheel drive' }
      ],
      description: 'Experience the thrill of Italian engineering with the Lamborghini Huracán. This supercar combines raw power with sophisticated technology, delivering an unforgettable driving experience on Florida\'s scenic roads.',
      features: [
        'Premium leather interior',
        'Advanced infotainment system',
        'Carbon fiber accents',
        'Adaptive suspension',
        'Launch control',
        'Multiple drive modes'
      ],
      engine: 'V10',
      horsepower: '630 HP',
      acceleration: '0-60 in 3.2s',
      transmission: 'Automatic',
      drivetrain: 'AWD'
    },
    {
      id: 2,
      name: 'Ferrari 488 GTB',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      price: '$1,500',
      category: 'Supercar',
      specs: [
        { label: 'Engine', value: '3.9L Twin-Turbo V8' },
        { label: 'Horsepower', value: '661 HP' },
        { label: '0-60 mph', value: '3.0 seconds' },
        { label: 'Top Speed', value: '205 mph' },
        { label: 'Transmission', value: '7-speed dual-clutch' },
        { label: 'Drivetrain', value: 'Rear-wheel drive' }
      ],
      description: 'The Ferrari 488 GTB represents the pinnacle of Italian automotive excellence. With its twin-turbocharged V8 engine and advanced aerodynamics, this supercar delivers breathtaking performance and unmistakable Ferrari passion.',
      features: [
        'Carbon fiber body elements',
        'Ferrari Side Slip Control',
        'Magnetorheological dampers',
        'Launch control',
        'Variable torque management',
        'Premium Alcantara interior'
      ],
      engine: 'Twin-Turbo V8',
      horsepower: '661 HP',
      acceleration: '0-60 in 3.0s',
      transmission: 'Automatic',
      drivetrain: 'RWD'
    },
    {
      id: 3,
      name: 'Rolls Royce Cullinan',
      image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1200&q=80',
      price: '$2,000',
      category: 'Luxury SUV',
      specs: [
        { label: 'Engine', value: '6.75L V12' },
        { label: 'Horsepower', value: '563 HP' },
        { label: '0-60 mph', value: '5.2 seconds' },
        { label: 'Top Speed', value: '155 mph' },
        { label: 'Transmission', value: '8-speed automatic' },
        { label: 'Drivetrain', value: 'All-wheel drive' }
      ],
      description: 'The Rolls-Royce Cullinan redefines luxury SUV standards. This ultra-luxurious vehicle combines the commanding presence of an SUV with the refined elegance and craftsmanship that only Rolls-Royce can deliver.',
      features: [
        'Bespoke interior craftsmanship',
        'Magic Carpet Ride suspension',
        'Whisper-quiet cabin',
        'Starlight Headliner',
        'Rear-seat entertainment',
        'Champagne cooler'
      ],
      engine: 'V12',
      horsepower: '563 HP',
      acceleration: '0-60 in 5.2s',
      transmission: 'Automatic',
      drivetrain: 'AWD'
    },
    {
      id: 4,
      name: 'McLaren 720S',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
      price: '$1,800',
      category: 'Supercar',
      specs: [
        { label: 'Engine', value: '4.0L Twin-Turbo V8' },
        { label: 'Horsepower', value: '710 HP' },
        { label: '0-60 mph', value: '2.8 seconds' },
        { label: 'Top Speed', value: '212 mph' },
        { label: 'Transmission', value: '7-speed dual-clutch' },
        { label: 'Drivetrain', value: 'Rear-wheel drive' }
      ],
      description: 'The McLaren 720S pushes the boundaries of supercar performance. With its lightweight carbon fiber construction and twin-turbocharged V8, this machine delivers track-focused performance with surprising daily usability.',
      features: [
        'Carbon fiber monocoque',
        'Adaptive suspension',
        'Active aerodynamics',
        'McLaren Track Telemetry',
        'Dihedral doors',
        'Premium audio system'
      ],
      engine: 'Twin-Turbo V8',
      horsepower: '710 HP',
      acceleration: '0-60 in 2.8s',
      transmission: 'Automatic',
      drivetrain: 'RWD'
    },
    {
      id: 5,
      name: 'Bentley Continental GT',
      image: 'https://images.unsplash.com/photo-1617271808550-8e9a651194d2?auto=format&fit=crop&w=1200&q=80',
      price: '$1,100',
      category: 'Luxury Coupe',
      specs: [
        { label: 'Engine', value: '6.0L W12' },
        { label: 'Horsepower', value: '626 HP' },
        { label: '0-60 mph', value: '3.7 seconds' },
        { label: 'Top Speed', value: '207 mph' },
        { label: 'Transmission', value: '8-speed dual-clutch' },
        { label: 'Drivetrain', value: 'All-wheel drive' }
      ],
      description: 'The Bentley Continental GT epitomizes grand touring luxury. This handcrafted masterpiece combines extraordinary performance with unparalleled comfort, making every journey an occasion to remember.',
      features: [
        'Handcrafted leather interior',
        'Real wood veneer',
        'Rotating display',
        'Mulliner driving specification',
        'Naim audio system',
        'Massage seats'
      ],
      engine: 'W12',
      horsepower: '626 HP',
      acceleration: '0-60 in 3.7s',
      transmission: 'Automatic',
      drivetrain: 'AWD'
    },
    {
      id: 6,
      name: 'Porsche 911 Turbo S',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80',
      price: '$900',
      category: 'Sports Car',
      specs: [
        { label: 'Engine', value: '3.8L Twin-Turbo Flat-6' },
        { label: 'Horsepower', value: '640 HP' },
        { label: '0-60 mph', value: '2.6 seconds' },
        { label: 'Top Speed', value: '205 mph' },
        { label: 'Transmission', value: '8-speed PDK' },
        { label: 'Drivetrain', value: 'All-wheel drive' }
      ],
      description: 'The Porsche 911 Turbo S represents the pinnacle of sports car engineering. With its iconic design and devastating performance, this machine delivers the perfect balance of everyday usability and track-day capability.',
      features: [
        'Sport Chrono Package',
        'PASM adaptive suspension',
        'Porsche Torque Vectoring',
        'Sport seats Plus',
        'Bose audio system',
        'Launch control'
      ],
      engine: 'Twin-Turbo Flat-6',
      horsepower: '640 HP',
      acceleration: '0-60 in 2.6s',
      transmission: 'Automatic',
      drivetrain: 'AWD'
    },
    {
      id: 7,
      name: 'Aston Martin DB11',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      price: '$1,300',
      category: 'Luxury Coupe',
      specs: [
        { label: 'Engine', value: '5.2L Twin-Turbo V12' },
        { label: 'Horsepower', value: '630 HP' },
        { label: '0-60 mph', value: '3.9 seconds' },
        { label: 'Top Speed', value: '200 mph' },
        { label: 'Transmission', value: '8-speed automatic' },
        { label: 'Drivetrain', value: 'Rear-wheel drive' }
      ],
      description: 'The Aston Martin DB11 embodies British luxury and performance. This grand tourer combines stunning design with exhilarating performance, creating an unforgettable driving experience steeped in automotive heritage.',
      features: [
        'Premium leather upholstery',
        'Carbon fiber trim',
        'Bang & Olufsen audio',
        'Adaptive dampers',
        'Launch control',
        'Premium climate control'
      ],
      engine: 'Twin-Turbo V12',
      horsepower: '630 HP',
      acceleration: '0-60 in 3.9s',
      transmission: 'Automatic',
      drivetrain: 'RWD'
    },
    {
      id: 8,
      name: 'Maserati MC20',
      image: 'https://images.unsplash.com/photo-1606016793307-f2b3e02dd6b6?auto=format&fit=crop&w=1200&q=80',
      price: '$1,400',
      category: 'Supercar',
      specs: [
        { label: 'Engine', value: '3.0L Twin-Turbo V6' },
        { label: 'Horsepower', value: '621 HP' },
        { label: '0-60 mph', value: '2.9 seconds' },
        { label: 'Top Speed', value: '202 mph' },
        { label: 'Transmission', value: '8-speed dual-clutch' },
        { label: 'Drivetrain', value: 'Rear-wheel drive' }
      ],
      description: 'The Maserati MC20 marks the return of Maserati to the supercar arena. With its innovative Nettuno engine and stunning design, this Italian masterpiece delivers pure racing DNA in a road-legal package.',
      features: [
        'Carbon fiber construction',
        'Butterfly doors',
        'Racing-derived aerodynamics',
        'Premium Alcantara interior',
        'Advanced traction control',
        'Launch control system'
      ],
      engine: 'Twin-Turbo V6',
      horsepower: '621 HP',
      acceleration: '0-60 in 2.9s',
      transmission: 'Automatic',
      drivetrain: 'RWD'
    }
  ];

  // Find the vehicle by ID
  const vehicle = vehicles.find(v => v.id === parseInt(id || '1'));

  // If vehicle not found, show error
  if (!vehicle) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-4xl font-bold text-luxury-black mb-4">Vehicle Not Found</h1>
          <p className="text-gray-600 mb-8">The vehicle you're looking for doesn't exist.</p>
          <Link to="/fleet" className="bg-executive-gold text-luxury-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300">
            Browse Our Fleet
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const reserveThisCar = () => {
    const params = new URLSearchParams({
      car: vehicle.name,
      price: vehicle.price.replace('$', '').replace(',', ''),
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-executive-gold">Home</Link>
              <span>/</span>
              <Link to="/fleet" className="hover:text-executive-gold">Fleet</Link>
              <span>/</span>
              <span className="text-executive-gold">{vehicle.name}</span>
            </div>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vehicle Image and Info */}
            <div>
              <div className="relative mb-6">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-96 object-cover rounded-xl shadow-2xl"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-executive-gold text-luxury-black px-4 py-2 rounded-full font-semibold">
                    {vehicle.category}
                  </span>
                </div>
              </div>

              <h1 className="font-heading text-4xl font-bold text-luxury-black mb-4">
                {vehicle.name}
              </h1>
              
              <div className="flex items-center mb-6">
                <span className="text-4xl font-bold text-executive-gold mr-4">
                  {vehicle.price}
                </span>
                <span className="text-gray-600">per day</span>
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed">
                {vehicle.description}
              </p>

              {/* Specifications */}
              <div className="mb-8">
                <h3 className="font-heading text-2xl font-bold text-luxury-black mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {vehicle.specs.map((spec, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow">
                      <div className="text-sm text-gray-600 mb-1">{spec.label}</div>
                      <div className="font-semibold text-luxury-black">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-heading text-2xl font-bold text-luxury-black mb-4">Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {vehicle.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <span className="text-executive-gold mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Reserve Button */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <button
                  onClick={reserveThisCar}
                  className="w-full bg-executive-gold text-luxury-black py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 hover-lift"
                >
                  Reserve This Vehicle
                </button>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    🔒 Secure reservation process
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-2xl">
                <h2 className="font-heading text-2xl font-bold text-luxury-black mb-6">
                  Why Choose This Vehicle?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-executive-gold mr-3 mt-1">⭐</span>
                    <div>
                      <h4 className="font-semibold text-luxury-black">Premium Experience</h4>
                      <p className="text-gray-600">Meticulously maintained and detailed before every rental</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-executive-gold mr-3 mt-1">🛡️</span>
                    <div>
                      <h4 className="font-semibold text-luxury-black">Comprehensive Insurance</h4>
                      <p className="text-gray-600">Full coverage included with every rental</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-executive-gold mr-3 mt-1">📞</span>
                    <div>
                      <h4 className="font-semibold text-luxury-black">24/7 Support</h4>
                      <p className="text-gray-600">Round-the-clock assistance whenever you need it</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-executive-gold mr-3 mt-1">🚗</span>
                    <div>
                      <h4 className="font-semibold text-luxury-black">Delivery Available</h4>
                      <p className="text-gray-600">We can deliver to your location in Tampa Bay area</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-2xl">
                <h2 className="font-heading text-2xl font-bold text-luxury-black mb-6">
                  Rental Information
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div className="flex justify-between">
                    <span>Minimum Age:</span>
                    <span className="font-semibold">25 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Valid License Required:</span>
                    <span className="font-semibold">Yes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security Deposit:</span>
                    <span className="font-semibold">Required</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fuel Policy:</span>
                    <span className="font-semibold">Return Full</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mileage:</span>
                    <span className="font-semibold">200 miles/day included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VehicleDetail;
