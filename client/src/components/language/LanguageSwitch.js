import React from 'react'
import { useLanguage } from './LanguageContext'
import styled from 'styled-components'

function LanguageSwitch() {
    const { language, toggleLanguage } = useLanguage()

    return (
        <LanguageButton onClick={toggleLanguage}>
            {language === 'se' ? 'English' : 'Svenska'}
        </LanguageButton>
    )
}

export default LanguageSwitch

const LanguageButton = styled.button`
background-color: rgba(103, 160, 69, 0.46);
border-radius: 8px;
border: none;
padding: 5px;
width: 100px;
`
