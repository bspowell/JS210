function missing (array) {
  let first = array[0];
  let last = array[array.length - 1];
  let compArr = [];
  

  for (let index = first; index <= last; index++) {
    compArr.push(index);
  }
  let newArr = compArr.filter(element => !array.includes(element));

  return newArr;
}





console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []