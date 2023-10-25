import React from 'react'
import { ReactDOM } from 'react-dom'
import Tabs from '../components/TabComp'
import DecorComp from '../components/DecorComp'
import NewGameButton from '../components/NewGameButton'
const BoardGame = () => {
    return (
        <div>
            Gomoku
            <Tabs />
            <NewGameButton/>
            <DecorComp />
        </div>
    )
}

export default BoardGame
