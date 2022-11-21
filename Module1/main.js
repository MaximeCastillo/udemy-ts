var inputNb1 = document.querySelector("#nb1");
var inputNb2 = document.querySelector("#nb2");
document.querySelector("#calcul").addEventListener("click", function () {
    var resultat = addition(inputNb1.value, inputNb2.value);
    document.querySelector(".resultat").innerHTML = resultat;
});
function addition(nb1, nb2) {
    if (typeof (nb1) === "number" && typeof (nb2) === "number") {
        return nb1 + nb2;
    }
    else {
        return "Les valeurs ne sont pas de type \"Number\"";
    }
}
