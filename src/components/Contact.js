import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, X } from 'lucide-react';
import ScrollIndicator from './ScrollIndicator';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });

    // Hide success message after 8 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 8000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@brandblast.com',
      description: 'Send us your requirements'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Design Street, Creative City',
      description: 'Our creative studio'
    },
    {
      icon: Clock,
      title: 'Quick Response',
      content: '24 Hours',
      description: 'Average response time'
    }
  ];

  const services = [
    'Custom Apparel',
    'Vehicle Wraps',
    'Banners & Signage',
    'Promotional Products',
    'Brand Design',
    'Premium Finishing',
    'Other'
  ];

  // Enhanced pre-fill function that preserves existing content
  const handlePreFillMessage = (newMessage, serviceType = null) => {
    setFormData(prevData => {
      const updates = {};
      
      // Only update service if provided and current service is empty
      if (serviceType && !prevData.service) {
        updates.service = serviceType;
      }
      
      // Handle message pre-filling more intelligently
      if (newMessage) {
        if (!prevData.message) {
          // If message is empty, use the new message
          updates.message = newMessage;
        } else if (!prevData.message.includes(newMessage.substring(0, 50))) {
          // If message exists but doesn't contain similar content, append
          updates.message = prevData.message + '\n\n' + newMessage;
        }
        // If message already contains similar content, don't change it
      }
      
      return { ...prevData, ...updates };
    });
  };

  // Expose the pre-fill function globally for other components to use
  React.useEffect(() => {
    window.preFillContactForm = handlePreFillMessage;
    
    return () => {
      delete window.preFillContactForm;
    };
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact__header"
        >
          <h2 className="contact__title">
            Let's Create Something <span className="contact__title-highlight">Amazing</span>
          </h2>
          <p className="contact__description">
            Ready to transform your brand? Get in touch with our team and let's discuss your next project.
          </p>
        </motion.div>

        <div className="contact__content">
          <div className="contact__info">
            <h3 className="contact__info-title">Get In Touch</h3>
            
            <div className="contact__info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact__info-card">
                  <div className="contact__info-icon">
                    <info.icon className="contact__info-svg" />
                  </div>
                  <h4 className="contact__info-card-title">{info.title}</h4>
                  <p className="contact__info-content">{info.content}</p>
                  <p className="contact__info-desc">{info.description}</p>
                </div>
              ))}
            </div>

            <div className="contact__why-choose">
              <h4 className="contact__why-title">Why Choose Brandblast?</h4>
              <ul className="contact__why-list">
                <li className="contact__why-item">
                  <div className="contact__why-dot"></div>
                  15+ years of industry experience
                </li>
                <li className="contact__why-item">
                  <div className="contact__why-dot"></div>
                  Premium quality materials and printing
                </li>
                <li className="contact__why-item">
                  <div className="contact__why-dot"></div>
                  Fast turnaround and reliable delivery
                </li>
                <li className="contact__why-item">
                  <div className="contact__why-dot"></div>
                  Competitive pricing and excellent value
                </li>
              </ul>
            </div>
          </div>

          <div className="contact__form-section">
            <h3 className="contact__form-title">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="contact__form">
              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label className="contact__label">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="contact__input"
                    placeholder="Your name"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="contact__form-group">
                  <label className="contact__label">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="contact__input"
                    placeholder="your@email.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label className="contact__label">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="contact__input"
                    placeholder="Your phone number"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="contact__form-group">
                  <label className="contact__label">Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="contact__select"
                    disabled={isSubmitting}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="contact__form-group">
                <label className="contact__label">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="contact__textarea"
                  placeholder="Tell us about your project..."
                  disabled={isSubmitting}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                className={`contact__submit ${isSubmitting ? 'contact__submit--loading' : ''}`}
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="contact__submit-loading"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="contact__submit-spinner"
                      />
                      <span>Sending...</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="send"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="contact__submit-content"
                    >
                      <Send className="contact__submit-icon" />
                      <span>Send Message</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </div>
        </div>

        {/* Success Message Modal */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="contact__success-overlay"
              onClick={() => setShowSuccess(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="contact__success-modal"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  onClick={() => setShowSuccess(false)}
                  className="contact__success-close"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="contact__success-close-icon" />
                </motion.button>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
                  className="contact__success-icon-wrapper"
                >
                  <CheckCircle className="contact__success-icon" />
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="contact__success-ripple"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="contact__success-content"
                >
                  <h3 className="contact__success-title">
                    🎉 Message Sent Successfully!
                  </h3>
                  <p className="contact__success-description">
                    Thank you for reaching out! We've received your message and will get back to you within 24 hours.
                  </p>
                  <div className="contact__success-details">
                    <div className="contact__success-detail">
                      <Mail className="contact__success-detail-icon" />
                      <span>Confirmation sent to your email</span>
                    </div>
                    <div className="contact__success-detail">
                      <Clock className="contact__success-detail-icon" />
                      <span>Response within 24 hours</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="contact__success-actions"
                >
                  <motion.button
                    onClick={() => setShowSuccess(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="contact__success-button"
                  >
                    <span>Continue Browsing</span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Indicator - Dark theme for this section */}
      <div className="scroll-indicator--dark">
        <ScrollIndicator targetSection="#footer" isVisible={false} />
      </div>
    </section>
  );
};

export default Contact;