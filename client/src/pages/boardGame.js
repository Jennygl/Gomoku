import React from 'react'
import { ReactDOM } from 'react-dom'
import Tabs from '../components/TabComp'
import DecorComp from '../components/DecorComp'
import NewGameButton from '../components/NewGameButton'
const BoardGame = () => {
    return (
        <div>
            <Body>
            <GomokuTitle />
            <Tabs />
            <NewGameButton />
            <DecorComp />
            </Body>
        </div>
    )
}

export default BoardGame
