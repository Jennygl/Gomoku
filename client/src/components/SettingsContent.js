import React from 'react'
import LanguageSwitch from './language/LanguageSwitch'
import { useLanguage } from './language/LanguageContext'
import se from '../components/language/languages/SE.json'
import en from '../components/language/languages/EN.json'

export const SettingsContent = () => {

  const { language } = useLanguage();
  const lang = language === 'se' ? se : en;

  return (
    <div>
      {/* {lang.settings_change_language}
      <div><LanguageSwitch/></div> */}
    </div>
  )
}
