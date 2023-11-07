function printMessage(text) {
  console.log(num1)
}

function multiply (a, b) {
  return a * b
}
let rlSync = require('readline-sync');
let num1 = Number(rlSync.question("Enter a number\n"));
let num2 = Number(rlSync.question("Enter a second number\n"));
let sum = multiply(num1, num2);
printMessage(sum);


