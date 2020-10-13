console.clear()
function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
};

Person.prototype.bio = function () {
    return this.name.first + " likes " + this.interests
}
let personOne = new Person('rajesh', 'j', 21, 'male', 'games');

console.log(personOne.bio())


function Teacher(first, last, age, gender, subject) {
    Person.call(this, first, last, age, gender, interests)
    this.subject = subject;
}
Teacher.prototype = Object.create(Person.prototype)


Object.defineProperty(Teacher.prototype, 'constructor', {
    value: Teacher,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true
});
console.log(Teacher.prototype.constructor)

function size() {
    this.breath = 30;
    this.height = 20;
}

function brickSize() {
    size.call()
    return this.breath * this.height
}
console.log(brickSize())





