import React from 'react'
import styled from 'styled-components'
import Trees from '../assets/trees.png'
function DecorComp() {
    return (
        <Wrap className="d-flex justify-content-end">
            <TreeImg src={Trees} alt="Trees" className="align-self-end" />
        </Wrap>
    )
}

export default DecorComp
const Wrap = styled.div`
    position: relative;
    width: 30vw;
    height: 20vh;
    margin-top: 1.5vh;
    @media (max-width: 992px) {
        width: 80vw;
    }
`
const TreeImg = styled.img`
    position: relative;
    background-color: none;
    border: none;
    height: 20vh;
`
