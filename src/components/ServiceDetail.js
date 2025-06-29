import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, Users, Clock, Award, ArrowLeft, X } from 'lucide-react';
import './ServiceDetail.css';

const ServiceDetail = ({ service, isOpen, onClose }) => {
  if (!service) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleGetQuote = () => {
    // Close the modal first
    onClose();
    
    // Small delay to ensure modal closes before scrolling
    setTimeout(() => {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        // Pre-fill the service field and message using the global function
        setTimeout(() => {
          if (window.preFillContactForm) {
            window.preFillContactForm(
              `Hi! I'm interested in getting a quote for ${service.title}. Please contact me with more details about your services and pricing.`,
              service.title
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
    }, 100);
  };

  const handleViewPortfolio = () => {
    // Close the modal first
    onClose();
    
    // Small delay to ensure modal closes before scrolling
    setTimeout(() => {
      const portfolioSection = document.querySelector('#portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        // Try to filter portfolio by service category if possible
        setTimeout(() => {
          // Map service titles to portfolio categories
          const serviceToCategory = {
            'Custom Apparel': 'apparel',
            'Vehicle Wraps': 'wraps',
            'Banners & Signage': 'signage',
            'Promotional Products': 'promotional',
            'Brand Design': 'branding',
            'Premium Finishing': 'finishing'
          };
          
          const category = serviceToCategory[service.title];
          if (category) {
            // Try to find and click the corresponding filter button
            const filterButtons = document.querySelectorAll('.portfolio-filter-button');
            filterButtons.forEach(button => {
              if (button.textContent.toLowerCase().includes(category) || 
                  button.textContent.toLowerCase().includes(service.title.toLowerCase().split(' ')[0])) {
                button.click();
              }
            });
          }
        }, 500);
      }
    }, 100);
  };

  const serviceDetails = {
    'Custom Apparel': {
      fullDescription: 'Transform your brand identity with our premium custom apparel solutions. From corporate uniforms to promotional t-shirts, we use state-of-the-art printing techniques to ensure your brand looks professional and stands out.',
      processes: [
        {
          title: 'Screen Printing',
          description: 'Perfect for large orders with vibrant, long-lasting colors',
          benefits: ['Cost-effective for bulk orders', 'Vibrant colors', 'Durable finish']
        },
        {
          title: 'Embroidery',
          description: 'Premium, professional look for corporate apparel',
          benefits: ['Professional appearance', 'Long-lasting', 'Premium feel']
        },
        {
          title: 'Heat Transfer',
          description: 'Ideal for small orders and complex designs',
          benefits: ['Great for small quantities', 'Complex designs', 'Quick turnaround']
        },
        {
          title: 'Sublimation',
          description: 'Full-color, all-over printing for polyester garments',
          benefits: ['Full-color printing', 'No texture feel', 'Fade resistant']
        }
      ],
      pricing: 'Starting from $12 per piece',
      turnaround: '5-7 business days',
      minOrder: '12 pieces'
    },
    'Vehicle Wraps': {
      fullDescription: 'Turn your vehicle into a mobile billboard with our professional vehicle wrap services. Our high-quality vinyl wraps are designed to withstand weather conditions while maintaining vibrant colors.',
      processes: [
        {
          title: 'Full Wraps',
          description: 'Complete vehicle transformation with maximum impact',
          benefits: ['Maximum brand exposure', 'Complete design freedom', 'Paint protection']
        },
        {
          title: 'Partial Wraps',
          description: 'Strategic placement for cost-effective branding',
          benefits: ['Cost-effective', 'Targeted messaging', 'Easy maintenance']
        },
        {
          title: 'Window Graphics',
          description: 'Perforated vinyl for windows with one-way visibility',
          benefits: ['Maintains visibility', 'Additional branding space', 'Privacy option']
        },
        {
          title: 'Fleet Solutions',
          description: 'Consistent branding across multiple vehicles',
          benefits: ['Brand consistency', 'Volume discounts', 'Professional management']
        }
      ],
      pricing: 'Starting from $2,500',
      turnaround: '3-5 business days',
      minOrder: '1 vehicle'
    },
    'Banners & Signage': {
      fullDescription: 'Make a bold statement with our large format printing services. Perfect for events, retail displays, and outdoor advertising that demands attention.',
      processes: [
        {
          title: 'Vinyl Banners',
          description: 'Durable outdoor banners for any weather condition',
          benefits: ['Weather resistant', 'Vibrant colors', 'Multiple sizes']
        },
        {
          title: 'Trade Show',
          description: 'Professional displays for exhibitions and events',
          benefits: ['Portable designs', 'Easy setup', 'Professional appearance']
        },
        {
          title: 'Outdoor Signs',
          description: 'Permanent signage solutions for businesses',
          benefits: ['Long-lasting', 'UV resistant', 'Custom shapes']
        },
        {
          title: 'Event Displays',
          description: 'Eye-catching displays for special events',
          benefits: ['Lightweight', 'Easy transport', 'Quick assembly']
        }
      ],
      pricing: 'Starting from $45',
      turnaround: '2-4 business days',
      minOrder: '1 piece'
    },
    'Promotional Products': {
      fullDescription: 'Extend your brand reach with custom promotional products that leave lasting impressions. From corporate gifts to trade show giveaways.',
      processes: [
        {
          title: 'Corporate Gifts',
          description: 'Premium branded items for clients and employees',
          benefits: ['Professional image', 'Brand loyalty', 'Memorable impact']
        },
        {
          title: 'Trade Show Items',
          description: 'Attention-grabbing giveaways for events',
          benefits: ['Lead generation', 'Brand awareness', 'Cost-effective marketing']
        },
        {
          title: 'Branded Accessories',
          description: 'Everyday items with your brand message',
          benefits: ['Daily brand exposure', 'Practical value', 'Wide variety']
        },
        {
          title: 'Custom Packaging',
          description: 'Branded packaging that enhances unboxing experience',
          benefits: ['Premium presentation', 'Brand reinforcement', 'Social media worthy']
        }
      ],
      pricing: 'Starting from $3 per item',
      turnaround: '7-10 business days',
      minOrder: '25 pieces'
    },
    'Brand Design': {
      fullDescription: 'Create a cohesive brand identity that resonates with your audience. Our design team crafts memorable brands that stand the test of time.',
      processes: [
        {
          title: 'Logo Design',
          description: 'Unique, memorable logos that represent your brand',
          benefits: ['Unique design', 'Multiple concepts', 'Vector formats']
        },
        {
          title: 'Brand Identity',
          description: 'Complete visual identity system for your brand',
          benefits: ['Consistent branding', 'Professional image', 'Market differentiation']
        },
        {
          title: 'Style Guides',
          description: 'Comprehensive guidelines for brand consistency',
          benefits: ['Brand consistency', 'Easy implementation', 'Professional standards']
        },
        {
          title: 'Marketing Materials',
          description: 'Cohesive marketing collateral design',
          benefits: ['Unified messaging', 'Professional appearance', 'Brand recognition']
        }
      ],
      pricing: 'Starting from $500',
      turnaround: '10-14 business days',
      minOrder: '1 project'
    },
    'Premium Finishing': {
      fullDescription: 'Add luxury touches to your printed materials with our premium finishing services. Perfect for high-end brands and special occasions.',
      processes: [
        {
          title: 'Foil Stamping',
          description: 'Metallic foil application for elegant finishing',
          benefits: ['Luxury appearance', 'Eye-catching', 'Premium feel']
        },
        {
          title: 'Embossing',
          description: 'Raised texture effects for tactile appeal',
          benefits: ['Tactile experience', 'Premium quality', 'Memorable impact']
        },
        {
          title: 'UV Coating',
          description: 'Protective and aesthetic coating options',
          benefits: ['Protection', 'Enhanced colors', 'Professional finish']
        },
        {
          title: 'Die Cutting',
          description: 'Custom shapes and unique cut-outs',
          benefits: ['Unique shapes', 'Creative possibilities', 'Stand-out design']
        }
      ],
      pricing: 'Starting from $150',
      turnaround: '5-8 business days',
      minOrder: '100 pieces'
    }
  };

  const currentService = serviceDetails[service.title] || {};

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="service-detail-backdrop"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="service-detail-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Back and Close buttons */}
            <div className="service-detail-header">
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="service-detail-back-btn"
              >
                <ArrowLeft size={20} />
                <span>Back to Services</span>
              </motion.button>
              
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="service-detail-close-btn"
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* Content */}
            <div className="service-detail-content">
              {/* Hero Section */}
              <div className="service-detail-hero">
                <div className="service-detail-hero-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-detail-hero-overlay">
                    <div className="service-detail-hero-icon">
                      <service.icon size={32} />
                    </div>
                  </div>
                </div>
                
                <div className="service-detail-hero-content">
                  <h1 className="service-detail-title">{service.title}</h1>
                  <p className="service-detail-description">
                    {currentService.fullDescription || service.description}
                  </p>
                  
                  <div className="service-detail-quick-info">
                    <div className="service-detail-info-item">
                      <Clock size={16} />
                      <span>{currentService.turnaround}</span>
                    </div>
                    <div className="service-detail-info-item">
                      <Users size={16} />
                      <span>Min: {currentService.minOrder}</span>
                    </div>
                    <div className="service-detail-info-item">
                      <Award size={16} />
                      <span>{currentService.pricing}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Processes Section */}
              <div className="service-detail-processes">
                <h2>Our Process & Options</h2>
                <div className="service-detail-processes-grid">
                  {currentService.processes?.map((process, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="service-detail-process-card"
                    >
                      <h3>{process.title}</h3>
                      <p>{process.description}</p>
                      <ul className="service-detail-benefits">
                        {process.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex}>
                            <Check size={14} />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="service-detail-cta">
                <h2>Ready to Get Started?</h2>
                <p>Let's discuss your project and create something amazing together.</p>
                <div className="service-detail-cta-buttons">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="service-detail-cta-primary"
                    onClick={handleGetQuote}
                  >
                    <span>Get Quote</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="service-detail-cta-secondary"
                    onClick={handleViewPortfolio}
                  >
                    <span>View Portfolio</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceDetail;