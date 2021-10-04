const bodyEl = document.querySelector("body");
const mainEl = document.querySelector("main");

const newGameBtn = document.getElementById("new-game");
const drawBtn = document.getElementById("draw-card");

const cardPlayer = document.getElementById("cardPlayer");
const cardComputer = document.getElementById("cardComputer");

const computerScore = document.getElementById("computer-score");
const playerScore = document.getElementById("player-score");
let playerScoreValue = 0;
let computerScoreValue = 0;

const remainingCard = document.querySelector("#remaining");

const allCards = ["2","3","4","5","6","7","8","9","JACK","QUEEN","KING","ACE"];

console.log(allCards.indexOf("JACK"));

let remaining = 52;
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
        newGameBtn.innerText = "Start Game";
        remaining = 56;
        remainingCard.innerText = remaining;
        computerScore.innerText = "0";
        playerScore.innerText = "0";
    }
}

function renderPage(cards, remaining) {
    cardPlayer.style.backgroundImage = `url(${cards[0].image})`;
    cardComputer.style.backgroundImage = `url(${cards[1].image})`;
    remainingCard.innerText = remaining;
}

function checkWinner(player, computer) {
    const valuePlayer = allCards.indexOf(player.value);
    const valueComputer = allCards.indexOf(computer.value);

    if (valuePlayer > valueComputer) {
        playerScore.innerText = ++playerScoreValue;
    } else if (valueComputer > valuePlayer) {
        computerScore.innerText = ++computerScoreValue;
    }
}




