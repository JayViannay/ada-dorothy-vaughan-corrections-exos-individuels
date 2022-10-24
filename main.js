console.log('👋 Hello from main.js');

function askNumber () {
    return parseInt(prompt('Guess a number'));
}

// --- Step 3 ---

// Désormais la fonction didIWin devra retourner true si l’utilisateur a trouvé le chiffre, false sinon.
function didIwin(param) {
    if (param < 22) {
        alert('Taller');
        return false;
    }
    if (param > 22) {
        alert('Smaller');
        return false
    }
    if (param === 22) {
        alert('Well Done !');
        return true;
    }
}

// Dans la fonction gamePlay, si didIWin a retourné true, on arrete le jeu. 
// En revanche, si elle a retourné false, on redemande un chiffre à l’utilisateur.
function gamePlay() {
    let givenNumber = askNumber();
    while (didIwin(givenNumber) === false) {
        givenNumber = askNumber();
        didIwin(givenNumber);
    }
}

gamePlay();