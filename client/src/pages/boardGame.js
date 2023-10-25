import React, { useState } from 'react'
import { ReactDOM } from 'react-dom'
import BasicExample from '../components/TabComp'
import BoardComp from '../components/BoardComp'
import '../App.css'
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
            <BoardComp board={board} onClick={handleBoxClick} />
        </div>
    )
}


export default BoardGame
