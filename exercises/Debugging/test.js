function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

console.log(String(calculateBonus));