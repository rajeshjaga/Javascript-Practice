console.clear();
const person = {
    name: ['rajesh', 'jaga'],
    age: 21,
    gender: 'male',
    interest: ['reading', 'watching series'],
    bio() {
        return 'I am ' + this.name[0] + ' ' + this.name[1] + ', ' + this.age + ' years old.' + ' My interest are ' + this.interest[0] + ", " + this.interest[1];
    }

}
console.log(typeof person.bio)