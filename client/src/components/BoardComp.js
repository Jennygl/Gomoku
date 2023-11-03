import React, { useState } from 'react'

const Board = ({ boardData }) => {
    const [currentPlayer, setCurrentPlayer] = useState('x')
    const [winningMessage, setWinningMessage] = useState(null)

    // Define the updateGameOnServer function at the top level of the component
    const updateGameOnServer = (moveData) => {
        // Make a POST request to your Express server
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
                        setWinningMessage(response.message)
                    }
                    // You can update the frontend game state based on the response
                })
                .catch((error) => {
                    console.error('Error updating game on server', error)
                })

            // Toggle the current player
            setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x')
        }
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
                            {cell === 0 ? null : cell}
                        </div>
                    ))}
                </div>
            ))}

            <p>Current Player's Turn: {currentPlayer}</p>
            {winningMessage && <p>{winningMessage}</p>}
        </div>
    )
}

export default Board
