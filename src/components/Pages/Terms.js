import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, AlertTriangle, CreditCard, Truck } from 'lucide-react';
import Footer from '../Footer';

const Terms = ({ onBack }) => {
  const sections = [
    {
      icon: FileText,
      title: 'Service Terms',
      content: [
        'All orders require written approval before production begins',
        'Custom printed items are final sale unless defective',
        'We reserve the right to refuse orders that violate copyright or trademark laws',
        'Production times are estimates and may vary based on order complexity'
      ]
    },
    {
      icon: CreditCard,
      title: 'Payment Terms',
      content: [
        'Payment is required before production begins for new customers',
        'Established customers may qualify for net 30 payment terms',
        'Rush orders require full payment upfront',
        'Returned checks incur a $35 processing fee'
      ]
    },
    {
      icon: Truck,
      title: 'Delivery & Risk',
      content: [
        'Risk of loss transfers to customer upon delivery',
        'Delivery dates are estimates and not guaranteed',
        'Customer is responsible for verifying delivery address accuracy',
        'Unclaimed orders may incur storage fees after 30 days'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Limitations',
      content: [
        'Our liability is limited to the cost of the order',
        'We are not liable for consequential or indirect damages',
        'Color variations between proof and final product are normal',
        'Customer is responsible for proofreading all text and content'
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
              Terms of <span className="text-blue-400">Service</span>
            </h1>
            <p className="text-xl text-slate-300">
              Please read these terms carefully before using our services. By placing an order, you agree to these terms.
            </p>
            <p className="text-sm text-slate-400 mt-4">Last updated: March 2024</p>
          </motion.div>

          {/* Terms Sections */}
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

          {/* Additional Terms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-lg mt-8 border border-blue-500/20"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Additional Terms</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                <strong className="text-white">Intellectual Property:</strong> Customer warrants they have the right to use all submitted materials and indemnifies Brandblast against any claims.
              </p>
              <p>
                <strong className="text-white">Force Majeure:</strong> We are not liable for delays caused by circumstances beyond our control, including natural disasters, labor disputes, or supply chain disruptions.
              </p>
              <p>
                <strong className="text-white">Governing Law:</strong> These terms are governed by the laws of the state where our business is located.
              </p>
              <p>
                <strong className="text-white">Modifications:</strong> We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of modified terms.
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
            <h2 className="text-2xl font-bold mb-4">Questions About Our Terms?</h2>
            <p className="mb-6">
              If you have any questions about these terms of service, please contact us before placing your order.
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

export default Terms;