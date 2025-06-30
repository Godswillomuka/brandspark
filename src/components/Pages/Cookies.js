import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Cookie, Settings, BarChart, Target } from 'lucide-react';
import Footer from '../Footer';

const Cookies = ({ onBack }) => {
  const cookieTypes = [
    {
      icon: Settings,
      title: 'Essential Cookies',
      description: 'Required for basic website functionality',
      examples: ['Session management', 'Security features', 'Form submissions'],
      required: true
    },
    {
      icon: BarChart,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors use our website',
      examples: ['Page views', 'User behavior', 'Performance metrics'],
      required: false
    },
    {
      icon: Target,
      title: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements',
      examples: ['Ad targeting', 'Campaign tracking', 'Social media integration'],
      required: false
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
              Cookie <span className="text-blue-400">Policy</span>
            </h1>
            <p className="text-xl text-slate-300">
              Learn about how we use cookies to improve your browsing experience and provide better services.
            </p>
            <p className="text-sm text-slate-400 mt-4">Last updated: March 2024</p>
          </motion.div>

          {/* What are Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-lg mb-8 border border-blue-500/20"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Cookie className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
                <p className="text-slate-300 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better browsing experience by remembering your preferences 
                  and analyzing how you use our site.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Cookie Types */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6 mb-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Types of Cookies We Use</h2>
            {cookieTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-blue-500/20"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <type.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">{type.title}</h3>
                      {type.required && (
                        <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded-full text-xs font-medium">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-slate-300 mb-4">{type.description}</p>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Examples:</h4>
                      <ul className="space-y-1">
                        {type.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Managing Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-lg mb-8 border border-blue-500/20"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Managing Your Cookie Preferences</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                <strong className="text-white">Browser Settings:</strong> You can control and delete cookies through your browser settings. Each browser is different, so check your browser's help menu to learn how to change your cookie preferences.
              </p>
              <p>
                <strong className="text-white">Opt-Out:</strong> You can opt out of analytics and marketing cookies while still allowing essential cookies that are necessary for the website to function.
              </p>
              <p>
                <strong className="text-white">Impact of Disabling:</strong> Disabling certain cookies may affect your browsing experience and limit some website functionality.
              </p>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-blue-600 text-white rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Questions About Cookies?</h2>
            <p className="mb-6">
              If you have any questions about our use of cookies or this cookie policy, please contact us.
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

export default Cookies;