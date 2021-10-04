const bodyEl = document.querySelector("body");
const mainEl = document.querySelector("main");

const newGameBtn = document.getElementById("new-game");
const computerScore = document.getElementById("computer-score");
const playerScore = document.getElementById("player-score");
const remainingCard = document.querySelector("#remaining");

let remaining = 56;

newGameBtn.addEventListener("click", () => {
    startRestartGame();
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

fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    });