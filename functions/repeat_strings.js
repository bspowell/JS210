function repeat(string, times) {
  let newString = '';
  let count = 1;

  if (!Number.isInteger(times) || times < 0) {
    console.log(undefined);

  } else { 
    while (count <= times) {
      newString += string;
      count++;
    }
    console.log(newString);
  }
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined