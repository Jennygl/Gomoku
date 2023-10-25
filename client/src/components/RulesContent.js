import React from 'react'

const RulesContent = () => {
    return (
        <div>
            <ul>
                <li>
                    Two players take turns to place their pieces on the
                    intersections of the grid lines
                </li>{' '}
                <li>
                    One player uses "green tree" pieces, and the other uses
                    "pink tree" pieces
                </li>{' '}
                <li>"Green tree" player usually goes first</li>
                <li>
                    The objective is to be the player to form a continuous
                    sequence of five of their pieces in a row, either
                    horizontally, vertically, or diagonally
                </li>
                <li>
                    {' '}
                    Once a piece is placed on the board, it cannot be moved or
                    removed
                </li>
                <li>
                    The game is won when one player successfully forms a line of
                    five of their pieces in a row
                </li>
                <li>
                    If the entire board is filled, and no player has achieved
                    five in a row, the game is declared a draw.
                </li>
            </ul>
        </div>
    )
}

export default RulesContent
