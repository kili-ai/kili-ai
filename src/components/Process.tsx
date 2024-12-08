import React from 'react';
import { PhoneCall, Lightbulb, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { CALENDLY_URL } from '../config/constants';
import AnimatedProcessCard from './ui/AnimatedProcessCard';
import SectionTransition from './ui/SectionTransition';
import { useLanguage } from '../contexts/LanguageContext';
import { fadeInUp, scaleIn, staggerContainer } from '../utils/animations';

const Process = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: '01',
      icon: <PhoneCall size={32} />,
      titleKey: 'process.steps.intro.title',
      descriptionKey: 'process.steps.intro.description'
    },
    {
      number: '02',
      icon: <Lightbulb size={32} />,
      titleKey: 'process.steps.strategy.title',
      descriptionKey: 'process.steps.strategy.description'
    },
    {
      number: '03',
      icon: <Rocket size={32} />,
      titleKey: 'process.steps.launch.title',
      descriptionKey: 'process.steps.launch.description'
    }
  ];

  return (
    <section id="process" className="py-32 bg-jet-light relative">
      <SectionTransition from="jet-light" to="jet" direction="top" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-24"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center px-3 py-1 rounded-full border border-linen/20 text-linen text-sm mb-8 shine-effect"
            variants={scaleIn}
          >
            <span className="w-2 h-2 bg-orange-primary rounded-full mr-2"></span>
            {t('process.badge')}
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-linen mb-6"
            variants={fadeInUp}
          >
            {t('process.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-linen/60 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            {t('process.description')}
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <AnimatedProcessCard key={index} index={index}>
              <div className="flex items-center mb-6">
                <span className="text-4xl font-bold text-orange-primary opacity-30 mr-4">{step.number}</span>
                <div className="text-orange-primary transform group-hover:scale-110 transition-transform duration-500">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-linen mb-4">{t(step.titleKey)}</h3>
              <p className="text-linen/60">{t(step.descriptionKey)}</p>
            </AnimatedProcessCard>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Button 
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            {t('process.cta')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;