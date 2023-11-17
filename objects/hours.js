function formatTime(dateObj) {
  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  let time = '' + hours + ':' + minutes;

  return time;
}

let today = new Date();
let time = formatTime(today);

console.log(`It's ${time}`)