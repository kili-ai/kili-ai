import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Youtube, Facebook, Instagram, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/site';
import ContactBackground from './ContactBackground';
import Button from './ui/Button';
import { CALENDLY_URL } from '../config/constants';
import { useLanguage } from '../contexts/LanguageContext';
import { fadeInUp, scaleIn, staggerContainer } from '../utils/animations';

const Contact = () => {
  const { t } = useLanguage();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    budget: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '06369f81-02a1-4667-8787-82f6af1ee9bd',
          ...formData,
          from_name: formData.name,
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', website: '', budget: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="py-32 bg-jet relative overflow-hidden">
      <ContactBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-linen mb-6"
            variants={fadeInUp}
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-linen/60 max-w-2xl mx-auto mb-8"
            variants={fadeInUp}
          >
            {t('contact.description')}
          </motion.p>
          <motion.div variants={scaleIn}>
            <Button 
              href={CALENDLY_URL}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              {t('contact.form.submit')}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-start mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="hover-card p-8 rounded-2xl border border-linen/10"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold text-linen mb-6">{t('contact.form.title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.form.name')}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-linen/20 rounded-lg focus:border-orange-primary focus:ring-1 focus:ring-orange-primary text-linen placeholder:text-linen/40"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.form.email')}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-linen/20 rounded-lg focus:border-orange-primary focus:ring-1 focus:ring-orange-primary text-linen placeholder:text-linen/40"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('contact.form.phone')}
                  className="w-full px-4 py-3 bg-transparent border border-linen/20 rounded-lg focus:border-orange-primary focus:ring-1 focus:ring-orange-primary text-linen placeholder:text-linen/40"
                />
              </div>
              <div>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder={t('contact.form.website')}
                  className="w-full px-4 py-3 bg-transparent border border-linen/20 rounded-lg focus:border-orange-primary focus:ring-1 focus:ring-orange-primary text-linen placeholder:text-linen/40"
                />
              </div>
              <div>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-linen/20 rounded-lg focus:border-orange-primary focus:ring-1 focus:ring-orange-primary text-linen"
                >
                  <option value="" className="bg-jet text-linen">{t('contact.form.budget.label')}</option>
                  <option value="$1,000 - $5,000" className="bg-jet text-linen">{t('contact.form.budget.ranges.1')}</option>
                  <option value="$5,000 - $10,000" className="bg-jet text-linen">{t('contact.form.budget.ranges.2')}</option>
                  <option value="$10,000 - $25,000" className="bg-jet text-linen">{t('contact.form.budget.ranges.3')}</option>
                  <option value="$25,000+" className="bg-jet text-linen">{t('contact.form.budget.ranges.4')}</option>
                </select>
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder={t('contact.form.message')}
                  required
                  className="w-full px-4 py-3 bg-transparent border border-linen/20 rounded-lg focus:border-orange-primary focus:ring-1 focus:ring-orange-primary text-linen placeholder:text-linen/40"
                ></textarea>
              </div>
              <Button 
                type="submit" 
                variant="primary" 
                className="w-full"
                disabled={formStatus === 'submitting'}
              >
                {formStatus === 'submitting' ? t('contact.form.sending') : t('contact.form.submit')}
                <ArrowRight className="ml-2" size={20} />
              </Button>
              {formStatus === 'success' && (
                <p className="text-green-500 text-sm mt-2">{t('contact.form.success')}</p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-500 text-sm mt-2">{t('contact.form.error')}</p>
              )}
            </form>
          </motion.div>

          <motion.div 
            className="space-y-8"
            variants={fadeInUp}
          >
            <div className="hover-card p-8 rounded-2xl border border-linen/10">
              <h3 className="text-2xl font-bold text-linen mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center text-linen/60 hover:text-orange-primary transition-colors">
                  <Mail className="mr-3" size={20} />
                  <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                </div>
                <div className="flex items-center text-linen/60">
                  <MapPin className="mr-3" size={20} />
                  <span>{siteConfig.contact.location}</span>
                </div>
              </div>
            </div>

            <div className="hover-card p-8 rounded-2xl border border-linen/10">
              <h3 className="text-2xl font-bold text-linen mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-linen/20 text-linen/60 hover:text-orange-primary hover:border-orange-primary hover:bg-orange-primary/10 transition-all duration-300 group"
                >
                  <Youtube size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="sr-only">YouTube</span>
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-linen/20 text-linen/60 hover:text-orange-primary hover:border-orange-primary hover:bg-orange-primary/10 transition-all duration-300 group"
                >
                  <Facebook size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-linen/20 text-linen/60 hover:text-orange-primary hover:border-orange-primary hover:bg-orange-primary/10 transition-all duration-300 group"
                >
                  <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center text-linen/40 text-sm"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          © {currentYear} All rights reserved. Kili Ai
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;