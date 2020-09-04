//js contains truthy and falsy values for conditionals
//console clearing for every time i save
console.clear();

var False = false;//this is a falsy value

var stringFalsy = "";//this is a falsy value

var nullify = null;//this is falsy value

var zero = 0;//this is falsy value

var undefinedFalsy = undefined;//another falsy value

var notANumber = NaN;//this is also another falsy value


function checkIfFalsy(falsyValue) {
    if (!falsyValue) { console.log(falsyValue + ' is a falsy value'); }
    else { console.log(falsyValue + ' is not falsy value'); }
}



checkIfFalsy(False);//should return as falsy value

checkIfFalsy(stringFalsy);//should return as falsy value

checkIfFalsy(nullify);//should return as falsy value

checkIfFalsy(zero);//should return as falsy value

checkIfFalsy(undefinedFalsy);//should return as falsy value

checkIfFalsy(notANumber)//should return as falsy value



//anything apart from these above values should be true