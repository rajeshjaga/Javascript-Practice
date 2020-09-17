console.clear();//clearing console for every refresh

//this is nesting function that contain n number of function with all the variables are accessible to the inner most function

function a(a) {
    function b(b) {
        function c(c) {
            console.log(a + b + c);
        }
        c(3);
    }
    b(2);
}
a(1);

//outside and inside function
function outside() {
    function inside(n) {
        return n + 20;
    }
    return inside;

}
console.log(outside()(20));

//some cool functions


var coolFunction = (
    function () {
        var apiKey = 'abc';
        return function () {
            console.log(apiKey);
        };
    })();


coolFunction();