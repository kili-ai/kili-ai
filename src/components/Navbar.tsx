import React from 'react';
import { Menu, X } from 'lucide-react';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import Logo from './ui/Logo';
import Button from './ui/Button';
import LanguageSwitcher from './ui/LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';
import { CALENDLY_URL } from '../config/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const scrollToSection = useSmoothScroll();
  const { t } = useLanguage();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId, {
      offset: 80,
      duration: 800,
    });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-[#292929]/40 backdrop-blur-[6px] rounded-2xl"></div>
        <div className="relative px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <Logo />
            </div>
            
            <div className="hidden md:flex md:items-center md:space-x-8">
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, 'services')}
                className="text-[#F5ECE4]/80 hover:text-[#FC6A0A] transition-colors"
              >
                {t('nav.services')}
              </a>
              <a 
                href="#process" 
                onClick={(e) => handleNavClick(e, 'process')}
                className="text-[#F5ECE4]/80 hover:text-[#FC6A0A] transition-colors"
              >
                {t('nav.process')}
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="text-[#F5ECE4]/80 hover:text-[#FC6A0A] transition-colors"
              >
                {t('nav.contact')}
              </a>
              <LanguageSwitcher />
              <Button 
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="animate-gradient"
              >
                {t('nav.bookCall')}
              </Button>
            </div>
            
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-[#F5ECE4]">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden absolute w-full mt-2 bg-[#292929]/40 backdrop-blur-[6px] border border-[#F5ECE4]/10 rounded-2xl">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, 'services')}
                className="block px-3 py-2 text-[#F5ECE4]/80 hover:text-[#FC6A0A] transition-colors"
              >
                {t('nav.services')}
              </a>
              <a 
                href="#process" 
                onClick={(e) => handleNavClick(e, 'process')}
                className="block px-3 py-2 text-[#F5ECE4]/80 hover:text-[#FC6A0A] transition-colors"
              >
                {t('nav.process')}
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="block px-3 py-2 text-[#F5ECE4]/80 hover:text-[#FC6A0A] transition-colors"
              >
                {t('nav.contact')}
              </a>
              <LanguageSwitcher />
              <Button 
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="w-full animate-gradient"
              >
                {t('nav.bookCall')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;