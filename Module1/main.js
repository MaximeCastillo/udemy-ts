// Démonstration problème JS non typé
// Une addition qui fait une concaténation car le type des inputs est toujours string

const inputNb1 = document.querySelector("#nb1");
const inputNb2 = document.querySelector("#nb2");

document.querySelector("#calcul").addEventListener("click", () => {
  // let resultat = addition(inputNb1.value, inputNb2.value)
  let resultat = addition(+inputNb1.value, +inputNb2.value) // Syntaxe ES6 équivalente à parseInt()
  document.querySelector(".resultat").innerHTML = resultat
})

function addition(nb1, nb2) {
  return nb1 + nb2
}
