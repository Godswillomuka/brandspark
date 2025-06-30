import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Clock, DollarSign, Users } from 'lucide-react';
import Footer from '../Footer';
import './Careers.css';

const Careers = ({ onBack }) => {
  const openPositions = [
    {
      title: 'Senior Graphic Designer',
      department: 'Design',
      location: 'Creative City, CA',
      type: 'Full-time',
      salary: '$65,000 - $85,000',
      description: 'We\'re looking for a talented graphic designer to join our creative team and help bring client visions to life.',
      requirements: [
        '5+ years of graphic design experience',
        'Proficiency in Adobe Creative Suite',
        'Strong portfolio showcasing print and digital work',
        'Experience with brand identity design'
      ]
    },
    {
      title: 'Production Specialist',
      department: 'Production',
      location: 'Creative City, CA',
      type: 'Full-time',
      salary: '$45,000 - $60,000',
      description: 'Join our production team to ensure high-quality output and efficient workflow management.',
      requirements: [
        '3+ years in print production',
        'Knowledge of printing processes and materials',
        'Attention to detail and quality control',
        'Experience with large format printing preferred'
      ]
    },
    {
      title: 'Account Manager',
      department: 'Client Services',
      location: 'Creative City, CA',
      type: 'Full-time',
      salary: '$55,000 - $70,000',
      description: 'Build and maintain strong client relationships while managing project timelines and deliverables.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        '3+ years in account management or client services',
        'Excellent communication and organizational skills',
        'Experience in creative industry preferred'
      ]
    }
  ];

  const benefits = [
    'Competitive salary and performance bonuses',
    'Comprehensive health, dental, and vision insurance',
    'Flexible work arrangements and remote options',
    'Professional development opportunities',
    'Creative and collaborative work environment',
    'Paid time off and holidays'
  ];

  return (
    <div className="careers-page">
      <div className="careers-page__container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="careers-page__header"
        >
          <button
            onClick={onBack}
            className="careers-page__back-btn"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
          
          <h1 className="careers-page__title">
            Join Our <span className="careers-page__title-highlight">Team</span>
          </h1>
          <p className="careers-page__description">
            Be part of a creative team that's passionate about helping businesses build amazing brands. 
            We're always looking for talented individuals who share our commitment to excellence.
          </p>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="careers-page__benefits"
        >
          <h2 className="careers-page__benefits-title">Why Work With Us?</h2>
          <div className="careers-page__benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="careers-page__benefit"
              >
                <div className="careers-page__benefit-dot"></div>
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="careers-page__positions-title">Open Positions</h2>
          <div className="careers-page__positions">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="careers-page__position"
              >
                <div className="careers-page__position-header">
                  <div className="careers-page__position-info">
                    <h3 className="careers-page__position-title">{position.title}</h3>
                    <div className="careers-page__position-meta">
                      <div className="careers-page__position-meta-item">
                        <Users size={16} />
                        {position.department}
                      </div>
                      <div className="careers-page__position-meta-item">
                        <MapPin size={16} />
                        {position.location}
                      </div>
                      <div className="careers-page__position-meta-item">
                        <Clock size={16} />
                        {position.type}
                      </div>
                      <div className="careers-page__position-meta-item">
                        <DollarSign size={16} />
                        {position.salary}
                      </div>
                    </div>
                  </div>
                  <button className="careers-page__position-apply">
                    Apply Now
                  </button>
                </div>
                
                <p className="careers-page__position-description">{position.description}</p>
                
                <div>
                  <h4 className="careers-page__position-requirements-title">Requirements:</h4>
                  <ul className="careers-page__position-requirements">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="careers-page__position-requirement">
                        <div className="careers-page__requirement-dot"></div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="careers-page__cta"
        >
          <h2 className="careers-page__cta-title">Don't See the Right Position?</h2>
          <p className="careers-page__cta-description">
            We're always interested in meeting talented individuals. Send us your resume and let us know how you'd like to contribute to our team.
          </p>
          <button className="careers-page__cta-button">
            Send Your Resume
          </button>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;