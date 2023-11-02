const express = require('express')
const { v4: uuidv4 } = require('uuid')
const app = express()
app.use(express.json())
app.use('/api/gomoku', require('./routes/gomoku_routes.js'))
const PORT = process.env.PORT || 3000
const cors = require('cors')

app.use(express.json())
app.use(cors())

let gameData = require('./routes/game.json')
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

app.get('/api/gomoku/board', (req, res) => {
    res.json(gameData)
})

app.post('/api/gomoku/move', (req, res) => {
    // Handle the game move logic here
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
