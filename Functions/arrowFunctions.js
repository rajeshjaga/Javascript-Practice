console.clear()//clears console every time the file is save


//this is a example array to demonstrate how arrow functions are useful
var animals = [
    'dog',
    'cat',
    'pig',
    'hamster',
    'cow',
    'buffalo'
    , 'lion'
];
//the anonymous function created inside builtin function (map) is a arrow function
var arrayBrokenDown = animals.map((animal) => { return animal })


console.log(arrayBrokenDown)