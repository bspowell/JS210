function concat(array, ...arg) {
  let newArr = [...array];
  let arguments = arg;

  for (let ele of arguments) {
    if (Array.isArray(ele)) {
      for (let ind of ele) {
        newArr.push(ind);
      }
    } else {
      newArr.push(ele)
    }
  }
  return newArr;

}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]