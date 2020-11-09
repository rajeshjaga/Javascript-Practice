let buttonColor = document.querySelector('button');
const body = document.querySelector('body');
buttonColor.addEventListener('click', colorChanger);
function colorChanger() {
    body.style.background = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
    console.log(`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`)
}
console.log('hello')