function average(array) {
  let total = 0;
  for (let index = 0;index < array.length ; index += 1) {
    total += array[index];
  }
  return total / array.length;
}

console.log(average([1,2,3,4,5]));