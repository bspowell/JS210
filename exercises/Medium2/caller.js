function makeDoubler(name) {
  return function (num) {
    console.log(`This function was called by ${name}`);
    return num + num;
  }
}



const doubler = makeDoubler('Victor');
console.log(doubler());                             // returns 10
// logs:
// This function was called by Victor.