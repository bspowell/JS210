function wordCount(string) {
  let obj = {};
  let str = string.split(' ');

  for (let ele of str) {
    if (Object.keys(obj).includes(ele)) {
      obj[ele] += 1;
    } else {
      obj[ele] = 1;
    }
  }
  return obj
}



console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }