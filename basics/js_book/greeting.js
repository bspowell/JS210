function getName(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name;
}

let first = getName("What's your first name? ");
let last = getName("Whats your last name?");
console.log("Good Morning, " + first + " " + last )