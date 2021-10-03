
let player = {
    name :"Marina",
    chips : 200
    }
    
let cards = [ ];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-element");
let sumEl = document.getElementById("sum-element");
let cardsEl = document.getElementById("cards-element");
let playerEl = document.getElementById("player-element");
playerEl.textContent = player.name + ": $" + player.chips;





function getRandomCard() {
    let number = Math.floor(Math.random() * 13) + 1;
if(number === 1){
    return 1;
} else if(number > 10){
    return 11;
} else {
    return number;
}

}


function startGame() {
    isAlive = true;

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.innerText = "Cards: " ;
    for(let i=0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    
if (sum < 21) {
    message = "Do you want to draw a new card?";
} else if ( sum === 21) {
    message ="You won!";
    hasBlackJack = true;
} else if(sum > 21){
    message = "You're out of the game!";
    isAlive = false;
}
messageEl.textContent = message;
}

function newCard() {
    if(isAlive === true && sum !== 21){
        
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
}
}
