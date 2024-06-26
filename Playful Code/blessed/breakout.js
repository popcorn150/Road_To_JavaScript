const blessed = require('blessed');

// Create a screen object.
const screen = blessed.screen({
  smartCSR: true
});

screen.title = 'Brick Breaker';

// Create a box for the paddle.
const paddle = blessed.box({
  bottom: 0,
  left: 'center',
  width: 10,
  height: 1,
  content: '==========',
  style: {
    bg: 'blue'
  }
});

// Create a box for the ball.
const ball = blessed.box({
  top: 5,
  left: 'center',
  width: 1,
  height: 1,
  content: 'O',
  style: {
    bg: 'yellow'
  }
});

// Create bricks
const bricks = [];
for (let y = 2; y < 8; y += 2) {
  for (let x = 0; x < screen.width - 4; x += 6) {
    const brick = blessed.box({
      top: y,
      left: x,
      width: 5,
      height: 1,
      content: '#####',
      style: {
        bg: 'red'
      }
    });
    bricks.push(brick);
    screen.append(brick);
  }
}

screen.append(paddle);
screen.append(ball);

let ballDirection = { x: 1, y: 1 };

// Handle input for paddle movement
screen.key(['left', 'right'], function (ch, key) {
  const pos = paddle.left;
  if (key.name === 'left' && pos > 0) {
    paddle.left = pos - 1;
  } else if (key.name === 'right' && pos < screen.width - paddle.width) {
    paddle.left = pos + 1;
  }
  screen.render();
});

// Ball movement logic
function moveBall() {
  const nextLeft = ball.left + ballDirection.x;
  const nextTop = ball.top + ballDirection.y;

  // Check for collision with walls
  if (nextLeft <= 0 || nextLeft >= screen.width - ball.width) {
    ballDirection.x *= -1;
  }
  if (nextTop <= 0) {
    ballDirection.y *= -1;
  }

  // Check for collision with paddle
  if (nextTop >= screen.height - paddle.height - 2 &&
    nextLeft >= paddle.left && nextLeft <= paddle.left + paddle.width) {
    ballDirection.y *= -1;
  }

  // Check for collision with bricks
  bricks.forEach((brick, index) => {
    if (nextTop === brick.top &&
      nextLeft >= brick.left && nextLeft <= brick.left + brick.width) {
      screen.remove(brick);
      bricks.splice(index, 1);
      ballDirection.y *= -1;
    }
  });

  // Check for game over
  if (nextTop >= screen.height - ball.height) {
    screen.clear();
    screen.destroy();
    console.log('Game Over');
    process.exit(0);
  }

  ball.left += ballDirection.x;
  ball.top += ballDirection.y;

  screen.render();
}

// Set up game loop
const gameLoop = setInterval(moveBall, 100);

screen.key(['escape', 'q', 'C-c'], function (ch, key) {
  clearInterval(gameLoop);
  return process.exit(0);
});

screen.render();