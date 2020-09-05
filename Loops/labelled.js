console.clear();//clears console


//this is labelled loops
let i = 0;
markLoop:
while (i < 10) {
    console.log('this is a labelled loop ' + i);
    if (i == 5) {
        break markLoop;
    }
    i++;
}