// ID du boutton HTML rappeller
let button = document.getElementById('boutonClick');

// Ajout d'un événement qui écoute au click suivi d'une fonction
button.addEventListener("click", functionClick);

// Fonction qui permet de changer de couleur au click qui rappel le addEventListener
function functionClick() {
    button.style.backgroundColor = "green"; // couleur du fond du boutton
    button.style.color = "red"; // couleur dutexte
}
