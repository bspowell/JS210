function join(array, string) {
  newStr = '';
  for (let index = 0; index < array.length; index++) {
    if (index === array.length - 1) {
      newStr += array[index];
    } else {
      newStr += array[index] + string;
    }
  }
  return newStr;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'