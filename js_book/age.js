// let age = 20;
// console.log(`You are ${age} years old.`);
// console.log(`In 10 years, you will be ${age + 10} years old.`);
// console.log(`In 20 years, you will be ${age + 20} years old.`);
// console.log(`In 30 years, you will be ${age + 30} years old.`);
// console.log(`In 40 years, you will be ${age + 40} years old.`);

let rlSync = require('readline-sync');
let age = rlSync.question("What's your age\n");
age = parseInt(age)
console.log(`You are ${age} years old.`);
for (let i = 10; i < 50; i += 10) {
  console.log(`In ${i} years, you will be ${age + i} years old.`);
}