// let first = prompt("Write a positive integer");
// let second = prompt("Write a second number");

let rls = require('readline-sync');
let first = Number(rls.question("Write a positive integer"));
let second = Number(rls.question("Write a second number"));

console.log(`${first} + ${second} = ${first + second}` );
console.log(`${first} - ${second} = ${first - second}` );
console.log(`${first} * ${second} = ${first * second}` );
console.log(`${first} / ${second} = ${first / second}` );
console.log(`${first} % ${second} = ${first % second}` );

