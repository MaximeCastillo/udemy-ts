"use strict";
const dollar = {
    nom: "Dollar",
    code: "Dol",
    symbole: "$",
    taux: 1,
};
const euro = {
    nom: "Euro",
    code: "Eur",
    symbole: "€",
    taux: 1.2,
};
const livre = {
    nom: "Livre",
    code: "Liv",
    symbole: "£",
    taux: 1.39,
};
const yuan = {
    nom: "Yuan",
    code: "Yua",
    symbole: "&yen;",
    taux: 0.15,
};
const devises = [dollar, euro, livre, yuan];
console.log(devises);
const deviseInitSelect = document.querySelector("#devise-initiale");
deviseInitSelect.innerHTML = genererListeOptionDevise(devises);
const deviseFinalSelect = document.querySelector("#devise-finale");
deviseFinalSelect.innerHTML = genererListeOptionDevise(devises);
function genererListeOptionDevise(devises) {
    let listeDeviseTxt = "";
    for (let devise of devises) {
        listeDeviseTxt += `<option value=${devise.code}>${devise.nom} - (${devise.symbole})</option>`;
    }
    return listeDeviseTxt;
}
//# sourceMappingURL=main.js.map