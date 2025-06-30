import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown, Search } from 'lucide-react';
import Footer from '../Footer';

const FAQ = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqData = [
    {
      question: 'What file formats do you accept?',
      answer: 'We accept AI, EPS, PDF, PSD, PNG, JPG, and SVG files. For best results, we recommend vector files (AI, EPS) for logos and scalable graphics.'
    },
    {
      question: 'How long does production take?',
      answer: 'Production times vary by service: Custom apparel (5-7 days), Vehicle wraps (3-5 days), Banners (2-4 days), Promotional products (7-10 days).'
    },
    {
      question: 'Do you offer design services?',
      answer: 'Yes! Our experienced design team can create custom designs, logos, and complete brand identity packages for any project.'
    },
    {
      question: 'What are your minimum order quantities?',
      answer: 'Minimums vary by product: Custom apparel (12 pieces), Promotional products (25 pieces), Banners (1 piece), Vehicle wraps (1 vehicle).'
    },
    {
      question: 'Do you ship nationwide?',
      answer: 'Yes, we ship throughout the United States. We also offer local delivery within 25 miles of our studio.'
    },
    {
      question: 'Can I see a proof before production?',
      answer: 'Absolutely! We provide digital proofs for all orders and require your approval before beginning production.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, check, all major credit cards (Visa, MasterCard, American Express), and bank transfers.'
    },
    {
      question: 'Do you offer rush orders?',
      answer: 'Yes, rush orders are available for most products with additional fees. Contact us to discuss your timeline.'
    },
    {
      question: 'What resolution should my images be?',
      answer: 'For print materials, we recommend 300 DPI at actual size. For large format printing like banners, 150 DPI is usually sufficient.'
    },
    {
      question: 'Can you match specific colors?',
      answer: 'Yes, we can match Pantone colors for brand consistency. Please provide Pantone color codes with your artwork.'
    }
  ];

  const filteredFaqs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 py-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Home
            </button>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked <span className="text-blue-400">Questions</span>
            </h1>
            <p className="text-xl text-slate-300">
              Find quick answers to the most common questions about our services.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative mb-8"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800/50 backdrop-blur-lg rounded-xl border border-blue-500/20 focus:border-blue-500 focus:ring-2 focus:ring-blue-200/20 outline-none transition-all text-white"
            />
          </motion.div>

          {/* FAQ List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            {filteredFaqs.map((faq, index) => {
              const isExpanded = expandedFaq === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.4 }}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-xl shadow-sm overflow-hidden border border-blue-500/20"
                >
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : index)}
                    className="w-full px-6 py-4 text-left hover:bg-slate-700/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-white pr-4">{faq.question}</h3>
                      <ChevronDown
                        className={`text-slate-400 transition-transform ${
                          isExpanded ? 'rotate-180' : ''
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
                      className="px-6 pb-4 border-t border-blue-500/20"
                    >
                      <p className="text-slate-300 leading-relaxed pt-4">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {searchTerm && filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-300 mb-4">No results found for "{searchTerm}"</p>
              <button
                onClick={() => setSearchTerm('')}
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Clear search and view all FAQs
              </button>
            </div>
          )}

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-blue-600 text-white rounded-2xl p-8 mt-12 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="mb-6">
              Can't find what you're looking for? Our team is here to help with any questions about our services.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;