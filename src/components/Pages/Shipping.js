import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Truck, Clock, MapPin, Package } from 'lucide-react';
import Footer from '../Footer';

const Shipping = ({ onBack }) => {
  const shippingOptions = [
    {
      icon: Truck,
      title: 'Standard Shipping',
      time: '5-7 business days',
      cost: 'Starting at $9.99',
      description: 'Reliable ground shipping for most orders'
    },
    {
      icon: Clock,
      title: 'Express Shipping',
      time: '2-3 business days',
      cost: 'Starting at $19.99',
      description: 'Faster delivery for urgent orders'
    },
    {
      icon: Package,
      title: 'Overnight Shipping',
      time: '1 business day',
      cost: 'Starting at $39.99',
      description: 'Next-day delivery for rush orders'
    },
    {
      icon: MapPin,
      title: 'Local Delivery',
      time: 'Same day',
      cost: 'Starting at $15.00',
      description: 'Available within 25 miles of our studio'
    }
  ];

  const shippingInfo = [
    {
      title: 'Processing Time',
      content: 'Orders are typically processed within 1-2 business days after artwork approval.'
    },
    {
      title: 'Shipping Zones',
      content: 'We ship nationwide within the United States. International shipping available upon request.'
    },
    {
      title: 'Large Items',
      content: 'Oversized items like banners and displays may require freight shipping with extended delivery times.'
    },
    {
      title: 'Tracking',
      content: 'All shipments include tracking information sent to your email address.'
    }
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
              Shipping <span className="text-blue-400">Information</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Fast, reliable shipping options to get your orders delivered when you need them.
            </p>
          </motion.div>

          {/* Shipping Options */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {shippingOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-blue-500/20"
              >
                <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <option.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-blue-400 font-semibold">{option.time}</span>
                  <span className="text-green-400 font-semibold">{option.cost}</span>
                </div>
                <p className="text-slate-300">{option.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Shipping Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-blue-500/20"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Important Shipping Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {shippingInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                  className="border-l-4 border-blue-400 pl-4"
                >
                  <h3 className="font-semibold text-white mb-2">{info.title}</h3>
                  <p className="text-slate-300 text-sm">{info.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shipping;