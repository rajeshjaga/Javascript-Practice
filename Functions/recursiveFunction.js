console.clear();//clearing console after every save is declared

//this is a recursive function 
//recursive is a function or a block of code calling itself or referring itself
//there are three ways to start recursive function



function thisIsARecursive(i) {
    if (i >= 10)
        return;
    console.log(i)
    thisIsARecursive(i + 1);


}
thisIsARecursive(1);

///recursion playground


function simpleCalculation(i) {
    if (i < 0)
        return;
    console.log("calculation begins @: " + i)
    simpleCalculation(i - 1)
    console.log("calculation ends @: " + i)
}
simpleCalculation(10)


