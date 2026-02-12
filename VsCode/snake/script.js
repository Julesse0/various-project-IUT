document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('snakeCanvas');
    const ctx = canvas.getContext('2d');

    const boxSize = 20;
    let snake = [{ x: 10, y: 10 }];
    let food = { x: 15, y: 15 };
    let direction = 'right';
    let gameRunning = false;
    let snakeSpeed = 100; //

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#4CAF50';
        snake.forEach(segment => {
            ctx.fillRect(segment.x * boxSize, segment.y * boxSize, boxSize, boxSize);
        });

        ctx.fillStyle = '#FF0000';
        ctx.fillRect(food.x * boxSize, food.y * boxSize, boxSize, boxSize);
    }

    function move() {
        const head = { ...snake[0] };

        if (direction === 'up') head.y--;
        if (direction === 'down') head.y++;
        if (direction === 'left') head.x--;
        if (direction === 'right') head.x++;

        snake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            food.x = Math.floor(Math.random() * canvas.width / boxSize);
            food.y = Math.floor(Math.random() * canvas.height / boxSize);
        } else {
            snake.pop();
        }
    }

    function checkCollision() {
        const head = snake[0];

        if (head.x < 0 || head.y < 0 || head.x >= canvas.width / boxSize || head.y >= canvas.height / boxSize) {
            alert('Perdu !');
            resetGame();
        }

        for (let i = 1; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                alert('Perdu !');
                resetGame();
            }
        }
    }

    function resetGame() {
        snake = [{ x: 10, y: 10 }];
        direction = 'right';
        gameRunning = false;
        snakeSpeed = 100; 
        startButton.style.display = 'block';
    }

    function gameLoop() {
        if (gameRunning) {
            move();
            checkCollision();
            draw();
        }
    }

    const startButton = document.getElementById('startButton');
    startButton.addEventListener('click', () => {
        if (!gameRunning) {
            gameRunning = true;
            setInterval(gameLoop, snakeSpeed);
            startButton.style.display = 'none';
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'ArrowUp' && direction !== 'down') direction = 'up';
        if (event.key === 'ArrowDown' && direction !== 'up') direction = 'down';
        if (event.key === 'ArrowLeft' && direction !== 'right') direction = 'left';
        if (event.key === 'ArrowRight' && direction !== 'left') direction = 'right';
    });
});
