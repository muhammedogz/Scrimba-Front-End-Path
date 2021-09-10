const grid = document.querySelector(".grid");

const startBtn = document.getElementById("start"); 

const width = 20;
const snakeSpeed = 250;

let squares = [];
let snake = [3,2,1];
let direction = 1;
let gameStatus = 0;

let timeId = 0;

document.addEventListener("keydown", controlSnake);

startBtn.addEventListener("click", start);

function main() {
    createGrid();    
    renderSnakeEach();
}

main();

function start() {
    if (gameStatus === 0) {
        timeId = setInterval(move, snakeSpeed);
        gameStatus = 1;
    }
    else {
        squares.forEach(function(num) {
            grid.removeChild(num);
        });
        squares = [];
        snake = [3,2,1];
        clearInterval(timeId);
        gameStatus = 0;
        main();
    }
}

function createGrid() {

    for (let i = 0; i < width*width; i++)
    {
        const newDiv = document.createElement("div");
        newDiv.classList.add("square");
        squares.push(newDiv);
        grid.appendChild(newDiv);
        
    }

}

function renderSnakeEach() {
    snake.forEach(renderSnake);
}

function renderSnake(item) {
    squares[item].classList.add("snake");
}

function move() {
    const tail = snake.pop();
    squares[tail].classList.remove("snake");
    snake.unshift(snake[0] + direction);
    renderSnakeEach();
}

function controlSnake(event) {
    if (event.key === "ArrowUp") {
        console.log("up");
        direction = -width;
    }
    else if (event.key === "ArrowDown") {
        console.log("down");
        direction = width;
    }
    else if (event.key === "ArrowLeft") {
        console.log("left");
        direction = -1;
    }
    else if (event.key === "ArrowRight") {
        console.log("right");
        direction = 1;
    }
}


