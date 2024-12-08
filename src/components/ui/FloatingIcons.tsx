import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, Calendar, Users } from 'lucide-react';

const FloatingIcons = () => {
  const icons = [
    { Icon: Phone, delay: 0 },
    { Icon: MessageSquare, delay: 0.2 },
    { Icon: Calendar, delay: 0.4 },
    { Icon: Users, delay: 0.6 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay }, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            scale: [0.8, 1, 1, 0.8],
            y: [-20, -40, -60, -80],
            x: Math.random() * 100 - 50
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            repeatDelay: 2
          }}
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: '60%',
          }}
        >
          <Icon 
            size={24} 
            className="text-orange-primary/30"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;