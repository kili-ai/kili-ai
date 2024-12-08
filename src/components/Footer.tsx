import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      className="py-8 text-center text-linen/40 text-sm"
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        © {currentYear} All rights reserved. Kili Ai
      </div>
    </motion.footer>
  );
};

export default Footer;