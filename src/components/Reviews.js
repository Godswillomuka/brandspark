import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Users, Award, ThumbsUp, Share2, Copy, Check } from 'lucide-react';
import './Reviews.css';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [shareStatus, setShareStatus] = useState('');

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechStart Solutions',
      role: 'Marketing Director',
      rating: 5,
      text: 'Brandblast transformed our entire brand identity! Their attention to detail and creative vision exceeded our expectations. The vehicle wraps they designed for our fleet have significantly increased our brand visibility.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      service: 'Brand Design & Vehicle Wraps',
      date: '2024-01-15'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Urban Eats Food Truck',
      role: 'Owner',
      rating: 5,
      text: 'The custom apparel and promotional materials from Brandblast helped us stand out at every event. Their quality is unmatched, and the customer service is exceptional. Highly recommend!',
      image: 'https://images.pexels.com/photos/3806749/pexels-photo-3806749.jpeg',
      service: 'Custom Apparel & Promotional Products',
      date: '2024-02-03'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'Luxe Beauty Co.',
      role: 'Brand Manager',
      rating: 5,
      text: 'The premium finishing work on our packaging is absolutely stunning. The foil stamping and embossing details make our products feel truly luxury. Brandblast understands quality.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      service: 'Premium Finishing & Packaging',
      date: '2024-01-28'
    },
    {
      id: 4,
      name: 'David Thompson',
      company: 'Summit Construction',
      role: 'Operations Manager',
      rating: 5,
      text: 'Professional, reliable, and creative. Brandblast delivered our trade show displays on time and they looked incredible. We received so many compliments and leads at the expo.',
      image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg',
      service: 'Trade Show Displays & Signage',
      date: '2024-02-10'
    },
    {
      id: 5,
      name: 'Lisa Park',
      company: 'Green Valley Organics',
      role: 'CEO',
      rating: 5,
      text: 'From concept to completion, Brandblast made the entire process seamless. Their team understood our vision and brought it to life beautifully. Our new branding has boosted sales significantly.',
      image: 'https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg',
      service: 'Complete Brand Identity',
      date: '2024-01-20'
    },
    {
      id: 6,
      name: 'James Wilson',
      company: 'Metro Fitness',
      role: 'Franchise Owner',
      rating: 5,
      text: 'The custom gym apparel and promotional products have been a huge hit with our members. Quality is top-notch and the designs are exactly what we wanted. Great partnership!',
      image: 'https://images.pexels.com/photos/3806275/pexels-photo-3806275.jpeg',
      service: 'Custom Apparel & Promotional Products',
      date: '2024-02-05'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Star, value: '4.9/5', label: 'Average Rating' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: ThumbsUp, value: '99%', label: 'Satisfaction Rate' }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const handlePrevReview = () => {
    setIsAutoPlaying(false);
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNextReview = () => {
    setIsAutoPlaying(false);
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const handleReviewSelect = (index) => {
    setIsAutoPlaying(false);
    setCurrentReview(index);
  };

  const handleShareReview = async (review) => {
    const shareText = `"${review.text}" - ${review.name}, ${review.role} at ${review.company}`;
    const shareUrl = window.location.href;
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Brandblast Client Review',
          text: shareText,
          url: shareUrl,
        });
        setShareStatus('shared');
      } else {
        // Fallback to copying to clipboard
        await navigator.clipboard.writeText(`${shareText}\n\nRead more reviews at: ${shareUrl}`);
        setShareStatus('copied');
      }
      
      // Reset status after 2 seconds
      setTimeout(() => setShareStatus(''), 2000);
    } catch (error) {
      console.log('Sharing failed:', error);
      setShareStatus('error');
      setTimeout(() => setShareStatus(''), 2000);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`review-star ${i < rating ? 'filled' : ''}`}
      />
    ));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="reviews" className="reviews">
      <div className="reviews__container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="reviews__header"
        >
          <motion.div
            className="reviews__badge"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="reviews__badge-icon" />
            <span className="reviews__badge-text">Client Reviews</span>
          </motion.div>
          
          <h2 className="reviews__title">
            What Our <span className="reviews__title-highlight">Clients Say</span>
          </h2>
          
          <p className="reviews__description">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Brandblast.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="reviews__stats"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { type: "spring", stiffness: 400 }
              }}
              className="reviews__stat"
            >
              <div className="reviews__stat-icon">
                <stat.icon size={24} />
              </div>
              <div className="reviews__stat-value">{stat.value}</div>
              <div className="reviews__stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Review Display */}
        <div className="reviews__main">
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrevReview}
            className="reviews__nav reviews__nav--prev"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <div className="reviews__content">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="reviews__card"
              >
                <div className="reviews__quote-icon">
                  <Quote size={32} />
                </div>
                
                <div className="reviews__rating">
                  {renderStars(reviews[currentReview]?.rating || 5)}
                </div>
                
                <blockquote className="reviews__text">
                  "{reviews[currentReview]?.text}"
                </blockquote>
                
                <div className="reviews__author">
                  <div className="reviews__author-image">
                    <img 
                      src={reviews[currentReview]?.image} 
                      alt={reviews[currentReview]?.name}
                    />
                  </div>
                  <div className="reviews__author-info">
                    <div className="reviews__author-name">
                      {reviews[currentReview]?.name}
                    </div>
                    <div className="reviews__author-role">
                      {reviews[currentReview]?.role}
                    </div>
                    <div className="reviews__author-company">
                      {reviews[currentReview]?.company}
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleShareReview(reviews[currentReview])}
                    className={`reviews__share-btn ${shareStatus ? `reviews__share-btn--${shareStatus}` : ''}`}
                    title="Share this review"
                  >
                    <AnimatePresence mode="wait">
                      {shareStatus === 'copied' || shareStatus === 'shared' ? (
                        <motion.div
                          key="success"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Check size={20} />
                        </motion.div>
                      ) : shareStatus === 'error' ? (
                        <motion.div
                          key="error"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Copy size={20} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="default"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Share2 size={20} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
                
                <div className="reviews__service">
                  <span>Service: {reviews[currentReview]?.service}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNextReview}
            className="reviews__nav reviews__nav--next"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Review Indicators */}
        <div className="reviews__indicators">
          {reviews.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => handleReviewSelect(index)}
              className={`reviews__indicator ${
                index === currentReview ? 'active' : ''
              }`}
            />
          ))}
        </div>

        {/* Auto-play Control */}
        <div className="reviews__controls">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`reviews__autoplay ${isAutoPlaying ? 'active' : ''}`}
          >
            {isAutoPlaying ? 'Pause' : 'Play'} Auto-scroll
          </motion.button>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="reviews__cta"
        >
          <h3>Ready to Join Our Happy Clients?</h3>
          <p>Let's create something amazing for your brand together.</p>
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="reviews__cta-button"
            onClick={() => {
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>Start Your Project</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;