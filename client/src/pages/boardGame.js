import React from 'react'
import { ReactDOM } from 'react-dom'
import Tabs from '../components/TabComp'
import DecorComp from '../components/DecorComp'
import NewGameButton from '../components/NewGameButton'
import GomokuTitle from '../components/GomokuTitle'

const BoardGame = () => {
    return (
        <div>
            <GomokuTitle />
            <Tabs />
            <NewGameButton />
            <DecorComp />
        </div>
    )
}

export default BoardGame
