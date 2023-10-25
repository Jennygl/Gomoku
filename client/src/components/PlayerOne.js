import React from 'react'
import styled from 'styled-components'
import PlayerOneGP from '../assets/player1.png'

function PlayerOne() {
    return (
        <>
            <TreeOne src={PlayerOneGP} alt="Player 1" />
        </>
    )
}

export default PlayerOne

const TreeOne = styled.img`
    height: 40px;
`
