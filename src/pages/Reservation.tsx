import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { toast } from '@/hooks/use-toast';

const Reservation = () => {
  const location = useLocation();
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const [formInputs, setFormInputs] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    pickupDate: '',
    returnDate: ''
  });

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

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    setFormInputs(prev => ({ ...prev, pickupDate: today }));
  }, [location.search]);

  const calculateRentalDuration = () => {
    if (formInputs.pickupDate && formInputs.returnDate) {
      const pickup = new Date(formInputs.pickupDate);
      const returnDate = new Date(formInputs.returnDate);
      const diffTime = Math.abs(returnDate.getTime() - pickup.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 1;
  };

  const calculateTotalPrice = () => {
    const duration = calculateRentalDuration();
    const dailyRate = selectedCar ? parseInt(selectedCar.price) : 0;
    return duration * dailyRate;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInputs(prev => ({ ...prev, [name]: value }));

    // Auto-update return date when pickup date changes
    if (name === 'pickupDate' && value && !formInputs.returnDate) {
      const nextDay = new Date(value);
      nextDay.setDate(nextDay.getDate() + 1);
      setFormInputs(prev => ({ ...prev, returnDate: nextDay.toISOString().split('T')[0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formInputs.firstName || !formInputs.lastName || !formInputs.emailAddress || !formInputs.phoneNumber) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!formInputs.pickupDate || !formInputs.returnDate) {
      toast({
        title: "Error",
        description: "Please select pickup and return dates.",
        variant: "destructive",
      });
      return;
    }

    if (new Date(formInputs.returnDate) <= new Date(formInputs.pickupDate)) {
      toast({
        title: "Error",
        description: "Return date must be after pickup date.",
        variant: "destructive",
      });
      return;
    }

    const formData = new FormData();
    
    formData.append('first_name', formInputs.firstName);
    formData.append('last_name', formInputs.lastName);
    formData.append('email_address', formInputs.emailAddress);
    formData.append('phone_number', formInputs.phoneNumber);
    formData.append('pickup_date', formInputs.pickupDate);
    formData.append('return_date', formInputs.returnDate);

    try {
      const response = await fetch('https://api.leadconnectorhq.com/widget/form/wtWszi4okRRZ4q9MIxXm', {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });

      // With no-cors, we can't check response.ok, so we assume success
      toast({
        title: "Reservation Submitted!",
        description: "We'll contact you within 24 hours to confirm your booking.",
      });
      
      // Reset form
      setFormInputs({
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        pickupDate: '',
        returnDate: ''
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Error submitting reservation. Please try again.",
        variant: "destructive",
      });
    }
  };

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

  const today = new Date().toISOString().split('T')[0];

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
                  {formInputs.pickupDate && formInputs.returnDate && (
                    <>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold">{calculateRentalDuration()} days</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">Estimated Total:</span>
                        <span className="text-2xl font-bold text-chrome-mid">${calculateTotalPrice().toLocaleString()}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Reservation Form */}
            <div>
              <div className="bg-white p-8 rounded-xl shadow-2xl">
                <h2 className="font-heading text-2xl font-bold text-luxury-black mb-6">
                  Reservation Details
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-luxury-black mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formInputs.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chrome-mid focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formInputs.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chrome-mid focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="emailAddress"
                        name="emailAddress"
                        required
                        value={formInputs.emailAddress}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chrome-mid focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        required
                        value={formInputs.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chrome-mid focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Rental Dates */}
                  <div>
                    <h3 className="text-lg font-semibold text-luxury-black mb-4">Rental Dates</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700 mb-2">
                          Pickup Date *
                        </label>
                        <input
                          type="date"
                          id="pickupDate"
                          name="pickupDate"
                          required
                          min={today}
                          value={formInputs.pickupDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chrome-mid focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700 mb-2">
                          Return Date *
                        </label>
                        <input
                          type="date"
                          id="returnDate"
                          name="returnDate"
                          required
                          min={formInputs.pickupDate || today}
                          value={formInputs.returnDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chrome-mid focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full chrome-premium-gradient text-luxury-black py-4 rounded-lg font-semibold text-lg hover:chrome-button-hover transition-all duration-300 chrome-button-shadow"
                  >
                    Submit Reservation Request
                  </button>

                  <div className="text-center text-sm text-gray-600">
                    <p>🔒 Your information is secure and will be used only for your reservation</p>
                    <p className="mt-1">We'll contact you within 24 hours to confirm availability and finalize your booking</p>
                  </div>
                </form>
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
