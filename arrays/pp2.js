// let rollCall = array => console.log(array.shift)

function rollCall(array) {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}

rollCall(['a','b','c']);