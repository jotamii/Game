const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
var score = 0;
var moves = 0;
// var tilesPair = 0
// var second = 0; 
// var minute = 0;
// var interval;


function play() {
    resetScoreAndLife();
    // tilesPair = 0;
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlippedCard = false;
    moves += 1;
        document.querySelector(".moves").innerHTML = 'Moves: ' + moves;
    checkForMatch();
}

// if (moves == 1){
//     interval = setInterval(function(){
//         second +=1;
//         document.querySelector(".time").innerHTML = 'Time: ' + time;
//         if (second == 60){
//             minute +=1;
//             second = 0;
//         }
//     },1000);
// }

function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        removeCards()
        score += 1;
        document.querySelector(".score").innerHTML = 'Score: ' + score;
        return;
    }
    unflipCards();
}

// if (score === 1) {
//     stopGame();
// }

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function removeCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.style.visibility = "hidden";
        secondCard.style.visibility = "hidden";
        resetBoard();
    }, 1500);
}

(function shuffle() {
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 12);
        card.style.order = ramdomPos;
    });
})();
cards.forEach(card => card.addEventListener('click', flipCard));
