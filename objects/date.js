function dateSuffix(dayOfMonth) {
  let st = [1, 21, 31];
  let nd = [2, 3, 22, 23];

  if (st.indexOf(dayOfMonth) !== -1) {
    return dayOfMonth + "st";
  } else if(nd.indexOf(dayOfMonth) !== -1) {
    return dayOfMonth + "nd";
  } else {
    return dayOfMonth + "th"
  }
}

function formattedDate(date) {
  let day = formattedDay(date);
  let month = formattedMonth(date);

  console.log("Today's date is " + day + ', ' + month + ' ' + dateSuffix(date.getDate()));
}

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[date.getMonth()];
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[date.getDay()];
}


let today = new Date();

formattedDate(today);

let tomorrow = new Date(today.getTime());

tomorrow.setDate(today.getDate() + 1);
formattedDate(tomorrow);


let nextWeek = new Date(today.getTime());

console.log(today.toDateString() === nextWeek.toDateString());

nextWeek.setDate(today.getDate() + 7);

console.log(today.toDateString() === nextWeek.toDateString());