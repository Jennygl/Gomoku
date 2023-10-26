import React from 'react'
import styled from 'styled-components'
import Trees from '../assets/trees.png'
function DecorComp() {
    return (
            <TreeImg src={Trees} alt="Trees" />

    )
}

export default DecorComp
const Wrap =styled.div`
.tree-style{
    position: relative;
    right: 3vw;
    bottom: 5vh;
}`
const TreeImg = styled.img`
    position: relative;
    right: 3vw;
    bottom: 5vh;
    /* background-color: #f2ebeb; */
    border: none;
    height: 20vh;
`
