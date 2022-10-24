console.log('👋 Hello from game.js');

/**
 * @description permet de récupérer le nombre saisi par le joueur 1 depuis un prompteur
 */
function askNumberPlayer1() {
    // récupérer le nombre saisi par le joueur 1 en prenant soin de convertir la valeur en type number
    let p1Number = parseInt(prompt('Player 1 : Choose a number between 0 and 50'));
    // vérifier que le nombre saisi est bien compris entre 0 et 50 et qu'une valeur a bien été saisie sinon redemander un nombre
    if (p1Number > 50 || p1Number < 0 || !p1Number) askNumberPlayer1();
    // retourner le nombre saisi par le joueur 1
    return p1Number;
}

/**
 * @description permet de récupérer le nombre saisi par le joueur 2 depuis le champ input du code HTML
 */
function askNumberPlayer2() {
    // récupérer le nombre saisi par le joueur 2 dans l'input HTML en prenant soin de convertir la valeur en type number
    // puis retourner le nombre saisi par le joueur 2
    return parseInt(document.getElementById('player_2_number').value);
}

/**
 * @param  {type Number} numberP2
 * @param  {type Number} numberP1
 * @returns true if numberP2 === numberP1
 * @returns false if numberP2 !== numberP1
 * 
 * @description permet de tester si le nombre saisi par le joueur 2 est égal au nombre saisi par le joueur 1
 */
function didIwin(numberP2, numberP1) {
    // si le nombre saisi par le joueur 2 est égal au nombre saisi par le joueur 1
    if (numberP2 === numberP1) {
        // on retourne true
        return true;
    }
    // si le nombre saisi par le joueur 2 est inférieur au nombre saisi par le joueur 1 on appelle la fonction handleMinRange sinon on appelle la fonction handleMaxRange
    numberP2 < numberP1 ? handleMinRange(numberP2) : handleMaxRange(numberP2);
    // on retourne false car le nombre saisi par le joueur 2 n'est pas égal au nombre saisi par le joueur 1
    return false;
    
}

/**
 * 
 * @param {type Number} numberP2 
 * @description permet de gérer la valeur du min range html
 */
function handleMinRange(numberP2) {
    // on récupère le span HTML qui contient la valeur du minimal range (valeur de départ 0)
    const htmlMinRange = parseInt(document.getElementById('min').innerText);
    // si le nombre saisi par le joueur 2 est supérieur au à la valeur du minimal range
    if (numberP2 > htmlMinRange) {
        // on met à jour la valeur du minimal range avec la valeur du nombre saisi par le joueur 2
        document.getElementById('min').innerHTML = numberP2;
        // on affiche un message à joueur 2 pour lui indiquer que son nombre est trop petit
        document.getElementById('infos').innerText = `Choose a number > ${numberP2}`;
        // sinon on affiche un message à joueur 2 pour lui indiquer que son nombre est out of range
    } else {
        document.getElementById('infos').innerText = `Out of range, choose a number > ${htmlMinRange}`;
    }
}

/**
 * 
 * @param {type Number} numberP2 
 * @description permet de gérer la valeur du max range html
 */
function handleMaxRange(numberP2) {
    // on récupère le span HTML qui contient la valeur du maximal range (valeur de départ 50)
    const htmlMaxRange = parseInt(document.getElementById('max').innerText);
    // si le nombre saisi par le joueur 2 est inférieur au à la valeur du maximal range
    if (numberP2 < htmlMaxRange) {
        // on met à jour la valeur du maximal range avec la valeur du nombre saisi par le joueur 2
        document.getElementById('max').innerHTML = numberP2;
        // on affiche un message à joueur 2 pour lui indiquer que son nombre est trop grand
        document.getElementById('infos').innerText = `Choose a number < ${numberP2}`;
    } else {
        // sinon on affiche un message à joueur 2 pour lui indiquer que son nombre est out of range
        document.getElementById('infos').innerText = `Out of range, choose a number < ${htmlMaxRange}`;
    }
}
/**
 * @param  {type Number} nbOfAttempts
 * @description permet d'afficher le nombre de tentatives du joueur
 */
function displayAttempts(nbOfAttempts) {
    document.getElementById('tries').innerHTML = nbOfAttempts;
}

/**
 * @param  {type Number} nbOfAttempts
 * @description permet d'afficher la partie Win du jeu
 */
function win(nbOfAttempts) {
    // On modifie l'affichage HTML pour indiquer au joueur 2 qu'il a gagné :

    // 1. on ajoute la classe CSS bootstrap "d-none" (display-none) au bloc de jeu HTML afin qu'il ne s'affiche plus
    document.getElementById('game').classList.add('d-none');
    // 2. on supprime la classe CSS bootstrap "d-none" (display-none) au bloc de fin de jeu HTML afin qu'il s'affiche
    document.getElementById('win').classList.remove('d-none');

    // 3. on affiche le nombre de tentatives total du joueur 2 dans le span HTML qui contient la valeur du nombre de tentatives
    document.getElementById('win_tries').innerHTML = nbOfAttempts;

    // 4. on propose aux joueurs de rejouer
    restartGame();
}

/**
 * @description permet de proposer aux joueurs de rejouer à la fin d'une partie
 */
function restartGame() {
    // 1. on écoute le click sur le bouton "Restart"
    document.getElementById('restart').addEventListener('click', event => {
        // 2. au moment du click on recharge la page
        location.reload();
    });
}

/**
 * @description permet de lancer le jeu
 */
 function gamePlay() {
    // 1. demander à joueur 1 de saisir un nombre entre 0 et 50
    const player1Number = askNumberPlayer1();
    // 2. initialiser le nombre de tentatives du joueur 2 à 0
    let attemptsP2 = 0;
    // 3. écouté le click sur le bouton "Try"
    document.getElementById('attempts').addEventListener('click', event => {
        // 4. à chaque click sur le bouton "Try", on incrémente le nombre de tentatives du joueur 2 de + 1
        attemptsP2++;
        // 5. on affiche le nombre de tentatives du joueur 2 dans le span HTML qui contient la valeur du nombre de tentatives
        displayAttempts(attemptsP2);
        // 6. on récupère le nombre saisi par le joueur 2
        let givenNumber = askNumberPlayer2();
        // 7. on teste que le joueur 2 a bien saisi un nombre, sinon on lui demande de saisir un nombre via une alert
        if (!givenNumber) alert('You must enter a number');
        // 8. on teste si le nombre saisi par le joueur 2 est égal au nombre saisi par le joueur 1
        if (didIwin(givenNumber, player1Number) === true) {
            // 9. si didIwin nous retourne true, on appelle la fonction win
            win(attemptsP2);
        }
    });
}