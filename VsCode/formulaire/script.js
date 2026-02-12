document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("validerBtn").addEventListener("click", function(event) {
        event.preventDefault();
        verifierFormulaire();
    });

function verifierFormulaire() {
    var civilite = document.getElementById("civilite").value;
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var telephone = document.getElementById("telephone").value;
    var adresse = document.getElementById("adresse").value;
    var codePostal = document.getElementById("code_postal").value;
    var ville = document.getElementById("ville").value;
    var typeCarte = document.getElementById("type_carte").value;
    var numeroCarte = document.getElementById("numero_carte").value;
    var codeSecurite = document.getElementById("code_securite").value;

    if (!civilite || !nom || !prenom || !email || !adresse || !codePostal || !ville || !typeCarte || !numeroCarte || !codeSecurite) {
        alert("Veuillez remplir tous les champs obligatoires.");
        return false;
    }

    if (telephone && isNaN(telephone)) {
        alert("Le numéro de téléphone doit être numérique.");
        return false;
    }
    var regexAlphabetique = /^[A-Za-z]+$/;
    if (!regexAlphabetique.test(nom) || !regexAlphabetique.test(prenom)) {
        alert("Le nom et le prénom doivent contenir uniquement des caractères alphabétiques.");
        return false;
    }

    if (codePostal.length !== 5 || isNaN(codePostal)) {
        alert("Le code postal doit contenir 5 chiffres.");
        return false;
    }

    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Veuillez saisir une adresse e-mail valide.");
        return false;
    }

    var regexNumerique = /^[0-9]+$/;
    if (!regexNumerique.test(numeroCarte) || numeroCarte.length !== 16) {
        alert("Le numéro de carte doit contenir 16 chiffres.");
        return false;
    }

    if (!regexNumerique.test(codeSecurite) || codeSecurite.length !== 3) {
        alert("Le code de sécurité doit contenir 3 chiffres.");
        return false;
    }
    
    alert("Formulaire valide, envoi des données...");
    return true;
    }
});