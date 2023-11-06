
function oddLengths(array) {
  let x = array.map(string => string.length);
  return x.filter(ele => ele % 2 !== 0);
}


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]