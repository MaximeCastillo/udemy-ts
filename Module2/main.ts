// Eléments du DOM

// On précise que l'élément est un HTMLInputElement pour pouvoir accéder à son attribut value.
// Avec un point d'exclamation, on affirme que la valeur ne sera jamais nulle (il faut donc en être certain)
const inputNom = document.querySelector("#nom")! as HTMLInputElement;
inputNom.value = "test";

const inputAge = document.querySelector("#age")! as HTMLInputElement;
inputAge.value = "31";

// Lorsque la query est sur une balise, TS reconnait l'élément HTML
const titreH1 = document.querySelector("h1")!;

// Autres fonctionnalités

// Paramètre optionnel de fonction : "?"
function test(a: number, b?: number) {
  console.log("A : " + a);
  if (b) console.log("B : " + b);
}

test(1, 2);
test(10);

// Vérifier si une valeur est "null" ou "undefined" : "??"
let prenomSaisie = null;
const joueur = prenomSaisie ?? "Matthieu";

console.log(joueur);
