# Gomoku

Language instructions:

LanguageSwitch.js should be imported in the Settings tab

In your component that is using text of some kind, do following:

import { useLanguage } from './language/LanguageContext'
import se from '../components/language/languages/SE.json'
import en from '../components/language/languages/EN.json'

Make sure you use the correct path depending on where your component or page is located.

In your exported function, include this in your code:

const { language } = useLanguage()
const lang = language === 'se' ? se : en

At last, when using the text in your return: <h1>{lang.title}</h1>

The text available to use is found in SE.json and EN.json, if you add anything make sure to add it in both files.
