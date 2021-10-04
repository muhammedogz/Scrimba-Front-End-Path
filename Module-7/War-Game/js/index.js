const bodyEl = document.querySelector("body");
const mainEl = document.querySelector("main");

const newGameBtn = document.getElementById("new-game");
const drawBtn = document.getElementById("draw-card");

const cardPlayer = document.getElementById("cardPlayer");
const cardComputer = document.getElementById("cardComputer");

let gameStatus = document.getElementById("status");

const computerScore = document.getElementById("computer-score");
const playerScore = document.getElementById("player-score");
let playerScoreValue = 0;
let computerScoreValue = 0;

const remainingCard = document.querySelector("#remaining");

let deckId = 0;

newGameBtn.addEventListener("click", () => {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then(res => res.json())
    .then(data => {
        deckId = data.deck_id;
    });
    startRestartGame();
});

drawBtn.addEventListener("click", () => {   
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then(res => res.json())
    .then(data => {
        renderPage(data.cards, data.remaining);

        if (isFinished(data.remaining)) return;

        checkWinner(data.cards[0], data.cards[1]);
    });
});

function startRestartGame() {
    if (mainEl.classList.contains("display-none")) {
        mainEl.classList.remove("display-none");
        bodyEl.classList.remove("flex");
        newGameBtn.innerText = "Reset Game";
    } else {
        mainEl.classList.add("display-none");
        bodyEl.classList.add("flex");

        cardPlayer.style.backgroundImage = ``;
        cardComputer.style.backgroundImage = ``;

        newGameBtn.textContent = "Start Game";
        remainingCard.textContent = "52";

        playerScoreValue = 0;
        computerScoreValue = 0;
        computerScore.textContent = "0";
        playerScore.textContent = "0";
    }
}

function renderPage(cards, remaining) {
    cardPlayer.style.backgroundImage = `url(${cards[0].image})`;
    cardComputer.style.backgroundImage = `url(${cards[1].image})`;
    remainingCard.innerText = remaining;
}

function checkWinner(player, computer) {
    const allCards = ["2","3","4","5","6","7","8","9","JACK","QUEEN","KING","ACE"];
    const valuePlayer = allCards.indexOf(player.value);
    const valueComputer = allCards.indexOf(computer.value);
    
    if (valuePlayer > valueComputer) {
        playerScore.innerText = ++playerScoreValue;
        gameStatus.textContent = "Player won this round";
    } else if (valueComputer > valuePlayer) {
        computerScore.innerText = ++computerScoreValue;
        gameStatus.textContent = "Computer won this round";
    } else {
        gameStatus.textContent = "Round was draw";
    }
}

function isFinished(remaining) {
    if (!remaining) {
        drawBtn.disabled = true;

        const winner = playerScoreValue > computerScoreValue ? "Player Won The Game!" : "Computer Won The Game!";
        gameStatus.textContent = "Game is Over. " + winner;
        return true;
    }
    return false;
}




