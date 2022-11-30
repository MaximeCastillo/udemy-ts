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
var CLASSE;
(function (CLASSE) {
    CLASSE["GUERRIER"] = "Guerrier";
    CLASSE["VOLEUR"] = "Voleur";
    CLASSE["ARCHER"] = "Archer";
})(CLASSE || (CLASSE = {}));
var p1 = {
    nom: "Matthieu",
    classe: CLASSE.GUERRIER
};
console.log(CLASSE.GUERRIER);
console.log(p1);
