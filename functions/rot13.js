function rotate(alphabet, string, index) {
  const ROTATE = 13;
  let alphaIndex = alphabet.indexOf(string[index]);

  if (alphaIndex + ROTATE > 25) {
    alphaIndex = (alphaIndex + ROTATE) - 26;
  } else {
    alphaIndex += 13;
  }
  return alphabet[alphaIndex];
}


function rot13(string) {
  const ALPHA_LOWER = 'abcdefghijklmnopqrstuvwxyz';
  const ALPHA_UPPER = ALPHA_LOWER.toUpperCase();

  let newString = '';

  for (let index = 0; index < string.length; index++) {
    if (ALPHA_LOWER.includes(string[index])) {
      newString += rotate(ALPHA_LOWER, string, index);
    } else if (ALPHA_UPPER.includes(string[index])) {
      newString += rotate(ALPHA_UPPER, string, index);
    } else {
      newString += string[index];
    }
  }
  return newString;
}
console.log(rot13('Teachers open the door, but you must enter by yourself.'));
