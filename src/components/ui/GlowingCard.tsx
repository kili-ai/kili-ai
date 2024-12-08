import React from 'react';
import { motion } from 'framer-motion';

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlowingCard: React.FC<GlowingCardProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`group relative p-8 rounded-2xl border border-linen/10 transition-all duration-500 ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.95), rgba(20, 20, 20, 0.98))'
      }}
      whileHover={{ boxShadow: '0 0 25px rgba(252, 106, 10, 0.1)' }}
    >
      {/* Border glow effect */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(252, 106, 10, 0.1), rgba(231, 69, 4, 0.05))',
          filter: 'blur(4px)',
          transform: 'scale(1.01)',
        }}
        animate={{
          scale: [1.01, 1.02, 1.01],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlowingCard;