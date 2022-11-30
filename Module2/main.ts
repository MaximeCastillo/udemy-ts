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
): void => {
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

// ES5
// function anniversaire(age: number): number {
//   return age + 1;
// }

// ES6
let anniversaire = (age: number): number => {
  return age + 1;
};

let newAge: number;
newAge = anniversaire(age);
console.log(`Age : ${newAge}`);

/// 27. L'intersection

// Avec les "types"
// type Personnage = {
//   nom: string;
//   age: number;
// };

// type Humain = {
//   classe: string;
// };

// type Homme = Personnage & Humain;

// const matthieu: Homme = {
//   nom: "Matthieu",
//   age: 31,
//   classe: "Guerrier"
// };

// Avec les "interfaces"
interface Personnage {
  nom: string;
  age: number;
}

interface Humain {
  classe: string;
}

interface Homme extends Personnage, Humain {
  sports: string[];
}

const matthieu: Homme = {
  nom: "Matthieu",
  age: 31,
  classe: "Guerrier",
  sports: ["foot", "rugby"],
};
