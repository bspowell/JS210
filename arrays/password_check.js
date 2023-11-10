const rls = require('readline-sync');


function password() {
  let index = 0;
  let answer;
  while (answer !== 'stop') {
    if (index === 3) {
      console.log('You have been denied access');
      break;
    }
    let answer = rls.question("What's the password\n");
    if (answer !== 'stop') {
      console.log("That's incorrect");
    }
    index += 1;
  } 
}

password();