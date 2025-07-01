
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { toast } from '@/hooks/use-toast';

const VehicleDetail = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  // Mock vehicle data (in real app, this would come from an API)
  const vehicle = {
    id: parseInt(id || '1'),
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
    ]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Rental inquiry submitted:', { vehicle: vehicle.name, ...formData });
    
    toast({
      title: "Inquiry Submitted!",
      description: "We'll contact you within 24 hours to confirm your reservation.",
    });

    // Reset form
    setFormData({ name: '', phone: '', email: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
              <div>
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
            </div>

            {/* Rental Form */}
            <div>
              <div className="bg-white p-8 rounded-xl shadow-2xl sticky top-8">
                <h2 className="font-heading text-2xl font-bold text-luxury-black mb-6">
                  Reserve This Vehicle
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-executive-gold focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-executive-gold focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-executive-gold focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-executive-gold text-luxury-black py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 hover-lift"
                  >
                    Submit Inquiry
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    🔒 Your information is secure and confidential
                  </p>
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
