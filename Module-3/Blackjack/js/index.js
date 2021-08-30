let num1 = generateRandom();
let num2 = generateRandom();
let cards = [num1, num2];

let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");

function startGame () {
    renderGame();
}

function renderGame() {
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
    }
    else
    {
        messageEl.textContent = "You lose.";
    }
    
}

function newCard() {
    cards.push(generateRandom());
    renderGame();
}

function generateRandom() {
    return Math.floor(Math.random() * 10) + 1;
}