
// ES6 Function Writing
let x = (x,y) => { return x * y } 

// Spread
const one = [1, 2, 3, 4];
const two = [5, 6, 7, 8];
const three = [5, 6, 7, 8];
const years = [...one, ...two, ...three]
const diamond = document.getElementsByClassName('diamond');
const diamonds = document.getElementsByClassName('diamonds');

console.log(diamonds);
console.log(diamond);
console.log(x(3,4));
console.log(years);

//Loops through values of any iterality object 
// for(let x of years) {
//     num + listTags[1]; 
// }

for(let i = 0; i <= 10; i++) {
    let newEl = document.createElement('div');
    newEl.classList.add('diamond');
    diamonds[0].appendChild(newEl);
}

