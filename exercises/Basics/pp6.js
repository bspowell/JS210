let readlines = require('readline-sync');

let word;
do {
  console.log("Enter a phrase");
  word = readlines.prompt();
  wordLength = word.replace(' ', '').length
  console.log(`There are ${wordLength} characters in "${word}"`);
} while (word !== 'stop')
