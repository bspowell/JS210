function uniqueElements(arr) {
  newArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (!newArr.includes(arr[index])) newArr.push(arr[index]);
  }
  return newArr;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]