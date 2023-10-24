import React from 'react'
import { ReactDOM } from 'react-dom'
import Tabs from '../components/TabComp'
import DecorComp from '../components/DecorComp'
const BoardGame = () => {
    return (
        <div>
            Gomoku
            <Tabs />
            <DecorComp />
        </div>
    )
}

export default BoardGame
