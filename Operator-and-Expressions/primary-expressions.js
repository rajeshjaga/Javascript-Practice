console.clear();//clears console when this file is compiled.

//this key word refers to the current objects
//methods ->this will refer to current objects
//function -> this will refer to global,windows object

//this refer now to global and window object
function gettingThisName(name) {
    this.name = name;
    return 'this keyword results : ' + this;
}
console.log(gettingThisName())

//this now will create a new object because  'new' keyword is used
function gettingThis(name) {
    this.name = name;
    return 'this keyword results : ' + this;
}
const output = new gettingThis('rajesh')//the new keyword creates new object {}  
console.log(output)//and wont bind with window

//this keyword in arrow function refer takes to sibling if its called using this
const person101 = {
    name: 'rajesh',
    hobby: ['reading Blogs', 'Learning new things'],
    rajesh() {
        this.hobby.forEach(hobby => {
            console.log(this.name, hobby)//because this arrow function is anonymous this will not be undefined
        })
    }
};
person101.rajesh();


//this behaves differently with arrow function and function keyword
//this keyword in keyword 'function' wont refer sibling if its called using this
//because foreach callback function will behave as a normal function,
//using this argument of foreach will refer to method siblings
const personOne = {
    name: 'rajesh',
    hobby: ['reading Blogs', 'Learning new things'],
    whatDoIDo() {
        this.hobby.forEach(function (hobby) {
            console.log(this.name, hobby)
        }, this)//forEach takes two argument a callback function and this argument
    }
};
personOne.whatDoIDo();


//grouping operator '()'

//group operator '()' will make content in it important during calculation
console.log(5 + 2 * 3)//11
console.log(5 + (2 * 3))//11
console.log((5 + 2) * 3)//21

//new 
//new keyword operator will make new object

var string = new String('hello')
console.log(typeof string + " " + string)


