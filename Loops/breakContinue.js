console.clear();//Clears console

//demonstration of continue and break;
for (i = 0; i <= 10; i++) {
    console.log(i)
    if (i < 5) {
        console.log(i)
        continue;
    }
    if (i === 5) {
        break;
    }
}