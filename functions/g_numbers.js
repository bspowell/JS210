let isPrime = function(number) {
  if (number < 2) {
    return false;
  }

  for (let firstNumber = 2; firstNumber < number; firstNumber += 1) {
    if (number % firstNumber === 0) {
      return false;
    }
  }

  return true;
};

let checkGoldbach = function(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log(null);
    return;
  }

  let num1 = 1;
  let num2;

  do {
    num1 += 1;
    num2 = expectedSum - num1;
    if (isPrime(num1) && isPrime(num2)) {
      console.log(num1, num2);
    }

  } while (num1 !== num2);
};

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53