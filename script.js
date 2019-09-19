// Blackjack

// Card Variables 
let suits = ['Hearts','Spades', 'Clubs', 'Diamonds'], 
    values = ['Ace', 'Two', 'Three', 'Four', 'Five',
    'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 
    'Queen', 'King'];

// Game Variables
let deck = [],
    playerCards = [],
    dealerCards = [],
    playerScore = 0,
    dealerScore = 0,
    newGame = false,
    gameOver = false,
    playerWon = false;
    

// DOM Variables
let playerText = document.getElementById('player-cards'),
    dealerText = document.getElementById('dealer-cards'),
    statusText = document.getElementById('status'),
    newGameButton = document.getElementById('new-game-button'),
    hitButton = document.getElementById('hit-button'),
    stayButton = document.getElementById('stay-button');
    
hitButton.style.display = 'none';
stayButton.style.display = 'none';

newGameButton.addEventListener('click', function() {
    newGame = true;
    gameOver = false;
    playerWon = false;
  
    // Deal cards
    deck = buildDeck(suits, values);
    shuffleDeck(deck);
    playerCards = [getNextCard(), getNextCard()];
    dealerCards = [getNextCard(), getNextCard()];

    newGameButton.style.display = 'none';
    statusText.style.display = 'none';
    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';
    showStatus();
   
});

hitButton.addEventListener('click', function() {
    playerCards.push(getNextCard());
    showStatus();
});

stayButton.addEventListener('click', function() {
    while (dealerScore < playerScore) {
        dealerCards.push(getNextCard());
        getScores();
    }
    gameOver = true;
    showStatus();
});

function buildDeck(suits, values) {
    let deck = [];
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
            let card = {
                suit: suits[suitIdx],
                value: values[valueIdx]
            }
            deck.push(card);
        }
    }
    return deck;
}

function shuffleDeck(deck) {   
    for (let i = 0; i < deck.length; i++) {
        let randomNum = Math.trunc(Math.random() * deck.length);
        let tmp = deck[randomNum];
        deck[randomNum] = deck[i];
        deck[i] = tmp;
    }
}

function getCardString(card) {
    return card.value + ' of ' + card.suit;
}

function getNextCard() {
    return deck.shift();
}

function showStatus() {
    let playerString = '',
        dealerString = '';

    playerCards.forEach(function(card) {
        playerString += getCardString(card) + '<br>';
    });
    dealerCards.forEach(function(e) {
        dealerString += getCardString(e) + '<br>';
    });

    getScores();

    if (gameOver) {
        statusText.style.display = 'block';
        findWinner();
        if (playerWon) {
            statusText.innerText = 'You Won!'
        } else {
            statusText.innerText = 'Dealer Won :('
        }

        newGameButton.style.display = 'inline';
        hitButton.style.display = 'none';
        stayButton.style.display = 'none';
    } 
    
    playerText.innerHTML = '<strong>Player Hand</strong><br>' + playerString + 'Score: ' + playerScore;
    dealerText.innerHTML = '<strong>Dealer Cards</strong><br>' + dealerString + 'Score: ' + dealerScore;

}

function getScores() {
    playerScore = calcScore(playerCards);
    dealerScore = calcScore(dealerCards);
}

function calcScore(hand) {
    let score = 0, 
        hasAce = false;
    
    hand.forEach(function(card) {
        switch(card.value) {
            case 'Ace':
                score += 11;
                hasAce = true;
                break;
            case 'Two': 
                score += 2;
                break;
            case 'Three': 
                score += 3;
                break;
            case 'Four': 
                score += 4;
                break;
            case 'Five':
                score += 5;
                break;
            case 'Six': 
                score += 6;
                break;
            case 'Seven': 
                score += 7;
                break;
            case 'Eight': 
                score += 8;
                break;
            case 'Nine':
                score += 9;
                break;
            default:
                score += 10;
        }
    });

    if (hasAce && score > 21) {
        score -= 10;
    } 

    if (score >= 21) {
        gameOver = true;
    }
    return score;
}

function findWinner() {
    if (dealerScore > 21 || playerScore == 21 || (playerScore < 21 && dealerScore < playerScore && dealerScore !== playerScore)) {
        playerWon = true;
    }
}

const valueOne = '2';
const valueTwo = '2';
var varOne = '2';
var varTwo = 2;
let letOne = 'two';
let letTwo = 2;


console.log(
  'const', valueOne / valueTwo,
  'const', valueOne * valueTwo,
  'const', +valueOne + -valueTwo,
  'const', valueOne - valueTwo,
  'var', varOne / varTwo, 
  'let', letOne/letTwo
  );
  

let x = {
  foo: '1',
  bar: '2'
}
let y = {
  baz: '3',
  ...x
}


console.log(y);

var newEvent = new Event('build'), 
    elem = document.getElementById('player-cards');
elem.addEventListener('build', (e) => { console.log(e.type) }, false);
elem.dispatchEvent(newEvent);


let app = (function() {
  let carId = 123;
  let getId = function() {
    return carId;
  }
  let getLarge = function(n) {
    return carId*n;
  }
  return {
    getId: getId,
    getLarge: getLarge
  };
})();

console.log(app.getId(), app.getLarge(01))
















