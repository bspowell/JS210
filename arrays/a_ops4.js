let shift = function(array) {
  let first = array[0];

  if (array.length === 0) {
    return undefined;
  }

  for (let index = 0; index < array.length - 1; index += 1) {
    array[index] = array[index + 1];
    console.log(array)
  }
  console.log(array)
  array.length = array.length - 1;
  return first;
}

let count = [1, 2, 3];
shift(count);           // 1
console.log(count);                  // [ 2, 3 ]