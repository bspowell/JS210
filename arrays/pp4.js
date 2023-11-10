function convert(array) {
  string = '';
  for (let index = 0; index < array.length; index++) {
    string += array[index];
  }
  return string;
}

console.log(convert([1, 'a', 4]));
