import React, { useState } from 'react'
import { ReactDOM } from 'react-dom'
import BoardComp from '../components/BoardComp'
import '../App.css'
import Tabs from '../components/TabComp'
import DecorComp from '../components/DecorComp'
import styled from 'styled-components'
import NewGameButton from '../components/NewGameButton'
import GomokuTitle from '../components/GomokuTitle'
const BoardGame = () => {
    const [board, setBoard] = useState(Array(400).fill(null))
    const [xPlaying, setXPlaying] = useState(true)
    const handleBoxClick = (boxIdx) => {
        const updatedBoard = board.map((value, idx) => {
            if (idx === boxIdx) {
                return xPlaying === true ? 'X' : 'O'
            } else {
                return value
            }
        })
        setBoard(updatedBoard)

        setXPlaying(!xPlaying)
    }
    return (
        <div>
            <Body>
                <GomokuTitle />
                <BoardComp board={board} onClick={handleBoxClick} />
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
