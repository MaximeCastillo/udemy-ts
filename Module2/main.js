/// Type "unknown"
var test;
test = 31;
test = "Matthieu";
test = true;
// Comme test est 'unknown' est non simplement "any", cela évite de lui assigner n'importe quoi et il faut assigner dans une condition :
var sexe;
if (typeof test === "boolean") {
    sexe = test;
}
console.log(sexe);
/// Type "never"
//Cette fonction ne retourne même pas le vide, ici pour l'exemple le throw lève une expection donc c'est un peu différent d'un return void
function genererException(msg) {
    throw { message: msg };
}
