function pop(array) {
  let num = array[array.length - 1]
  array.length = array.length - 1
  return num;
}


let count = [1, 2, 3];
pop(count);             // 3
console.log(count);                  // [ 1, 2 ]