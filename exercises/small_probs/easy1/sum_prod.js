
let rls = require('readline-sync');

let num = rls.question('Please enter an integer greater than 0: ');
let compute = (rls.question('Enter "s" to compute the sum, or "p" to compute the product. ')).toLowerCase();

let arr = [];
for (let i = 1; i <= num; i++) {
  arr.push(i);
}

if (compute === 's') {
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  console.log(`The sum of the integers between 1 and ${num} is ${sum}`);
} else {
  let product = arr.reduce((acc, curr) => acc * curr, 1);
  console.log(`The product of the integers between 1 and ${num} is ${product}`);
}