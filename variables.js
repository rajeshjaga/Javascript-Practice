//variables are defined and used to store values
//main purpose of the variables is to call how many times you want to save
//from re-initializing

//let is a block-scoped variable 
let Var = "var";
console.log(Var);
function letCanChange
    () { let Var = "hello"; console.log(Var) }
letCanChange()
//var is not blocked-scoped
var Var1 = "var";
console.log(Var1)
Var1 = "10";
console.log(Var1)
//const is a constant
const var3 = "Constant";
console.log(var3);

