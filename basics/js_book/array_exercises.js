// #3
// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];

// myArray.forEach(array => array.forEach(function(num) {
//   if (num % 2 === 0) console.log(num);
// }));

// question 4
let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let newArray = myArray.map(function(num) {
  return (num % 2 === 0) ? 'even' : 'odd';
});
console.log(newArray)