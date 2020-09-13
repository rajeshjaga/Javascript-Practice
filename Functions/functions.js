console.clear();//clearing console every time this file is saved

//a function is a block containing statement or code to be execute or to perform given task
//this are the types how to declare functions

console.log(thisIsaFunction());//function hoisting

function thisIsaFunction() {
    return 'hello world !';
}
const thisFuncIsConstants = function (number) {
    return 'this is constant function taking this variable ' + number;
}
let functionString = thisFuncIsConstants(10);
console.log(functionString);