console.log('👋 Hello from main.js');
// --- Step 4 ---

// Créer une fonction qui demande au joueur 1 de fournir un nombre à deviner compris entre 0 et 50 tant qu’il ne respecte pas ce range.
function askNumberPlayer1 () {
    let number = parseInt(prompt('Player 1 : Choose a number between 0 and 50'));
    if (number > 50 || number < 0) askNumberPlayer1();
    else return number;
}

function askNumber () {
    return parseInt(prompt('Player 2 : Guess number'));
}

// La fonction didIWin doit prendre désormais un autre paramètre, le nombre à diviner.
function didIwin(numberP2, numberP1) {
    if (numberP2 < numberP1) {
        alert('Taller');
        return false;
    }
    if (numberP2 > numberP1) {
        alert('Smaller');
        return false;
    }
    if (numberP2 === numberP1) {
        alert('Well Done, you win !');
        return true;
    }
}

// Reprenez la logique 1,2 et 3 pour gérer la partie et lui indiquer s’il doit continuer à jouer ou s’il a gagné.
function gamePlay() {
    const player1Number = askNumberPlayer1();
    let givenNumber = askNumber();
    while (didIwin(givenNumber, player1Number) === false) {
        givenNumber = askNumber();
        didIwin(givenNumber, player1Number);
    }
}

gamePlay();