import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';
import Footer from '../Footer';
import './Blog.css';

const Blog = ({ onBack }) => {
  const blogPosts = [
    {
      title: '10 Design Trends That Will Dominate 2024',
      excerpt: 'Discover the latest design trends that are shaping the creative landscape this year, from bold typography to sustainable design practices.',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      category: 'Design Trends',
      image: 'https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg',
      readTime: '5 min read'
    },
    {
      title: 'The Complete Guide to Vehicle Wrap Design',
      excerpt: 'Everything you need to know about creating effective vehicle wraps that turn heads and drive business results.',
      author: 'Michael Chen',
      date: 'March 10, 2024',
      category: 'Vehicle Wraps',
      image: 'https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg',
      readTime: '8 min read'
    },
    {
      title: 'Building a Brand Identity That Lasts',
      excerpt: 'Learn the key principles of creating a timeless brand identity that resonates with your audience and stands the test of time.',
      author: 'Emily Rodriguez',
      date: 'March 5, 2024',
      category: 'Branding',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      readTime: '6 min read'
    },
    {
      title: 'Sustainable Printing: Our Commitment to the Environment',
      excerpt: 'Discover how we\'re reducing our environmental impact through eco-friendly printing practices and sustainable materials.',
      author: 'David Thompson',
      date: 'February 28, 2024',
      category: 'Sustainability',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      readTime: '4 min read'
    },
    {
      title: 'Custom Apparel: From Concept to Creation',
      excerpt: 'Take a behind-the-scenes look at our custom apparel process, from initial design concepts to final production.',
      author: 'Sarah Johnson',
      date: 'February 20, 2024',
      category: 'Custom Apparel',
      image: 'https://images.pexels.com/photos/3806749/pexels-photo-3806749.jpeg',
      readTime: '7 min read'
    },
    {
      title: 'Trade Show Success: Making Your Booth Stand Out',
      excerpt: 'Expert tips for creating trade show displays that attract visitors and generate leads at your next industry event.',
      author: 'Michael Chen',
      date: 'February 15, 2024',
      category: 'Trade Shows',
      image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg',
      readTime: '5 min read'
    }
  ];

  const categories = ['All', 'Design Trends', 'Branding', 'Vehicle Wraps', 'Custom Apparel', 'Trade Shows', 'Sustainability'];

  return (
    <div className="blog-page">
      <div className="blog-page__container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="blog-page__header"
        >
          <button
            onClick={onBack}
            className="blog-page__back-btn"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
          
          <h1 className="blog-page__title">
            Our <span className="blog-page__title-highlight">Blog</span>
          </h1>
          <p className="blog-page__description">
            Stay updated with the latest trends, tips, and insights from the world of branding and printing. 
            Our team shares their expertise to help you make informed decisions for your business.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="blog-page__categories"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`blog-page__category ${
                index === 0 
                  ? 'blog-page__category--active' 
                  : 'blog-page__category--inactive'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="blog-page__posts"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.4 }}
              className="blog-page__post"
            >
              <div className="blog-page__post-image-wrapper">
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-page__post-image"
                />
                <div className="blog-page__post-category">
                  {post.category}
                </div>
              </div>
              
              <div className="blog-page__post-content">
                <h2 className="blog-page__post-title">
                  {post.title}
                </h2>
                <p className="blog-page__post-excerpt">{post.excerpt}</p>
                
                <div className="blog-page__post-meta">
                  <div className="blog-page__post-meta-left">
                    <div className="blog-page__post-meta-item">
                      <User size={14} />
                      {post.author}
                    </div>
                    <div className="blog-page__post-meta-item">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <div className="blog-page__post-read-more">
                  Read More
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="blog-page__newsletter"
        >
          <h2 className="blog-page__newsletter-title">Stay Updated</h2>
          <p className="blog-page__newsletter-description">
            Subscribe to our newsletter to get the latest blog posts, design tips, and industry insights delivered to your inbox.
          </p>
          <div className="blog-page__newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="blog-page__newsletter-input"
            />
            <button className="blog-page__newsletter-button">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;