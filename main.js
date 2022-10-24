console.log('👋 Hello from main.js');

function askNumber () {
    return parseInt(prompt('Guess a number'));
}

// --- Step 2 ---

// Écrire une fonction qui prend en paramètre givenNumber et qui se nommera didIWin.
function didIwin(param) {
    // si la valeur passé en paramètre est inférieure à 22, afficher "Plus grand"
    if (param < 22) alert('Taller')
    // si la valeur passé en paramètre est supérieure à 22, afficher "Plus petit"
    if (param > 22) alert('Smaller')
    // si la valeur passé en paramètre est égale à 22, afficher "Gagné"
    if (param === 22) alert('Well Done !')
}

// Créer une fonction gamePlay qui gérera vos appels de fonctions et la transmission de votre variable d’une fonction à une autre.
function gamePlay() {
    // stocker le résultat de la fonction askNumber dans une variable
    const givenNumber = askNumber();
    // appeler la fonction didIWin en lui passant la variable givenNumber en paramètre
    didIwin(givenNumber)
}

// appeler la fonction gamePlay pour lancer le jeu
gamePlay()