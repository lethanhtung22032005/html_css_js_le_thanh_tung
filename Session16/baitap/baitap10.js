let numA = Number(prompt("so thu nhat: "));
let numB = Number(prompt("so thu Hai: "));
let min = Math.min(numA, numB);
let max = Math.max(numA, numB);
console.log(min);
console.log(max);
let final = Math.floor(Math.random(min) * max);
console.log(final);
document.write(final);