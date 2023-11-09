// import React, { useState } from 'react'
// import player1 from '../assets/player1.png'
// import player2 from '../assets/player2.png'

// const Board = ({ boardData }) => {
//     const [currentPlayer, setCurrentPlayer] = useState('x');
//     const [winningMessage, setWinningMessage] = useState(null);
//     const [gameEnded, setGameEnded] = useState(false);

//     const [cellContents, setCellContents] = useState(
//         Array.from({ length: boardData.board.rows }, () =>
//             Array.from({ length: boardData.board.cols }, () => null)
//         )
//     )

//     const updateGameOnServer = (moveData) => {
//         return fetch('http://localhost:3000/api/gomoku/move', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(moveData)
//         })
//             .then((response) => response.json())
//             .catch((error) => {
//                 console.error('Error updating game on server', error)
//             })
//     }

//     const handleCellClick = (row, col) => {
//       if(gameEnded) {
//         return;
//       }
//         if (boardData.board.tiles[row][col] === 0) {
//             // Update the local board state
//             const updatedBoard = [...boardData.board.tiles]
//             updatedBoard[row][col] = currentPlayer

//             // Send the move to the backend to update the game state
//             const moveData = {
//                 row,
//                 col,
//                 player: currentPlayer
//             }

//             // Call the updateGameOnServer function
//             updateGameOnServer(moveData)
//                 .then((response) => {
//                     // Handle the response from the server here
//                     if (response.message) {
//                       setGameEnded(true);
//                         setWinningMessage(response.message);
//                     }
//                     // You can update the frontend game state based on the response
//                 })
//                 .catch((error) => {
//                     console.error('Error updating game on server', error)
//                 })

//             // Update the cell content for the clicked cell
//             const updatedCellContents = [...cellContents]
//             updatedCellContents[row][col] = currentPlayer
//             setCellContents(updatedCellContents)

//             // Toggle the current player
//             setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x')
//         }
//     }
//     const imageStyle = {
//         width: '20px', // Adjust the width as needed
//         height: '20px' // Adjust the height as needed
//     }

//     return (
//         <div className="board">
//             {boardData.board.tiles.map((row, rowIndex) => (
//                 <div className="board-row" key={rowIndex}>
//                     {row.map((cell, colIndex) => (
//                         <div
//                             className={`board-cell ${
//                                 cell === 0 ? 'empty' : 'filled'
//                             }`}
//                             key={colIndex}
//                             onClick={() => handleCellClick(rowIndex, colIndex)}
//                         >
//                             {cellContents[rowIndex][colIndex] === 'x' && (
//                                 <img
//                                     src={player1}
//                                     alt="Player 1"
//                                     className="goPieces"
//                                 />
//                             )}
//                             {cellContents[rowIndex][colIndex] === 'o' && (
//                                 <img
//                                     src={player2}
//                                     alt="Player 2"
//                                     className="goPieces"
//                                 />
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             ))}

//             <p>
//                 Current Player's Turn:
//                 {currentPlayer === 'x' && (
//                     <img
//                         src={player1}
//                         alt="Player 1"
//                         className="goPieces"
//                         style={imageStyle}
//                     />
//                 )}
//                 {currentPlayer === 'o' && (
//                     <img
//                         src={player2}
//                         alt="Player 2"
//                         className="goPieces"
//                         style={imageStyle}
//                     />
//                 )}
//             </p>

//             {winningMessage && (
//                 <p>
//                     {winningMessage.includes('x') && (
//                         <>
//                             <img
//                                 src={player1}
//                                 alt="Player 1"
//                                 className="goPieces"
//                                 style={imageStyle}
//                             />
//                             {' Player 1 '}
//                         </>
//                     )}
//                     {winningMessage.includes('o') && (
//                         <>
//                             <img
//                                 src={player2}
//                                 alt="Player 2"
//                                 className="goPieces"
//                                 style={imageStyle}
//                             />
//                             {' Player 2 '}
//                         </>
//                     )}
//                     wins!
//                 </p>
//             )}
//         </div>
//     )
// }

// export default Board

import React, { useState } from 'react';
import player1 from '../assets/player1.png';
import player2 from '../assets/player2.png';
import styled from 'styled-components';
import { useLanguage } from './language/LanguageContext'
import se from '../components/language/languages/SE.json'
import en from '../components/language/languages/EN.json'


