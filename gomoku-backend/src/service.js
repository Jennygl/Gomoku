const express = require('express')
const { v4: uuidv4 } = require('uuid')
const app = express()
app.use(express.json())
app.use('/api/gomoku', require('./routes/gomoku_routes.js'))
const PORT = process.env.PORT || 3000
const cors = require('cors')
app.use(express.json())
app.use(cors())

const playerNames = [
    'SquigglyPuff',
    'BananaNinja',
    'CaptainChaos',
    'SirWobbleLot',
    'ProfessorNoodle',
    'DizzyDolphin',
    'WhackyWhale',
    'DiscoDuck',
    'MangoMunchkin',
    'CrazyCatfish',
    'SneakySausage',
    'BubblyBanjo',
    'MrJellyBean',
    'DaringDoodlebug',
    'WackyWombat',
    'LivelyLlama',
    'GoofyGiraffe',
    'LoopyLion',
    'SillySloth',
    'ZigzagZebra',
    'BongoBadger',
    'FunkyFerret',
    'NuttyNarwhal',
    'KookyKangaroo',
    'PogoPanda'
]

const gameData = require('./routes/game.json')

function resetGame() {
    // Initialize the game state with the original data
    gameData = require('./routes/game.json')
}

function checkForWin(player, row, col) {
    const board = gameData.board.tiles
    const numRows = board.length
    const numCols = board[0].length

    // Check horizontal
    let consecutiveCount = 0
    for (let i = 0; i < numCols; i++) {
        if (board[row][i] === player) {
            consecutiveCount++
            if (consecutiveCount === 5) {
                return true // Player has won horizontally
            }
        } else {
            consecutiveCount = 0
        }
    }

    // Check vertical
    consecutiveCount = 0
    for (let i = 0; i < numRows; i++) {
        if (board[i][col] === player) {
            consecutiveCount++
            if (consecutiveCount === 5) {
                return true // Player has won vertically
            }
        } else {
            consecutiveCount = 0
        }
    }

    // Check diagonal (top-left to bottom-right)
    consecutiveCount = 0
    for (let i = -4; i <= 4; i++) {
        const rowIdx = row + i
        const colIdx = col + i
        if (
            rowIdx >= 0 &&
            rowIdx < numRows &&
            colIdx >= 0 &&
            colIdx < numCols
        ) {
            if (board[rowIdx][colIdx] === player) {
                consecutiveCount++
                if (consecutiveCount === 5) {
                    return true // Player has won diagonally
                }
            } else {
                consecutiveCount = 0
            }
        }
    }

    // Check diagonal (top-right to bottom-left)
    consecutiveCount = 0
    for (let i = -4; i <= 4; i++) {
        const rowIdx = row + i
        const colIdx = col - i
        if (
            rowIdx >= 0 &&
            rowIdx < numRows &&
            colIdx >= 0 &&
            colIdx < numCols
        ) {
            if (board[rowIdx][colIdx] === player) {
                consecutiveCount++
                if (consecutiveCount === 5) {
                    return true // Player has won diagonally
                }
            } else {
                consecutiveCount = 0
            }
        }
    }

    return false // No win
}

app.get('/api/gomoku/board', (req, res) => {
    res.json(gameData)
})

app.post('/api/gomoku/move', (req, res) => {
    // Handle the game move logic here
    const { row, col, player } = req.body

    // Check if the cell is empty
    if (gameData.board.tiles[row][col] === 0) {
        // Update the game board with the player's move
        gameData.board.tiles[row][col] = player
        gameData.round += 1;

        // Check for a win
        if (checkForWin(player, row, col)) {
            gameData.round = 0;
            res.json({ message: `Player ${player} wins!` })
            console.log(`Player ${player} wins!`)
        } else {
            // Check for a draw based on the number of game rounds
            console.log(gameData.round)
            if (gameData.round >= gameData.board.cols * gameData.board.rows) {
                gameData.round = 0;
                res.json({ draw: true, message: 'The game is a draw.' })
                console.log('The game is a draw.')
                
            } else {
            // Return the updated game state
            res.json(gameData)
            }
        }
    } else {
        // Handle invalid move (cell is not empty)
        res.status(400).json({ error: 'Invalid move' })
    }
})

app.post('/api/gomoku/emptyBoard', (req, res) => {
    const gameId = uuidv4() //generate unique IDs
    const newGame = {
        id: gameId,
        name: 'empty game',
        round: 0, //289
        player: 1,
        player1: {
            id: '',
            name: 'name1'
        },
        player2: {
            id: '',
            name: 'name2'
        },
        state: 'playing',

        newGameBoard: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    }
    gameData.board.tiles = newGame.newGameBoard

    res.json(newGame)
})
// Create a new player and assign a UUID
app.post('/api/gomoku/createPlayer', (req, res) => {
    const player1UUID = uuidv4()
    const player2UUID = uuidv4()
    const player1Name = getRandomName()
    const player2Name = getRandomName()

    // Store the playerUUID in your database or data structure
    gameData.player1.id = player1UUID
    gameData.player1.name = player1Name
    gameData.player2.id = player2UUID
    gameData.player2.name = player2Name

    // Respond with the generated UUID
    res.json({ player1UUID, player1Name, player2UUID, player2Name })
})
function getRandomName() {
    const randomIndex = Math.floor(Math.random() * playerNames.length)
    return playerNames[randomIndex]
}

app.listen(PORT, () => {
    console.log(`http server listening on port ${PORT}`)
})
