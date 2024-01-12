// Création d'une variable "elements" avec comme attributs une "CLASS="titre", qui rappel
// toutes les "class=titre" du HTML.
let elements = document.getElementsByClassName("titre");
console.log(elements);

// Boucle "FOR"
    for (let i = 0; i < elements.length; i++) { // Variable "i" démarre de "0" jusqu'a la longeur du tableau "length" incrémenter de +1 "i++"
    elements[i].innerHTML = "New Titre" // "elements[i]" pointe vers l'index de la boucle, innerHTML lui permet d'accéder au contenu HTML
    }


// Création du variable "paragraphes" avec les attributs "comumante.getElementsByTagName",
// qui rappel la balise <p> de tout le HTML.
let paragraphes = document.getElementsByTagName('p')
console.log(paragraphes);

// Boucle "FOR"
    for (let i = 0; i < paragraphes.length; i++) { // Variable "i" démarre de "0" jusqu'a la longeur du tableau "length" incrémenter de +1 "i++"
    paragraphes[i].innerHTML = "Nouveau paragraphe"// "paragraphes[i]" pointe vers l'index de la boucle, innerHTML lui permet d'accéder au contenu HTML
    }