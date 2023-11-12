function incrementProperty(object, propertyName) {
  let properties = Object.keys(object);

  if (properties.indexOf(propertyName) !== -1) {
    object[propertyName] += 1;
  } else {
    object[propertyName] = 1;
  }
}



let wins = {
  steve: 3,
  susie: 4,
};

incrementProperty(wins, 'susie');   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }