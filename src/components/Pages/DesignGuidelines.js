import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Image, Palette, Download } from 'lucide-react';
import Footer from '../Footer';
import './DesignGuidelines.css';

const DesignGuidelines = ({ onBack }) => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const guidelines = [
    {
      icon: FileText,
      title: 'File Formats',
      description: 'Accepted file formats and their best use cases',
      items: [
        'Vector files (AI, EPS, PDF) - Best for logos and scalable graphics',
        'High-resolution raster files (PSD, PNG, TIFF) - For detailed images',
        'Print-ready PDFs - For final artwork submission',
        'SVG files - For web graphics and simple illustrations'
      ]
    },
    {
      icon: Image,
      title: 'Resolution & Size',
      description: 'Optimal resolution settings for different print types',
      items: [
        'Business cards: 300 DPI at 3.5" x 2" (+ 0.125" bleed)',
        'Banners: 150 DPI at actual size',
        'Vehicle wraps: 100-150 DPI at actual size',
        'Apparel graphics: 300 DPI at print size'
      ]
    },
    {
      icon: Palette,
      title: 'Color Guidelines',
      description: 'Color specifications for optimal print results',
      items: [
        'Use CMYK color mode for all print materials',
        'Include Pantone colors for brand consistency',
        'Avoid RGB colors for print projects',
        'Rich black: C:40 M:30 Y:30 K:100'
      ]
    }
  ];

  const templates = [
    {
      name: 'Business Card Template',
      size: '3.5" x 2" + bleed',
      format: 'AI, PSD',
      description: 'Standard business card template with bleed and safe zones'
    },
    {
      name: 'Letterhead Template',
      size: '8.5" x 11"',
      format: 'AI, PSD',
      description: 'Professional letterhead template with guidelines'
    },
    {
      name: 'Banner Template',
      size: 'Various sizes',
      format: 'AI, PSD',
      description: 'Large format banner templates for events and displays'
    },
    {
      name: 'Vehicle Wrap Template',
      size: 'Vehicle specific',
      format: 'AI, PSD',
      description: 'Vehicle-specific templates for accurate wrap design'
    }
  ];

  const handleContactUs = () => {
    onBack();
    setTimeout(() => {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        setTimeout(() => {
          if (window.preFillContactForm) {
            window.preFillContactForm(
              "Hi! I need help with design guidelines and file preparation. Please contact me with more information."
            );
          }
        }, 800);
      }
    }, 100);
  };

  return (
    <div className="design-guidelines-page">
      <div className="design-guidelines-page__container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="design-guidelines-page__header"
        >
          <button
            onClick={onBack}
            className="design-guidelines-page__back-btn"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
          
          <h1 className="design-guidelines-page__title">
            Design <span className="design-guidelines-page__title-highlight">Guidelines</span>
          </h1>
          <p className="design-guidelines-page__description">
            Follow these guidelines to ensure your designs print perfectly. Our specifications 
            help you create files that produce the best possible results.
          </p>
        </motion.div>

        {/* Guidelines Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="design-guidelines-page__grid"
        >
          {guidelines.map((guideline, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="design-guidelines-page__card"
            >
              <div className="design-guidelines-page__card-icon">
                <guideline.icon size={24} />
              </div>
              <h3 className="design-guidelines-page__card-title">{guideline.title}</h3>
              <p className="design-guidelines-page__card-description">{guideline.description}</p>
              <ul className="design-guidelines-page__card-list">
                {guideline.items.map((item, idx) => (
                  <li key={idx} className="design-guidelines-page__card-item">
                    <div className="design-guidelines-page__item-dot"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Templates Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="design-guidelines-page__templates"
        >
          <h2 className="design-guidelines-page__templates-title">Download Templates</h2>
          <div className="design-guidelines-page__templates-grid">
            {templates.map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.7 }}
                className="design-guidelines-page__template"
              >
                <div className="design-guidelines-page__template-header">
                  <div>
                    <h3 className="design-guidelines-page__template-name">{template.name}</h3>
                    <p className="design-guidelines-page__template-meta">{template.size} • {template.format}</p>
                  </div>
                  <button className="design-guidelines-page__template-download">
                    <Download size={16} />
                  </button>
                </div>
                <p className="design-guidelines-page__template-description">{template.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Best Practices */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="design-guidelines-page__cta"
        >
          <h2 className="design-guidelines-page__cta-title">Need Help with Your Files?</h2>
          <p className="design-guidelines-page__cta-description">
            Our design team can help prepare your files or create new artwork from scratch. 
            Contact us for professional file preparation services.
          </p>
          <button 
            onClick={handleContactUs}
            className="design-guidelines-page__cta-button"
          >
            Get File Help
          </button>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default DesignGuidelines;