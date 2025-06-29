import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, Users, Calendar, X } from 'lucide-react';
import './PortfolioViewer.css';

const PortfolioViewer = ({ project, isOpen, onClose, allProjects = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
            // Map project categories to service options
            const categoryToService = {
              'branding': 'Brand Design',
              'wraps': 'Vehicle Wraps',
              'apparel': 'Custom Apparel',
              'signage': 'Banners & Signage',
              'finishing': 'Premium Finishing',
              'promotional': 'Promotional Products'
            };
            
            const serviceValue = categoryToService[project.category] || 'Other';
            
            window.preFillContactForm(
              `Hi! I'm interested in starting a project similar to "${project.title}". Please contact me with more details about your services and pricing for this type of work.`,
              serviceValue
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
          // Try to find and click the corresponding filter button
          const filterButtons = document.querySelectorAll('.portfolio-filter-button');
          filterButtons.forEach(button => {
            if (button.textContent.toLowerCase().includes(project.category) || 
                button.textContent.toLowerCase().includes('all')) {
              button.click();
            }
          });
        }, 500);
      }
    }, 100);
  };

  // Reset states when project changes
  useEffect(() => {
    if (project) {
      setCurrentImageIndex(0);
    }
  }, [project]);

  if (!project) return null;

  // Use different images for each project - create variations based on project type
  const getProjectImages = (project) => {
    const baseImages = {
      'Tech Startup Rebrand': [
        'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
        'https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
      ],
      'Food Truck Fleet Wraps': [
        'https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg',
        'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg',
        'https://images.pexels.com/photos/3806275/pexels-photo-3806275.jpeg'
      ],
      'Corporate Apparel Line': [
        'https://images.pexels.com/photos/3806749/pexels-photo-3806749.jpeg',
        'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
        'https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg'
      ],
      'Trade Show Display': [
        'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg',
        'https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
      ],
      'Luxury Brand Package': [
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
        'https://images.pexels.com/photos/3806749/pexels-photo-3806749.jpeg',
        'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg'
      ],
      'Promotional Campaign': [
        'https://images.pexels.com/photos/3806275/pexels-photo-3806275.jpeg',
        'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg',
        'https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg'
      ]
    };

    return baseImages[project.title] || [
      project.image,
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      'https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg'
    ];
  };

  const projectImages = getProjectImages(project);
  const currentProjectIndex = allProjects.findIndex(p => p.id === project?.id);

  const projectDetails = {
    'Tech Startup Rebrand': {
      timeline: '6 weeks',
      team: '4 designers',
      deliverables: ['Logo Design', 'Brand Guidelines', 'Business Cards', 'Website Design'],
      challenge: 'Create a modern, tech-forward brand identity that appeals to both investors and customers.',
      solution: 'Developed a clean, minimalist design system with bold typography and a versatile color palette.',
      results: ['40% increase in brand recognition', 'Successful Series A funding', 'Featured in design publications']
    },
    'Food Truck Fleet Wraps': {
      timeline: '2 weeks',
      team: '3 designers',
      deliverables: ['Vehicle Wrap Design', 'Fleet Branding', 'Menu Graphics', 'Social Media Assets'],
      challenge: 'Design eye-catching wraps that work across different vehicle sizes while maintaining brand consistency.',
      solution: 'Created a flexible design system with modular elements that adapt to various vehicle dimensions.',
      results: ['60% increase in foot traffic', 'Expanded to 5 locations', 'Won local food truck competition']
    },
    'Corporate Apparel Line': {
      timeline: '4 weeks',
      team: '2 designers',
      deliverables: ['Uniform Design', 'Embroidery Patterns', 'Style Guide', 'Sizing Charts'],
      challenge: 'Create professional apparel that reflects company values while ensuring comfort and durability.',
      solution: 'Selected premium fabrics and developed a cohesive design language across all garment types.',
      results: ['95% employee satisfaction', 'Improved brand consistency', 'Reduced uniform costs by 20%']
    },
    'Trade Show Display': {
      timeline: '3 weeks',
      team: '3 designers',
      deliverables: ['Booth Design', 'Banner Graphics', 'Interactive Displays', 'Promotional Materials'],
      challenge: 'Stand out in a crowded trade show environment while effectively communicating key messages.',
      solution: 'Designed an immersive experience with interactive elements and clear visual hierarchy.',
      results: ['300% increase in booth visitors', '150 qualified leads', 'Industry award for best booth design']
    },
    'Luxury Brand Package': {
      timeline: '8 weeks',
      team: '5 designers',
      deliverables: ['Packaging Design', 'Foil Stamping', 'Embossing', 'Unboxing Experience'],
      challenge: 'Create packaging that reflects luxury positioning while being sustainable and functional.',
      solution: 'Developed premium packaging with sustainable materials and sophisticated finishing techniques.',
      results: ['Premium pricing achieved', 'Featured in luxury magazines', '90% customer retention rate']
    },
    'Promotional Campaign': {
      timeline: '5 weeks',
      team: '4 designers',
      deliverables: ['Campaign Graphics', 'Promotional Products', 'Digital Assets', 'Print Materials'],
      challenge: 'Create a cohesive campaign across multiple touchpoints with limited budget.',
      solution: 'Designed a flexible system that maximizes impact while minimizing production costs.',
      results: ['200% ROI on campaign', '50% increase in brand awareness', 'Successful product launch']
    }
  };

  const currentDetails = projectDetails[project.title] || {};

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="portfolio-viewer-backdrop"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="portfolio-viewer-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button only */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="portfolio-viewer-close-only"
            >
              <X size={24} />
            </motion.button>

            {/* Content */}
            <div className="portfolio-viewer-content">
              {/* Hero Section */}
              <div className="portfolio-viewer-hero">
                <div className="portfolio-viewer-image-section">
                  <div className="portfolio-viewer-main-image">
                    <img 
                      src={projectImages[currentImageIndex]} 
                      alt={`${project.title} - Image ${currentImageIndex + 1}`} 
                    />
                    <div className="portfolio-viewer-image-overlay">
                      <div className="portfolio-viewer-image-counter">
                        {currentImageIndex + 1} / {projectImages.length}
                      </div>
                    </div>
                  </div>
                  
                  {projectImages.length > 1 && (
                    <div className="portfolio-viewer-thumbnails">
                      {projectImages.map((image, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`portfolio-viewer-thumbnail ${
                            index === currentImageIndex ? 'active' : ''
                          }`}
                        >
                          <img src={image} alt={`Thumbnail ${index + 1}`} />
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="portfolio-viewer-project-info">
                  <h1 className="portfolio-viewer-title">{project.title}</h1>
                  <p className="portfolio-viewer-description">
                    {project.description}
                  </p>
                  
                  <div className="portfolio-viewer-meta">
                    <div className="portfolio-viewer-meta-item">
                      <Calendar size={16} />
                      <span>{currentDetails.timeline}</span>
                    </div>
                    <div className="portfolio-viewer-meta-item">
                      <Users size={16} />
                      <span>{currentDetails.team}</span>
                    </div>
                    <div className="portfolio-viewer-meta-item">
                      <Star size={16} />
                      <span>Project {currentProjectIndex + 1} of {allProjects.length}</span>
                    </div>
                  </div>
                  
                  <div className="portfolio-viewer-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="portfolio-viewer-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Details Section */}
              <div className="portfolio-viewer-details">
                <h2>Project Details</h2>
                <div className="portfolio-viewer-details-grid">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="portfolio-viewer-detail-card"
                  >
                    <h3>Challenge</h3>
                    <p>{currentDetails.challenge}</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="portfolio-viewer-detail-card"
                  >
                    <h3>Solution</h3>
                    <p>{currentDetails.solution}</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="portfolio-viewer-detail-card"
                  >
                    <h3>Deliverables</h3>
                    <ul className="portfolio-viewer-features">
                      {currentDetails.deliverables?.map((item, index) => (
                        <li key={index}>
                          <Check size={14} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="portfolio-viewer-detail-card"
                  >
                    <h3>Results</h3>
                    <ul className="portfolio-viewer-features">
                      {currentDetails.results?.map((result, index) => (
                        <li key={index}>
                          <Check size={14} />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="portfolio-viewer-cta">
                <h2>Interested in Similar Work?</h2>
                <p>Let's discuss how we can create something amazing for your brand.</p>
                <div className="portfolio-viewer-cta-buttons">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="portfolio-viewer-cta-primary"
                    onClick={handleGetQuote}
                  >
                    <span>Get Quote</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="portfolio-viewer-cta-secondary"
                    onClick={handleViewPortfolio}
                  >
                    <span>View More Projects</span>
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

export default PortfolioViewer;