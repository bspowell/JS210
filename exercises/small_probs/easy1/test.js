let words = ['spray', 'elite', [1,2,3], 'destruction', 'present'];

let result = words.filter((word) => word.length > 6);

// Expected output: Array ["exuberant", "destruction", "present"]

words[2][0] = 'changed';
console.log(result);
console.log(words);