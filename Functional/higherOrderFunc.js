console.clear();




function something(string) {
    return function (insideSomething) {
        return insideSomething + " " + string
    }
}
var assigningSomething = something('hello');
console.log(assigningSomething('Rajesh'));