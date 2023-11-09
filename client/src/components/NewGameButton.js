import React from 'react'
import styled from 'styled-components'
import { useLanguage } from './language/LanguageContext'
import se from '../components/language/languages/SE.json'
import en from '../components/language/languages/EN.json'

const NewGameButton = () => {
    const { language } = useLanguage()
    const lang = language === 'se' ? se : en

    const emptyboard = () => {
        // Make a POST request to clear the game board on the server
        fetch('http://localhost:3000/api/gomoku/emptyBoard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) =>
                // You can handle the response data if needed
                console.log('Clear', data)
            )
            .catch((error) => {
                console.error(
                    'Error clearing the game board on the server',
                    error
                )
            })
    }

    return (
        <NEWGAME>
            <button className="new-game" onClick={emptyboard}>
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