const BoardComp = ({ boardData }) => {

  const { language } = useLanguage()
const lang = language === 'se' ? se : en
    const [currentPlayer, setCurrentPlayer] = useState('x');
    const [winningMessage, setWinningMessage] = useState(null);
    const [gameEnded, setGameEnded] = useState(false);

    const [cellContents, setCellContents] = useState(
        Array.from({ length: boardData.board.rows }, () =>
            Array.from({ length: boardData.board.cols }, () => null)
        )
    );

    const updateGameOnServer = (moveData) => {
        return fetch('http://localhost:3000/api/gomoku/move', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(moveData),
        })
            .then((response) => response.json())
            .catch((error) => {
                console.error('Error updating game on server', error);
            });
    };

    const handleCellClick = (row, col) => {
        if (gameEnded) {
            return;
        }
        if (boardData.board.tiles[row][col] === 0) {
            // Update the local board state
            const updatedBoard = [...boardData.board.tiles];
            updatedBoard[row][col] = currentPlayer;

            // Send the move to the backend to update the game state
            const moveData = {
                row,
                col,
                player: currentPlayer,
            };

            // Call the updateGameOnServer function
            updateGameOnServer(moveData)
                .then((response) => {
                    // Handle the response from the server here
                    if (response.message) {
                        setGameEnded(true);
                        setWinningMessage(response.message);
                    }
                    // You can update the frontend game state based on the response
                })
                .catch((error) => {
                    console.error('Error updating game on server', error);
                });

            // Update the cell content for the clicked cell
            const updatedCellContents = [...cellContents];
            updatedCellContents[row][col] = currentPlayer;
            setCellContents(updatedCellContents);

            // Toggle the current player
            setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x');
        }
    };

    const clearBoard = () => {
        // Make a POST request to clear the game board on the server
        fetch('http://localhost:3000/api/gomoku/emptyBoard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // Clear the local board state
                setCellContents(
                    Array.from({ length: boardData.board.rows }, () =>
                        Array.from({ length: boardData.board.cols }, () => null)
                    )
                );

                // Reset game state
                setCurrentPlayer('x');
                setWinningMessage(null);
                setGameEnded(false);

                // You can handle the response data if needed
                console.log('Clear', data);
            })
            .catch((error) => {
                console.error('Error clearing the game board on the server', error);
            });
    };

    const imageStyle = {
        width: '20px', // Adjust the width as needed
        height: '20px', // Adjust the height as needed
    };

    return (
        <div className="board">
            {boardData.board.tiles.map((row, rowIndex) => (
                <div className="board-row" key={rowIndex}>
                    {row.map((cell, colIndex) => (
                        <div
                            className={`board-cell ${
                                cell === 0 ? 'empty' : 'filled'
                            }`}
                            key={colIndex}
                            onClick={() => handleCellClick(rowIndex, colIndex)}
                        >
                            {cellContents[rowIndex][colIndex] === 'x' && (
                                <img
                                    src={player1}
                                    alt="Player 1"
                                    className="goPieces"
                                />
                            )}
                            {cellContents[rowIndex][colIndex] === 'o' && (
                                <img
                                    src={player2}
                                    alt="Player 2"
                                    className="goPieces"
                                />
                            )}
                        </div>
                    ))}
                </div>
            ))}
<NEWGAME>
            <button className="new-game" onClick={clearBoard}>
            {lang.new_game_button}
            </button></NEWGAME>

            <p style={{ fontWeight: 'bold' }}>
                Current Player's Turn:
                {currentPlayer === 'x' && (
                    <img
                        src={player1}
                        alt="Player 1"
                        className="goPieces"
                        style={imageStyle}
                    />
                )}
                {currentPlayer === 'o' && (
                    <img
                        src={player2}
                        alt="Player 2"
                        className="goPieces"
                        style={imageStyle}
                    />
                )}
            </p>

            {winningMessage && (
                <p style={{ fontWeight: 'bold' }}>
                    {winningMessage.includes('x') && (
                        <>
                            <img
                                src={player1}
                                alt="Player 1"
                                className="goPieces"
                                style={imageStyle}
                            />
                            {players[0].player1Name}{' '}
                        </>
                    )}
                    {winningMessage.includes('o') && (
                        <>
                            <img
                                src={player2}
                                alt="Player 2"
                                className="goPieces"
                                style={imageStyle}
                            />
                            {players[0].player2Name}{' '}
                        </>
                    )}
                    wins!
                </p>
            )}
        </div>
    );
};

export default BoardComp;

const NEWGAME = styled.div`
    .new-game {
        background-color: rgba(103, 160, 69, 0.46);
        width: 30vw;
        height: 83px;
        border-radius: 8px;
        font-size: 24px;
        font-family: Inter;
        text-align: center;
        margin-top: 10px;
        border: none;
    }
    @media (max-width: 992px) {
        .new-game {
            font-size: 1.2rem;
            width: 80vw;
            margin-bottom: 30px;
            height: 7vh;
        }
    }
`
// Test pull request
