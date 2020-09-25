console.clear()//clears console every time this file is saved


//function parameters are datatype/variables passed during the calling the functions
//the parameters are passed into function to do some execution or calculation
//by default the parameters are initialized to undefined
//for ex.

function addTwoNumber(a, b = 10) {
    return a + b;
}

console.log(addTwoNumber(10))
