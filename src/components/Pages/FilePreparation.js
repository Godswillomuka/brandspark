import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, AlertTriangle, FileText, Settings } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const FilePreparation = ({ onBack }) => {
  const steps = [
    {
      title: 'Choose the Right Format',
      description: 'Select the appropriate file format for your project type',
      details: [
        'Vector files (AI, EPS) for logos and scalable graphics',
        'High-resolution raster files (PSD, TIFF) for photos',
        'PDF files for final artwork and proofs'
      ]
    },
    {
      title: 'Set Correct Resolution',
      description: 'Ensure your files have the proper resolution for crisp printing',
      details: [
        'Business cards and small prints: 300 DPI',
        'Large format banners: 150 DPI',
        'Vehicle wraps: 100-150 DPI'
      ]
    },
    {
      title: 'Use CMYK Color Mode',
      description: 'Convert all colors to CMYK for accurate print reproduction',
      details: [
        'Avoid RGB colors for print materials',
        'Include Pantone spot colors when specified',
        'Use rich black (C:40 M:30 Y:30 K:100) for deep blacks'
      ]
    },
    {
      title: 'Add Bleed and Safe Zones',
      description: 'Include proper bleed areas and keep important elements in safe zones',
      details: [
        'Add 0.125" bleed on all sides for trimmed materials',
        'Keep text and important graphics 0.125" from trim edge',
        'Extend background colors and images to bleed edge'
      ]
    },
    {
      title: 'Prepare Text and Fonts',
      description: 'Ensure text will print correctly by outlining or including fonts',
      details: [
        'Convert all text to outlines/curves',
        'Or include all font files with your artwork',
        'Use standard fonts when possible'
      ]
    },
    {
      title: 'Final Check and Package',
      description: 'Review your files and package everything for submission',
      details: [
        'Check all images are high resolution and linked',
        'Include a PDF proof for reference',
        'Package all files, fonts, and images together'
      ]
    }
  ];

  const commonIssues = [
    {
      issue: 'Low Resolution Images',
      solution: 'Use images at 300 DPI for small prints, 150 DPI for large format',
      type: 'error'
    },
    {
      issue: 'RGB Color Mode',
      solution: 'Convert to CMYK color mode before submitting',
      type: 'error'
    },
    {
      issue: 'Missing Fonts',
      solution: 'Convert text to outlines or include font files',
      type: 'warning'
    },
    {
      issue: 'No Bleed Area',
      solution: 'Add 0.125" bleed on all sides for trimmed materials',
      type: 'warning'
    },
    {
      issue: 'Text Too Close to Edge',
      solution: 'Keep important text 0.125" away from trim edge',
      type: 'warning'
    }
  ];

  const fileSpecs = [
    {
      product: 'Business Cards',
      size: '3.5" x 2"',
      bleed: '0.125"',
      resolution: '300 DPI',
      colorMode: 'CMYK'
    },
    {
      product: 'Flyers/Brochures',
      size: 'Various',
      bleed: '0.125"',
      resolution: '300 DPI',
      colorMode: 'CMYK'
    },
    {
      product: 'Banners',
      size: 'Actual size',
      bleed: '2"',
      resolution: '150 DPI',
      colorMode: 'CMYK'
    },
    {
      product: 'Vehicle Wraps',
      size: 'Actual size',
      bleed: '6"',
      resolution: '100-150 DPI',
      colorMode: 'CMYK'
    },
    {
      product: 'Apparel Graphics',
      size: 'Print size',
      bleed: 'None',
      resolution: '300 DPI',
      colorMode: 'CMYK/Spot'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900">
      <Header />
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
              File <span className="text-blue-400">Preparation</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Learn how to prepare your files for optimal printing results. Follow our step-by-step 
              guide to ensure your designs print exactly as intended.
            </p>
          </motion.div>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Step-by-Step Guide</h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-500/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-slate-300 mb-3">{step.description}</p>
                      <ul className="space-y-1">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* File Specifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-lg mb-12 border border-blue-500/20"
          >
            <h2 className="text-2xl font-bold text-white mb-6">File Specifications by Product</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-blue-500/20">
                    <th className="text-left py-3 px-4 font-semibold text-white">Product</th>
                    <th className="text-left py-3 px-4 font-semibold text-white">Size</th>
                    <th className="text-left py-3 px-4 font-semibold text-white">Bleed</th>
                    <th className="text-left py-3 px-4 font-semibold text-white">Resolution</th>
                    <th className="text-left py-3 px-4 font-semibold text-white">Color Mode</th>
                  </tr>
                </thead>
                <tbody>
                  {fileSpecs.map((spec, index) => (
                    <tr key={index} className="border-b border-blue-500/10">
                      <td className="py-3 px-4 font-medium text-white">{spec.product}</td>
                      <td className="py-3 px-4 text-slate-300">{spec.size}</td>
                      <td className="py-3 px-4 text-slate-300">{spec.bleed}</td>
                      <td className="py-3 px-4 text-slate-300">{spec.resolution}</td>
                      <td className="py-3 px-4 text-slate-300">{spec.colorMode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Common Issues */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-lg mb-12 border border-blue-500/20"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Common Issues & Solutions</h2>
            <div className="space-y-4">
              {commonIssues.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.9 }}
                  className={`flex items-start gap-3 p-4 rounded-lg ${
                    item.type === 'error' ? 'bg-red-500/10 border border-red-500/20' : 'bg-yellow-500/10 border border-yellow-500/20'
                  }`}
                >
                  <AlertTriangle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                    item.type === 'error' ? 'text-red-400' : 'text-yellow-400'
                  }`} />
                  <div>
                    <h3 className={`font-semibold mb-1 ${
                      item.type === 'error' ? 'text-red-300' : 'text-yellow-300'
                    }`}>
                      {item.issue}
                    </h3>
                    <p className={`text-sm ${
                      item.type === 'error' ? 'text-red-200' : 'text-yellow-200'
                    }`}>
                      {item.solution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-blue-600 text-white rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Need Help with Your Files?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Our design team can help prepare your files or create new artwork from scratch. 
              Contact us for professional file preparation services.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get File Help
            </button>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FilePreparation;