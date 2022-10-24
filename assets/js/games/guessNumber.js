console.log('👋 Hello from game.js');

/**
 * -------------------------------------------------------------------------------------------------------------------------------------------------
 * -------------------------------------------------------------------------------------------------------------------------------------------------
 * Fonctions permettant de gérer l'affichage du jeu et de ses données
 * @handleMinRange
 * @handleMaxRange
 * @displayAttempts
 * @win
 * @restartGame
 * -------------------------------------------------------------------------------------------------------------------------------------------------
 * -------------------------------------------------------------------------------------------------------------------------------------------------
 */

/**
 * 
 * @param {Number} numberP2 
 * @returns {void} 
 * @description Permet de mettre à jour le range minimum dans le DOM
 */
function handleMinRange(numberP2) {
    // on récupère la valeur du range minimum dans le DOM (valeur par défaut = 0) (CF : élément HTML avec id="min")
    const htmlMinRange = parseInt(document.getElementById('min').innerText);
    // si le nombre saisi par le joueur 2 est supérieur au range minimum
    if (numberP2 > htmlMinRange) {
        // on met à jour le range minimum dans le DOM (CF : élément HTML avec id="min")
        document.getElementById('min').textContent = numberP2;
        // on met à jour le message d'information dans le DOM (CF : élément HTML avec id="infos")
        document.getElementById('infos').textContent = `Choose a number > ${numberP2}`;
    } else {
        // sinon, on met à jour le message d'information dans le DOM en précisant que le nombre saisi est en dehors du range minimum (CF : élément HTML avec id="infos")
        document.getElementById('infos').textContent = `Out of range, choose a number > ${htmlMinRange}`;
    }
}

/**
 * 
 * @param {Number} numberP2 
 * @returns {void}
 * @description Permet de mettre à jour le range maximum dans le DOM
 */
function handleMaxRange(numberP2) {
    // on récupère la valeur du range maximum dans le DOM (valeur par défaut = 50) (CF : élément HTML avec id="max")
    const htmlMaxRange = parseInt(document.getElementById('max').innerText);
    // si le nombre saisi par le joueur 2 est inférieur au range maximum
    if (numberP2 < htmlMaxRange) {
        // on met à jour le range maximum dans le DOM (CF : élément HTML avec id="max")
        document.getElementById('max').textContent = numberP2;
        // on met à jour le message d'information dans le DOM (CF : élément HTML avec id="infos")
        document.getElementById('infos').textContent = `Choose a number < ${numberP2}`;
    } else {
        // sinon, on met à jour le message d'information dans le DOM en précisant que le nombre saisi est en dehors du range maximum (CF : élément HTML avec id="infos")
        document.getElementById('infos').textContent = `Out of range, choose a number < ${htmlMaxRange}`;
    }
}

/**
 * 
 * @param {Number} currentNbAttempts 
 * @returns {void}
 * @description Permet d'afficher le nombre d'essais du joueur 2 dans le DOM
 */
function displayAttempts(currentNbAttempts) {
    // on met à jour le nombre d'essais dans le DOM (CF : élément HTML avec id="tries")
    document.getElementById('tries').textContent = currentNbAttempts;
}

/**
 * 
 * @param {Number} totalAttempts 
 * @returns {void}
 * @description Permet de modifier le DOM pour afficher le message de victoire au joueur 2 ainsi que son nombre d'essais total
 */
function win(totalAttempts) {
    // on ajoute la classe "d-none" à l'élément HTML avec id="game" (CF : élément HTML avec id="game") afin de cacher le jeu
    document.getElementById('game').classList.add('d-none');
    // et d'afficher le message de victoire (CF : élément HTML avec id="win") en retirant la classe "d-none" à cet élément
    document.getElementById('win').classList.remove('d-none');
    // on affiche le nombre total de tentatives (CF : élément HTML avec id="win_tries")
    document.getElementById('win_tries').textContent = totalAttempts;
    // on propose de relancer une partie (CF : élément HTML avec id="restart")
    restartGame();
}

/**
 * 
 * @returns {void}
 * @description Permet de relancer une partie
 */
function restartGame() {
    // on ajoute un écouteur d'événement sur le bouton "Restart" (CF : élément HTML avec id="restart")
    document.getElementById('restart').addEventListener('click', event => {
        // on recharge la page pour relancer une partie
        location.reload();
    });
}

