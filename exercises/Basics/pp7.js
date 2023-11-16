const NUMBERS = '1234567890';

function getCount(string) {
  let count = 0;
  for (let index = 0; index < string.length; index += 1) {
    if (NUMBERS.includes(string[index])) {
      count += 1;
    } else {
      break;
    }
  }
  return count;
}



function stringToInteger(num) {
  let count = getCount(num);
  let counter = count;
  let newNum = 0;
  for (let index = 0; index <= count; index += 1) {
    if (count === 0) {
      return NaN;
    } else if (count === 1) {
      newNum += num[index]
    } else {
      newNum += (num[index] * Math.pow(10, counter - 1));
      counter -= 1;
    }
    if (counter === 0) return newNum;
  }
  return newNum;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570