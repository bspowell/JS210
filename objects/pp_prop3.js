function copyProperties(obj1, obj2) {
  for (let property in obj1) {
    obj2[property] = obj1[property]
  }
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
copyProperties(hal, sal);  // 2
console.log(sal);                       // { model: 9000, enabled: true }