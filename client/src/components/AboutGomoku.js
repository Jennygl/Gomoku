import React from 'react'
import styled from 'styled-components'
import { useLanguage } from './language/LanguageContext'
import se from '../components/language/languages/SE.json'
import en from '../components/language/languages/EN.json'

function AboutGomoku() {

  const { language } = useLanguage();
  const lang = language === 'se' ? se : en;

    return (
        <About>
            <h3>{lang.about_gomoku_heading}</h3>
            <p>{lang.about_text_1}
            </p>
            <p>
                {lang.about_text_2}
            </p>
        </About>
    )
}

export default AboutGomoku

const About = styled.div`
    display: flex;
    flex-direction: column;
    margin: 4vh 2vw 1em 2vw;
    word-break: break-word;
`
