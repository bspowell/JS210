function reverse(input) {
  if (Array.isArray(input)) {
    let arr = [];
    for (let index = input.length - 1; index >= 0; index -= 1) {
      arr.push(input[index])
    }
    return arr;
  } else {
    let str = '';
    for (let index = input.length - 1; index >= 0; index -= 1) {
      str += input[index]
    }
    return str;
  }
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]