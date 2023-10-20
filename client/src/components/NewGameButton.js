import React from 'react'
import styled from 'styled-components'

const NewGameButton = () => {
    return (
        <Wrap>
            <button className="new-game-button">New game</button>
        </Wrap>
    )
}

export default NewGameButton 

const Wrap = styled.div`
    .new-game-button {
        width: 540px;
        height: 83px;
        border-radius: 8px;
        background-color: #67a045;
        opacity: 0.76;
        font-family: Inter;
        font-size: 24px;
        text-align: center;
    }
`
