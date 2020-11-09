class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("he walks");
  }
}
class Teacher extends Person {
  constructor(name, degg) {
    super(name);
    this.degg = degg;
  }
  teachs() {
    console.log(true);
  }
}
const teacherOne = new Teacher("rajesh", "btech");
teacherOne.teachs();
