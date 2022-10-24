console.log('👋 Hello from main.js');

// --- Step 1 ---

// Créer une fonction qui demande à l’utilisateur à l’aide d’un prompteur, un nombre. 
function askNumber () {
    return parseInt(prompt('Guess a number'));
}

// Stocker sa réponse dans une variable de type adéquate nommée givenNumber.
let givenNumber = askNumber();
console.log(givenNumber);
