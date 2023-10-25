import React, { useState } from 'react'
import { ReactDOM } from 'react-dom'
import BasicExample from '../components/TabComp'
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
                return xPlaying === true ? "X" : "O";
            } else {
                return value;
            }
        })
        setBoard(updatedBoard);

        setXPlaying(!xPlaying);
    }
    return (
        <div>

            Gomoku
            <BasicExample />
            

            <Body>
            <BoardComp board={board} onClick={handleBoxClick} />
            <GomokuTitle />
            <Tabs />
            <NewGameButton />
            <DecorComp />
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
