import React from 'react'
import { ReactDOM } from 'react-dom'
import Tabs from '../components/TabComp'
import DecorComp from '../components/DecorComp'
import RulesContent from '../components/RulesContent'
const BoardGame = () => {
    return (
        <div>
            Gomoku
            <Tabs />
            <RulesContent/>
            <DecorComp />
        </div>
    )
}

export default BoardGame
