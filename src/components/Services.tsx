import React from 'react';
import { CalendarClock, Building2, Stethoscope, UtensilsCrossed, Phone, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedServiceCard from './ui/AnimatedServiceCard';
import SectionTransition from './ui/SectionTransition';
import { useLanguage } from '../contexts/LanguageContext';
import { fadeInUp, scaleIn, staggerContainer } from '../utils/animations';

const services = [
  {
    icon: <UtensilsCrossed size={32} />,
    titleKey: 'services.items.restaurants.title',
    descriptionKey: 'services.items.restaurants.description'
  },
  {
    icon: <Stethoscope size={32} />,
    titleKey: 'services.items.medical.title',
    descriptionKey: 'services.items.medical.description'
  },
  {
    icon: <Building2 size={32} />,
    titleKey: 'services.items.realestate.title',
    descriptionKey: 'services.items.realestate.description'
  },
  {
    icon: <CalendarClock size={32} />,
    titleKey: 'services.items.appointments.title',
    descriptionKey: 'services.items.appointments.description'
  },
  {
    icon: <Phone size={32} />,
    titleKey: 'services.items.inbound.title',
    descriptionKey: 'services.items.inbound.description'
  },
  {
    icon: <MessageSquare size={32} />,
    titleKey: 'services.items.outbound.title',
    descriptionKey: 'services.items.outbound.description'
  }
];

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-32 bg-jet relative">
      <SectionTransition from="jet" to="jet-light" />
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
            {t('services.badge')}
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-linen mb-6"
            variants={fadeInUp}
          >
            {t('services.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-linen/60 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            {t('services.description')}
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <AnimatedServiceCard key={index} index={index}>
              <div className="text-orange-primary mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-linen mb-4">
                {t(service.titleKey)}
              </h3>
              <p className="text-linen/60">
                {t(service.descriptionKey)}
              </p>
            </AnimatedServiceCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;