function introScreenAppears() {
    var introScreen = document.querySelector('.introScreen');
    introScreen.style.display = 'block';
}

function endScreenAppears() {
    var endScreen = document.querySelector('.endScreen');
    endScreen.style.display = 'block';
}

function stopGame() {
    endScreenAppears();
    var endScore = document.querySelector('.endScore');
    endScore.innerText = "Your score: " + score;
}

function resetScoreAndLife() {
    moves = 0
    document.querySelector('.moves').innerHTML = 'Moves: ' + moves;
    score = 0
    document.querySelector('.score').innerHTML =  'Score: ' + score;
}

introScreenAppears()

window.addEventListener('click', function (event) {

    if (event.target.classList.contains('button')) {
        var introScreen = document.querySelector('.introScreen');
        var endScreen = document.querySelector('.endScreen');
        introScreen.style.display = 'none';
        endScreen.style.display = 'none';
        resetScoreAndLife();
        play();
    }
})

