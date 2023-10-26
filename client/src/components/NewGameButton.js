import React from 'react'
import styled from 'styled-components'

const NewGameButton = () => {
    return (
        <NEWGAME>
            <button className="new-game">New game</button>
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
            width: 80vw;
        }
    }
`
