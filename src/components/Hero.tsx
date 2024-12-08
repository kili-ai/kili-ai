import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import HeroBackground from './HeroBackground';
import FloatingIcons from './ui/FloatingIcons';
import { useLanguage } from '../contexts/LanguageContext';
import { CALENDLY_URL } from '../config/constants';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center bg-jet-dark text-linen relative overflow-hidden">
      <HeroBackground />
      <FloatingIcons />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.div 
            className="inline-flex items-center px-3 py-1 rounded-full border border-linen/10 text-sm mb-8 shine-effect"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="w-2 h-2 bg-orange-primary rounded-full mr-2"></span>
            {t('hero.badge')}
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.2 }}
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.p 
            className="text-xl text-linen/60 mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.2 }}
          >
            {t('hero.description')}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2 }}
          >
            <Button 
              href={CALENDLY_URL}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;