const bodyEl = document.querySelector("body");
const mainEl = document.querySelector("main");

const newGameBtn = document.getElementById("new-game");
const drawBtn = document.getElementById("draw-card");

const cardPlayer = document.getElementById("cardPlayer");
const cardComputer = document.getElementById("cardComputer");

const computerScore = document.getElementById("computer-score");
const playerScore = document.getElementById("player-score");
const remainingCard = document.querySelector("#remaining");

let remaining = 52;
let deckId = 0;


newGameBtn.addEventListener("click", () => {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then(res => res.json())
    .then(data => {
        deckId = data.deck_id;
    });
    //startRestartGame();
});

drawBtn.addEventListener("click", () => {
    let cards = [];
    
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then(res => res.json())
    .then(data => {
        console.log(data.cards[0].value, data.cards[1].value);
        cards = data.cards;
        cardPlayer.style.backgroundImage = `url(${cards[0].image})`;
        cardComputer.style.backgroundImage = `url(${cards[1].image})`;

        remaining = data.remaining;
        remainingCard.innerText = remaining;
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




