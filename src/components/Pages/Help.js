import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, ChevronDown, ChevronRight } from 'lucide-react';
import Footer from '../Footer';
import './Help.css';

const Help = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqCategories = [
    {
      title: 'Getting Started',
      faqs: [
        {
          question: 'How do I place an order?',
          answer: 'You can place an order by contacting us through our website, calling us directly, or visiting our studio. We\'ll discuss your requirements and provide a detailed quote.'
        },
        {
          question: 'What file formats do you accept?',
          answer: 'We accept various file formats including AI, EPS, PDF, PSD, PNG, and JPG. For best results, we recommend vector files (AI, EPS) for logos and text-based designs.'
        },
        {
          question: 'How long does production take?',
          answer: 'Production times vary by service: Custom apparel (5-7 days), Vehicle wraps (3-5 days), Banners (2-4 days), Promotional products (7-10 days). Rush orders may be available for an additional fee.'
        }
      ]
    },
    {
      title: 'Design & Files',
      faqs: [
        {
          question: 'Do you provide design services?',
          answer: 'Yes! Our experienced design team can create custom designs for any project. We offer logo design, brand identity development, and custom artwork creation.'
        },
        {
          question: 'What resolution should my images be?',
          answer: 'For print materials, we recommend 300 DPI at actual size. For large format printing like banners, 150 DPI is usually sufficient. We can help optimize your files if needed.'
        },
        {
          question: 'Can you work with low-resolution logos?',
          answer: 'While we prefer high-resolution files, our design team can often recreate or enhance low-resolution logos. Additional design fees may apply for logo recreation.'
        }
      ]
    },
    {
      title: 'Pricing & Payment',
      faqs: [
        {
          question: 'How is pricing determined?',
          answer: 'Pricing depends on factors like quantity, size, materials, printing method, and complexity. We provide detailed quotes for all projects before production begins.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept cash, check, credit cards (Visa, MasterCard, American Express), and bank transfers. Payment terms vary by project size and client relationship.'
        },
        {
          question: 'Do you offer discounts for large orders?',
          answer: 'Yes, we offer volume discounts for large orders. The discount amount depends on the quantity and type of products. Contact us for a custom quote.'
        }
      ]
    },
    {
      title: 'Shipping & Delivery',
      faqs: [
        {
          question: 'Do you offer shipping?',
          answer: 'Yes, we ship nationwide. Shipping costs are calculated based on size, weight, and destination. Local delivery is also available in our service area.'
        },
        {
          question: 'Can I pick up my order?',
          answer: 'Absolutely! You can pick up your order at our studio. We\'ll notify you when your order is ready for pickup.'
        },
        {
          question: 'Do you offer rush delivery?',
          answer: 'Rush delivery is available for most products with additional fees. Contact us to discuss your timeline and we\'ll do our best to accommodate your needs.'
        }
      ]
    }
  ];

  const quickLinks = [
    { title: 'Design Guidelines', description: 'Learn about our design requirements and best practices' },
    { title: 'File Preparation', description: 'How to prepare your files for optimal printing results' },
    { title: 'Shipping Information', description: 'Details about our shipping options and policies' },
    { title: 'Returns & Exchanges', description: 'Our return and exchange policy information' }
  ];

  const filteredFaqs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="help-page">
      <div className="help-page__container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="help-page__header"
        >
          <button
            onClick={onBack}
            className="help-page__back-btn"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
          
          <h1 className="help-page__title">
            Help <span className="help-page__title-highlight">Center</span>
          </h1>
          <p className="help-page__description">
            Find answers to common questions and get the help you need.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="help-page__search"
        >
          <Search className="help-page__search-icon" size={20} />
          <input
            type="text"
            placeholder="Search for help..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="help-page__search-input"
          />
        </motion.div>

        {/* Quick Links */}
        {!searchTerm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="help-page__quick-links"
          >
            {quickLinks.map((link, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                className="help-page__quick-link"
              >
                <div className="help-page__quick-link-content">
                  <div>
                    <h3 className="help-page__quick-link-title">
                      {link.title}
                    </h3>
                    <p className="help-page__quick-link-description">{link.description}</p>
                  </div>
                  <ChevronRight className="help-page__quick-link-arrow" size={20} />
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="help-page__faqs-title">
            {searchTerm ? 'Search Results' : 'Frequently Asked Questions'}
          </h2>
          
          <div className="help-page__faqs">
            {(searchTerm ? filteredFaqs : faqCategories).map((category, categoryIndex) => (
              <div key={categoryIndex} className="help-page__faq-category">
                {!searchTerm && (
                  <div className="help-page__faq-category-header">
                    <h3 className="help-page__faq-category-title">{category.title}</h3>
                  </div>
                )}
                
                <div className="help-page__faq-list">
                  {category.faqs.map((faq, faqIndex) => {
                    const faqId = `${categoryIndex}-${faqIndex}`;
                    const isExpanded = expandedFaq === faqId;
                    
                    return (
                      <motion.div
                        key={faqIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: faqIndex * 0.1 }}
                        className="help-page__faq"
                      >
                        <button
                          onClick={() => setExpandedFaq(isExpanded ? null : faqId)}
                          className="help-page__faq-question"
                        >
                          <div className="help-page__faq-question-content">
                            <h4 className="help-page__faq-question-text">{faq.question}</h4>
                            <ChevronDown
                              className={`help-page__faq-chevron ${
                                isExpanded ? 'expanded' : ''
                              }`}
                              size={20}
                            />
                          </div>
                        </button>
                        
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="help-page__faq-answer"
                          >
                            <p className="help-page__faq-answer-text">{faq.answer}</p>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          
          {searchTerm && filteredFaqs.length === 0 && (
            <div className="help-page__no-results">
              <p className="help-page__no-results-text">No results found for "{searchTerm}"</p>
              <button
                onClick={() => setSearchTerm('')}
                className="help-page__no-results-button"
              >
                Clear search and view all FAQs
              </button>
            </div>
          )}
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="help-page__cta"
        >
          <h2 className="help-page__cta-title">Still Need Help?</h2>
          <p className="help-page__cta-description">
            Can't find what you're looking for? Our support team is here to help you with any questions.
          </p>
          <button className="help-page__cta-button">
            Contact Support
          </button>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Help;