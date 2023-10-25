import React from 'react'
import { ReactDOM } from 'react-dom'
import Tabs from '../components/TabComp'
import DecorComp from '../components/DecorComp'
import styled from 'styled-components'
import NewGameButton from '../components/NewGameButton'
const BoardGame = () => {
    return (
        <div>
            <Body>
                <Tabs />
                  <NewGameButton />
                <DecorComp />
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
