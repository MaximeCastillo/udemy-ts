var inputNb1 = document.querySelector("#nb1");
var inputNb2 = document.querySelector("#nb2");
document.querySelector("#calcul").addEventListener("click", function () {
    var resultat = addition(+inputNb1.value, +inputNb2.value);
    document.querySelector(".resultat").innerHTML = resultat;
});
function addition(nb1, nb2) {
    return nb1 + nb2;
}
