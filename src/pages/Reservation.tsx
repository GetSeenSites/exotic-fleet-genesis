import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Reservation = () => {
  const location = useLocation();
  const [selectedCar, setSelectedCar] = useState<any>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('car')) {
      setSelectedCar({
        name: params.get('car'),
        price: params.get('price'),
        engine: params.get('engine'),
        horsepower: params.get('horsepower'),
        acceleration: params.get('acceleration'),
        transmission: params.get('transmission'),
        drivetrain: params.get('drivetrain'),
        image: params.get('image'),
        category: params.get('category')
      });
    }
  }, [location.search]);

  if (!selectedCar) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-4xl font-bold text-luxury-black mb-4">No Vehicle Selected</h1>
          <p className="text-gray-600 mb-8">Please select a vehicle from our fleet to make a reservation.</p>
          <a href="/fleet" className="chrome-premium-gradient text-luxury-black px-8 py-3 rounded-lg font-semibold hover:chrome-button-hover transition-all duration-300 chrome-button-shadow">
            Browse Our Fleet
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-luxury-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Reserve Your <span className="text-chrome-light chrome-text-shadow">Dream Car</span>
          </h1>
          <p className="text-xl text-gray-300">
            Complete your booking for the ultimate luxury driving experience.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Selected Vehicle Summary */}
            <div>
              <div className="bg-white rounded-xl shadow-2xl p-8 chrome-card-effect">
                <h2 className="font-heading text-2xl font-bold text-luxury-black mb-6">
                  Selected Vehicle
                </h2>
                
                <div className="relative mb-6">
                  <img
                    src={selectedCar.image}
                    alt={selectedCar.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="chrome-premium-gradient text-luxury-black px-3 py-1 rounded-full text-sm font-semibold chrome-button-shadow">
                      {selectedCar.category}
                    </span>
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-luxury-black mb-4">
                  {selectedCar.name}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Engine:</span>
                    <span className="font-semibold">{selectedCar.engine}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Power:</span>
                    <span className="font-semibold">{selectedCar.horsepower}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Acceleration:</span>
                    <span className="font-semibold">{selectedCar.acceleration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Transmission:</span>
                    <span className="font-semibold">{selectedCar.transmission}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Drivetrain:</span>
                    <span className="font-semibold">{selectedCar.drivetrain}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Daily Rate:</span>
                    <span className="text-2xl font-bold text-chrome-mid">${selectedCar.price}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reservation Form */}
            <div>
              <div className="bg-white p-8 rounded-xl shadow-2xl">
                <h2 className="font-heading text-2xl font-bold text-luxury-black mb-6">
                  Reservation Details
                </h2>
                
                {/* Embedded GHL Form */}
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/wtWszi4okRRZ4q9MIxXm"
                  style={{width:'100%', height:'610px', border:'none', borderRadius:'3px'}}
                  id="polite-slide-in-right-wtWszi4okRRZ4q9MIxXm" 
                  data-layout="{'id':'POLITE_SLIDE_IN','minimizedTitle':'','isLeftAligned':false,'isRightAligned':true,'allowMinimize':false}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Car Reservation Form"
                  data-height="610"
                  data-layout-iframe-id="polite-slide-in-right-wtWszi4okRRZ4q9MIxXm"
                  data-form-id="wtWszi4okRRZ4q9MIxXm"
                  title="Car Reservation Form"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reservation;