//inbuilt methods for number types
console.clear();

//string to number
var number = "10";
let stringToNumber = Number.parseInt(number, 0);
console.log(stringToNumber);



//string to float number
var floatNumber = "100.222222255";

let stringToFloatNumber = Number.parseFloat(floatNumber, 0);
console.log(stringToFloatNumber);


//sentence to number
var sentNumber = "i have 10 broken phones";
let sentenceNumber = sentNumber.match(/\d+/);
console.log(sentenceNumber[0] + " at the position " + sentenceNumber.index)



//string to float number
var finiteNumber = "100.222222255";

let ifFiniteNumber = Number.isFinite(10 / 5);
console.log('number is finite ' + ifFiniteNumber);


var thisFiniteNumber = "100";

let ifThisFiniteNumber = Number.isFinite(1 / 0);
console.log(ifThisFiniteNumber);



//to check if a variable is integer
let thisNumber = 10;
console.log(Number.isInteger(thisNumber));


//to check if given variable is a number

let thisNumberOne = 'Number';
console.log(Number.isNaN(thisNumberOne));