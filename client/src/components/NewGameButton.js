import React from 'react'
import styled from 'styled-components'
import { useLanguage } from './language/LanguageContext'
import se from '../components/language/languages/SE.json'
import en from '../components/language/languages/EN.json'

function NewGameButton({ onClick }) {
    const { language } = useLanguage()
    const lang = language === 'se' ? se : en



    return (
        <NEWGAME>
            <button className="new-game" onClick={onClick}>
                {lang.new_game_button}
            </button>
        </NEWGAME>
    )
}

export default NewGameButton
const NEWGAME = styled.div`
    .new-game {
        background-color: rgba(103, 160, 69, 0.46);
        width: 30vw;
        height: 83px;
        border-radius: 8px;
        font-size: 24px;
        font-family: Inter;
        text-align: center;
        margin-top: 10px;
        border: none;
    }
    @media (max-width: 992px) {
        .new-game {
            font-size: 1.2rem;
            width: 80vw;
            margin-bottom: 30px;
            height: 7vh;
        }
    }
`
