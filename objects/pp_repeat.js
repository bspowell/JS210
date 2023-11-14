function repeatedCharacters(string) {
  count = {};
  for (let index = 0; index < string.length; index++) {
    let arr = string.match(/string[index]/gi);

    if (arr == null) {
      continue;
    } else if (arr.length >= 2) {
      count[string[index]] = arr.length
    }
  }
  return count;
}


console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }