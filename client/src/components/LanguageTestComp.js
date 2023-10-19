import React from 'react'
import { useLanguage } from './language/LanguageContext'
import se from '../components/language/languages/SE.json'
import en from '../components/language/languages/EN.json'

function LanguageTestComp() {
    const { language } = useLanguage()
    const lang = language === 'se' ? se : en

    return (
        <div>
            <h1>{lang.title}</h1>
            <p>{lang.rules_text}</p>
            {/* ... */}
        </div>
    )
}

export default LanguageTestComp
