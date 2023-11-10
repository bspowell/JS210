function substr(string, start, length) {
  let newStr = '';

  if (start < 0) {
    startLength = string.length + start;
  } else {
    startLength = start;
  }

  while (length > 0 ) {
    newStr += string[startLength];
    startLength += 1;
    length -= 1;
  }

  console.log(newStr);
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
// substr(string, 0, -20);    // ""
// substr(string, 0, 0);      // ""