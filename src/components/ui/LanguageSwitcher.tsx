import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Language } from '../../i18n/translations';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'cs', label: 'Čeština', flag: '🇨🇿' }
  ];

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 text-linen/80 hover:text-orange-primary transition-colors">
        <span className="text-lg">{languages.find(l => l.code === language)?.flag}</span>
        <span className="text-sm">{language.toUpperCase()}</span>
      </button>
      <div className="absolute right-0 mt-2 w-32 py-2 bg-jet-light rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 border border-linen/10">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`w-full px-4 py-2 text-left flex items-center space-x-2 hover:bg-orange-primary/10 transition-colors ${
              language === lang.code ? 'text-orange-primary' : 'text-linen/80'
            }`}
          >
            <span>{lang.flag}</span>
            <span className="text-sm">{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default LanguageSwitcher;