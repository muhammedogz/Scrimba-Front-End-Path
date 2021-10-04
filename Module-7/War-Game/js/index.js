const newGameBtn = document.getElementById("new-game");
const mainEl = document.querySelector("main");
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
        newGameBtn.innerText = "Reset Game";
    } else {
        mainEl.classList.add("display-none");
        newGameBtn.innerText = "Start Game";
        remaining = 56;
        remainingCard.innerText = remaining;
        computerScore.innerText = "0";
        playerScore.innerText = "0";
    }
}