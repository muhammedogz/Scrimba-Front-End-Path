const grid = document.querySelector(".grid");

const startBtn = document.getElementById("start"); 
const score = document.getElementById("score");
let scoreHolder = 0;

const width = 20;
const snakeSpeed = 100;

let squares = [];
let snake = [3,2,1];
let direction = 1;
let gameStatus = 0;
let food = Math.floor(Math.random() * width*width);

let timeId = 0;

document.addEventListener("keydown", controlSnake);

startBtn.addEventListener("click", start);

function main() {
    createGrid();    
    renderSnakeEach();
    generateFood();
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
        direction = 1;
        
        scoreHolder = 0;
        score.innerHTML = scoreHolder;

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

    if(checkFoodEat())
    {
        score.textContent = ++scoreHolder;
    } 
}

function controlSnake(event) {
    if (event.key === "ArrowUp" || event.key === "w") {
        console.log("up");
        direction = -width;
    }
    else if (event.key === "ArrowDown" || event.key === "s") {
        console.log("down");
        direction = width;
    }
    else if (event.key === "ArrowLeft" || event.key === "a") {
        console.log("left");
        direction = -1;
    }
    else if (event.key === "ArrowRight" || event.key === "d") {
        console.log("right");
        direction = 1;
    }
    console.log(event.key);
}

function generateFood() {
    while (snake.includes(food))
    {
        food = Math.floor(Math.random() * width*width);
    }
    console.log(food);
    squares[food].classList.add("food");
}

function checkFoodEat() {
    if (snake[0] === food)
    {
        squares[food].classList.remove("food");
        generateFood();
        return true;
    }
    return false;
}


