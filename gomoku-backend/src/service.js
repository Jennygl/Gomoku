const express = require('express')
const app = express()
app.use(express.json())
app.use('/api/gomoku', require('./routes/gomoku_routes.js'))
const PORT = process.env.PORT || 3000
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/api/gomoku/board', (req, res) => {
    const gameData = require('./routes/game.json') // Load your game data from a JSON file
    res.json(gameData)
})

app.post('/api/gomoku/move', (req, res) => {
    // Handle the game move logic here
})

app.listen(PORT, () => {
    console.log(`http server listening on port ${PORT}`)
})
