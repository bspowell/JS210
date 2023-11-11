function matrixSums(arr) {
  let newArr = arr.map(array =>
    array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  );
  return newArr;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]