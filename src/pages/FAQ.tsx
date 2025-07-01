
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I book a luxury vehicle?',
      answer: 'Booking is simple! Browse our fleet online, select your preferred vehicle, and submit an inquiry form with your details. Our team will contact you within 24 hours to confirm availability and finalize your reservation.'
    },
    {
      question: 'What are the age and license requirements?',
      answer: 'Drivers must be at least 25 years old with a valid driver\'s license held for minimum 2 years. International visitors need a valid international driving permit along with their home country license.'
    },
    {
      question: 'What insurance coverage is required?',
      answer: 'All rentals include comprehensive insurance coverage. However, we require a security deposit that varies by vehicle value. We also recommend checking with your personal insurance provider about exotic vehicle coverage.'
    },
    {
      question: 'Do you offer delivery and pickup services?',
      answer: 'Yes! We offer complimentary delivery and pickup within Miami-Dade County. Extended delivery areas are available for an additional fee. We can deliver to hotels, airports, or any location convenient for you.'
    },
    {
      question: 'How are your vehicles maintained?',
      answer: 'Every vehicle in our fleet undergoes rigorous maintenance by certified technicians. We follow manufacturer guidelines and perform detailed inspections before and after each rental to ensure optimal performance and safety.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Cancellations made 48 hours before pickup receive a full refund. Cancellations within 24-48 hours incur a 25% fee. Same-day cancellations or no-shows forfeit the full deposit.'
    },
    {
      question: 'Can I extend my rental period?',
      answer: 'Extensions are subject to vehicle availability. Contact us at least 24 hours before your scheduled return to request an extension. Additional days will be charged at the daily rate.'
    },
    {
      question: 'What happens if the vehicle breaks down?',
      answer: 'In the unlikely event of a breakdown, contact our 24/7 emergency line immediately. We provide roadside assistance and will arrange a replacement vehicle when possible.'
    },
    {
      question: 'Are there mileage restrictions?',
      answer: 'Most rentals include 100 miles per day. Additional mileage can be purchased in advance at discounted rates, or will be charged at the end of rental if exceeded.'
    },
    {
      question: 'Do you rent for special events?',
      answer: 'Absolutely! We specialize in weddings, corporate events, photoshoots, and special occasions. Contact our events team for customized packages and special rates.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-luxury-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="text-executive-gold">Questions</span>
          </h1>
          <p className="text-xl text-gray-300">
            Everything you need to know about renting luxury vehicles with Executive Exotics
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-heading text-lg font-semibold text-luxury-black pr-4">
                    {faq.question}
                  </h3>
                  <div className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-executive-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-lg">
            <h2 className="font-heading text-2xl font-bold text-luxury-black mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Our team is here to help you with any additional questions about our luxury vehicle rentals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-executive-gold text-luxury-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
              >
                Contact Us
              </a>
              <a
                href="tel:(Your Business Number)"
                className="border-2 border-executive-gold text-executive-gold px-6 py-3 rounded-lg font-semibold hover:bg-executive-gold hover:text-luxury-black transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
