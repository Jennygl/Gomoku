import React from 'react'
import { ReactDOM } from 'react-dom'
import Tabs from '../components/TabComp'
import DecorComp from '../components/DecorComp'
import PlayerOne from '../components/PlayerOne'
import PlayerTwo from '../components/PlayerTwo'
import styled from 'styled-components'
const BoardGame = () => {
    return (
        <div>
            <Body>
                <Tabs />
                <DecorComp />
                <PlayerOne />
                <PlayerTwo />
            </Body>
        </div>
    )
}

export default BoardGame

const Body = styled.div`
    background-color: #f2ebeb;
    height: 100vh;
    overflow-y: hidden;
`
