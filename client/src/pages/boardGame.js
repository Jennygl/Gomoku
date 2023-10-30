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
import Ximage from '../assets/player1.png'
import Oimage from '../assets/player2.png'

import LanguageSwitch from '../components/language/LanguageSwitch'
const BoardGame = () => {
    const [board, setBoard] = useState(Array(400).fill(null))
    const [xPlaying, setXPlaying] = useState(true)
    const handleBoxClick = (boxIdx) => {
        const updatedBoard = board.map((value, idx) => {
            if (idx === boxIdx) {
                return xPlaying === true ? (
                    <Green src={Ximage} alt="X" />
                ) : (
                    <Pink src={Oimage} alt="O" />
                )
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
                {/* <div className="board-title-container">
                    <GomokuTitle />
                </div>
                <LanguageSwitch/> */}
                <Header>
                    <GomokuTitleContainer>
                        <GomokuTitle />
                    </GomokuTitleContainer>
                    <LanguageSwitchContainer>
                        <LanguageSwitch />
                    </LanguageSwitchContainer>
                </Header>
                <div className="board-container">
                    {' '}
                    <BoardComp board={board} onClick={handleBoxClick} />
                    <div className="right-container">
                        <div className="tab-newgame">
                            <Tabs />
                            <NewGameButton />
                        </div>
                        <DecorComp />
                    </div>
                </div>
            </Body>
        </div>
    )
}

export default BoardGame

const Body = styled.div`
    background-color: #f2ebeb;
    height: 100vh;
    overflow-x: hidden;
    .board-container {
        display: flex;
        justify-content: space-evenly;
    }
    .board-title-container {
        position: relative;
        left: 12vw;
        padding-bottom: 10px;
        margin-top: 10px;
        @media (max-width: 1200px) {
            left: 9vw;
        }
        @media (max-width: 1000px) {
            left: 8vw;
        }
        @media (max-width: 992px) {
            left: 21vw;
        }
        @media (max-width: 830px) and (min-width: 700px) {
            left: 13vw;
        }
        @media (max-width: 700px) {
            left: 11vw;
        }
    }
    @media (max-width: 992px) {
        .board-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px 20px;
    margin: 3px 0px 50px 20px;

    @media (max-width: 992px) {
        flex-direction: column;
        text-align: center;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }
`;

const GomokuTitleContainer = styled.div`
    @media (max-width: 992px) {
        margin-bottom: 10px;
    }

    @media (min-width: 993px) {
        margin-top: 10px;
        position: relative;
    }
`;

const LanguageSwitchContainer = styled.div`
margin-top: 10px;

    @media (max-width: 992px) {
        margin-top: 5px;
    }
`;
