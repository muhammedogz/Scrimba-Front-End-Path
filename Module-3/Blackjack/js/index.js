let num1 = generateRandom();
let num2 = generateRandom();
let cards = [num1, num2];

const messageEl = document.getElementById("message-el");
const cardsEl = document.getElementById("cards-el");
const sumEl = document.getElementById("sum-el");

let isFinished = "";

function startGame () {
    renderGame();
}

function renderGame() {
    if (isFinished.length != 0)
    {
        messageEl.textContent = isFinished;
        return;
    }

    let sum = 0;

    let newCardsContent = "Cards: ";
    for(let i = 0; i < cards.length; i++)
    {
        newCardsContent += cards[i] + " ";
        sum += cards[i];
    }
    cardsEl.textContent = newCardsContent;
    sumEl.textContent = "Sum: " + sum;

    if (sum < 21) 
    {
        messageEl.textContent = "Do you want to take another card?";
    }
    else if (sum == 21) 
    {
        messageEl.textContent = "It's Blackjack!";
        isFinished = "It's Blackjack! You should not play a new card.";
    }
    else
    {
        messageEl.textContent = "You lose.";
        isFinished = "You lose. Game is Over. Refresh for play again.";
    }
    
}

// take new card
function newCard() {
    cards.push(generateRandom());
    renderGame();
}

// generate random number for game
// between 1-11
function generateRandom() {
    return Math.floor(Math.random() * 10) + 1;
}