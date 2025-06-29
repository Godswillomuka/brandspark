import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import ScrollIndicator from './ScrollIndicator';
import './Hero.css';

// Import hero images (using external URLs temporarily until you add your own)
const heroBackgroundImage = 'https://images.pexels.com/photos/3843036/pexels-photo-3843036.jpeg';

const Hero = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setParticles(particleArray);
  }, []);

  const handleGetQuote = () => {
    // Scroll to contact section
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Pre-fill the message field with quote request
      setTimeout(() => {
        if (window.preFillContactForm) {
          window.preFillContactForm(
            "Hi! I'm interested in getting a quote for my project. Please contact me with more details about your services and pricing."
          );
        }
        
        // Focus on the message field
        const messageField = document.querySelector('textarea[name="message"]');
        if (messageField) {
          messageField.focus();
          
          // Add a subtle highlight effect
          messageField.style.borderColor = '#3B82F6';
          messageField.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.2)';
          
          // Remove highlight after 3 seconds
          setTimeout(() => {
            messageField.style.borderColor = '';
            messageField.style.boxShadow = '';
          }, 3000);
        }
      }, 800);
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__background">
        <img
          src={heroBackgroundImage}
          alt="Creative branding workspace"
          className="hero__background-image"
        />
        <div className="hero__overlay"></div>
      </div>

      {/* Animated Particles */}
      <div className="hero__particles">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="hero__particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="hero__content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hero__container"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "backOut" }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="hero__badge"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="hero__badge-icon" />
            </motion.div>
            <span className="hero__badge-text">Premium Branding Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="hero__title"
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Transform Your{' '}
            </motion.span>
            <motion.span 
              className="hero__title-highlight"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.8, ease: "backOut" }}
            >
              Brand
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="hero__description"
          >
            From custom apparel and vehicle wraps to stunning banners and promotional materials, 
            we bring your vision to life with exceptional quality and creative excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="hero__actions"
          >
            <motion.a
              href="#services"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="hero__button hero__button--primary"
            >
              <span>Explore Services</span>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight className="hero__button-icon" />
              </motion.div>
            </motion.a>

            <motion.button
              onClick={handleGetQuote}
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                backgroundColor: "rgba(59, 130, 246, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="hero__button hero__button--secondary"
            >
              Get Quote
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator targetSection="#services" />
    </section>
  );
};

export default Hero;