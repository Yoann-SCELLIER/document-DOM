// Création d'une variable nommée "elementNew" qui utilise "document.createElement"
// pour créer un nouvel élément HTML de type "p" (paragraphe).
let elementNew = document.createElement('p');

// Attribuer du contenu au paragraphe créé en utilisant la propriété "innerHTML".
elementNew.innerHTML = "Je suis un paragraphe qui vient directement de JS !";

// "appendChild" insère le nouvel élément créé (paragraphe) à la fin du corps du document HTML.
document.body.appendChild(elementNew);