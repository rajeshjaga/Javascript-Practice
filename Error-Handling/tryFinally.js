//this will end with finally block
console.clear();
try {
    throw error;
    console.log(typeof Infinity);
} catch (e) {
    console.log(e);
} finally {
    console.log('this will appear every time no matter if its a error or not');
}