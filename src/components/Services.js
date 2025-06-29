import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shirt, Car, Flag, Package, Palette, Star } from 'lucide-react';
import ScrollIndicator from './ScrollIndicator';
import ServiceDetail from './ServiceDetail';
import './Services.css';

// Import service images (using external URLs temporarily until you add your own)
const serviceImages = {
  customApparel: 'https://images.pexels.com/photos/3806749/pexels-photo-3806749.jpeg',
  vehicleWraps: 'https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg',
  bannersSignage: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg',
  promotional: 'https://images.pexels.com/photos/3806275/pexels-photo-3806275.jpeg',
  brandDesign: 'https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg',
  premiumFinishing: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isServiceDetailOpen, setIsServiceDetailOpen] = useState(false);

  const services = [
    {
      icon: Shirt,
      title: 'Custom Apparel',
      description: 'T-shirts, hoodies, uniforms, and promotional clothing with premium printing techniques.',
      image: serviceImages.customApparel,
      features: ['Screen Printing', 'Embroidery', 'Heat Transfer', 'Sublimation']
    },
    {
      icon: Car,
      title: 'Vehicle Wraps',
      description: 'Eye-catching car wraps, decals, and fleet branding for maximum visibility.',
      image: serviceImages.vehicleWraps,
      features: ['Full Wraps', 'Partial Wraps', 'Window Graphics', 'Fleet Solutions']
    },
    {
      icon: Flag,
      title: 'Banners & Signage',
      description: 'Large format printing for events, retail displays, and outdoor advertising.',
      image: serviceImages.bannersSignage,
      features: ['Vinyl Banners', 'Trade Show', 'Outdoor Signs', 'Event Displays']
    },
    {
      icon: Package,
      title: 'Promotional Products',
      description: 'Branded merchandise including bags, mugs, pens, and corporate gifts.',
      image: serviceImages.promotional,
      features: ['Corporate Gifts', 'Trade Show Items', 'Branded Accessories', 'Custom Packaging']
    },
    {
      icon: Palette,
      title: 'Brand Design',
      description: 'Complete brand identity development from logo design to brand guidelines.',
      image: serviceImages.brandDesign,
      features: ['Logo Design', 'Brand Identity', 'Style Guides', 'Marketing Materials']
    },
    {
      icon: Star,
      title: 'Premium Finishing',
      description: 'Luxury finishes including foil stamping, embossing, and specialty coatings.',
      image: serviceImages.premiumFinishing,
      features: ['Foil Stamping', 'Embossing', 'UV Coating', 'Die Cutting']
    }
  ];

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setIsServiceDetailOpen(true);
  };

  const handleCloseServiceDetail = () => {
    setIsServiceDetailOpen(false);
    setSelectedService(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="services">
      {/* Background Animation Elements */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="services__bg-circle-1"
      />
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="services__bg-circle-2"
      />

      <div className="services__container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="services__header"
        >
          <motion.h2 
            className="services__title"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: "backOut" }}
          >
            Our <span className="services__title-highlight">Services</span>
          </motion.h2>
          <motion.p 
            className="services__description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We offer comprehensive branding and printing solutions to elevate your business and make your mark in the market.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="services__grid"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                rotateY: 5,
                transition: { 
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                } 
              }}
              className="services__card"
            >
              <div className="services__card-image">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="services__image"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <div className="services__card-overlay"></div>
                <motion.div 
                  className="services__card-icon"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 10,
                    y: -5
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 10 
                  }}
                >
                  <service.icon className="services__icon" />
                </motion.div>
              </div>

              <div className="services__card-content">
                <motion.h3 
                  className="services__card-title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  className="services__card-description"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {service.description}
                </motion.p>
                
                <div className="services__features">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div 
                      key={featureIndex} 
                      className="services__feature"
                      variants={featureVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: featureIndex * 0.1 + 0.5 }}
                      whileHover={{ 
                        x: 8,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                    >
                      <motion.div 
                        className="services__feature-dot"
                        whileHover={{ 
                          scale: 1.5,
                          rotate: 180
                        }}
                        transition={{ type: "spring", stiffness: 400 }}
                      />
                      {feature}
                    </motion.div>
                  ))}
                </div>

                <motion.button 
                  className="services__button"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 15px 35px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  onClick={() => handleLearnMore(service)}
                >
                  <span>Learn More</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetail
        service={selectedService}
        isOpen={isServiceDetailOpen}
        onClose={handleCloseServiceDetail}
      />

      {/* Scroll Indicator */}
      <ScrollIndicator targetSection="#about" />
    </section>
  );
};

export default Services;