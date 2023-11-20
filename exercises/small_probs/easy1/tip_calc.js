let rls = require('readline-sync');

let bill = parseFloat(rls.question('What is the bill?' ));
let tip = parseFloat(rls.question('What is the tip percentage? '));
tip = bill * (tip / 100);
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);