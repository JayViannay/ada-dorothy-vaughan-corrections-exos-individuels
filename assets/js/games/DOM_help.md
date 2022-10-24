## Manipuler le DOM :

DOM = Document Object Model <br>
Définition du DOM : https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model/Introduction <br>


```js
// Récupérer un élément du DOM
const element = document.getElementById('id');

// Récupérer la valeur d'un élément du DOM
const value = element.value;

// Modifier la valeur d'un élément du DOM
element.value = 'Nouvelle valeur';

// Ajouter un écouteur d'événement
element.addEventListener('click', function() {
  // Code à exécuter lors du clic
});

// Supprimer un écouteur d'événement
element.removeEventListener('click', function() {
  // Code à exécuter lors du clic
});

// Créer un élément du DOM
const child = document.createElement('div');

// Ajouter un enfant à un élément du DOM
element.appendChild(child);

// Supprimer un enfant d'un élément du DOM
element.removeChild(child);

// Ajouter du texte à un élément du DOM
element.textContent = 'Texte';

// Ajouter une classe à un élément du DOM
element.classList.add('class');

// Supprimer une classe à un élément du DOM
element.classList.remove('class');