/**
 * -------------------------------------------------------------------------------------------------------------------------------------------------
 * -------------------------------------------------------------------------------------------------------------------------------------------------
 * Fonctions permettant de gérer la logique et les données  du jeu
 * @askNumberPlayer1
 * @askNumberPlayer2
 * @didIwin
 * -------------------------------------------------------------------------------------------------------------------------------------------------
 * -------------------------------------------------------------------------------------------------------------------------------------------------
 */

/**
 * 
 * @returns {number} 
 * @description Permet de récupérer la valeur du nombre saisi par le joueur 1
 */
function askNumberPlayer1() {
    // on récupère la valeur du nombre saisi par le joueur 1 dans le prompt tout en la convertissant en nombre (parseInt)
    const p1Number = parseInt(prompt('Player 1 : Choose a number between 0 and 50'));
    // si le nombre saisi par le joueur 1 n'est compris entre 0 et 50 ou que celui est vide ou n'est pas de type Number alors on relance la fonction askNumberPlayer1
    if (p1Number > 50 || p1Number < 0 || !p1Number || !typeof p1Number === Number) askNumberPlayer1();
    // sinon, on retourne la valeur du nombre saisi par le joueur 1 (p1Number)
    return p1Number;
}

/**
 * 
 * @returns {number} retourne le nombre saisi par le joueur 2
 * @description Permet de récupérer la valeur du nombre saisi par le joueur 2
 */
function askNumberPlayer2() {
    // on récupère la valeur du nombre saisi par le joueur 2 dans l'input HTML (CF : élément HTML avec id="player_2_number") en la convertissant en nombre (parseInt)
    return parseInt(document.getElementById('player_2_number').value);
}

/**
 * 
 * @param {Number} numberP2 
 * @param {Number} numberP1 
 * @returns {Boolean} true || false
 * @description Permet de vérifier si le joueur 2 a gagné
 */
function didIwin(numberP2, numberP1) {
    // si le nombre saisi par le joueur 2 est égal au nombre saisi par le joueur 1 alors on retourne true
    if (numberP2 === numberP1) return true;
    // si le nombre saisi par le joueur 2 est inférieur au nombre saisi par le joueur 1 alors on appelle la fonction handleMaxRange sinon 
    // on appelle la fonction handleMinRange
    numberP2 < numberP1 ? handleMinRange(numberP2) : handleMaxRange(numberP2);
    // on retourne false car le joueur 2 n'a pas gagné
    return false;
}

/**
 * -------------------------------------------------------------------------------------------------------------------------------------------------
 * -------------------------------------------------------------------------------------------------------------------------------------------------
 * Fonction qui permet d'éxecuter le jeu, sa logique et son affichage
 * -------------------------------------------------------------------------------------------------------------------------------------------------
 * -------------------------------------------------------------------------------------------------------------------------------------------------
 */
function gamePlay() {
    // on récupère la valeur du nombre saisi par le joueur 1
    const player1Number = askNumberPlayer1();
    // on initialise le nombre d'essais du joueur 2 à 0
    let attemptsP2 = 0;
    // on ajoute un écouteur d'événement sur le bouton "Try" (CF : élément HTML avec id="attempts")
    document.getElementById('attempts').addEventListener('click', event => {
        // à chaque clic sur le bouton "Try", on incrémente le nombre d'essais du joueur 2 de +1
        attemptsP2++;
        // on gère l'affichage du nombre d'essais du joueur 2 dans le DOM en appellant la fonction displayAttempts et en lui passant comme valeur
        // de parametre le nombre d'essais actuel du joueur 2
        displayAttempts(attemptsP2);
        // on récupère la valeur du nombre saisi par le joueur 2
        let givenNumber = askNumberPlayer2();
        // on vérifie que le joueur 2 a bien saisi un nombre, sinon on lève une alerte
        if (!givenNumber) alert('You must enter a number');
        // on vérifie si le joueur 2 a gagné, si oui/true on appelle la fonction win en lui passant comme paramètre le nombre total d'essais du joueur 2
        if (didIwin(givenNumber, player1Number) === true) {
            win(attemptsP2);
        }
        // sinon on ne fait rien, le jeu continue
    });
}
