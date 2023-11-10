function gcd(num1, num2) {
  
  let index = (num1 > num2) ? num2 : num1

  while (index !== 0) {
    if (num1 % index === 0) return index;
    index--;
  }

}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1