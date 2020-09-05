console.clear();//clear console
const car = {
    name: 'Rajesh',
    age: 21,
    interest: ['coding', 'listening songs', 'reading blogs',]
}

//for in loop this loop repeats for the number of kvp present in an object
//this loop goes through each kvps for the number of kvps 
for (model in car) {
    console.log(car.name)
    console.log(car.age)
    console.log(car.interest.join(' '))
}



// console.log(car)