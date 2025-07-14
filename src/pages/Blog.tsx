import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Ultimate Guide to Driving Exotic Cars in Miami',
      excerpt: 'Discover the best routes, parking spots, and experiences when driving luxury vehicles in Miami Beach and beyond.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
      category: 'Travel Guide',
      readTime: '5 min read',
      date: 'March 15, 2025'
    },
    {
      id: 2,
      title: 'Top 10 Luxury Car Features Every Tourist Should Know',
      excerpt: 'From advanced driver assistance to premium comfort features, learn what makes modern exotic cars extraordinary.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
      category: 'Car Features',
      readTime: '7 min read',
      date: 'March 12, 2025'
    },
    {
      id: 3,
      title: 'Photography Tips: Getting the Perfect Shot with Your Rental',
      excerpt: 'Professional photographer shares secrets for capturing Instagram-worthy photos with exotic cars in Florida.',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
      category: 'Photography',
      readTime: '6 min read',
      date: 'March 10, 2025'
    },
    {
      id: 4,
      title: 'Ferrari vs Lamborghini: Which to Choose for Your Florida Trip',
      excerpt: 'An in-depth comparison of two iconic supercars to help you decide which exotic rental suits your style.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
      category: 'Car Comparison',
      readTime: '8 min read',
      date: 'March 8, 2025'
    },
    {
      id: 5,
      title: 'Best Florida Scenic Routes for Luxury Car Enthusiasts',
      excerpt: 'Explore breathtaking coastal drives and hidden gems perfect for experiencing your exotic rental to the fullest.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
      category: 'Travel Guide',
      readTime: '10 min read',
      date: 'March 5, 2025'
    },
    {
      id: 6,
      title: 'Customer Spotlight: A Week with the McLaren 720S',
      excerpt: 'Read about John\'s incredible experience touring Florida in one of our most popular supercars.',
      image: 'https://images.unsplash.com/photo-1617271808550-8e9a651194d2?auto=format&fit=crop&w=800&q=80',
      category: 'Customer Story',
      readTime: '4 min read',
      date: 'March 3, 2025'
    }
  ];

  const categories = ['All', 'Travel Guide', 'Car Features', 'Photography', 'Car Comparison', 'Customer Story'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-luxury-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Executive Exotics <span className="text-executive-gold">Blog</span>
          </h1>
          <p className="text-xl text-gray-300">
            Travel guides, driving tips, and luxury car insights for discerning enthusiasts
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-executive-gold text-luxury-black px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <span className="bg-gray-100 px-3 py-1 rounded-full mr-3">{blogPosts[0].category}</span>
                  <span>{blogPosts[0].readTime}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].date}</span>
                </div>
                
                <h2 className="font-heading text-3xl font-bold text-luxury-black mb-4">
                  {blogPosts[0].title}
                </h2>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {blogPosts[0].excerpt}
                </p>
                
                <Link
                  to={`/blog/${blogPosts[0].id}`}
                  className="inline-flex items-center text-executive-gold font-semibold hover:text-yellow-600 transition-colors"
                >
                  Read Full Article
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-lg font-medium text-gray-600 bg-white hover:bg-executive-gold hover:text-luxury-black transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift">
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-600 mb-3">
                    <span className="bg-gray-100 px-2 py-1 rounded-full mr-2">{post.category}</span>
                    <span>{post.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-luxury-black mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-executive-gold font-semibold hover:text-yellow-600 transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-luxury-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
