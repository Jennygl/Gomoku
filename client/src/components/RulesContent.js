import React from 'react'
import styled from 'styled-components'
import {useLanguage} from './language/LanguageContext'
import se from './language/languages/SE.json'
import en from './language/languages/EN.json'


const RulesContent = () => {

  const {language} =useLanguage();
  const lang = language === 'se' ? se : en;

    return (
        <Wrap>
            <ul>
                <li>
                    {lang.rules_1}
                </li>{' '}
                <li>
                    {lang.rules_2}
                </li>{' '}
                <li>
                {lang.rules_3}
                </li>
                <li>
                    {' '}
                    {lang.rules_4}
                </li>
                <li>
                {lang.rules_5}
                </li>
                <li>
                {lang.rules_6}
                </li>
            </ul>
        </Wrap>
    )
}

export default RulesContent
const Wrap = styled.div`
    ul {
        margin: 3vh 1vw;
        padding-bottom: 10px;
        font-family: 'Inter', sans-serif;
    }
    @media (max-width: 992px) {
        ul {
            line-height: 2rem;
            font-size: 1.2rem;
            margin: 4vh 4vw;
        }
    }
`
