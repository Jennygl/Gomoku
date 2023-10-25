import React from 'react'
import { useLanguage } from './LanguageContext'

function LanguageSwitch() {
    const { language, toggleLanguage } = useLanguage()

    return (
        <button onClick={toggleLanguage}>
            {language === 'se' ? 'English' : 'Svenska'}
        </button>
    )
}

export default LanguageSwitch
