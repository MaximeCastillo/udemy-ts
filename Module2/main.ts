let prenom: string;
prenom = "Matthieu";
let age = 32;
let sexe = true;
var sports = ["foot", "rugby"];
var adresse = {
  ligne: "rue des fleurs",
  ville: "Toulouse",
  cp: 31000,
};

let afficherPersonne = (
  prenom: string,
  age: number,
  sexe: boolean,
  sports: string[],
  adresse: {
    ligne: string;
    ville: string;
    cp: number;
  }
) => {
  console.log(`Prénom : ${prenom}`);
  console.log(`Age : ${age}`);
  console.log(`Sexe : ${sexe ? "Homme" : "Femme"}`);
  for (var sport of sports) {
    console.log(sport);
  }
  console.log("Adresse : ");
  console.log(adresse.ligne);
  console.log(`${adresse.cp} ${adresse.ville}`);
};

afficherPersonne(prenom, age, sexe, sports, adresse);
