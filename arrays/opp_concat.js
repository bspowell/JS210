function concat(array, array2) {
  let newArr = [];
  for (let index = 0; index < array.length; index++) {
    newArr.push(array[index])
    newArr.push(array2[index])
  }
  return newArr;

}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]