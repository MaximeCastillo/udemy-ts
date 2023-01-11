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
const deviseInitSelect = document.querySelector("#devise-initiale");
deviseInitSelect.innerHTML = genererListeOptionDevise(devises);
let deviseInitValeur = deviseInitSelect.value;
deviseInitSelect.addEventListener("change", () => {
    deviseInitValeur = deviseInitSelect.value;
});
const deviseFinaleSelect = document.querySelector("#devise-finale");
deviseFinaleSelect.innerHTML = genererListeOptionDevise(devises);
let deviseFinaleValeur = deviseFinaleSelect.value;
deviseFinaleSelect.addEventListener("change", () => {
    deviseFinaleValeur = deviseFinaleSelect.value;
});
let montant;
const montantInput = document.querySelector("#montant");
montantInput.addEventListener("keyup", () => {
    montant = +montantInput.value;
});
function genererListeOptionDevise(devises) {
    let listeDeviseTxt = "";
    for (let devise of devises) {
        listeDeviseTxt += `<option value=${devise.code}>${devise.nom} - (${devise.symbole})</option>`;
    }
    return listeDeviseTxt;
}
//# sourceMappingURL=main.js.map