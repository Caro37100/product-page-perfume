document.addEventListener("DOMContentLoaded", function () {

// POPUP - affichage et masquage

    function afficherPopup() {  // La popup est masquée par défaut (display:none), ajouter la classe "active"
                                // va changer son display et la rendre visible. 
        let popupBackground = document.querySelector(".popupBackground")
        let main = document.querySelector("main")
        popupBackground.classList.add("active")
        main.style.opacity = "0.2";
    }

    function cacherPopup() {     // La popup est masquée par défaut (display:none), supprimer la classe "active"
                                // va rétablir cet affichage par défaut. 
        let popupBackground = document.querySelector(".popupBackground")
        let main = document.querySelector("main")
        popupBackground.classList.remove("active")
        main.style.opacity = "1";
    }

// FORM - Soumission des éléments

    const email = document.getElementById('email');
    const form = document.querySelector("form")

    form.addEventListener("submit", (event) => {
        event.preventDefault()

        validateInputs()
    })

    let submit = document.querySelector("#submit")
    let textConfirmation = document.querySelector(".message-confirmation")
    
    submit.addEventListener("click", () => {
        // Quand on a cliqué sur le bouton "Subscribe", on affiche la popup avec le mail validé.
        // Quand on a cliqué sur le bouton "Subscribe", on floute le background main
        // Récupérer l'email de l'utilisateur
        let userEmail = email.value.trim();
        textConfirmation.textContent = "A confirmation email has been sent to ";
        textConfirmation.insertAdjacentHTML('beforeend', '<strong>' + userEmail + '</strong>');
        textConfirmation.insertAdjacentText('beforeend', ". Please open it and click the button inside to confirm your subscription.");
        afficherPopup()
    // Insérer le message avec l'email en gras
        

        let dismiss = document.querySelector(".dismiss") // On écoute le click sur le dismiss
        dismiss.addEventListener("click", (event) => {
        // Si on a cliqué précisément sur le bouton dismiss 
            if (event.target === dismiss) {
                // Alors on cache la popup et on remet l'opacité demain à 1
                cacherPopup()
            } 
        })
    })

//Gestion erreurs EMAIL

    const setError = (element, message) => {
        const inputControl = element.parentElement
        const errorDisplay = inputControl.querySelector('.error');
        const invalidInput = document.querySelector('#email')

        errorDisplay.innerText = message;
        invalidInput.classList.add('error')
        inputControl.classList.add('error');
        cacherPopup()
    }

    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
        const invalidInput = document.querySelector('#email')

        errorDisplay.innerText = '';
        invalidInput.classList.remove('error')
        inputControl.classList.remove('error');
        afficherPopup()
    };

    const isValidEmail = email => {
        const emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
        return emailRegExp.test(String(email).toLowerCase());
    }

    const validateInputs = () => {
        const emailValue = email.value.trim();

        if(emailValue === '') {
            setError(email, 'Valid email is required');
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Provide a valid email address');
        } else {
            setSuccess(email);
        }
    };
});

