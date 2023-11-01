// import React, { useState } from 'react'
import React, { useState, useEffect } from 'react'
import { ReactDOM } from 'react-dom'
import Board from '../components/BoardComp'
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
    const [boardData, setBoardData] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/gomoku/board') // Use the correct server URL
            .then((response) => response.json())
            .then((data) => setBoardData(data))
            .catch((error) =>
                console.error('Error fetching board data:', error)
            )
    }, [])

    if (!boardData) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Body>
                <Header>
                    <GomokuTitleContainer>
                        <GomokuTitle />
                    </GomokuTitleContainer>
                    <LanguageSwitchContainer>
                        <LanguageSwitch />
                    </LanguageSwitchContainer>
                </Header>
                <div className="board-container">
                    {/* <Board boardData={boardData} /> */}
                    <Board boardData={boardData} />
                    <div className="right-container">
                        <div className="tab-newgame">
                            {boardData && <Tabs boardData={boardData} />}
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
    .tab-newgame {
        display: flex;
        flex-direction: column;
        @media (max-width: 992px) {
            flex-direction: column-reverse;
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
`

const GomokuTitleContainer = styled.div`
    @media (max-width: 992px) {
        margin-bottom: 10px;
    }

    @media (min-width: 993px) {
        margin-top: 10px;
        position: relative;
    }
`

const LanguageSwitchContainer = styled.div`
    margin-top: 10px;

    @media (max-width: 992px) {
        margin-top: 5px;
    }
`

const Green = styled.img`
    height: 33px;
`
const Pink = styled.img`
    height: 35px;
`
