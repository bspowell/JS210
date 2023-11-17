function repeatedCharacters(string) {
  let obj = {};
  string = string.toLowerCase();

  for (let ele of string) {
    if (Object.keys(obj).includes(ele)) {
      obj[ele] += 1;
    } else {
      obj[ele] = 1;
    }
  }

  for (let key in obj) {
    if(obj[key] < 2) delete obj[key];
  }

  return obj

}


console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }