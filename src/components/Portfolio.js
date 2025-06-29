import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Zap, Filter, X } from 'lucide-react';
import ScrollIndicator from './ScrollIndicator';
import PortfolioViewer from './PortfolioViewer';
import './Portfolio.css';

// Import portfolio images (using external URLs temporarily until you add your own)
const portfolioImages = {
  techStartup: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
  foodTruck: 'https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg',
  corporateApparel: 'https://images.pexels.com/photos/3806749/pexels-photo-3806749.jpeg',
  tradeShow: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg',
  luxuryBrand: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
  promotionalCampaign: 'https://images.pexels.com/photos/3806275/pexels-photo-3806275.jpeg'
};

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Tech Startup Rebrand',
      category: 'branding',
      image: portfolioImages.techStartup,
      description: 'Complete brand identity overhaul for a cutting-edge tech startup, including logo design, brand guidelines, and marketing materials.',
      tags: ['Logo Design', 'Brand Identity', 'Marketing Materials'],
      colorClass: 'gradient-blue-green'
    },
    {
      id: 2,
      title: 'Food Truck Fleet Wraps',
      category: 'wraps',
      image: portfolioImages.foodTruck,
      description: 'Eye-catching vehicle wraps for a growing food truck business, designed to attract customers and build brand recognition.',
      tags: ['Vehicle Wraps', 'Fleet Graphics', 'Brand Application'],
      colorClass: 'gradient-green-red'
    },
    {
      id: 3,
      title: 'Corporate Apparel Line',
      category: 'apparel',
      image: portfolioImages.corporateApparel,
      description: 'Premium corporate clothing line with custom embroidery and screen printing for a professional services company.',
      tags: ['Custom Apparel', 'Embroidery', 'Corporate Identity'],
      colorClass: 'gradient-red-blue'
    },
    {
      id: 4,
      title: 'Trade Show Display',
      category: 'signage',
      image: portfolioImages.tradeShow,
      description: 'Large format displays and banners for major industry trade show, designed to maximize booth visibility and engagement.',
      tags: ['Large Format', 'Trade Show', 'Display Graphics'],
      colorClass: 'gradient-blue-red'
    },
    {
      id: 5,
      title: 'Luxury Brand Package',
      category: 'finishing',
      image: portfolioImages.luxuryBrand,
      description: 'Premium packaging design with foil stamping and embossing for a luxury cosmetics brand launch.',
      tags: ['Foil Stamping', 'Embossing', 'Luxury Finishing'],
      colorClass: 'gradient-green-blue'
    },
    {
      id: 6,
      title: 'Promotional Campaign',
      category: 'promotional',
      image: portfolioImages.promotionalCampaign,
      description: 'Complete promotional product campaign for product launch, including branded merchandise and marketing materials.',
      tags: ['Promotional Products', 'Campaign Design', 'Brand Merchandise'],
      colorClass: 'gradient-red-green'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'branding', label: 'Branding' },
    { id: 'wraps', label: 'Vehicle Wraps' },
    { id: 'apparel', label: 'Apparel' },
    { id: 'signage', label: 'Signage' },
    { id: 'finishing', label: 'Premium Finishing' },
    { id: 'promotional', label: 'Promotional' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
    setSelectedProject(null);
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="portfolio" className="portfolio-section">
      {/* Background Elements */}
      <div className="portfolio-background-elements">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="portfolio-bg-circle-1"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="portfolio-bg-circle-2"
        />
      </div>

      <div className="portfolio-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="portfolio-header"
        >
          <motion.div
            className="portfolio-header-tagline-wrapper"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="portfolio-tagline-icon" />
            </motion.div>
            <span className="portfolio-tagline-text">Our Work</span>
          </motion.div>
          
          <h2 className="portfolio-title">
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="portfolio-title-gradient-text"
              style={{ backgroundSize: "200% 200%" }}
            >
              PORTFOLIO
            </motion.span>
          </h2>
          
          <p className="portfolio-description">
            Explore our explosive portfolio of successful branding and printing projects that have transformed businesses.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="portfolio-filter-buttons"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`portfolio-filter-button ${
                selectedCategory === category.id
                  ? 'portfolio-filter-button-active'
                  : 'portfolio-filter-button-inactive'
              }`}
            >
              <Filter className="portfolio-filter-icon" />
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="portfolio-projects-grid"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={`${project.id}-${selectedCategory}`}
                variants={cardVariants}
                whileHover={{ 
                  y: -15,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                onClick={() => handleProjectClick(project)}
                className="portfolio-project-card"
              >
                {/* Image Section */}
                <div className="portfolio-card-image-wrapper">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="portfolio-card-image"
                  />
                  <div className="portfolio-card-image-gradient-overlay" />
                  
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="portfolio-card-hover-overlay"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="portfolio-card-hover-icon-wrapper"
                    >
                      <ExternalLink className="portfolio-card-hover-icon" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="portfolio-card-content">
                  <h3 className="portfolio-card-title">{project.title}</h3>
                  <p className="portfolio-card-description">{project.description}</p>
                  
                  <div className="portfolio-card-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="portfolio-card-tag-item"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Portfolio Viewer */}
        <PortfolioViewer
          project={selectedProject}
          isOpen={isViewerOpen}
          onClose={handleCloseViewer}
          allProjects={projects}
        />
      </div>

      {/* Scroll Indicator - Dark theme for this section */}
      <div className="scroll-indicator--dark">
        <ScrollIndicator targetSection="#reviews" />
      </div>
    </section>
  );
};

export default Portfolio;