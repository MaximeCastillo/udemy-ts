// Eléments du DOM
// On précise que l'élément est un HTMLInputElement pour pouvoir accéder à son attribut value.
// Avec un point d'exclamation, on affirme que la valeur ne sera jamais nulle (il faut donc en être certain)
var inputNom = document.querySelector("#nom");
inputNom.value = "test";
var inputAge = document.querySelector("#age");
inputAge.value = "31";
// Lorsque la query est sur une balise, TS reconnait l'élément HTML
var titreH1 = document.querySelector("h1");
// Autres fonctionnalités
// Paramètre optionnel de fonction : "?"
function test(a, b) {
    console.log("A : " + a);
    if (b)
        console.log("B : " + b);
}
test(1, 2);
test(10);
// Vérifier si une valeur est "null" ou "undefined" : "??"
var prenomSaisie = null;
var joueur = prenomSaisie !== null && prenomSaisie !== void 0 ? prenomSaisie : "Matthieu";
console.log(joueur);
