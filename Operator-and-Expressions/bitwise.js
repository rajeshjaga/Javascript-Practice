console.clear();//clears console every refresh

//bitwise are comparing values in binary format during shifts they convert normal value to binary format


var i = true;
var j = false;
var a = 1;
var b = 2;


if (i & j) {
    console.log('this is not possible');
}
else if (i | j) {
    console.log('might be possible');
}
if (a ^ b) {
    console.log('this is xor condition')
}
if (~j) {
    console.log('this is not condition ' + ~j);
}
console.log("this is a bitwise shift");
console.log('right shift ' + (a << b))//left shift
console.log('right shift ' + (a >> b))//right shift
console.log('right shift ' + (a >>> b))//zero fill right shift


//comma operator 
var commaOperator = [1, 1, 1, 1, 1, 1];
