const person = {
  name: "rajesh",
  var1() {
    console.log(this);
  },
};

person.var1();

const person2 = person.var1; // 'this' will refer to global
const person2 = person.var1.bind(person); // 'this' will refer to person object
person2();
