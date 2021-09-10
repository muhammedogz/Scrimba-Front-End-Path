const grid = document.querySelector(".grid");

const width = 20;
const snakeSpeed = 250;

let squares = [];
let snake = [3,2,1];
let direction = 1;

function main() {
    createGrid();    
    renderSnakeEach();
    const timeId = setInterval(move, snakeSpeed);
    // clearInterval(timeId);
}

document.addEventListener("keydown", controlSnake);

main();


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
    console.log(snake);
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


