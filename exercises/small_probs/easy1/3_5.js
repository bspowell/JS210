let a = ['hello', 'world'];

a[-1] = "back";
a[-2] = "there";

console.log(Object.keys(a));  

console.log(a['1']); 
console.log(a['-1']);
console.log(a[-1]);
console.log(a[2] = '!');
console.log(Object.keys(a));  
console.log(a);

a.forEach((ele) => console.log(ele));