function splitString(string, delimiter) {
  let newString = '';
  let tracker = 0;
  // let array = [];
  for (let index = 0; index < string.length; index++) {
    if (string[index] === delimiter) {
      for (let indexTwo = tracker; indexTwo < index; indexTwo++) {
        newString += string[indexTwo]
      }
      tracker = index + 1;
      console.log(newString)
      newString = '';
    }
  }
}


splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello