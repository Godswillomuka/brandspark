import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import ScrollIndicator from './ScrollIndicator';
import './About.css';

// Import about images (using external URLs temporarily until you add your own)
const aboutWorkspaceImage = 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg';

const About = () => {
  const features = [
    {
      title: 'Premium Quality',
      description: 'We use only the finest materials and latest printing technology to ensure exceptional results.'
    },
    {
      title: 'Creative Excellence',
      description: 'Our talented design team brings fresh ideas and innovative solutions to every project.'
    },
    {
      title: 'Fast Turnaround',
      description: 'Quick delivery without compromising quality, meeting your deadlines every time.'
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored services to meet your unique branding and printing requirements.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="about" className="about">
      {/* Background Animation Elements */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="about__bg-circle-1"
      />
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="about__bg-circle-2"
      />

      <div className="about__container">
        <div className="about__content">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="about__text"
          >
            <motion.h2 
              className="about__title"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: "backOut" }}
            >
              Why Choose <span className="about__title-highlight">Brandblast?</span>
            </motion.h2>
            <motion.p 
              className="about__description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              With over 15 years of experience in the printing and branding industry, Brandblast has been 
              the trusted partner for businesses looking to make a lasting impression. We combine creativity, 
              quality, and reliability to deliver exceptional results that exceed expectations.
            </motion.p>

            <motion.div 
              className="about__features"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="about__feature"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -8,
                    rotateY: 5,
                    transition: { 
                      type: "spring", 
                      stiffness: 300,
                      damping: 20
                    }
                  }}
                >
                  <motion.h3 
                    className="about__feature-title"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="about__feature-description"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="about__button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <span>Start Your Project</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="about__image-section"
          >
            <motion.div 
              className="about__image-container"
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.6 }
              }}
            >
              <motion.img
                src={aboutWorkspaceImage}
                alt="Professional printing workspace"
                className="about__image"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <div className="about__image-overlay"></div>
              
              <motion.div 
                className="about__floating-card"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8, ease: "backOut" }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  rotateY: 10,
                  transition: { 
                    type: "spring", 
                    stiffness: 300 
                  }
                }}
              >
                <div className="about__floating-content">
                  <motion.div 
                    className="about__floating-icon"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400,
                      damping: 10
                    }}
                  >
                    <Award className="about__floating-svg" />
                  </motion.div>
                  <div>
                    <div className="about__floating-title">Award Winning</div>
                    <div className="about__floating-subtitle">Quality Service</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator targetSection="#portfolio" />
    </section>
  );
};

export default About;