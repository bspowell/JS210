let rlSync = require('readline-sync');

let num1 = rlSync.question(`Enter the first number\n`);
let num2 = rlSync.question('Enter the second num\n');
let sum = num1 + num2;

console.log(`The numbers ${num1} and ${num2} add to ${sum}`);