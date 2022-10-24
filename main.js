console.log('👋 Hello from main.js');

function askNumber () {
    return parseInt(prompt('Guess a number'));
}

// --- Step 2 ---

// Écrire une fonction qui prend en paramètre givenNumber et qui se nommera didIWin.
function didIwin(param) {
    if (param < 22) alert('Taller')
    if (param > 22) alert('Smaller')
    if (param === 22) alert('Well Done !')
}

// Créer une fonction gamePlay qui gérera vos appels de fonctions et la transmission de votre variable d’une fonction à une autre.
function gamePlay() {
    const givenNumber = askNumber();
    didIwin(givenNumber)
}

gamePlay()