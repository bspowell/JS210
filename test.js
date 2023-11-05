function numberRange(num) {
  if (num >= 0 && num <= 50) {
    console.log(`${num} is between 0 and 50`)
  } else if (num >= 51 && num <= 100) {
    console.log(`${num} is between 51 and 100`)
  } else {
    console.log(`${num} is over 101`)
  }
}

numberRange(10)
numberRange(75)
numberRange(222)

