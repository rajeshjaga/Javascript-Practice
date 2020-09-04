// trying to execute a statement that may or may not throws a compilation error which is caught by catch statement and 
//executes catch block
console.clear();//cleans console
try {
    throw (new error("Error"))
} catch (e) {
    console.error(e.name);
    console.error(e.message);
}

