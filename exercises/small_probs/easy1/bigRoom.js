let read = require('readline-sync');
let length = Number(read.question('Enter length'));
let width = Number(read.question('Enter width'));
let sqm = length * width;
let sqf = Math.round((sqm  * 10.7639)*100) / 100


console.log(`The area of the room is ${sqm} square meters (${sqf} square feet)`);