
function sumOfSquares(array) {
  return array.reduce((acc,ele) => acc + (ele * ele), 0)
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83