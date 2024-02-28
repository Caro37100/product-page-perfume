const codeSequence = "code1234";
let userInput = "";

// Fonction pour détruire la page + style à ajouter dans le CSS / HTML
function destroyPage() {
    document.body.innerHTML = '';
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.style.fontSize = '48px';
    document.body.innerText = "Destruction de la page !";
}

// On écoute l'évènement de frappe de clavier
document.addEventListener('keydown', function(event) {
    // Récupération de la touche pressée minuscule + majuscule
    const key = event.key.toLowerCase();
    // Vérifier si la touche est une lettre ou un chiffre (source : https://regexper.com/)
    if (key.match(/[a-zA-Z0-9]/)) {
        // Ajouter la touche à la séquence de l'utilisateur si elle correspond à la vérif lettres / chiffres ci-dessus
        userInput += key;
        // Vérifier si la séquence correspond à la séquence de destruction + laisser une marge d'erreur
        if (userInput == codeSequence.substring(0, userInput.length)) { // Vérification de la bonne longueur du code tapé par l'utilisateur
            if (userInput == codeSequence) {
                destroyPage(); // Détruire la page si la séquence est correcte
        }
        } else {
                userInput = ""; // Réinitialiser la séquence si la saisie est incorrecte pour permettre les erreurs avant la bonne suite de code
        }
    } else {
        userInput = ""; // Réinitialiser la séquence si une touche invalide est pressée autre que (/[a-zA-Z0-9]/)
    }
});