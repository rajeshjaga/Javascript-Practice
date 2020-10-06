console.clear()
function petInFlat(pet, petType) {
    this.pet = false
    this.petType = petType
}
petInFlat.prototype.iHaveOne = function () {
    this.pet = true;
    console.log(`Do i have a pet : ${this.pet} ,\nI have a ${this.petType}`)
}


let userOne = new petInFlat(true, 'dog')
let userTwo = new petInFlat(false, 'cat')


userOne.iHaveOne();
