import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Eye, Lock, UserCheck } from 'lucide-react';
import Footer from '../Footer';

const Privacy = ({ onBack }) => {
  const sections = [
    {
      icon: Shield,
      title: 'Information We Collect',
      content: [
        'Personal information you provide (name, email, phone, address)',
        'Project details and design files you submit',
        'Payment information (processed securely through third-party providers)',
        'Website usage data and analytics'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'Process and fulfill your orders',
        'Communicate about your projects and orders',
        'Improve our services and website experience',
        'Send promotional emails (with your consent)'
      ]
    },
    {
      icon: Lock,
      title: 'Information Security',
      content: [
        'SSL encryption for all data transmission',
        'Secure servers and regular security updates',
        'Limited access to personal information',
        'Regular security audits and monitoring'
      ]
    },
    {
      icon: UserCheck,
      title: 'Your Rights',
      content: [
        'Access and review your personal information',
        'Request corrections to inaccurate data',
        'Delete your account and associated data',
        'Opt-out of marketing communications'
      ]
    }
  ];

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
              Privacy <span className="text-blue-400">Policy</span>
            </h1>
            <p className="text-xl text-slate-300">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-slate-400 mt-4">Last updated: March 2024</p>
          </motion.div>

          {/* Privacy Sections */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-blue-500/20"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-lg mt-8 border border-blue-500/20"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Additional Information</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                <strong className="text-white">Cookies:</strong> We use cookies to improve your browsing experience and analyze website traffic. You can control cookie settings in your browser.
              </p>
              <p>
                <strong className="text-white">Third-Party Services:</strong> We may use third-party services for analytics, payment processing, and marketing. These services have their own privacy policies.
              </p>
              <p>
                <strong className="text-white">Data Retention:</strong> We retain your information for as long as necessary to provide our services and comply with legal obligations.
              </p>
              <p>
                <strong className="text-white">Policy Updates:</strong> We may update this privacy policy from time to time. We'll notify you of significant changes via email or website notice.
              </p>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-blue-600 text-white rounded-2xl p-8 mt-12 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
            <p className="mb-6">
              If you have any questions about this privacy policy or how we handle your data, please contact us.
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

export default Privacy;