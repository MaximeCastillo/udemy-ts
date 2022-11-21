var prenom;
prenom = "Matthieu";
var age = 32;
var sexe = true;
var sports = ["foot", "rugby"];
var adresse = {
    ligne: "rue des fleurs",
    ville: "Toulouse",
    cp: 31000
};
var afficherPersonne = function (prenom, age, sexe, sports, adresse) {
    console.log("Pr\u00E9nom : ".concat(prenom));
    console.log("Age : ".concat(age));
    console.log("Sexe : ".concat(sexe ? "Homme" : "Femme"));
    for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
        var sport = sports_1[_i];
        console.log(sport);
    }
    console.log("Adresse : ");
    console.log(adresse.ligne);
    console.log("".concat(adresse.cp, " ").concat(adresse.ville));
};
afficherPersonne(prenom, age, sexe, sports, adresse);
// ES5
// function anniversaire(age: number): number {
//   return age + 1;
// }
// ES6
var anniversaire = function (age) {
    return age + 1;
};
var newAge;
newAge = anniversaire(age);
console.log("Age : ".concat(newAge));
