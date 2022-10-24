console.log('👋 Hello from game.js');

function askNumberPlayer1() {
    const p1Number = parseInt(prompt('Player 1 : Choose a number between 0 and 50'));
    if (p1Number > 50 || p1Number < 0 || !p1Number) askNumberPlayer1();
    return p1Number;
}

function askNumberPlayer2() {
    return parseInt(document.getElementById('player_2_number').value);
}

function didIwin(numberP2, numberP1) {
    if (numberP2 === numberP1) {
        return true;
    }
    numberP2 < numberP1 ? handleMinRange(numberP2) : handleMaxRange(numberP2);
    return false;
}

function handleMinRange(numberP2) {
    const htmlMinRange = parseInt(document.getElementById('min').innerText);
    if (numberP2 > htmlMinRange) {
        document.getElementById('min').innerHTML = numberP2;
        document.getElementById('infos').innerText = `Choose a number > ${numberP2}`;
    } else {
        document.getElementById('infos').innerText = `Out of range, choose a number > ${htmlMinRange}`;
    }
}

function handleMaxRange(numberP2) {
    const htmlMaxRange = parseInt(document.getElementById('max').innerText);
    if (numberP2 < htmlMaxRange) {
        document.getElementById('max').innerHTML = numberP2;
        document.getElementById('infos').innerText = `Choose a number < ${numberP2}`;
    } else {
        document.getElementById('infos').innerText = `Out of range, choose a number < ${htmlMaxRange}`;
    }
}

function displayAttempts(nbOfAttempts) {
    document.getElementById('tries').innerHTML = nbOfAttempts;
}

function win(nbOfAttempts) {
    document.getElementById('game').classList.add('d-none');
    document.getElementById('win').classList.remove('d-none');
    document.getElementById('win_tries').innerHTML = nbOfAttempts;
    restartGame();
}

function restartGame() {
    document.getElementById('restart').addEventListener('click', event => {
        location.reload();
    });
}

function gamePlay() {
    const player1Number = askNumberPlayer1();
    let attemptsP2 = 0;
    document.getElementById('attempts').addEventListener('click', event => {
        attemptsP2++;
        displayAttempts(attemptsP2);
        let givenNumber = askNumberPlayer2();
        if (!givenNumber) alert('You must enter a number');
        if (didIwin(givenNumber, player1Number) === true) {
            win(attemptsP2);
        }
    });
}