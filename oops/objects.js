console.clear();

//two ways to create new objects
// let person = new Object()
// person.name = 'rajesh'
// person.age = 21
// person.gender = 'male'

// console.log(person)

// let personOne = Object.create(person);
// personOne.name = 'rajesh'
// personOne.age = 20
// personOne.gender = 'male'
// console.log(personOne)

var member = function (name, count) {
  this.name = name;
  this.count = count;
  this.getCourse = function () {
    console.log(`count is ${this.count}`);
  };
};

member.prototype.getName = function () {
  console.log(`your name ${this.name}`);
};

var rajesh = new member("rajesh", 3);
rajesh.getCourse();
rajesh.getName();

var GJ = new member("GJ", 5);
GJ.getCourse();
GJ.getName();
