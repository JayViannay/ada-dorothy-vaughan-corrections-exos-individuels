console.log('👋 Hello from main.js');
// --- Step 6 ---
function askNumberPlayer1 () {
    let number = parseInt(prompt('Player 1 : Choose a number between 0 and 50'));
    if (number > 50 || number < 0) askNumberPlayer1();
    else return number;
}

function askNumber () {
    return parseInt(document.getElementById('player_2_number').value);
}

function didIwin(numberP2, numberP1) {
    if (numberP2 < numberP1) {
        const htmlMinRange = parseInt(document.getElementById('min').innerText);
        if (numberP2 > htmlMinRange) {
            document.getElementById('min').innerHTML = numberP2;
            document.getElementById('infos').innerText = `Choose a number > ${numberP2}`;
        } else {
            document.getElementById('infos').innerText = `Out of range, choose a number > ${htmlMinRange}`;
        }
        return false;
    }
    if (numberP2 > numberP1) {
        const htmlMaxRange = parseInt(document.getElementById('max').innerText);
        if (numberP2 < htmlMaxRange) {
            document.getElementById('max').innerHTML = numberP2;
            document.getElementById('infos').innerText = `Choose a number < ${numberP2}`;
        } else {
            document.getElementById('infos').innerText = `Out of range, choose a number < ${htmlMaxRange}`;
        }
        return false;
    }
    if (numberP2 === numberP1) {
        document.getElementById('game').classList.add('d-none');
        document.getElementById('win').classList.remove('d-none');
        return true;
    }
}

function gamePlay() {
    const player1Number = askNumberPlayer1();
    let attemptsP2 = 0;
    document.getElementById('attempts').addEventListener('click', event => {
        attemptsP2++;
        document.getElementById('tries').innerHTML = attemptsP2;
        let givenNumber = askNumber();
        if (!givenNumber) alert('You must enter a number');
        if (didIwin(givenNumber, player1Number) === true) {
            document.getElementById('win_tries').innerHTML = attemptsP2;
        }
    });
}

gamePlay();