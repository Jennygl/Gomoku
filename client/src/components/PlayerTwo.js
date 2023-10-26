import React from 'react'
import styled from 'styled-components'
import PlayerTwoGP from '../assets/player2.png'

function PlayerTwo() {
    return (
        <>
            <TreeTwo src={PlayerTwoGP} alt="Player 2" />
        </>
    )
}

export default PlayerTwo

const TreeTwo = styled.img`
    height: 40px;
`
