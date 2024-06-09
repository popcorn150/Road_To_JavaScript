const readline = require('readline');

// Constants
const WIDTH = 20;
const HEIGHT = 10;
const EMPTY = ' ';
const SNAKE = '#';
const FOOD = '*';

// Function to initialize the game board
function initBoard() {
    const board = [];
    for (let y = 0; y < HEIGHT; y++) {
        board[y] = [];
        for (let x = 0; x < WIDTH; x++) {
            board[y][x] = EMPTY;
        }
    }
    return board;
}

// Function to display the game board
function displayBoard(board) {
    for (let y = 0; y < HEIGHT; y++) {
        console.log(board[y].join(''));
    }
}

// Function to place the snake on the board
function placeSnake(board, snake) {
    for (const segment of snake) {
        const { x, y } = segment;
        board[y][x] = SNAKE;
    }
}

// Function to place the food on the board
function placeFood(board, food) {
    const { x, y } = food;
    board[y][x] = FOOD;
}

// Function to generate a random position on the board
function getRandomPosition() {
    return {
        x: Math.floor(Math.random() * WIDTH),
        y: Math.floor(Math.random() * HEIGHT)
    };
}

// Function to check if a position is valid
function isValidPosition(x, y) {
    return x >= 0 && x < WIDTH && y >= 0 && y < HEIGHT;
}

// Main function to run the game
function main() {
    console.log("Welcome to Snake!");

    const board = initBoard();
    const snake = [{ x: 10, y: 5 }];
    let food = getRandomPosition();

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function gameLoop() {
        // Clear the screen
        console.clear();

        // Display the board
        displayBoard(board);

        // Place the snake and food on the board
        placeSnake(board, snake);
        placeFood(board, food);

        // Wait for player input
        rl.question("Press 'w' to move up, 'a' to move left, 's' to move down, 'd' to move right, or 'q' to quit: ", function(key) {
            if (key === 'q') {
                rl.close();
                console.log("Thanks for playing!");
                return;
            }

            // Move the snake
            const head = snake[0];
            let dx = 0, dy = 0;
            if (key === 'w') {
                dy = -1;
            } else if (key === 's') {
                dy = 1;
            } else if (key === 'a') {
                dx = -1;
            } else if (key === 'd') {
                dx = 1;
            }
            const newHead = {
                x: head.x + dx,
                y: head.y + dy
            };

            // Check if the new head position is valid
            if (isValidPosition(newHead.x, newHead.y)) {
                // Check if the new head position contains food
                if (newHead.x === food.x && newHead.y === food.y) {
                    snake.unshift(newHead);
                    food = getRandomPosition();
                } else {
                    // Move the snake
                    snake.unshift(newHead);
                    snake.pop();
                }
            } else {
                // Snake hits the wall, game over
                console.log("Game over!");
                rl.close();
                return;
            }

            gameLoop(); // Continue the game loop
        });
    }

    gameLoop(); // Start the game loop
}

// Run the game
main();
