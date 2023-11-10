function startsWith(string, searchString) {
  let newString = '';

  if (searchString.length > string.length) {
    console.log(false);
  } else {
    for (let index = 0; index < searchString.length; index++) {
      newString += string[index];
    }
    if (newString === searchString) {
      console.log(true);
    }
  }
}

let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');              // true
startsWith(str, 'We put');          // true
startsWith(str, '');                // true
startsWith(str, 'put');             // false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);      // fals