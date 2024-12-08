import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedProcessCardProps {
  children: React.ReactNode;
}

const AnimatedProcessCard: React.FC<AnimatedProcessCardProps> = ({ children }) => {
  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-8 rounded-2xl border border-linen/10 transition-all duration-300 bg-gradient-to-b from-linen/5 to-transparent backdrop-blur-sm relative z-10">
        {children}
      </div>
      
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-2xl"
        animate={{
          boxShadow: ['0 0 15px rgba(252, 106, 10, 0.1)', '0 0 20px rgba(252, 106, 10, 0.2)', '0 0 15px rgba(252, 106, 10, 0.1)'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </motion.div>
  );
};

export default AnimatedProcessCard;