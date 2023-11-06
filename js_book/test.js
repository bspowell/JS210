let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];
console.log(checkArray(numbers2));
console.log(checkArray(numbers3));
console.log(checkArray(numbers1));

function checkArray(array) {
  let num = array.filter(num => num === 3);
  if (num === true) {
    return true;
  } else {
    return false;
  }
}