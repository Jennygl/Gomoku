const express = require('express');
const router = express.Router();



const gameData = require('./game.json');  // adjust the path if the file is in a different directory
const { v4: uuidv4 } = require('uuid');

const games = {};

router.get('/create_game', (req, res) => {
    res.json(gameData);
});

router.get('/add_player', (req, res) => {
    res.json(gameData);
});

router.get('/play', (req, res) => {
    res.json(gameData);

});


//test för olika routes. vet inte om rätt :)

// let board = new Array(16);

// for (let i = 0; i < 16; i++) {
//   board[i] = new Array(16).fill(0);//null?
// }

// router.post('/new_game', (req, res) => {
//   // Reset the game board
//   for (let i = 0; i < 15; i++) {
//     board[i] = new Array(16).fill(0);
//   }
//   //res.json({ message: 'New game started.' });
//   res.json(board);
// });

// router.post('/make_move', (req, res) => {
//   const { row, col, player } = req.body;

//   if (board[row][col] === null) {//board && board[row] &&
//     board[row][col] = player;
//     res.json({ message: 'Move made successfully.', board: board });
//   } else {
//     res.status(400).json({ message: 'Invalid move.' });
//   }
// });

function initializeBoard() {
  const board = new Array(16);

  for (let i = 0; i < 16; i++) {
    board[i] = new Array(16).fill(0);
  }

  return board;
}

// Create a new game
router.post('/create-game', (req, res) => {
  // Create a new game instance and store it in the 'games' data structure
  const gameId = uuidv4(); //generate unique IDs
  const newGame = {
    id: gameId,
    name: "empty game",
    round: 0,//256
    player: 1,
    player1: {
      id: "",
      name: "name1",
    },
    player2: {
      id: "",
      name: "name2",
    },
    state: 'playing',
    board: {
      minInRow: 5,
      cols: 16,
      rows: 16,
      tiles: initializeBoard(),
    },
  };
  games[gameId] = newGame;
  res.json(newGame);
});

///////////////////////////////////////////////////////////////////////////////////
// function checkForWin(board, row, col, player) {
//   // Check for a win horizontally
//   let count = 1;
//   for (let i = 1; i < board.minInRow; i++) {
//     if (col + i < board.cols && board.tiles[row][col + i] === player) {
//       count++;
//     } else {
//       break;
//     }
//   }
//   if (count >= board.minInRow) {
//     return true;
//   }

//   // Check for a win vertically
//   count = 1;
//   for (let i = 1; i < board.minInRow; i++) {
//     if (row + i < board.rows && board.tiles[row + i][col] === player) {
//       count++;
//     } else {
//       break;
//     }
//   }
//   if (count >= board.minInRow) {
//     return true;
//   }

//   // Check for a win diagonally (bottom-left to top-right)
//   count = 1;
//   for (let i = 1; i < board.minInRow; i++) {
//     if (
//       col + i < board.cols &&
//       row - i >= 0 &&
//       board.tiles[row - i][col + i] === player
//     ) {
//       count++;
//     } else {
//       break;
//     }
//   }
//   if (count >= board.minInRow) {
//     return true;
//   }

//   // Check for a win diagonally (top-left to bottom-right)
//   count = 1;
//   for (let i = 1; i < board.minInRow; i++) {
//     if (
//       col + i < board.cols &&
//       row + i < board.rows &&
//       board.tiles[row + i][col + i] === player
//     ) {
//       count++;
//     } else {
//       break;
//     }
//   }
//   if (count >= board.minInRow) {
//     return true;
//   }

