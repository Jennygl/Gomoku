import React, { useState } from 'react'
import player1 from '../assets/player1.png'
import player2 from '../assets/player2.png'

const Board = ({ boardData, players }) => {
    const [currentPlayer, setCurrentPlayer] = useState('x')
    const [winningMessage, setWinningMessage] = useState(null)
    const [gameEnded, setGameEnded] = useState(false)
    const [isDraw, setIsDraw] = useState(false);

    const [cellContents, setCellContents] = useState(
        Array.from({ length: boardData.board.rows }, () =>
            Array.from({ length: boardData.board.cols }, () => null)
        )
    )

    const updateGameOnServer = (moveData) => {
        return fetch('http://localhost:3000/api/gomoku/move', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(moveData)
        })
            .then((response) => response.json())
            .catch((error) => {
                console.error('Error updating game on server', error)
            })
    }

    const handleCellClick = (row, col) => {
        if (gameEnded) {
            return
        }
        if (boardData.board.tiles[row][col] === 0) {
            // Update the local board state
            const updatedBoard = [...boardData.board.tiles]
            updatedBoard[row][col] = currentPlayer

            // Send the move to the backend to update the game state
            const moveData = {
                row,
                col,
                player: currentPlayer
            }

            // Call the updateGameOnServer function
            updateGameOnServer(moveData)
                .then((response) => {
                    // Handle the response from the server here
                    if (response.message) {
                        setGameEnded(true)
                        setWinningMessage(response.message)
                    }
                       // Check for a draw
                    if (response.draw) {
                        setIsDraw(true);
                    }
                    // You can update the frontend game state based on the response
                })
                .catch((error) => {
                    console.error('Error updating game on server', error)
                })

            // Update the cell content for the clicked cell
            const updatedCellContents = [...cellContents]
            updatedCellContents[row][col] = currentPlayer
            setCellContents(updatedCellContents)

            // Toggle the current player
            setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x')
        }
    }
    const imageStyle = {
        width: '20px', // Adjust the width as needed
        height: '20px' // Adjust the height as needed
    }

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
            {!winningMessage && !isDraw && (
                <p>
                    Current Player's Turn: {''}
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
                    {players.map((player, index) => (
                        <span key={index}>
                            {currentPlayer === 'x' ? (
                                <span>
                                    {''} {player.player1Name}
                                </span>
                            ) : (
                                <span>
                                    {''} {player.player2Name}
                                </span>
                            )}
                        </span>
                    ))}
                </p>
            )}
            {winningMessage && (
                <p>
                    {winningMessage.includes('x') && (
                        <>
                            <img
                                src={player1}
                                alt="Player 1"
                                className="goPieces"
                                style={imageStyle}
                            />
                            {players[0].player1Name}{' '}
                            wins!
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
                            wins!
                        </>
                    )}

                </p>

            )}
            {isDraw && (
                <p>
                    The game is a draw!
                </p>
            )}
        </div>
    )
}

export default Board
