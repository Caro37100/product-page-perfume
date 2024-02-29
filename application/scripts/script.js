function afficherResultat(score, nbMotsProposes) {
    // Récupération de la zone dans laquelle on va écrire le score
    let spanScore = document.querySelector(".zoneScore span")
    // Ecriture du texte
    let affichageScore = `${score} / ${nbMotsProposes}` 
    // On place le texte à l'intérieur du span. 
    spanScore.innerText = affichageScore
}

/**
 * Cette fonction affiche une proposition, que le joueur devra recopier, 
 * dans la zone "zoneProposition"
 * @param {string} proposition : la proposition à afficher
 */

function afficherPropositon(proposition){
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText = proposition
}

/**
 * Cette fonction construit et affiche l'email. 
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score. 
 */
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}

function validerNom (nom) {
    if (nom.length < 2) {
        throw new Error("Le nom est trop court")
    }
}

function validerEmail (email) {
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (!emailRegExp.test(email)) {
        throw new Error("L'e-mail n'est pas valide")
    }
}

function afficherMessageErreur (message) {

    let spanErreurMessage = document.getElementById("erreurMessage")

    if (!spanErreurMessage) {
        let popup = document.querySelector(".popup")
        spanErreurMessage = document.createElement("span")
        spanErreurMessage.id = "erreurMessage"

        popup.append(spanErreurMessage)
    }

    spanErreurMessage.innerText = message
}

function gererFormulaire (scoreEmail) {
    try {
        let baliseNom = document.getElementById("nom")
        validerNom(baliseNom.value)
        
        let baliseMail = document.getElementById("email")
        validerEmail(baliseMail.value)
        afficherMessageErreur("")

        afficherEmail(nom, email, scoreEmail)

    } catch(erreur) {
        afficherMessageErreur(erreur.message)
    }
}

/**
 * Cette fonction lance le jeu. 
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu () {
    let score = 0
    let i = 0
    let listeProposition = listeMots

    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    afficherPropositon(listeProposition[i])
    btnValiderMot.addEventListener("click",() => {
        console.log(inputEcriture.value)
        if (inputEcriture.value === listeProposition[i]) {
            score++
        }
        i++
        afficherResultat(score, i)
        inputEcriture.value = ""
        if (listeProposition[i] === undefined) {
            afficherPropositon("le jeu est fini")
            btnValiderMot.disabled = true
        } else {
            afficherPropositon(listeProposition[i])
        }
    })

    let listeBtnRadio = document.querySelectorAll(".optionSource")
    for (let index = 0; index < listeBtnRadio.length; index++) {
        listeBtnRadio[index].addEventListener ("change", (event) => {
            console.log(event.target.value)
            if (event.target.value === "1") {
                listeProposition = listeMots
            } else {
                listeProposition = listePhrases
            }
            afficherPropositon(listeProposition[i])
        })
    }

        const form = document.querySelector("form")
    
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            let scoreEmail = `${score} / ${i}`
            gererFormulaire(scoreEmail)
        })

    afficherResultat(score, i)
    }