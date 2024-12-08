import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedServiceCardProps {
  index: number;
  children: React.ReactNode;
}

const AnimatedServiceCard: React.FC<AnimatedServiceCardProps> = ({ index, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      className="group relative h-full"
    >
      <div className="h-full flex flex-col p-8 rounded-2xl border border-linen/10 transition-all duration-300 bg-gradient-to-b from-linen/5 to-transparent backdrop-blur-sm relative z-10">
        <div className="text-orange-primary mb-6">
          {children}
        </div>
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

export default AnimatedServiceCard;