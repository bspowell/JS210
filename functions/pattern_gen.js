function generatePattern(num) {
  let message = '';
  for (let index = 1; index <= num; index++) {
    stars = '*'.repeat(num - index);
    message += index;
    console.log(message + stars)
  }
}


generatePattern(10);