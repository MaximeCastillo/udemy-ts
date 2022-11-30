// enum CLASSE {
//   GUERRIER = "Guerrier",
//   VOLEUR = "Voleur",
//   ARCHER = "Archer",
// }

// type Personnage = {
//   nom: string;
//   classe: string;
// };

// type Guerrier = {
//   classe: CLASSE.GUERRIER;
// }

// type Voleur = {
//   classe: CLASSE.VOLEUR;
// }

// const p1: Personnage & Guerrier = {
//   nom: "Matthieu",
//   classe: CLASSE.GUERRIER,
// };

// console.log(CLASSE.GUERRIER);

enum CLASSE {
  GUERRIER = "Guerrier",
  VOLEUR = "Voleur",
  ARCHER = "Archer",
}

interface Personnage {
  nom: string;
}

interface Guerrier extends Personnage {
  classe: CLASSE.GUERRIER;
}

interface Voleur extends Personnage {
  classe: CLASSE.VOLEUR;
}

const p1: Personnage & Guerrier = {
  nom: "Matthieu",
  classe: CLASSE.GUERRIER,
};

console.log(CLASSE.GUERRIER);
console.log(p1);