//   return false;
// }
router.post('/make-move', (req, res) => {
  const gameId = req.body.gameId; // Identify the game by its ID
  const row = req.body.row; // Get the row from the request body
  const col = req.body.col; // Get the column from the request body

  function isValidMove(game, row, col) {
    const board = game.board;

    // Check if the move is within the bounds of the game board
    if (row < 0 || row >= board.rows || col < 0 || col >= board.cols) {
      return false;
    }

    // Check if the selected tile is empty (not already occupied by a player)
    if (board.tiles[row][col] !== 0) {
      return false;
    }

    // Check if it's the player's turn (player 1's turn is represented by '1', and player 2's turn is represented by '2')
    if (game.player === 1) {
      return true;
    } else if (game.player === 2) {
      return true;
    }

    // If none of the conditions are met, the move is not valid
    return false;
  }



  // Check if the provided game ID is valid and exists in your game data structure (e.g., 'games')
  if (games[gameId]) {
    const game = games[gameId];

    // Check if the move is valid (within bounds, empty tile, player's turn, etc.)
    if (isValidMove(game, row, col)) {
      // Update the game board with the player's move
      game.board.tiles[row][col] = game.player; // Assuming '1' for player 1 and '2' for player 2
      game.round += 1;
// console.log(game.player);


      function checkForWin(board, row, col, player) {
        console.log('checkForWin called');
        const directions = [
          [1, 0],   // Horizontal
          [0, 1],   // Vertical
          [1, 1],   // Diagonal (bottom-left to top-right)
          [1, -1]   // Diagonal (top-left to bottom-right)
        ];
        let count = 0;
        for (const [dr, dc] of directions) {
          let dirCount = 1;
          dirCount += countInDirection(board, row, col, dr, dc, player, 1); // Count in one direction
          dirCount += countInDirection(board, row, col, -dr, -dc, player, 1); // Count in the opposite direction
          //console.log(count)
          console.log(`Direction: [${dr}, ${dc}], Count: ${count}`);
          if (dirCount >= game.board.minInRow) {
            return true;  // Player has won
          }
          count += dirCount;
        }
        //return count >= game.board.minInRow;
        return false;  // Player has not won
      }
      function countInDirection(board, row, col, dr, dc, player, length) {
        const newRow = row + dr;
        const newCol = col + dc;

        if (
          newRow >= 0 &&
          newRow < board.rows &&
          newCol >= 0 &&
          newCol < board.cols &&
          board.tiles && // Check if board.tiles is defined
          board.tiles[newRow] &&// Check if board.tiles[newRow] is defined
          board.tiles[newRow][newCol] === player
        ) {
          console.log(`Checking in direction (${dr}, ${dc}), row: ${newRow}, col: ${newCol}, Value: ${board.tiles[newRow][newCol]}`);


          if (board.tiles[newRow][newCol] === player) {
            console.log(`Incrementing count in direction (${dr}, ${dc})`);
            return countInDirection(board, newRow, newCol, dr, dc, player, length + 1);
          }
        }

        return length;
      }
      // function countInDirection(board, row, col, dr, dc, player, length) {
      //   const newRow = row + dr;
      //   const newCol = col + dc;

      //   if (
      //     newRow >= 0 &&
      //     newRow < board.rows &&
      //     newCol >= 0 &&
      //     newCol < board.cols &&
      //     board.tiles && // Check if board.tiles is defined
      //     board.tiles[newRow] && // Check if board.tiles[newRow] is defined
      //     board.tiles[newRow][newCol] === player
      //   ) {
      //     return countInDirection(board, newRow, newCol, dr, dc, player, length + 1);
      //   }

      //   return length;
      // }
      // Check for win conditions
      console.log('Checking for win at row:', row, 'col:', col);
      //console.log('board:', game.board);
      if (checkForWin(game.board, row, col, game.player)) {//fixa denna

        game.state = 'won';
        res.json({ message: `Player ${game.player} wins!` });
      } else if (game.round >= game.board.cols * game.board.rows) {
        // console.log(game.round)
        // console.log(game.board.cols)
        // console.log(game.board.rows)
        game.state = 'tie';
        res.json({ message: 'It\'s a tie!' });
      } else {
        // Switch to the other player's turn
        game.player = 3 - game.player; // Toggle between player 1 (1) and player 2 (2)
        //console.log(game.board.minInRow)
        res.json({ message: 'Move successful', game: game });
      }
    } else {
      res.status(400).json({ error: 'Invalid move.', game: game  });
    }
  } else {
    res.status(404).json({ error: 'Game not found.' });
  }
});
////////////////////////


module.exports = router;
