import React from 'react'
import styled from 'styled-components'
import Trees from '../assets/trees.png'
function DecorComp() {
    return (
        <div>
            {' '}
            <TreeImg src={Trees} alt="Trees" />
        </div>
    )
}

export default DecorComp

const TreeImg = styled.img`
    position: absolute;
    right: 3vw;
    bottom: 5vh;
    background-color: #f2ebeb;
    border: none;
    height: 20vh;
`
