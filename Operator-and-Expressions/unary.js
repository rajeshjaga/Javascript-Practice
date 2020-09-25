console.clear();

var object = {}
//delete operator

delete object.properties;

//typeof
console.log(typeof object)


//void is used to evaluate without returning anything
void (object)


//
//relational operator
var objectForRelational = [1, 2, 3, 3, 7, 5, 8]
//in
console.log(1 in objectForRelational)

var thisIsaString = new String();
console.log('length' in thisIsaString);

//instanceof
var number = 10;
if (number instanceof Number) {
    console.log('instanceof')
}
