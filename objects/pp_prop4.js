function wordCount(string) {
  let arr = string.split(' ');
  let newObj = {};

  for (let ele of arr) {
    if (newObj[ele]) {
      newObj[ele] += 1;
    } else {
      newObj[ele] = 1;
    }
  }
  return newObj;
}



console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }