import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, RotateCcw, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import Footer from '../Footer';

const Returns = ({ onBack }) => {
  const returnPolicy = [
    {
      icon: CheckCircle,
      title: 'Defective Products',
      description: 'Full refund or replacement for manufacturing defects',
      color: 'text-green-400'
    },
    {
      icon: CheckCircle,
      title: 'Our Error',
      description: 'Free replacement if we made an error in production',
      color: 'text-green-400'
    },
    {
      icon: XCircle,
      title: 'Custom Orders',
      description: 'Custom printed items cannot be returned unless defective',
      color: 'text-red-400'
    },
    {
      icon: AlertTriangle,
      title: 'Approval Required',
      description: 'Items printed from customer-approved artwork are final',
      color: 'text-yellow-400'
    }
  ];

  const returnProcess = [
    'Contact our customer service team within 7 days of delivery',
    'Provide order number and photos of the issue',
    'Receive return authorization and shipping instructions',
    'Ship items back in original packaging',
    'Receive refund or replacement within 5-10 business days'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="pt-20">
        <div className="max-w-6xl mx-auto px-4 py-20">
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
              Returns & <span className="text-blue-400">Exchanges</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Our return policy ensures you're satisfied with your order while maintaining fair practices for custom printed products.
            </p>
          </motion.div>

          {/* Return Policy */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {returnPolicy.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-blue-500/20"
              >
                <div className="flex items-start gap-4">
                  <policy.icon className={`w-8 h-8 ${policy.color} flex-shrink-0 mt-1`} />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{policy.title}</h3>
                    <p className="text-slate-300">{policy.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Return Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-lg mb-12 border border-blue-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <RotateCcw className="w-8 h-8 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Return Process</h2>
            </div>
            <div className="space-y-4">
              {returnProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-slate-300 pt-1">{step}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-blue-600 text-white rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Need to Return an Item?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Contact our customer service team and we'll help you through the return process quickly and easily.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Customer Service
            </button>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Returns;