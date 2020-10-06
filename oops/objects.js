console.clear()

//two ways to create new objects
let person = new Object()
person.name = 'rajesh'
person.age = 21
person.gender = 'male'

console.log(person)



let personOne = Object.create(person);
personOne.name = 'rajesh'
personOne.age = 20
personOne.gender = 'male'
console.log(personOne)