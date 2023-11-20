function missing(array) {
  newArr = [];
  for (let index = array[0]; index < array[array.length-1]; index++) {
    if (array.includes(index)) continue;
    newArr.push(index)
  }
  return newArr;
}


console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []