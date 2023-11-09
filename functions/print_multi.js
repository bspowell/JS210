function logMultiples(num) {
  for (let index = 1; index <= 100; index += 2) {
    if (num <= 100) {
      console.log(num * index);
      num = num * index;
    }
  }
}

logMultiples(17);