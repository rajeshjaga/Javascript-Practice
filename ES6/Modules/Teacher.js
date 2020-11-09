import { Person } from "./Person.js";

export class Teacher extends Person {
  constructor(name, degg) {
    super(name);
    this.degg = degg;
  }
  teachs() {
    console.log(true);
  }
}
