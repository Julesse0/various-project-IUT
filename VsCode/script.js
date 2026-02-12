
/*Exo 1

let rayon1 = prompt("Entrez le rayon du premier cercle");
let rayon2 = prompt("Entrez le rayon du deuxième cercle");

let aire1 = Math.PI * Math.pow(rayon1, 2);
let aire2 = Math.PI * Math.pow(rayon2, 2);

alert("La surface du premier cercle est : " + aire1);
alert("La surface du deuxième cercle est : " + aire2);

if (aire1 > aire2)
    alert("La difference des deux surfaces est : " + (aire1 - aire2) );
else
    alert("La difference des deux surfaces est : " + (aire2 - aire1) );
*/

/*Exo 2

let prenom = prompt("Entrer votre prénom");
let nom = prompt("Entrer votre nom");

let initiales = prenom.charAt(0).toUpperCase() + nom.charAt(0).toUpperCase();

alert("Vos initiales sont: " + initiales);
alert("La longueur du prénom est: " + prenom.length);
alert("La longueur du nom est: " + nom.length);
*/

/*Exo 3
let A = prompt("Entrez la valeur de A");
let B = prompt("Entrez la valeur de B");
let C = prompt("Entrez la valeur de C");

let delta = Math.pow(B, 2) - 4 * A * C;

if (delta < 0) {
    alert(delta, "Il n'y a aucune solution");
} else if (delta === 0) {
    let racine = -B / (2 * A);
    alert("La racine unique du polynôme est : " + racine);
} else {
    let racine1 = (-B - Math.sqrt(delta)) / (2 * A);
    let racine2 = (-B + Math.sqrt(delta)) / (2 * A);
    alert("Les deux racines du polynôme sont : " + racine1 + " et " + racine2);
}
*/
/*Exo 4

let num = prompt("Entrez un numéro entre 1 et 12");

if (num < 1 || num > 12) {
    alert("Veuillez entrer un numéro valide entre 1 et 12");
} else {
    switch (num) {
        case '1':
            alert("Janvier");
            break;
        case '2':
            alert("Février");
            break;
        case '3':
            alert("Mars");
            break;
        case '4':
            alert("Avril");
            break;
        case '5':
            alert("Mai");
            break;
        case '6':
            alert("Juin");
            break;
        case '7':
            alert("Juillet");
            break;
        case '8':
            alert("Août");
            break;
        case '9':
            alert("Septembre");
            break;
        case '10':
            alert("Octobre");
            break;
        case '11':
            alert("Novembre");
            break;
        case '12':
            alert("Décembre");
            break;
    }
}
*/

/*Exo 5
var nombre = parseInt(prompt("Entrer un nombre:"));

if (isNaN(nombre)) {
    alert("Veuillez entrer un nombre genre un vrai nombre svp 😭");
} 
else {
    for (var i = 1; i <= 10; i++) {
        alert(nombre + " * " + i + " = " + nombre * i);
    }
}
*/

/*Exo 6
var somme = 0;

for (var i = 1; i <= 10; i++) {
    var num = parseInt(prompt("Entrez le nombre " + i + "/10 :"));

    if (isNaN(num)) {
        alert("Veuillez entrer un nombre valide");
        i--; 
    } 
    else {
        somme += num;
    }
}

var moyenne = somme / 10;

alert("La moyenne des nombres que vous avez entrés est : " + moyenne);

var somme = 0;
var compteur = 0;
var num;

do {
    num = parseInt(prompt("Entrez un nombre (0 pour arrêter) :"));

    if (isNaN(num)) {
        alert("Veuillez entrer un nombre valide");
    } 
    else if (num != 0) {
        somme += num;
        compteur++;
    }
} while (num != 0);

if (compteur != 0) {
    var moyenne = somme / compteur;
    alert("La moyenne des nombres que vous avez entrés est : " + moyenne);
    if (moyenne = 42){
        alert("la réponse à la grande question sur la vie, l'univers et le reste est 42, bravo vous avez gagné !");
    
    }
} else {
    alert("Aucun nombre n'a été entré");
}
*/

/*Exo 7
var chaine = prompt("Entrez une chaîne de caractères :");
var voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
var compteur = [0, 0, 0, 0, 0, 0];
var totalVoyelles = 0;

for (var i = 0; i < chaine.length; i++) {
    for (var j = 0; j < voyelles.length; j++) {
        if (chaine[i].toLowerCase() == voyelles[j]) {
            compteur[j]++;
            totalVoyelles++;
        }
    }
}

for (var i = 0; i < voyelles.length; i++) {
    var frequenceRelative = (compteur[i] / totalVoyelles) * 100;
    alert("Le nombre d'occurrences de la voyelle '" + voyelles[i] + "' est : " + compteur[i] + 
        ". Sa fréquence relative est : " + frequenceRelative.toFixed(2) + "%");
}

alert("Le nombre total de voyelles est : " + totalVoyelles);
*/

/*Exo 8
var tableau = [];
var NbPairs = 0;

var taille = parseInt(prompt("Combien de nombres voulez-vous entrer ?"));

for (var i = 0; i < taille; i++) {
    var nombre = parseInt(prompt("Entrez le nombre " + (i+1) + " :"));
    tableau.push(nombre);
    if (nombre % 2 == 0) {
        NbPairs++;
    }
}

alert("Le nombre de nombres pairs dans le tableau est : " + NbPairs);
*/

/*Exo 9
function factorielle(n) {
    var resultat = 1;
    for (var i = 2; i <= n; i++) {
        resultat *= i;
    }
    return resultat;
}

var nombre = parseInt(prompt("Entrez un entier naturel :"));
if (isNaN(nombre) || nombre < 0) {
    alert("Veuillez entrer un entier naturel valide");
} else {
    var fact = factorielle(nombre);
    alert("La factorielle de " + nombre + " est : " + fact);
}
*/

/*Exo 10
var age = parseInt(prompt("votre age"));
if (age <= 0)
{
    age = 1;
}

if (age >= 1 & age <= 17)
{
    alert("Jeune encore vous êtes.");
}
else if (age >= 18 & age <= 49)
{
    alert("majeur et en activité vous êtes.");
}
else if (age >= 50 & age <= 59)
{
    alert("encore en activité et non pas retraité vous êtes");
}
else if (age >= 60 & age <= 120)
{
    alert("retraité, profitez de votre retraite vous êtes !");
}
else
{
    alert("tu mens 🤪");
}
*/

/*Exo 11

var tableau = new Array(4);
for (var i = 0; i < tableau.length; i++) {
    tableau[i] = new Array(5).fill(0);
}

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 4; j++) {
        tableau[i][j] = parseInt(prompt("Entrez une valeur pour la ligne " + (i+1) + " colonne " + (j+1)));
    }
}

for (var j = 0; j < 4; j++) {
    var somme = 0;
    for (var i = 0; i < 3; i++) {
        somme += tableau[i][j];
    }
    tableau[3][j] = somme;
}

for (var i = 0; i < 3; i++) {
    var somme = 0;
    for (var j = 0; j < 4; j++) {
        somme += tableau[i][j];
    }
    tableau[i][4] = somme;
}

var tableauComplet = "";

for (var i = 0; i < 4; i++) {
    var ligne = "";
    for (var j = 0; j < 5; j++) {
        ligne += tableau[i][j] + " ";
    }
    tableauComplet += ligne + "\n"; 
}

alert(tableauComplet);
*/