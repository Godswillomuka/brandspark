import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Check } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const footerLinks = {
    services: [
      { name: 'Custom Apparel', href: '#services' },
      { name: 'Vehicle Wraps', href: '#services' },
      { name: 'Banners & Signage', href: '#services' },
      { name: 'Promotional Products', href: '#services' },
      { name: 'Brand Design', href: '#services' },
      { name: 'Premium Finishing', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '#contact' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Design Guidelines', href: '/design-guidelines' },
      { name: 'File Preparation', href: '/file-preparation' },
      { name: 'Shipping Info', href: '/shipping' },
      { name: 'Returns', href: '/returns' },
      { name: 'FAQ', href: '/faq' }
    ]
  };

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/brandblast', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/brandblast', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/brandblast', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/brandblast', label: 'LinkedIn' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'hello@brandblast.com' },
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: MapPin, text: '123 Design Street, Creative City' }
  ];

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      // Smooth scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('/')) {
      // Handle internal pages
      if (window.navigateToPage) {
        window.navigateToPage(href);
      }
    } else {
      // External links
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setShowConfirmation(true);
      setEmail('');
      
      // Hide confirmation after 3 seconds
      setTimeout(() => {
        setShowConfirmation(false);
      }, 3000);
    }
  };

  const handleContactUs = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Pre-fill contact form
      setTimeout(() => {
        if (window.preFillContactForm) {
          window.preFillContactForm(
            "Hi! I'd like to get in touch with your team. Please contact me with more information about your services."
          );
        }
      }, 800);
    }
  };

  return (
    <footer id="footer" className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon">
                <Zap className="footer__logo-svg" />
              </div>
              <span className="footer__logo-text">Brandblast</span>
            </div>
            <p className="footer__brand-description">
              Transforming brands through exceptional printing and design services. 
              Your vision, our expertise, extraordinary results.
            </p>
            
            <div className="footer__contact">
              {contactInfo.map((info, index) => (
                <div key={index} className="footer__contact-item">
                  <info.icon className="footer__contact-icon" />
                  <span>{info.text}</span>
                </div>
              ))}
            </div>
            
            <div className="footer__social">
              {socialLinks.map((social, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleLinkClick(social.href)}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="footer__social-link"
                  aria-label={social.label}
                >
                  <social.icon className="footer__social-icon" />
                </motion.button>
              ))}
            </div>
          </div>

          <div className="footer__links">
            <div className="footer__column">
              <h3 className="footer__column-title footer__column-title--services">Services</h3>
              <ul className="footer__list">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <motion.button 
                      onClick={() => handleLinkClick(link.href)}
                      className="footer__link"
                      whileHover={{ scale: 1.05, x: 4 }}
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__column">
              <h3 className="footer__column-title footer__column-title--company">Company</h3>
              <ul className="footer__list">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <motion.button 
                      onClick={() => handleLinkClick(link.href)}
                      className="footer__link"
                      whileHover={{ scale: 1.05, x: 4 }}
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__column">
              <h3 className="footer__column-title footer__column-title--support">Support</h3>
              <ul className="footer__list">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <motion.button 
                      onClick={() => handleLinkClick(link.href)}
                      className="footer__link"
                      whileHover={{ scale: 1.05, x: 4 }}
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__newsletter">
          <div className="footer__newsletter-content">
            <h3 className="footer__newsletter-title">Stay Updated</h3>
            <p className="footer__newsletter-description">
              Get the latest updates on new services, design trends, and exclusive offers.
            </p>
            
            <AnimatePresence mode="wait">
              {showConfirmation ? (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="footer__newsletter-confirmation"
                >
                  <div className="footer__newsletter-success">
                    <Check className="footer__newsletter-check" />
                    <span>Thank you for subscribing! Check your email for confirmation.</span>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onSubmit={handleNewsletterSubmit}
                  className="footer__newsletter-form"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="footer__newsletter-input"
                    required
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    className="footer__newsletter-button"
                  >
                    <span>Subscribe</span>
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2024 Brandblast. All rights reserved.
          </p>
          <div className="footer__legal">
            {legalLinks.map((link, index) => (
              <motion.button 
                key={index}
                onClick={() => handleLinkClick(link.href)}
                className="footer__legal-link"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {link.name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;