let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let today = new Date();


console.log("Today's date is " + daysOfWeek[today.getDay()] + ', the ' 
+ String(today.getDate()) + 'th');