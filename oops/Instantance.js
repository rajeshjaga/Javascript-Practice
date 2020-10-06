console.clear();


//instantiation

class person {
    constructor(firstname, lastname, age, gender, interests) {
        this.name = [
            this.firstname = firstname,
            this.lastname = lastname
        ]
        this.age = age,
            this.gender = gender,
            this.interests = interests,
            this.bio = function () { return `${this.name} is ${this.age} old. This ${this.gender} likes to ${this.interests}` }

    }
}

//calling a class contructor to create new object instantance
const rajesh = new person('rajesh', 'j', 21, 'male', 'coding, music ');
console.log(rajesh.bio())