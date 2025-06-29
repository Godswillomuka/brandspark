import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './ScrollIndicator.css';

const ScrollIndicator = ({ targetSection, isVisible = true }) => {
  const handleScrollToNext = () => {
    const nextSection = document.querySelector(targetSection);
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="scroll-indicator"
      onClick={handleScrollToNext}
    >
      <motion.div
        whileHover={{ 
          scale: 1.2,
          backgroundColor: "rgba(59, 130, 246, 0.3)"
        }}
        whileTap={{ scale: 0.9 }}
        className="scroll-indicator__button"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="scroll-indicator__icon"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="scroll-indicator__tooltip"
      >
        Next Section
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;