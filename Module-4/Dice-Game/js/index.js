const gameInfo = document.getElementById("turn");

const score1 = document.getElementById("player-1-score");
const score2 = document.getElementById("player-2-score");

const dice1 = document.getElementById("player-1-dice");
const dice2 = document.getElementById("player-2-dice");

const playButton = document.getElementById("rol-dice");

let gameState = 0;
let player1Turn = true;

let player1Random = 0;
let player2Random = 0;

let player1Score = 1;
let player2Score = 1;

let round = 0;

playButton.addEventListener("click", startGame);

function startGame() {
    if (gameState == 0)
    {
        gameState = 1;
        gameInfo.innerText = "Player 1 Turn";
        playButton.innerText = "Roll Dice 🎲";
    }
    else if (gameState == 1)
    {
        gameInfo.innerText = "Player 1 Turn";
        playButton.innerText = "Roll Dice 🎲";
        
        rollDice();
    }
    else
    {
        gameInfo.innerText = "Player 1 Turn";
        playButton.innerText = "Roll Dice 🎲";
        gameState = 1;
    }
}

function rollDice() {
    if (player1Turn)
    {
        player1Random = randomDice();
        dice1.innerText = player1Random;
        player1Turn = false;
        gameInfo.innerText = "Player 2 Turn";
    }
    else
    {
        player2Random = randomDice();
        dice2.innerText = player2Random;
        player1Turn = true;
        renderScore();
    }
}

function renderScore() {
    if (player1Random > player2Random)
    {
        score1.innerText = "Score: " + player1Score++;
        gameInfo.innerText = "Player 1 Wins";
    }
    else if(player1Random < player2Random)
    {
        score2.innerText = "Score: "+ player2Score++;
        gameInfo.innerText = "Player 2 Wins";
    }
    else {
        gameInfo.innerText = "Draw";
    }
    playButton.innerText = "Play Again❓";
    gameState = -1;
}

// helper function 
// generate random number 1-6 
function randomDice() {
    return Math.floor( Math.random() * 6) + 1;
}