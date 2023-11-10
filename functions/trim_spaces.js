function trim(string) {
  let newString = '';
  for (let index = 0; index < string.length; index++) {
    if (string[index] !== ' ') {
      newString += string[index];
    }
  }
  console.log(newString);
}




trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""