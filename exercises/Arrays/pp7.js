function shift(array) {
  if (array.length > 0) {
    let arrCopy = [...array];
    array.length = array.length - 1;
    for (let index = 0; index < array.length; index += 1) {
      array[index] = arrCopy[index + 1]; 
    }
    return arrCopy[0];
  }
}

function unshift(array, ...ele) {

  if (ele.length > 0) {
    let arrCopy = array.slice();
    let newLength = array.length + ele.length
    array.length = newLength;
    let index2 = 0;

    for (let index = 0; index < newLength; index += 1) {
      if (ele.length - 1 >= index) {
        array[index] = ele[index];
        continue;
      }
      array[index] = arrCopy[index2];
      index2 += 1;
    }
  }
  return array.length
}

// shift removes the first element, and returns the element
// if empty array, returns undefined
// unshift adds one or MORE elemenets to the start
// returns new length of array
// both mutate

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]