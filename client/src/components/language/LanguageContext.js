import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Swedish is now default language
  const [language, setLanguage] = useState('se');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'se' : 'en');
  };

  const value = {
    language,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
