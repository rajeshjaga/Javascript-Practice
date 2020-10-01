console.clear();



//gives you absolute value

let floatValue = Math.abs(25.64543216432315);
console.log(floatValue);

//minimum and maximum values

let listOfValues = [1, 2, 3, 5, 8, 6, 464, 35]
console.log(Math.min(...listOfValues))
console.log(Math.max(...listOfValues))

//sounding of values that are in decimals

console.log(Math.round(2.55555));
//3 expected value


//square root 
console.log(Math.sqrt(2))
//cube root
console.log(Math.cbrt(125))
//generating a random number with math between 0 and 10
console.log(Math.random() * 10)