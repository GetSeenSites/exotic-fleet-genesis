
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Contact form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-luxury-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Contact <span className="text-executive-gold">Us</span>
          </h1>
          <p className="text-xl text-gray-300">
            Ready to experience luxury? Get in touch with our team today.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-luxury-black mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-executive-gold rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-luxury-black text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-luxury-black mb-1">Location</h3>
                    <p className="text-gray-600">Tampa, Florida</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-executive-gold rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-luxury-black text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-luxury-black mb-1">Phone</h3>
                    <p className="text-gray-600">(Your Business Number)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-executive-gold rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-luxury-black text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-luxury-black mb-1">Email</h3>
                    <p className="text-gray-600">Contact@executiveexoticstpa.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-executive-gold rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-luxury-black text-xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-luxury-black mb-1">Hours</h3>
                    <p className="text-gray-600">Mon-Sun: 8:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-heading text-xl font-bold text-luxury-black mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <a
                    href="/fleet"
                    className="block bg-executive-gold text-luxury-black px-6 py-3 rounded-lg font-semibold text-center hover:bg-yellow-400 transition-all duration-300"
                  >
                    Browse Our Fleet
                  </a>
                  <a
                    href="tel:(Your Business Number)"
                    className="block border-2 border-executive-gold text-executive-gold px-6 py-3 rounded-lg font-semibold text-center hover:bg-executive-gold hover:text-luxury-black transition-all duration-300"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-xl shadow-2xl">
                <h2 className="font-heading text-2xl font-bold text-luxury-black mb-6">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        placeholder="Your name"
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
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-executive-gold focus:border-transparent"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-executive-gold focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="rental-inquiry">Rental Inquiry</option>
                        <option value="pricing">Pricing Information</option>
                        <option value="availability">Vehicle Availability</option>
                        <option value="support">Customer Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-executive-gold focus:border-transparent"
                      placeholder="Tell us about your rental needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-executive-gold text-luxury-black py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 hover-lift"
                  >
                    Send Message
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    🔒 Your information is secure and will never be shared
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
