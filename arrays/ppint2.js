function doubleElement(arr) {
  newArr = arr;
  for (let index = arr.length - 1; index >= 0; index--) {
    newArr.push(arr[index]);
  }
  return newArr;
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(doubleElement(digits));  