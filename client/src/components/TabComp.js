import styled from 'styled-components'
import RulesContent from './RulesContent'
import AboutGomoku from './AboutGomoku'
import DecorComp from './DecorComp'
import { SettingsContent } from './SettingsContent'
import { useLanguage } from './language/LanguageContext'
import se from '../components/language/languages/SE.json'
import en from '../components/language/languages/EN.json'
import Players from './PlayersComp'
import player1 from '../assets/player1.png'
import player2 from '../assets/player2.png'

const Tabs = ({ boardData, players }) => {
    const { language } = useLanguage()
    const lang = language === 'se' ? se : en

    const imageStyle = {
        width: '20px', // Adjust the width as needed
        height: '20px' // Adjust the height as needed
    }
    return (
        <>
            <div className="d-flex flex-column">
                <TabSection>
                    <nav>
                        <ul
                            className="nav nav-tabs nav-justified d-flex flex-column flex-md-row"
                            id="nav-tab"
                            role="tablist"
                        >
                            <Li
                                className="nav-item active"
                                id="nav-timer-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-timer"
                                type="button"
                                role="tab"
                                aria-controls="nav-timer"
                                aria-selected="true"
                            >
                                <Link className="nav-link" href="#">
                                    {lang.game_heading}
                                </Link>
                            </Li>
                            <Li
                                className="nav-item"
                                id="nav-rules-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-rules"
                                type="button"
                                role="tab"
                                aria-controls="nav-rules"
                                aria-selected="false"
                            >
                                <Link className="nav-link" href="#">
                                    {lang.rules_heading}
                                </Link>
                            </Li>
                            <Li
                                className="nav-item"
                                id="nav-gomoku-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-gomoku"
                                type="button"
                                role="tab"
                                aria-controls="nav-gomoku"
                                aria-selected="false"
                            >
                                <Link className="nav-link" href="#">
                                    Gomoku
                                </Link>
                            </Li>
                        </ul>
                    </nav>
                </TabSection>
                <TabContentSection>
                    <div className="tab-content" id="nav-tabContent">
                        <div
                            className="tab-pane fade show active"
                            id="nav-timer"
                            role="tabpanel"
                            aria-labelledby="nav-timer-tab"
                            tabIndex="0"
                        >
                            <div className="gameInfo">
                                <h3>{lang.about_game_heading}</h3>
                                {players.map((player, index) => (
                                    <div key={index}>
                                        <p>
                                            {lang.player1}: {player.player1Name}
                                            <span>
                                                {' '}
                                                <img
                                                    src={player1}
                                                    alt="Player 1"
                                                    className="goPieces"
                                                    style={imageStyle}
                                                />
                                            </span>
                                        </p>
                                        <p>
                                            {lang.player2}: {player.player2Name}
                                            <span>
                                                {' '}
                                                <img
                                                    src={player2}
                                                    alt="Player 2"
                                                    className="goPieces"
                                                    style={imageStyle}
                                                />
                                            </span>
                                        </p>
                                    </div>
                                ))}
                                <p>
                                    {lang.row}: {boardData.board.cols}
                                </p>
                                <p>
                                    {lang.column}: {boardData.board.rows}
                                </p>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="nav-rules"
                            role="tabpanel"
                            aria-labelledby="nav-rules-tab"
                            tabIndex="0"
                        >
                            <RulesContent />
                        </div>
                        <div
                            className="tab-pane fade"
                            id="nav-gomoku"
                            role="tabpanel"
                            aria-labelledby="nav-gomoku-tab"
                            tabIndex="0"
                        >
                            <AboutGomoku />
                        </div>
                    </div>
                </TabContentSection>
            </div>
        </>
    )
}

export default Tabs

const Li = styled.li`
    /* width: 25%; */
    background-color: rgba(103, 160, 69, 0.46);
    border: 1px solid white;
    border-bottom: 0;
    border-radius: 5px 5px 0 0;
    display: flex;
    &.active {
        background-color: #b7b1a8;
    }
`
const Link = styled.a`
    color: black;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    white-space: nowrap;
    &:hover {
        color: black;
    }
    &:focus {
        color: black;
    }
`
const TabSection = styled.div`
    width: 30vw;
    @media (max-width: 992px) {
        width: 80vw;
        align-self: center;
    }
`
const TabContentSection = styled.div`
    width: 30vw;
    height: 50vh;
    background-color: #b7b1a8;
    font-family: 'Inter', sans-serif;
    border: none;
    display: flex;
    overflow: auto;
    word-break: break-word;
    @media (max-width: 992px) {
        width: 80vw;
        align-self: center;
    }
    .gameInfo {
        margin: 1em;
    }
`
