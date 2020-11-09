class Person {
  constructor(name) {
    this.name = name;
  }
  talk() {
    if (this.name.includes("a")) {
      console.log("say Hello");
    }
  }
}
const person = new Person("rajesh");
person.talk();
