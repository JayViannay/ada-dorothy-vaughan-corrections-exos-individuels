console.log('👋 Hello from main.js');
// --- Step 5 ---
function askNumberPlayer1 () {
    let number = parseInt(prompt('Player 1 : Choose a number between 0 and 50'));
    if (number > 50 || number < 0) askNumberPlayer1();
    else return number;
}

function askNumber () {
    // --- Step 5 change ---
    //return parseInt(prompt('Player 2 : Guess number'));
    return parseInt(document.getElementById('player_2_number').value);
}

// La fonction didIWin doit prendre désormais un autre paramètre, le nombre à diviner.
function didIwin(numberP2, numberP1) {
    if (numberP2 < numberP1) {
        document.getElementById('infos').innerText = "Choose a number taller";
        return false;
    }
    if (numberP2 > numberP1) {
        document.getElementById('infos').innerText = "Choose a number smaller";
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
        didIwin(givenNumber, player1Number);
    })
}

gamePlay();